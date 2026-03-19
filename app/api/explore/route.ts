import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { getCuratedPlacesForZone, Place } from '@/lib/places';
import { getCityByName } from '@/lib/cities';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export type ExploreRequest = {
  city: string;
  zone: string;
};

export type SuggestedPlace = {
  name: string;
  type: 'restaurant' | 'coffee' | 'bar' | 'bakery';
  subArea: string;
  description: string; // 1 sentence, sensory
  whyItFits?: string;  // why it matches the curated picks' vibe
};

export async function POST(req: NextRequest) {
  let body: Partial<ExploreRequest>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { city, zone } = body;
  if (!city || !zone) {
    return NextResponse.json({ error: 'city and zone are required' }, { status: 400 });
  }

  const cityData = getCityByName(city);
  const zoneData = cityData?.neighborhoods.find((n) => n.name === zone);
  const curatedPlaces = getCuratedPlacesForZone(city, zone);

  const subAreas = zoneData?.subAreas?.join(', ') ?? zone;

  const curatedSection = curatedPlaces.length > 0
    ? `The user has personally curated these spots they love:\n${curatedPlaces
        .map((p: Place) => `- ${p.name} (${p.type}, ${p.subArea})${p.note ? ` — "${p.note}"` : ''}`)
        .join('\n')}\n\nUse these as a style and quality reference. Suggest places that would appeal to someone who loves these spots.`
    : `No curated picks yet — suggest great spots based on your knowledge of this area.`;

  const prompt = `You are a knowledgeable local recommending restaurants and coffee shops in ${zone} in ${city} (covering: ${subAreas}).

${curatedSection}

Return a JSON array of 8–10 suggested places. Each must be:
{
  "name": string,           // real place name
  "type": "restaurant" | "coffee" | "bar" | "bakery",
  "subArea": string,        // specific street or sub-neighborhood
  "description": string,    // 1 punchy sentence — what makes it special, sensory detail
  "whyItFits": string       // optional: 1 short phrase on why it matches the vibe${curatedPlaces.length > 0 ? ' of the curated picks' : ''}
}

Rules:
- Only suggest real, currently-operating places
- Spread across the different sub-areas
- Mix types: include coffee shops, restaurants, maybe a bar or bakery
- No tourist traps — local-quality picks only
- Return ONLY a valid JSON array, no markdown, no explanation`;

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 2048,
    messages: [{ role: 'user', content: prompt }],
  });

  const textBlock = message.content.find((b) => b.type === 'text');
  if (!textBlock || textBlock.type !== 'text') {
    return NextResponse.json({ error: 'No response from Claude' }, { status: 500 });
  }

  const cleaned = textBlock.text
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/```\s*$/i, '')
    .trim();

  const suggestions: SuggestedPlace[] = JSON.parse(cleaned);
  return NextResponse.json({ curated: curatedPlaces, suggestions });
}
