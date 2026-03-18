'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { Itinerary } from '@/lib/types';
import ItineraryView from '@/components/ItineraryView';

function ItineraryContent() {
  const params = useSearchParams();
  const router = useRouter();
  const city = params.get('city') ?? '';
  const neighborhood = params.get('neighborhood') ?? '';
  const secondNeighborhood = params.get('secondNeighborhood') ?? '';

  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [highlightedStop, setHighlightedStop] = useState<string | null>(null);

  useEffect(() => {
    if (!city || !neighborhood) {
      router.replace('/');
      return;
    }
    fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ city, neighborhood, ...(secondNeighborhood && { secondNeighborhood }) }),
    })
      .then((r) => {
        if (!r.ok) throw new Error('Failed to generate itinerary');
        return r.json();
      })
      .then((data: Itinerary) => {
        setItinerary(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-2xl font-semibold text-slate-800 mb-2">
            Planning your day in {neighborhood}{secondNeighborhood ? ` → ${secondNeighborhood}` : ''}
          </h2>
          <p className="text-slate-400 text-sm">Asking a local friend<LoadingDots /></p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] flex flex-col items-center justify-center">
        <div className="text-center max-w-sm">
          <p className="text-slate-800 font-medium mb-2">Something went wrong</p>
          <p className="text-slate-500 text-sm mb-6">{error}</p>
          <button onClick={() => router.push('/')} className="rounded-xl bg-forest px-6 py-2.5 text-sm font-semibold text-white hover:bg-forest/90 transition">
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (!itinerary) return null;

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <header className="flex items-center justify-between px-6 py-3 border-b border-slate-100 bg-[#FAFAF8]/80 backdrop-blur sticky top-0 z-10">
        <button
          onClick={() => router.push('/')}
          className="text-sm font-medium text-slate-500 hover:text-forest transition"
        >
          ← Localish
        </button>
        <span className="text-xs text-slate-400">
          {neighborhood}{secondNeighborhood ? ` → ${secondNeighborhood}` : ''} · {city}
        </span>
      </header>

      <ItineraryView
        itinerary={itinerary}
        highlightedStop={highlightedStop}
        onHighlight={setHighlightedStop}
      />
    </div>
  );
}

function LoadingDots() {
  return (
    <span className="inline-flex gap-0.5 ml-0.5">
      <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
      <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
      <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
    </span>
  );
}

export default function ItineraryPage() {
  return (
    <Suspense>
      <ItineraryContent />
    </Suspense>
  );
}
