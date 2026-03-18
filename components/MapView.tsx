'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Stop, StopType } from '@/lib/types';

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
  stops: Stop[];
  center: [number, number];
  highlightedStop: string | null;
  onHighlight: (id: string) => void;
};

export default function MapView({ stops, center, highlightedStop, onHighlight }: Props) {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<Map<string, mapboxgl.Marker>>(new Map());

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: center,
      zoom: 14,
    });

    mapRef.current = map;

    map.on('load', () => {
      // Draw route line
      const coords = stops.map((s) => s.coordinates);
      map.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: { type: 'LineString', coordinates: coords },
          properties: {},
        },
      });
      map.addLayer({
        id: 'route-line',
        type: 'line',
        source: 'route',
        paint: {
          'line-color': '#2D5016',
          'line-width': 2.5,
          'line-dasharray': [2, 2],
          'line-opacity': 0.6,
        },
      });

      // Add markers
      stops.forEach((stop, i) => {
        const el = document.createElement('div');
        el.className = 'stop-marker';
        el.dataset.stopId = stop.id;
        el.innerHTML = `
          <div class="marker-inner" title="${stop.name}">
            <span class="marker-num">${i + 1}</span>
            <span class="marker-emoji">${TYPE_EMOJI[stop.type]}</span>
          </div>
        `;
        el.addEventListener('click', () => onHighlight(stop.id));

        const marker = new mapboxgl.Marker({ element: el, anchor: 'center' })
          .setLngLat(stop.coordinates)
          .addTo(map);

        markersRef.current.set(stop.id, marker);
      });

      // Fly to first stop
      if (stops.length > 0) {
        map.flyTo({ center: stops[0].coordinates, zoom: 14.5, duration: 1200 });
      }
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update marker styles when highlighted stop changes
  useEffect(() => {
    markersRef.current.forEach((marker, id) => {
      const el = marker.getElement();
      if (id === highlightedStop) {
        el.classList.add('highlighted');
        mapRef.current?.flyTo({ center: marker.getLngLat(), zoom: 15.5, duration: 800 });
      } else {
        el.classList.remove('highlighted');
      }
    });
  }, [highlightedStop]);

  return (
    <>
      <style>{`
        .stop-marker { cursor: pointer; }
        .marker-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #fff;
          border: 2.5px solid #2D5016;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.18);
          transition: transform 0.2s, border-color 0.2s;
          font-size: 10px;
          line-height: 1;
        }
        .marker-num {
          font-weight: 700;
          font-size: 11px;
          color: #2D5016;
          line-height: 1;
        }
        .marker-emoji {
          font-size: 10px;
          line-height: 1;
        }
        .stop-marker.highlighted .marker-inner {
          background: #2D5016;
          border-color: #2D5016;
          transform: scale(1.25);
          box-shadow: 0 4px 16px rgba(45,80,22,0.35);
        }
        .stop-marker.highlighted .marker-num,
        .stop-marker.highlighted .marker-emoji {
          filter: brightness(10);
        }
        .stop-marker:hover .marker-inner {
          transform: scale(1.1);
        }
      `}</style>
      <div ref={containerRef} className="w-full h-full" />
    </>
  );
}
