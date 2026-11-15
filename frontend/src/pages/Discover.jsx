
import { useState } from 'react';
import { products, shopFilters } from '../data/shops';
import { outfitLibrary } from '../data/style';
import { initialItems } from '../data/wardrobe';

function loadJson(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

const keyOf = (category, color) => `${category}|${color}`.toLowerCase();

// Pieces needed by the user's saved outfits that are not in their wardrobe.
function getNeededKeys() {
  const wardrobe = loadJson('wardrobe', initialItems);
  const saved = loadJson('savedOutfits', []);
  const owned = new Set(wardrobe.map((w) => keyOf(w.category, w.color)));
  const needed = new Set();
  saved.forEach((s) => {
    const outfit = outfitLibrary.find((o) => o.id === s.id);
    if (!outfit) return;
    outfit.items.forEach((it) => {
      const k = keyOf(it.category, it.color);
      if (!owned.has(k)) needed.add(k);
    });
  });
  return needed;
}

function inPriceRange(price, range) {
  if (range === 'All') return true;
  if (range === 'Under GH₵100') return price < 100;
  if (range === 'GH₵100–200') return price >= 100 && price <= 200;
  return price > 200;
}

export default function Discover() {
  const [category, setCategory] = useState('All');
  const [price, setPrice] = useState('All');
  const [location, setLocation] = useState('All');
  const [needed] = useState(getNeededKeys);
    const [added, setAdded] = useState([]);

  function addToWardrobe(p) {
    const wardrobe = loadJson('wardrobe', initialItems);
    const next = [
      ...wardrobe,
      { id: Date.now(), name: p.name, category: p.category, color: p.color },
    ];
    try {
      localStorage.setItem('wardrobe', JSON.stringify(next));
    } catch {
      /* storage unavailable, ignore */
    }
    setAdded([...added, p.id]);
  }

  const shown = products
    .filter((p) => category === 'All' || p.category === category)
    .filter((p) => inPriceRange(p.price, price))
    .filter((p) => location === 'All' || p.location === location)
    .map((p) => ({ ...p, missing: needed.has(keyOf(p.category, p.color)) }))
    .sort((a, b) => Number(b.missing) - Number(a.missing));

  return (
    <div>
      <p className="eyebrow">THOUGHTFULLY FOUND. LOCALLY LOVED.</p>
      <h1>Find your missing piece.</h1>
      <p className="subtitle">
        Discover considered additions from independent Ghanaian boutiques.
      </p>

      <div className="filters">
        <label className="filter">
          Category
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {shopFilters.categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label className="filter">
          Price range
          <select value={price} onChange={(e) => setPrice(e.target.value)}>
            {shopFilters.prices.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>
        <label className="filter">
          Location
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            {shopFilters.locations.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </label>
      </div>

      <h2 className="section-title">The considered collection</h2>

      {shown.length === 0 && (
        <p className="subtitle">Nothing here yet. Try different filters.</p>
      )}

      <div className="grid">
        {shown.map((p) => (
          <div className="card" key={p.id}>
            <div className="card-img product-img">
              {p.missing && <span className="missing-badge">Your missing piece</span>}
              {p.name}
            </div>
            <h3 className="card-title">{p.name}</h3>
            <p className="card-meta">{p.shop} · {p.location}</p>
            <p className="product-price">GH₵{p.price}</p>
                        <button
              className="link-btn"
              disabled={added.includes(p.id)}
              onClick={() => addToWardrobe(p)}
            >
              {added.includes(p.id) ? 'Added to wardrobe ✓' : '+ Add to my wardrobe'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}