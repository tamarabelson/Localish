'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CITIES } from '@/lib/cities';

export default function PlannerForm() {
  const router = useRouter();
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [secondNeighborhood, setSecondNeighborhood] = useState('');

  const selectedCity = CITIES.find((c) => c.name === city);
  const isValid = city && neighborhood;

  const handleCityChange = (val: string) => {
    setCity(val);
    setNeighborhood('');
    setSecondNeighborhood('');
  };

  const handleNeighborhoodChange = (val: string) => {
    setNeighborhood(val);
    if (secondNeighborhood === val) setSecondNeighborhood('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    const params = new URLSearchParams({ city, neighborhood });
    if (secondNeighborhood) params.set('secondNeighborhood', secondNeighborhood);
    router.push(`/itinerary?${params.toString()}`);
  };

  const otherNeighborhoods = selectedCity?.neighborhoods.filter((n) => n.name !== neighborhood) ?? [];

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-8">
      {/* City */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
          City
        </label>
        <select
          value={city}
          onChange={(e) => handleCityChange(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 text-sm font-medium shadow-sm focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20 transition"
        >
          <option value="">Choose a city...</option>
          {CITIES.map((c) => (
            <option key={c.name} value={c.name}>{c.name}</option>
          ))}
        </select>
      </div>

      {/* Primary neighborhood */}
      {selectedCity && (
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
            Start your day in
          </label>
          <div className="flex flex-wrap gap-2">
            {selectedCity.neighborhoods.map((n) => (
              <button
                key={n.name}
                type="button"
                onClick={() => handleNeighborhoodChange(n.name)}
                className={`rounded-full px-4 py-2 text-sm font-medium border transition-all ${
                  neighborhood === n.name
                    ? 'bg-forest text-white border-forest shadow-md'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-forest hover:text-forest'
                }`}
                title={n.description}
              >
                {n.name}
              </button>
            ))}
          </div>
          {neighborhood && (
            <p className="mt-2 text-xs text-slate-400">
              {selectedCity.neighborhoods.find((n) => n.name === neighborhood)?.description}
            </p>
          )}
        </div>
      )}

      {/* Second neighborhood */}
      {neighborhood && otherNeighborhoods.length > 0 && (
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">
            Drift into later <span className="normal-case font-normal text-slate-400">(optional)</span>
          </label>
          <p className="text-xs text-slate-400 mb-3">Add a nearby neighborhood to explore in the afternoon & evening</p>
          <div className="flex flex-wrap gap-2">
            {otherNeighborhoods.map((n) => (
              <button
                key={n.name}
                type="button"
                onClick={() => setSecondNeighborhood(secondNeighborhood === n.name ? '' : n.name)}
                className={`rounded-full px-4 py-2 text-sm font-medium border transition-all ${
                  secondNeighborhood === n.name
                    ? 'bg-amber-500 text-white border-amber-500 shadow-md'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-amber-400 hover:text-amber-600'
                }`}
                title={n.description}
              >
                {n.name}
              </button>
            ))}
          </div>
          {secondNeighborhood && (
            <p className="mt-2 text-xs text-slate-400">
              {selectedCity?.neighborhoods.find((n) => n.name === secondNeighborhood)?.description}
            </p>
          )}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={!isValid}
        className="w-full rounded-xl bg-forest py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-forest/90 hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.99]"
      >
        {secondNeighborhood
          ? `Plan my day: ${neighborhood} → ${secondNeighborhood}`
          : 'Plan my day →'}
      </button>

      {/* Explore link */}
      {city && (
        <div className="text-center">
          <button
            type="button"
            onClick={() => router.push(`/explore?city=${encodeURIComponent(city)}`)}
            className="text-sm text-slate-400 hover:text-forest transition underline underline-offset-4"
          >
            Browse restaurants & cafés in {city}
          </button>
        </div>
      )}
    </form>
  );
}
