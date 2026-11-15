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
export const outfitLibrary = [
  {
    id: 1,
    name: 'The professional',
    tagline: 'Clean tailoring. Quiet confidence. A polished first impression.',
    events: ['Interview'],
    dressCodes: ['Formal', 'Smart Casual'],
    items: [
      { label: 'White shirt', category: 'Tops', color: 'White', price: 80 },
      { label: 'Black trousers', category: 'Bottoms', color: 'Black', price: 120 },
      { label: 'Black belt', category: 'Accessories', color: 'Black', price: 60 },
    ],
  },
  {
    id: 2,
    name: 'The smart classic',
    tagline: 'Sharp but relaxed. Professional, never predictable.',
    events: ['Interview', 'Graduation'],
    dressCodes: ['Smart Casual', 'Formal'],
    items: [
      { label: 'White shirt', category: 'Tops', color: 'White', price: 80 },
      { label: 'Black trousers', category: 'Bottoms', color: 'Black', price: 120 },
      { label: 'Black formal shoes', category: 'Shoes', color: 'Black', price: 180 },
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
    events: ['Casual Outing', 'Church'],
    dressCodes: ['Casual', 'Smart Casual'],
    items: [
      { label: 'White shirt', category: 'Tops', color: 'White', price: 80 },
      { label: 'Black trousers', category: 'Bottoms', color: 'Black', price: 120 },
      { label: 'White sneakers', category: 'Shoes', color: 'White', price: 150 },
    ],
  },
  {
    id: 5,
    name: 'Sunday best',
    tagline: 'Modest, polished and made to feel special.',
    events: ['Church', 'Wedding', 'Graduation'],
    dressCodes: ['Formal', 'Traditional'],
    items: [
      { label: 'Burgundy dress', category: 'Dresses', color: 'Burgundy', price: 250 },
      { label: 'Tan handbag', category: 'Accessories', color: 'Tan', price: 120 },
      { label: 'Black formal shoes', category: 'Shoes', color: 'Black', price: 180 },
    ],
  },
  {
    id: 6,
    name: 'Respectful in black',
    tagline: 'Understated and dignified for a day that calls for care.',
    events: ['Funeral'],
    dressCodes: ['Formal', 'Traditional'],
    items: [
      { label: 'Black dress', category: 'Dresses', color: 'Black', price: 220 },
      { label: 'Black formal shoes', category: 'Shoes', color: 'Black', price: 180 },
      { label: 'Black handbag', category: 'Accessories', color: 'Black', price: 110 },
    ],
  },
  {
    id: 7,
    name: 'Weekend relaxed',
    tagline: 'Comfortable, put together, ready for anything.',
    events: ['Casual Outing', 'Party'],
    dressCodes: ['Casual', 'Smart Casual'],
    items: [
      { label: 'White shirt', category: 'Tops', color: 'White', price: 80 },
      { label: 'Tan handbag', category: 'Accessories', color: 'Tan', price: 120 },
      { label: 'White sneakers', category: 'Shoes', color: 'White', price: 150 },
    ],
  },
];