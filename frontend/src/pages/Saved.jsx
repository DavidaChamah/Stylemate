import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

export default function Saved() {
  const navigate = useNavigate();
  const [saved, setSaved] = useState(() => loadJson('savedOutfits', []));
  const wardrobe = loadJson('wardrobe', initialItems);

  const looks = saved
    .map((s) => {
      const outfit = outfitLibrary.find((o) => o.id === s.id);
      if (!outfit) return null;
      const items = outfit.items.map((it) => ({
        ...it,
        owned: wardrobe.some(
          (w) =>
            w.category === it.category &&
            w.color.toLowerCase() === it.color.toLowerCase()
        ),
      }));
      const cost = items.filter((i) => !i.owned).reduce((sum, i) => sum + i.price, 0);
      return { ...outfit, items, cost, event: s.event };
    })
    .filter(Boolean);

  function remove(id) {
    const next = saved.filter((s) => s.id !== id);
    setSaved(next);
    try {
      localStorage.setItem('savedOutfits', JSON.stringify(next));
    } catch {
      /* storage unavailable, ignore */
    }
  }

  return (
    <div>
      <p className="eyebrow">YOUR COLLECTION. YOUR WAY.</p>
      <h1>Looks you love.</h1>
      <p className="subtitle">
        Every outfit you save lives here, ready for the next big day.
      </p>

      {looks.length === 0 && (
        <div className="empty-state">
          <h3>Your next look starts here</h3>
          <p>Save an outfit from Style Me and it will show up here.</p>
          <button className="btn-primary" onClick={() => navigate('/style-me')}>
            Style me
          </button>
        </div>
      )}

      <div className="looks">
        {looks.map((look) => (
          <div className="look" key={look.id}>
            <div className="look-img">{look.name}</div>
            <div className="look-body">
              <h3>{look.name}</h3>
              <p className="look-tagline">Saved for {look.event.toLowerCase()}</p>
              <ul className="look-items">
                {look.items.map((it) => (
                  <li key={it.label}>
                    <span>{it.label}</span>
                    <em className={it.owned ? 'tag owned' : 'tag missing'}>
                      {it.owned ? 'In your wardrobe' : 'Missing item'}
                    </em>
                  </li>
                ))}
              </ul>
              <p className="look-cost">
                {look.cost === 0
                  ? 'You already have everything you need.'
                  : `Estimated additions: GH₵${look.cost}`}
              </p>
              <div className="look-actions">
                {look.cost > 0 && (
                  <button className="btn-primary" onClick={() => navigate('/discover')}>
                    Find Missing Items
                  </button>
                )}
                <button className="tab" onClick={() => remove(look.id)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}