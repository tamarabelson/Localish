'use client';

import { Stop, StopType } from '@/lib/types';
import { useEffect, useRef } from 'react';

const TYPE_LABELS: Record<StopType, string> = {
  coffee: 'Coffee',
  food: 'Food',
  sight: 'Sight',
  drink: 'Drinks',
  walk: 'Walk',
  market: 'Market',
  bookshop: 'Bookshop',
  park: 'Park',
};

const TYPE_COLORS: Record<StopType, string> = {
  coffee: 'bg-amber-100 text-amber-800',
  food: 'bg-orange-100 text-orange-800',
  sight: 'bg-blue-100 text-blue-800',
  drink: 'bg-purple-100 text-purple-800',
  walk: 'bg-green-100 text-green-800',
  market: 'bg-yellow-100 text-yellow-800',
  bookshop: 'bg-slate-100 text-slate-700',
  park: 'bg-emerald-100 text-emerald-800',
};

const TYPE_EMOJI: Record<StopType, string> = {
  coffee: '☕',
  food: '🍽️',
  sight: '🏛️',
  drink: '🍷',
  walk: '🚶',
  market: '🛍️',
  bookshop: '📚',
  park: '🌿',
};

type Props = {
  stop: Stop;
  index: number;
  isHighlighted: boolean;
  onHighlight: (id: string) => void;
};

export default function StopCard({ stop, index, isHighlighted, onHighlight }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHighlighted && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isHighlighted]);

  return (
    <div
      id={`stop-${stop.id}`}
      ref={ref}
      onClick={() => onHighlight(stop.id)}
      className={`relative rounded-2xl border p-5 transition-all duration-300 cursor-pointer ${
        isHighlighted
          ? 'border-forest bg-forest/5 shadow-lg shadow-forest/10'
          : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
      }`}
    >
      {/* Stop number */}
      <div className={`absolute -left-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white shadow ${
        isHighlighted ? 'bg-forest' : 'bg-slate-600'
      }`}>
        {index + 1}
      </div>

      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-display text-lg font-semibold text-slate-900 leading-tight">{stop.name}</h3>
        <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${TYPE_COLORS[stop.type]}`}>
          {TYPE_EMOJI[stop.type]} {TYPE_LABELS[stop.type]}
        </span>
      </div>

      {/* Options */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {stop.options.map((opt) => (
          <span key={opt} className="rounded-md bg-slate-50 border border-slate-200 px-2 py-0.5 text-xs text-slate-600 font-medium">
            {opt}
          </span>
        ))}
      </div>

      <p className="font-display text-sm text-slate-700 leading-relaxed">{stop.description}</p>

      {stop.transition && (
        <p className="mt-3 text-xs text-slate-400 italic border-t border-slate-100 pt-3">{stop.transition}</p>
      )}
    </div>
  );
}
