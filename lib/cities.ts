export type Neighborhood = {
  name: string;
  description: string;
  center: [number, number]; // [lng, lat]
};

export type City = {
  name: string;
  center: [number, number]; // [lng, lat]
  neighborhoods: Neighborhood[];
};

export const CITIES: City[] = [
  {
    name: 'New York',
    center: [-74.006, 40.7128],
    neighborhoods: [
      { name: 'West Village', description: 'cobblestone streets, indie cafés, classic NYC brownstones', center: [-74.0059, 40.7335] },
      { name: 'Williamsburg', description: "Brooklyn's creative hub, vintage shops, waterfront views", center: [-73.9566, 40.7081] },
      { name: 'Lower East Side', description: 'immigrant history, edgy bars, legendary delis', center: [-73.9867, 40.7157] },
      { name: 'Astoria', description: 'Greek food, diverse community, hidden gems', center: [-73.9301, 40.7721] },
      { name: 'Harlem', description: 'jazz history, soul food, cultural renaissance', center: [-73.9465, 40.8116] },
    ],
  },
  {
    name: 'Los Angeles',
    center: [-118.2437, 34.0522],
    neighborhoods: [
      { name: 'Silver Lake', description: 'indie music scene, hillside reservoirs, artisan coffee', center: [-118.2717, 34.0878] },
      { name: 'Venice', description: 'beach boardwalk, street art, boho energy', center: [-118.4695, 33.9850] },
      { name: 'Highland Park', description: 'murals, vintage record shops, taco trucks', center: [-118.1989, 34.1075] },
      { name: 'Los Feliz', description: 'old Hollywood, Griffin Park trails, wine bars', center: [-118.2929, 34.1072] },
      { name: 'Culver City', description: 'art galleries, farm-to-table dining, studio history', center: [-118.3965, 34.0211] },
    ],
  },
  {
    name: 'Chicago',
    center: [-87.6298, 41.8781],
    neighborhoods: [
      { name: 'Wicker Park', description: 'indie boutiques, dive bars, Chicago deep dish', center: [-87.6826, 41.9088] },
      { name: 'Logan Square', description: 'cocktail bars, murals, immigrant food scene', center: [-87.7033, 41.9237] },
      { name: 'Pilsen', description: 'Mexican murals, artist studios, tamales', center: [-87.6577, 41.8565] },
      { name: 'River North', description: 'galleries, steakhouses, architecture tours', center: [-87.6347, 41.8916] },
      { name: 'Hyde Park', description: "university energy, Obama's neighborhood, lakefront walks", center: [-87.5972, 41.7943] },
    ],
  },
  {
    name: 'San Francisco',
    center: [-122.4194, 37.7749],
    neighborhoods: [
      { name: 'Mission District', description: 'taquerías, murals, Latin culture, sunny microclimate', center: [-122.4194, 37.7599] },
      { name: 'Hayes Valley', description: "boutiques, patisseries, Patricia's Green", center: [-122.4247, 37.7759] },
      { name: 'Haight-Ashbury', description: 'Summer of Love legacy, vintage shops, Golden Gate Park', center: [-122.4469, 37.7692] },
      { name: 'North Beach', description: 'City Lights bookstore, espresso bars, Beat Generation', center: [-122.4064, 37.8002] },
      { name: 'Dogpatch', description: 'industrial chic, craft breweries, design studios', center: [-122.3905, 37.7590] },
    ],
  },
  {
    name: 'London',
    center: [-0.1276, 51.5074],
    neighborhoods: [
      { name: 'Peckham', description: 'rooftop bars, Caribbean food, South London cool', center: [-0.0699, 51.4741] },
      { name: 'Shoreditch', description: 'street art, vintage markets, tech startups', center: [-0.0775, 51.5226] },
      { name: 'Hackney', description: 'canal walks, organic markets, indie cinemas', center: [-0.0552, 51.5450] },
      { name: 'Soho', description: 'jazz clubs, dim sum, old-school Bohemia', center: [-0.1337, 51.5137] },
      { name: 'Brixton', description: 'Afro-Caribbean culture, market stalls, live music', center: [-0.1145, 51.4613] },
    ],
  },
  {
    name: 'Paris',
    center: [2.3522, 48.8566],
    neighborhoods: [
      { name: 'Le Marais', description: 'medieval streets, Jewish quarter, contemporary galleries', center: [2.3574, 48.8566] },
      { name: 'Belleville', description: 'multicultural, street art, artist ateliers', center: [2.3827, 48.8698] },
      { name: 'Montmartre', description: 'Sacré-Cœur, painters, old-world bistros', center: [2.3431, 48.8867] },
      { name: 'Canal Saint-Martin', description: 'iron footbridges, bobo cafés, Sunday picnics', center: [2.3625, 48.8697] },
      { name: 'Oberkampf', description: 'hipster bars, organic shops, live music venues', center: [2.3774, 48.8637] },
    ],
  },
  {
    name: 'Tokyo',
    center: [139.6917, 35.6895],
    neighborhoods: [
      { name: 'Shimokitazawa', description: 'vintage fashion, live music, indie theatre', center: [139.6681, 35.6613] },
      { name: 'Yanaka', description: 'old Tokyo feel, temples, craft shops', center: [139.7712, 35.7268] },
      { name: 'Nakameguro', description: 'canal-side coffee shops, boutiques, cherry blossoms', center: [139.6980, 35.6440] },
      { name: 'Koenji', description: 'punk subculture, used record stores, cheap ramen', center: [139.6493, 35.7050] },
      { name: 'Asakusa', description: 'Senso-ji, street food, craft markets', center: [139.7966, 35.7116] },
    ],
  },
  {
    name: 'Barcelona',
    center: [2.1734, 41.3851],
    neighborhoods: [
      { name: 'Gràcia', description: 'plaza culture, local bars, Gaudí origins', center: [2.1567, 41.4027] },
      { name: 'El Born', description: 'gothic lanes, craft cocktails, Picasso Museum', center: [2.1826, 41.3851] },
      { name: 'Poblenou', description: 'industrial reinvention, beach access, co-working hubs', center: [2.1979, 41.3993] },
      { name: 'Sant Pere', description: 'Santa Caterina market, old Jewish quarter, tapas bars', center: [2.1779, 41.3866] },
      { name: 'Poble Sec', description: 'Montjuïc walks, pintxos bars, alternative culture', center: [2.1618, 41.3735] },
    ],
  },
  {
    name: 'Amsterdam',
    center: [4.9041, 52.3676],
    neighborhoods: [
      { name: 'De Pijp', description: 'Albert Cuyp market, Indonesian food, canal bikes', center: [4.8987, 52.3549] },
      { name: 'Jordaan', description: 'art galleries, brown cafés, flower market', center: [4.8819, 52.3748] },
      { name: 'Noord', description: 'post-industrial cool, Eye Film Museum, NDSM wharf', center: [4.9003, 52.3981] },
      { name: 'Oud-West', description: 'brunch spots, vintage stores, laidback locals', center: [4.8681, 52.3669] },
      { name: 'Plantage', description: 'botanical gardens, Jewish history, quiet canals', center: [4.9156, 52.3659] },
    ],
  },
  {
    name: 'Portland',
    center: [-122.6765, 45.5231],
    neighborhoods: [
      { name: 'Alberta Arts District', description: 'murals, food carts, Last Thursday art walk', center: [-122.6278, 45.5593] },
      { name: 'Mississippi Ave', description: 'indie bars, plant shops, community vibe', center: [-122.6697, 45.5581] },
      { name: 'Division Street', description: 'James Beard-nominated restaurants, craft beer', center: [-122.6456, 45.5043] },
      { name: 'Pearl District', description: "Powell's Books, galleries, upscale brunch", center: [-122.6839, 45.5283] },
      { name: 'Hawthorne', description: 'vintage bookshops, vegan cafés, Mount Tabor hikes', center: [-122.6237, 45.5118] },
    ],
  },
];

export function getCityByName(name: string): City | undefined {
  return CITIES.find((c) => c.name === name);
}
