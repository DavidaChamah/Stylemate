export const faceShapes = ['Oval', 'Round', 'Square', 'Heart', 'Long'];

// Hairstyle ideas by face shape (suggestions, not guarantees).
export const hairstyles = {
  Oval: [
    { name: 'Layered long waves', note: 'Balanced faces suit almost anything. Soft layers add movement.' },
    { name: 'Classic bob', note: 'A clean chin-length cut shows off even proportions.' },
    { name: 'Neat knotless braids', note: 'Polished and low-maintenance for busy weeks.' },
  ],
  Round: [
    { name: 'High puff or top knot', note: 'Adds height, which lengthens the face.' },
    { name: 'Long layers', note: 'Falls past the chin to elongate your shape.' },
    { name: 'Side-swept braids', note: 'An off-centre part adds gentle angles.' },
  ],
  Square: [
    { name: 'Soft waves', note: 'Curves soften a strong jawline.' },
    { name: 'Twist-out with volume', note: 'Rounded volume balances angular features.' },
    { name: 'Side-parted layers', note: 'A diagonal line draws the eye away from the jaw.' },
  ],
  Heart: [
    { name: 'Chin-length bob', note: 'Adds fullness around the jaw to balance a wider forehead.' },
    { name: 'Side-swept fringe', note: 'Softens the forehead while keeping the look light.' },
    { name: 'Braids with bottom volume', note: 'Fullness near the ends balances a narrower chin.' },
  ],
  Long: [
    { name: 'Short twists', note: 'Adds width and keeps the length in proportion.' },
    { name: 'Voluminous curls', note: 'Side volume balances a longer face.' },
    { name: 'Fringe or bangs', note: 'Shortens the look of the forehead.' },
  ],
};

// Makeup ideas by event.
export const makeup = {
  Wedding: 'Soft glam: luminous skin, defined lashes, a rosy or nude lip.',
  Graduation: 'Fresh and bright: even skin, defined brows, a confident lip color.',
  Interview: 'Natural and polished: matte base, neutral eyes, a soft nude lip.',
  'Date Night': 'Defined eyes with a berry or warm red lip.',
  Church: 'Soft and natural: light base, subtle blush, a nude lip.',
  Party: 'Bold lip or shimmer on the lids. Pick one star feature.',
  Funeral: 'Minimal and respectful: neutral tones, no shimmer, a natural lip.',
  'Casual Outing': 'Light tint, a little gloss and a touch of mascara.',
};

// Jewelry and accessory ideas by event.
export const jewelry = {
  Wedding: 'Statement earrings or a delicate necklace, not both.',
  Graduation: 'Simple studs and a classic watch.',
  Interview: 'Small studs, a slim watch and a plain belt.',
  'Date Night': 'Gold hoops or a thin chain for a little shine.',
  Church: 'A modest necklace and small earrings.',
  Party: 'Go bold: statement earrings, a cuff or layered chains.',
  Funeral: 'Pearl or plain studs only. Keep it quiet.',
  'Casual Outing': 'Layered chains, a bracelet or a canvas tote.',
};

// Fragrance families and how to choose one.
export const fragrances = {
  'Fresh & clean': 'Citrus, green tea or light musk. Great for sunny days.',
  'Soft florals': 'Jasmine, rose or peony. Gentle for daytime events.',
  'Warm & woody': 'Amber, vanilla or sandalwood. Best for evenings and cooler weather.',
};

export function pickFragrance({ time, weather, event }) {
  if (event === 'Funeral') return 'Soft florals';
  if (time === 'Evening' || time === 'Night' || weather === 'Cold') return 'Warm & woody';
  if (weather === 'Sunny' && (time === 'Morning' || time === 'Afternoon')) return 'Fresh & clean';
  return 'Soft florals';
}