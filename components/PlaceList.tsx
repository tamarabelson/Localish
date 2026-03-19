'use client';

import { useState } from 'react';
import { Place, PlaceType } from '@/lib/places';
import { SuggestedPlace } from '@/app/api/explore/route';

const TYPE_EMOJI: Record<PlaceType, string> = {
  restaurant: '🍽️',
  coffee: '☕',
  bar: '🍷',
  bakery: '🥐',
};

const TYPE_COLORS: Record<PlaceType, string> = {
  restaurant: 'bg-orange-100 text-orange-700',
  coffee: 'bg-amber-100 text-amber-700',
  bar: 'bg-purple-100 text-purple-700',
  bakery: 'bg-yellow-100 text-yellow-700',
};

type Props = {
  city: string;
  zone: string;
  subAreas: string[];
};

export default function PlaceList({ city, zone, subAreas }: Props) {
  const [loading, setLoading] = useState(false);
  const [curated, setCurated] = useState<Place[]>([]);
  const [suggestions, setSuggestions] = useState<SuggestedPlace[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/explore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ city, zone }),
      });
      if (!res.ok) throw new Error('Failed to load suggestions');
      const data = await res.json();
      setCurated(data.curated);
      setSuggestions(data.suggestions);
      setLoaded(true);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
      {/* Zone header */}
      <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-slate-800 text-sm">{zone}</h3>
          <p className="text-xs text-slate-400 mt-0.5">{subAreas.slice(0, 3).join(' · ')}{subAreas.length > 3 ? ' · …' : ''}</p>
        </div>
        {!loaded && (
          <button
            onClick={load}
            disabled={loading}
            className="rounded-lg bg-forest px-3 py-1.5 text-xs font-semibold text-white hover:bg-forest/90 transition disabled:opacity-50"
          >
            {loading ? 'Loading…' : 'Get suggestions'}
          </button>
        )}
      </div>

      {error && (
        <p className="px-5 py-3 text-xs text-red-500">{error}</p>
      )}

      {loaded && (
        <div className="divide-y divide-slate-50">
          {/* Curated picks */}
          {curated.length > 0 && (
            <div className="px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-forest mb-3">Your picks</p>
              <div className="flex flex-col gap-2">
                {curated.map((p) => (
                  <PlaceRow key={p.name} name={p.name} type={p.type} subArea={p.subArea} note={p.note} />
                ))}
              </div>
            </div>
          )}

          {/* AI suggestions */}
          <div className="px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Also worth trying</p>
            <div className="flex flex-col gap-2">
              {suggestions.map((p) => (
                <PlaceRow key={p.name} name={p.name} type={p.type} subArea={p.subArea} description={p.description} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PlaceRow({ name, type, subArea, note, description }: {
  name: string;
  type: PlaceType;
  subArea: string;
  note?: string;
  description?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className={`shrink-0 mt-0.5 rounded-full px-2 py-0.5 text-xs font-medium ${TYPE_COLORS[type]}`}>
        {TYPE_EMOJI[type]} {type}
      </span>
      <div className="min-w-0">
        <span className="text-sm font-medium text-slate-800">{name}</span>
        <span className="text-xs text-slate-400 ml-1.5">{subArea}</span>
        {(note ?? description) && (
          <p className="text-xs text-slate-500 mt-0.5">{note ?? description}</p>
        )}
      </div>
    </div>
  );
}
