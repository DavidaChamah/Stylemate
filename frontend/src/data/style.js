export const events = [
  'Wedding',
  'Graduation',
  'Interview',
  'Date Night',
  'Church',
  'Party',
  'Funeral',
  'Casual Outing',
];

export const options = {
  Weather: ['Sunny', 'Rainy', 'Cloudy', 'Cold'],
  Time: ['Morning', 'Afternoon', 'Evening', 'Night'],
  Budget: ['Under GH₵100', 'GH₵100–200', 'GH₵200–500', 'Above GH₵500'],
  'Dress code': ['Casual', 'Smart Casual', 'Formal', 'Traditional'],
};

// Each item needs a category + color. If your wardrobe has a matching
// piece, it counts as "in your wardrobe". Otherwise it is a missing item.
// Each look matches one of the designer's mannequin photos:
//   Classic confidence -> black suit, The modern professional / The everyday edit -> ivory blazer,
//   After-hours elegance -> burgundy dress, Kente occasionwear -> kente dress.
export const outfitLibrary = [
  {
    id: 1,
    name: 'Classic confidence',
    tagline: 'Clean tailoring. Quiet confidence. A polished first impression.',
    events: ['Interview', 'Funeral'],
    dressCodes: ['Formal', 'Smart Casual'],
    items: [
      { label: 'White shirt', category: 'Tops', color: 'White', price: 80 },
      { label: 'Black trousers', category: 'Bottoms', color: 'Black', price: 120 },
      { label: 'Black formal shoes', category: 'Shoes', color: 'Black', price: 180 },
    ],
  },
  {
    id: 2,
    name: 'The modern professional',
    tagline: 'Soft structure with a refined edge. Professional, never predictable.',
    events: ['Interview', 'Graduation', 'Church'],
    dressCodes: ['Smart Casual', 'Formal'],
    items: [
      { label: 'White tank', category: 'Tops', color: 'White', price: 70 },
      { label: 'Chocolate trousers', category: 'Bottoms', color: 'Chocolate', price: 130 },
      { label: 'Ivory blazer', category: 'Tops', color: 'Cream', price: 190 },
    ],
  },
  {
    id: 3,
    name: 'After-hours elegance',
    tagline: 'Rich color, easy confidence. Made for the evening.',
    events: ['Date Night', 'Party', 'Wedding'],
    dressCodes: ['Formal', 'Smart Casual'],
    items: [
      { label: 'Burgundy dress', category: 'Dresses', color: 'Burgundy', price: 250 },
      { label: 'Black heels', category: 'Shoes', color: 'Black', price: 200 },
      { label: 'Gold earrings', category: 'Accessories', color: 'Gold', price: 70 },
    ],
  },
  {
    id: 4,
    name: 'The everyday edit',
    tagline: 'Easy pieces that go with everything.',
    events: ['Casual Outing', 'Graduation', 'Church'],
    dressCodes: ['Casual', 'Smart Casual'],
    items: [
      { label: 'White tank', category: 'Tops', color: 'White', price: 70 },
      { label: 'Chocolate trousers', category: 'Bottoms', color: 'Chocolate', price: 130 },
      { label: 'Tan handbag', category: 'Accessories', color: 'Tan', price: 120 },
    ],
  },
  {
    id: 5,
    name: 'Kente occasionwear',
    tagline: 'Heritage print, tailored to celebrate. Made for a day that matters.',
    events: ['Wedding'],
    dressCodes: ['Traditional', 'Formal'],
    items: [
      { label: 'Kente dress', category: 'Dresses', color: 'Gold', price: 300 },
      { label: 'Gold sandals', category: 'Shoes', color: 'Gold', price: 160 },
      { label: 'Gold earrings', category: 'Accessories', color: 'Gold', price: 70 },
    ],
  },
];