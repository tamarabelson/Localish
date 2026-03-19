'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { getCityByName } from '@/lib/cities';
import PlaceList from '@/components/PlaceList';

function ExploreContent() {
  const params = useSearchParams();
  const router = useRouter();
  const city = params.get('city') ?? '';
  const cityData = getCityByName(city);

  if (!cityData) {
    router.replace('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <header className="flex items-center justify-between px-6 py-3 border-b border-slate-100 bg-[#FAFAF8]/80 backdrop-blur sticky top-0 z-10">
        <button
          onClick={() => router.push('/')}
          className="text-sm font-medium text-slate-500 hover:text-forest transition"
        >
          ← Localish
        </button>
        <span className="text-xs text-slate-400">{city}</span>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest mb-2">{city}</p>
          <h1 className="font-display text-3xl font-bold text-slate-900 mb-2">
            Restaurants & cafés
          </h1>
          <p className="text-sm text-slate-500">
            Click <span className="font-medium text-slate-700">Get suggestions</span> on any zone to load curated picks and AI recommendations. Add your own favourites in{' '}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-600">lib/places.ts</code>.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {cityData.neighborhoods.map((zone) => (
            <PlaceList
              key={zone.name}
              city={city}
              zone={zone.name}
              subAreas={zone.subAreas ?? [zone.name]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExplorePage() {
  return (
    <Suspense>
      <ExploreContent />
    </Suspense>
  );
}
