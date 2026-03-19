// Add your personal restaurant and coffee shop picks here.
// Claude will use your picks as a style reference to suggest more in the same spirit.

export type PlaceType = 'restaurant' | 'coffee' | 'bar' | 'bakery';

export type Place = {
  name: string;
  type: PlaceType;
  subArea: string;  // the specific street/neighborhood within the zone
  note?: string;    // optional personal note, e.g. "best croissant in the city"
};

export type ZonePlaces = {
  zone: string;
  places: Place[];
};

export type CityPlaces = {
  city: string;
  zones: ZonePlaces[];
};

// ─── Your curated picks ───────────────────────────────────────────────────────
// Add places to any zone below. Example entry:
//   { name: 'Via Carota', type: 'restaurant', subArea: 'West Village', note: 'perfect pasta' }

export const CURATED_PLACES: CityPlaces[] = [
  {
    city: 'New York',
    zones: [
      { zone: 'West Village, SoHo & Tribeca', places: [{ name: 'Via Carota', type: 'restaurant', subArea: 'West Village'}, {name: 'The Commerce Inn', type: 'restaurant', subArea: 'West Village'}, {name: 'King', type: 'restaurant', subArea: 'Soho'}, {name: 'Shmone', type: 'restaurant', subArea: 'West Village'}, {name: 'Zimmis', type: 'restaurant', subArea: 'West Village'}, {name: 'Bar Pisellino', type: 'bar', subArea: 'West Village'}, {name: 'I Sodi', type: 'restaurant', subArea: 'West Village'}, {name: 'Croft Alley', type: 'restaurant', subArea: 'Soho', note: 'Great Breakfast/Lunch Spot'}, {name: 'Sant Ambreous', type: 'coffee', subArea: 'Soho'}, {name: 'Pantry', type: 'coffee', subArea: 'Soho', note: 'Cool Matcha Stop'}] },
      { zone: 'East Village & Lower East Side', places: [{name: 'Le Dive', type: 'bar', subArea: 'Lower East Side'}, {name: 'Corner Bar', type: 'restaurant', subArea: 'Lower East Side'}, {name: 'Casino', type: 'restaurant', subArea: 'Lower East Side'}, {name: "Cervo's", type: 'restaurant', subArea: 'Lower East Side'}, {name: 'Tolo', type: 'restaurant', subArea: 'Lower East Side'}, {name: 'Time Again', type: 'bar', subArea: 'Lower East Side'}, {name: 'Colbo Next Door', type: 'bar', subArea: 'Lower East Side', note: 'Aesthetic Low Key Wine Bar'}, {name: 'Schmuck', type: 'bar', subArea: 'East Village'}] },
      { zone: 'Chelsea & the High Line', places: [] },
      { zone: 'Midtown', places: [] },
      { zone: 'Uptown', places: [] },
      { zone: 'Williamsburg', places: [] },
      { zone: 'DUMBO, Brooklyn Heights & Fort Greene', places: [] },
    ],
  },
  {
    city: 'Los Angeles',
    zones: [
      { zone: 'Eastside', places: [] },
      { zone: 'Hollywood & Fairfax', places: [] },
      { zone: 'Venice & Abbot Kinney', places: [] },
      { zone: 'Downtown & Arts District', places: [] },
      { zone: 'Culver City & West Adams', places: [] },
    ],
  },
  {
    city: 'Chicago',
    zones: [
      { zone: 'Wicker Park & Bucktown', places: [] },
      { zone: 'Logan Square & Humboldt Park', places: [] },
      { zone: 'Pilsen & Chinatown', places: [] },
      { zone: 'River North & the Loop', places: [] },
      { zone: 'Hyde Park & Museum Campus', places: [] },
    ],
  },
  {
    city: 'San Francisco',
    zones: [
      { zone: 'Mission & Castro', places: [] },
      { zone: 'Hayes Valley & NoPa', places: [] },
      { zone: 'Haight & Golden Gate Park', places: [] },
      { zone: 'North Beach & Chinatown', places: [] },
      { zone: 'Dogpatch & Potrero Hill', places: [] },
    ],
  },
  {
    city: 'London',
    zones: [
      { zone: 'Shoreditch & Spitalfields', places: [] },
      { zone: 'Hackney & Dalston', places: [] },
      { zone: 'Peckham & Brixton', places: [] },
      { zone: 'Soho & Covent Garden', places: [] },
      { zone: 'Notting Hill & Portobello', places: [] },
      { zone: 'Marylebone & Mayfair', places: [] },
    ],
  },
  {
    city: 'Paris',
    zones: [
      { zone: 'Le Marais & Île Saint-Louis', places: [] },
      { zone: 'Montmartre & Pigalle', places: [] },
      { zone: 'Canal Saint-Martin & Belleville', places: [] },
      { zone: 'Saint-Germain & Luxembourg', places: [] },
      { zone: 'Bastille & Nation', places: [] },
    ],
  },
  {
    city: 'Tokyo',
    zones: [
      { zone: 'Shimokitazawa & Sangenjaya', places: [] },
      { zone: 'Yanaka & Ueno', places: [] },
      { zone: 'Nakameguro & Daikanyama', places: [] },
      { zone: 'Asakusa & Ryogoku', places: [] },
      { zone: 'Harajuku & Omotesando', places: [] },
    ],
  },
  {
    city: 'Barcelona',
    zones: [
      { zone: 'Gothic Quarter & El Born', places: [] },
      { zone: 'Gràcia & Park Güell', places: [] },
      { zone: 'Eixample & Passeig de Gràcia', places: [] },
      { zone: 'Barceloneta & Poblenou', places: [] },
      { zone: 'Poble Sec & Montjuïc', places: [] },
    ],
  },
  {
    city: 'Amsterdam',
    zones: [
      { zone: 'Jordaan & Nine Streets', places: [] },
      { zone: 'De Pijp & Museum Quarter', places: [] },
      { zone: 'Oud-West & Foodhallen', places: [] },
      { zone: 'Amsterdam Noord', places: [] },
      { zone: 'Oost & Plantage', places: [] },
    ],
  },
  {
    city: 'Portland',
    zones: [
      { zone: 'Pearl & NW 23rd', places: [] },
      { zone: 'Northeast Alberta & Mississippi', places: [] },
      { zone: 'Southeast Division & Hawthorne', places: [] },
      { zone: 'Central Eastside & Burnside', places: [] },
      { zone: 'Inner Southeast & Sellwood', places: [] },
    ],
  },
];

export function getCuratedPlacesForZone(city: string, zone: string): Place[] {
  return (
    CURATED_PLACES.find((c) => c.city === city)
      ?.zones.find((z) => z.zone === zone)
      ?.places ?? []
  );
}
