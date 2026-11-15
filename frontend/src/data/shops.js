// Sample data. Replace with real shops and prices when your team has them.
export const products = [
  // The first six match the designer's Discover screen.
  { id: 1, name: 'Classic leather loafers', category: 'Shoes', color: 'Black', price: 180, shop: 'The Dapper Room', area: 'Osu', location: 'Accra' },
  { id: 14, name: 'Linen blend blazer', category: 'Tops', color: 'Cream', price: 190, shop: 'Studio Nineteen', area: 'East Legon', location: 'Accra' },
  { id: 10, name: 'Everyday leather tote', category: 'Accessories', color: 'Tan', price: 140, shop: 'Naya Collective', area: 'Labone', location: 'Accra' },
  { id: 3, name: 'Minimal white sneakers', category: 'Shoes', color: 'White', price: 220, shop: 'Sole Society', area: 'Osu', location: 'Accra' },
  { id: 5, name: 'The perfect white shirt', category: 'Tops', color: 'White', price: 95, shop: 'Studio Nineteen', area: 'East Legon', location: 'Accra' },
  { id: 4, name: 'Essential tailored trousers', category: 'Bottoms', color: 'Black', price: 150, shop: 'The Dapper Room', area: 'Osu', location: 'Accra' },

  // More sample items so the filters and "missing piece" matching have variety.
   { id: 2, name: 'Black block heels', category: 'Shoes', color: 'Black', price: 200, shop: 'Adom Threads', location: 'Kumasi' },
  { id: 6, name: 'Burgundy wrap dress', category: 'Dresses', color: 'Burgundy', price: 250, shop: 'Naya Collective', location: 'Accra' },
  { id: 7, name: 'Black midi dress', category: 'Dresses', color: 'Black', price: 220, shop: 'Adom Threads', location: 'Kumasi' },
  { id: 8, name: 'Black leather belt', category: 'Accessories', color: 'Black', price: 60, shop: 'Studio Nineteen', location: 'Accra' },
  { id: 9, name: 'Gold hoop earrings', category: 'Accessories', color: 'Gold', price: 70, shop: 'Studio Nineteen', location: 'Accra' },
];

export const shopFilters = {
  categories: ['All', 'Tops', 'Bottoms', 'Dresses', 'Shoes', 'Accessories'],
  prices: ['All', 'Under GH₵100', 'GH₵100–200', 'Above GH₵200'],
  locations: ['All', 'Accra', 'Kumasi'],
};