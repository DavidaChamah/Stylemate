// Sample data. Replace with real shops and prices when your team has them.
export const products = [
  { id: 1, name: 'Black leather loafers', category: 'Shoes', color: 'Black', price: 180, shop: 'Sole Society', location: 'Accra' },
  { id: 2, name: 'Black block heels', category: 'Shoes', color: 'Black', price: 200, shop: 'Sole Society', location: 'Accra' },
  { id: 3, name: 'White leather sneakers', category: 'Shoes', color: 'White', price: 150, shop: 'Sole Society', location: 'Accra' },
  { id: 4, name: 'Tailored black trousers', category: 'Bottoms', color: 'Black', price: 120, shop: 'Naya Collective', location: 'Accra' },
  { id: 5, name: 'Crisp white shirt', category: 'Tops', color: 'White', price: 80, shop: 'Naya Collective', location: 'Accra' },
  { id: 6, name: 'Burgundy wrap dress', category: 'Dresses', color: 'Burgundy', price: 250, shop: 'Naya Collective', location: 'Accra' },
  { id: 7, name: 'Black midi dress', category: 'Dresses', color: 'Black', price: 220, shop: 'Studio Nineteen', location: 'Accra' },
  { id: 8, name: 'Black leather belt', category: 'Accessories', color: 'Black', price: 60, shop: 'Studio Nineteen', location: 'Accra' },
  { id: 9, name: 'Gold hoop earrings', category: 'Accessories', color: 'Gold', price: 70, shop: 'Studio Nineteen', location: 'Accra' },
  { id: 10, name: 'Tan leather handbag', category: 'Accessories', color: 'Tan', price: 120, shop: 'Adom Threads', location: 'Kumasi' },
  { id: 11, name: 'Black structured handbag', category: 'Accessories', color: 'Black', price: 110, shop: 'Adom Threads', location: 'Kumasi' },
  { id: 12, name: 'White cotton shirt', category: 'Tops', color: 'White', price: 85, shop: 'Adom Threads', location: 'Kumasi' },
  { id: 13, name: 'Black work trousers', category: 'Bottoms', color: 'Black', price: 110, shop: 'Adom Threads', location: 'Kumasi' },
];

export const shopFilters = {
  categories: ['All', 'Tops', 'Bottoms', 'Dresses', 'Shoes', 'Accessories'],
  prices: ['All', 'Under GH₵100', 'GH₵100–200', 'Above GH₵200'],
  locations: ['All', 'Accra', 'Kumasi'],
};