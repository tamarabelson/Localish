import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { GenerateRequest } from '@/lib/types';
import { SYSTEM_PROMPT, buildUserMessage, parseItinerary } from '@/lib/prompt';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  let body: Partial<GenerateRequest>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { city, neighborhood, secondNeighborhood } = body;
  if (!city || !neighborhood) {
    return NextResponse.json({ error: 'city and neighborhood are required' }, { status: 400 });
  }

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 4096,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: buildUserMessage({ city, neighborhood, secondNeighborhood }) }],
  });

  const textBlock = message.content.find((b) => b.type === 'text');
  if (!textBlock || textBlock.type !== 'text') {
    return NextResponse.json({ error: 'No text response from Claude' }, { status: 500 });
  }

  const itinerary = parseItinerary(textBlock.text);
  return NextResponse.json(itinerary);
}
