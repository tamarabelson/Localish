export type StopType = 'coffee' | 'food' | 'sight' | 'drink' | 'walk' | 'market' | 'bookshop' | 'park';

export type Stop = {
  id: string;
  name: string;
  type: StopType;
  options: string[];          // 2–3 specific place names
  description: string;        // sensory, personal voice
  transition: string;         // "from here, head..."
  coordinates: [number, number]; // [lng, lat]
  neighborhood?: string;      // which neighborhood this stop is in
};

export type Itinerary = {
  city: string;
  neighborhood: string;
  secondNeighborhood?: string;
  title: string;
  intro: string;
  stops: Stop[];
};

export type GenerateRequest = {
  city: string;
  neighborhood: string;
  secondNeighborhood?: string;
};
