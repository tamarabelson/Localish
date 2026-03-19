export type Neighborhood = {
  name: string;
  description: string;
  center: [number, number]; // [lng, lat]
  subAreas?: string[];      // specific streets/areas Claude should weave through
};

export type City = {
  name: string;
  center: [number, number]; // [lng, lat]
  neighborhoods: Neighborhood[];
};

export const CITIES: City[] = [
  {
    name: 'New York',
    center: [-73.9857, 40.7484],
    neighborhoods: [
      {
        name: 'Uptown',
        description: 'Museum Mile, Central Park, brownstone blocks, jazz history',
        subAreas: ['Upper East Side', 'Central Park', 'Upper West Side', 'Morningside Heights', 'Harlem'],
        center: [-73.9665, 40.7831],
      },
      {
        name: 'Midtown',
        description: 'Rockefeller Center, Bryant Park, 5th Avenue shopping, Hudson Yards',
        subAreas: ['Rockefeller Center', 'Bryant Park', '5th Avenue', 'Grand Central', 'Hudson Yards'],
        center: [-73.9857, 40.7549],
      },
      {
        name: 'East Village & Lower East Side',
        description: 'Indie bars, vintage shops, immigrant food halls, street art',
        subAreas: ['East Village', 'Lower East Side', 'Alphabet City'],
        center: [-73.9843, 40.7265],
      },
      {
        name: 'West Village, SoHo & Tribeca',
        description: 'Cobblestone streets, boutiques, cast-iron galleries, farm-to-table',
        subAreas: ['West Village', 'SoHo', 'Tribeca', 'Nolita'],
        center: [-74.0059, 40.7253],
      },
      {
        name: 'Chelsea & the High Line',
        description: 'World-class art galleries, the elevated High Line park, Hudson River views',
        subAreas: ['Chelsea', 'High Line', 'Meatpacking District', 'Hudson River Park'],
        center: [-74.0048, 40.7465],
      },
    ],
  },
  {
    name: 'Los Angeles',
    center: [-118.2437, 34.0522],
    neighborhoods: [
      {
        name: 'Eastside',
        description: 'Indie coffee, hillside parks, record shops, taco trucks, murals',
        subAreas: ['Silver Lake', 'Los Feliz', 'Echo Park', 'Atwater Village'],
        center: [-118.2717, 34.0878],
      },
      {
        name: 'Hollywood & Fairfax',
        description: 'Vintage boutiques, delis, Melrose Ave shopping, old Hollywood glamour',
        subAreas: ['Fairfax District', 'Melrose Avenue', 'Larchmont Village', 'East Hollywood'],
        center: [-118.3408, 34.0836],
      },
      {
        name: 'Venice & Abbot Kinney',
        description: 'Boardwalk energy, street art, boutique-lined boulevard, ocean sunsets',
        subAreas: ['Venice Beach', 'Abbot Kinney Boulevard', 'Rose Avenue', 'Marina del Rey'],
        center: [-118.4695, 33.9850],
      },
      {
        name: 'Downtown & Arts District',
        description: 'Murals, Japanese markets, Grand Central Market, converted warehouse galleries',
        subAreas: ['Arts District', 'Little Tokyo', 'Chinatown', 'Grand Park', 'Historic Core'],
        center: [-118.2468, 34.0430],
      },
      {
        name: 'Culver City & West Adams',
        description: 'Film studio history, gallery row, soul food, Afro-Caribbean culture',
        subAreas: ['Culver City', 'West Adams', 'Leimert Park', 'Baldwin Hills'],
        center: [-118.3890, 34.0195],
      },
    ],
  },
  {
    name: 'Chicago',
    center: [-87.6298, 41.8781],
    neighborhoods: [
      {
        name: 'Wicker Park & Bucktown',
        description: 'Indie record shops, dive bars, vintage boutiques, pierogi and pierogi',
        subAreas: ['Wicker Park', 'Bucktown', 'Ukrainian Village', 'Milwaukee Avenue'],
        center: [-87.6826, 41.9088],
      },
      {
        name: 'Logan Square & Humboldt Park',
        description: 'Cocktail bars, Puerto Rican food, murals, boho coffee shops',
        subAreas: ['Logan Square', 'Palmer Square', 'Humboldt Park', 'Avondale'],
        center: [-87.7033, 41.9237],
      },
      {
        name: 'Pilsen & Chinatown',
        description: 'Mexican murals, tamales, artist studios, dim sum, cultural museums',
        subAreas: ['Pilsen', 'Chinatown', 'Bridgeport', '18th Street'],
        center: [-87.6577, 41.8565],
      },
      {
        name: 'River North & the Loop',
        description: 'Architecture river tours, steakhouses, Millennium Park, gallery district',
        subAreas: ['River North', 'The Loop', 'Millennium Park', 'Riverwalk', 'Magnificent Mile'],
        center: [-87.6347, 41.8916],
      },
      {
        name: 'Hyde Park & Museum Campus',
        description: 'University bookshops, lakefront trails, world-class museums, jazz',
        subAreas: ['Hyde Park', 'Kenwood', 'Museum Campus', 'Bronzeville', 'Jackson Park'],
        center: [-87.5972, 41.7943],
      },
    ],
  },
  {
    name: 'San Francisco',
    center: [-122.4194, 37.7749],
    neighborhoods: [
      {
        name: 'Mission & Castro',
        description: 'Taquerías, Dolores Park, rainbow history, murals, sunny microclimate',
        subAreas: ['Mission District', 'Castro', 'Noe Valley', 'Valencia Corridor'],
        center: [-122.4194, 37.7599],
      },
      {
        name: 'Hayes Valley & NoPa',
        description: 'Boutiques, patisseries, cocktail bars, local designers',
        subAreas: ['Hayes Valley', 'NoPa', 'Lower Haight', "Patricia's Green"],
        center: [-122.4247, 37.7759],
      },
      {
        name: 'Haight & Golden Gate Park',
        description: 'Summer of Love legacy, vintage shops, buffalo paddock, botanical garden',
        subAreas: ['Haight-Ashbury', 'Inner Sunset', 'Golden Gate Park', 'Cole Valley'],
        center: [-122.4469, 37.7692],
      },
      {
        name: 'North Beach & Chinatown',
        description: 'City Lights bookstore, espresso bars, dim sum, Beat Generation history',
        subAreas: ['North Beach', 'Chinatown', 'Financial District waterfront', 'Washington Square'],
        center: [-122.4064, 37.8002],
      },
      {
        name: 'Dogpatch & Potrero Hill',
        description: 'Industrial breweries, design studios, bay views, farm-to-table brunch',
        subAreas: ['Dogpatch', 'Potrero Hill', 'Mission Bay', 'Illinois Street corridor'],
        center: [-122.3905, 37.7590],
      },
    ],
  },
  {
    name: 'London',
    center: [-0.1276, 51.5074],
    neighborhoods: [
      {
        name: 'Shoreditch & Spitalfields',
        description: 'Street art, vintage markets, Bangladeshi food, Sunday flower market',
        subAreas: ['Shoreditch', 'Brick Lane', 'Spitalfields', 'Columbia Road', 'Bethnal Green'],
        center: [-0.0775, 51.5226],
      },
      {
        name: 'Hackney & Dalston',
        description: 'Broadway Market, canal walks, record shops, Turkish grills, indie cinemas',
        subAreas: ['London Fields', 'Broadway Market', 'Dalston', 'Hackney Central', 'Regents Canal'],
        center: [-0.0552, 51.5450],
      },
      {
        name: 'Peckham & Brixton',
        description: 'Rooftop bars, Caribbean food, Afro-Caribbean culture, live music',
        subAreas: ['Peckham', 'Brixton', 'Brixton Market', 'Bellenden Road', 'Rye Lane'],
        center: [-0.0822, 51.4677],
      },
      {
        name: 'Soho & Covent Garden',
        description: 'Jazz clubs, dim sum, bookshops, street performers, old Bohemia',
        subAreas: ['Soho', 'Covent Garden', 'Seven Dials', 'Chinatown', 'Neal Street'],
        center: [-0.1337, 51.5137],
      },
      {
        name: 'Notting Hill & Portobello',
        description: 'Antique stalls, painted houses, Caribbean carnival roots, gastropubs',
        subAreas: ['Notting Hill', 'Portobello Road Market', 'Ladbroke Grove', 'Westbourne Grove'],
        center: [-0.2014, 51.5138],
      },
      {
        name: 'Marylebone & Mayfair',
        description: 'Village high street, independent boutiques, art dealers, private members clubs',
        subAreas: ['Marylebone High Street', 'Marylebone Village', 'Mayfair', 'Mount Street', 'Grosvenor Square'],
        center: [-0.1540, 51.5150],
      },
    ],
  },
  {
    name: 'Paris',
    center: [2.3522, 48.8566],
    neighborhoods: [
      {
        name: 'Le Marais & Île Saint-Louis',
        description: 'Medieval streets, falafel, galleries, Place des Vosges, quiet island walks',
        subAreas: ['Le Marais', 'Île Saint-Louis', 'Place des Vosges', 'Jewish Quarter', 'Haut-Marais'],
        center: [-0.0699, 48.8551],
      },
      {
        name: 'Montmartre & Pigalle',
        description: 'Sacré-Cœur, painters, cabarets, natural wine bars, cobbled stairs',
        subAreas: ['Montmartre', 'Pigalle', 'South Pigalle (SoPi)', 'Place du Tertre', 'Abbesses'],
        center: [2.3431, 48.8867],
      },
      {
        name: 'Canal Saint-Martin & Belleville',
        description: 'Iron footbridges, bobo cafés, Cantonese food, street art, artists studios',
        subAreas: ['Canal Saint-Martin', 'Belleville', 'Ménilmontant', 'Oberkampf', 'République'],
        center: [2.3700, 48.8680],
      },
      {
        name: 'Saint-Germain & Luxembourg',
        description: 'Literary cafés, antique dealers, Luxembourg Gardens, Left Bank classics',
        subAreas: ['Saint-Germain-des-Prés', 'Odéon', 'Luxembourg', 'Rue Mouffetard', 'Jardin du Luxembourg'],
        center: [2.3336, 48.8500],
      },
      {
        name: 'Bastille & Nation',
        description: 'Covered market, wine bars, furniture shops, local Paris nightlife',
        subAreas: ['Bastille', 'Marché d\'Aligre', 'Faubourg Saint-Antoine', 'Charonne', 'Nation'],
        center: [2.3730, 48.8533],
      },
    ],
  },
  {
    name: 'Tokyo',
    center: [139.6917, 35.6895],
    neighborhoods: [
      {
        name: 'Shimokitazawa & Sangenjaya',
        description: 'Vintage clothing, live music venues, indie theatre, kissaten coffee',
        subAreas: ['Shimokitazawa', 'Sangenjaya', 'Ikejiri-Ohashi', 'Setagaya'],
        center: [139.6681, 35.6613],
      },
      {
        name: 'Yanaka & Ueno',
        description: 'Old Tokyo shitamachi feel, temples, craft shops, museum park, cherry blossoms',
        subAreas: ['Yanaka', 'Nezu', 'Yanesen', 'Ueno', 'Ueno Park'],
        center: [139.7712, 35.7200],
      },
      {
        name: 'Nakameguro & Daikanyama',
        description: 'Canal-side coffee, curated bookshops, boutiques, cherry blossom walks',
        subAreas: ['Nakameguro', 'Daikanyama', 'Ebisu', 'Meguro River'],
        center: [139.6980, 35.6440],
      },
      {
        name: 'Asakusa & Ryogoku',
        description: 'Senso-ji temple, street food, craft markets, sumo culture, rickshaws',
        subAreas: ['Asakusa', 'Nakamise-dori', 'Ryogoku', 'Kappabashi', 'Sumida River'],
        center: [139.7966, 35.7116],
      },
      {
        name: 'Harajuku & Omotesando',
        description: 'Fashion subcultures, Meiji Shrine, zelkova-lined boulevards, architecture',
        subAreas: ['Harajuku', 'Takeshita Street', 'Omotesando', 'Aoyama', 'Meiji Shrine'],
        center: [139.7038, 35.6693],
      },
    ],
  },
  {
    name: 'Barcelona',
    center: [2.1734, 41.3851],
    neighborhoods: [
      {
        name: 'Gothic Quarter & El Born',
        description: 'Roman ruins, Picasso Museum, craft cocktails, Gothic lanes, tapas bars',
        subAreas: ['Barri Gòtic', 'El Born', 'La Ribera', 'El Raval', 'Plaça Reial'],
        center: [2.1770, 41.3831],
      },
      {
        name: 'Gràcia & Park Güell',
        description: 'Plaza culture, local bars, Gaudí mosaics, bohemian bookshops',
        subAreas: ['Gràcia', 'Vila de Gràcia', 'Park Güell', 'Plaça del Sol', 'Plaça de la Virreina'],
        center: [2.1567, 41.4027],
      },
      {
        name: 'Eixample & Passeig de Gràcia',
        description: 'Gaudí architecture, boutique shopping, vermouth bars, modernista buildings',
        subAreas: ['Eixample', 'Passeig de Gràcia', 'Sagrada Família', 'Esquerra de l\'Eixample', 'Rambla de Catalunya'],
        center: [2.1640, 41.3930],
      },
      {
        name: 'Barceloneta & Poblenou',
        description: 'Beach chiringuitos, rambla del Poblenou, creative hubs, seafood',
        subAreas: ['Barceloneta', 'Poblenou', 'Rambla del Poblenou', 'El Forum beach', '22@ district'],
        center: [2.1979, 41.3923],
      },
      {
        name: 'Poble Sec & Montjuïc',
        description: 'Pintxos bars, Montjuïc castle walks, open-air cinema, Fundació Joan Miró',
        subAreas: ['Poble Sec', 'Montjuïc', 'Paral·lel', 'Sant Antoni', 'Carrer de Blai'],
        center: [2.1618, 41.3735],
      },
    ],
  },
  {
    name: 'Amsterdam',
    center: [4.9041, 52.3676],
    neighborhoods: [
      {
        name: 'Jordaan & Nine Streets',
        description: 'Brown cafés, antique dealers, tiny galleries, flower market, canal bikes',
        subAreas: ['Jordaan', 'Nine Streets', 'Prinsengracht', 'Westermarkt', 'Noordermarkt'],
        center: [4.8819, 52.3748],
      },
      {
        name: 'De Pijp & Museum Quarter',
        description: 'Albert Cuyp market, Rijksmuseum, Indonesian food, Vondelpark picnics',
        subAreas: ['De Pijp', 'Albert Cuyp Market', 'Museum Quarter', 'Vondelpark', 'Oud-Zuid'],
        center: [4.8987, 52.3549],
      },
      {
        name: 'Oud-West & Foodhallen',
        description: 'Indie coffee, Foodhallen market hall, vintage shops, local brunch',
        subAreas: ['Oud-West', 'Kinkerbuurt', 'Foodhallen', 'Overtoom', 'Ten Katemarkt'],
        center: [4.8681, 52.3669],
      },
      {
        name: 'Amsterdam Noord',
        description: 'Post-industrial cool, Eye Film Museum, NDSM Wharf street art, ferry views',
        subAreas: ['NDSM Wharf', 'Eye Film Museum', 'Buiksloterweg', 'Nieuwendam', 'IJ waterfront'],
        center: [4.9003, 52.3981],
      },
      {
        name: 'Oost & Plantage',
        description: 'Botanical garden, Jewish history, artisan bakeries, Artis zoo, quiet canals',
        subAreas: ['Plantage', 'Artis', 'Hortus Botanicus', 'Indische Buurt', 'Oosterpark'],
        center: [4.9156, 52.3659],
      },
    ],
  },
  {
    name: 'Portland',
    center: [-122.6765, 45.5231],
    neighborhoods: [
      {
        name: 'Pearl & NW 23rd',
        description: "Powell's Books, galleries, Victorian homes, boutique shopping, farm-to-table",
        subAreas: ['Pearl District', 'NW 23rd Avenue', 'NW 21st Avenue', 'Slabtown', 'Tanner Springs Park'],
        center: [-122.6839, 45.5283],
      },
      {
        name: 'Northeast Alberta & Mississippi',
        description: 'Murals, Last Thursday art walk, food carts, community gardens, indie bars',
        subAreas: ['Alberta Arts District', 'Mississippi Avenue', 'Boise neighborhood', 'Overlook'],
        center: [-122.6489, 45.5587],
      },
      {
        name: 'Southeast Division & Hawthorne',
        description: 'James Beard restaurants, vegan cafés, vintage bookshops, Mount Tabor hikes',
        subAreas: ['Division Street', 'Hawthorne Boulevard', 'Clinton Street', 'Belmont', 'Mount Tabor'],
        center: [-122.6347, 45.5080],
      },
      {
        name: 'Central Eastside & Burnside',
        description: 'Craft distilleries, food hall, pinball bars, loading-dock galleries',
        subAreas: ['Central Eastside', 'East Burnside', 'Buckman', 'Kerns', 'Pine Street Market'],
        center: [-122.6542, 45.5201],
      },
      {
        name: 'Inner Southeast & Sellwood',
        description: 'Antique row, river walks, neighborhood diners, Oaks Bottom wildlife refuge',
        subAreas: ['Sellwood', 'Moreland', 'Brooklyn', 'Oaks Bottom', 'Willamette River path'],
        center: [-122.6503, 45.4770],
      },
    ],
  },
];

export function getCityByName(name: string): City | undefined {
  return CITIES.find((c) => c.name === name);
}
