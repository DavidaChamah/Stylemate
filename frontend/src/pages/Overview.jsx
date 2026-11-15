import { Link } from 'react-router-dom';
import { initialItems } from '../data/wardrobe';
import { outfitLibrary, events } from '../data/style';
import { initialPlan } from '../data/planner';
import { lookFor } from '../data/lookPhotos';
import curlsPhoto from '../assets/beauty/curls.jpg';

function loadJson(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

export default function Overview() {
  const wardrobe = loadJson('wardrobe', initialItems);
  const plan = loadJson('plan', initialPlan);
  const profile = loadJson('profile', {});

  const count = (c) => wardrobe.filter((i) => i.category === c).length;
  const planned = plan.length;
  const firstName = profile.name ? profile.name.trim().split(' ')[0] : '';
  const today = new Date()
    .toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
    .toUpperCase();

  // Looks you are closest to owning already.
  const picks = outfitLibrary
    .map((o) => {
      const have = o.items.filter((it) =>
        wardrobe.some(
          (w) =>
            w.category === it.category &&
            (w.color || '').toLowerCase() === it.color.toLowerCase()
        )
      ).length;
      return { ...o, have };
    })
    .sort((a, b) => b.have / b.items.length - a.have / a.items.length)
    .slice(0, 3);

  return (
    <div>
      <p className="eyebrow">{today}</p>
      <h1>{firstName ? `Welcome back, ${firstName}.` : 'We make beauty and elegance simple.'}</h1>
      <p className="subtitle">Let's find something perfect for your next occasion.</p>

      <div className="hero hero-split">
        <div className="hero-text">
          <p className="eyebrow">THE STYLE SPIN</p>
          <h2>A little inspiration. A whole new you.</h2>
          <p>Outfits made from the pieces you already own, with the gaps filled in.</p>
          <Link className="btn-primary btn-link" to="/style-me">Style me</Link>
        </div>
        <div className="hero-cards">
          <div className="spin-card">
            <img src={lookFor('kente')} alt="" />
            <span>Outfit</span>
            <strong>Kente occasionwear</strong>
          </div>
          <div className="spin-card is-mid">
            <img src={curlsPhoto} alt="" />
            <span>Hairstyle</span>
            <strong>Natural curls</strong>
          </div>
          <div className="spin-card">
            <img src={lookFor('modern')} alt="" />
            <span>Outfit</span>
            <strong>Modern tailoring</strong>
          </div>
        </div>
      </div>

      <div className="section-head">
        <h2>What are you dressing for?</h2>
        <Link className="text-link" to="/style-me">Choose an occasion to find your look →</Link>
      </div>
      <div className="event-grid">
        {events.map((e) => {
          const photo = lookFor(e);
          return (
            <Link className="event-tile" to="/style-me" key={e}>
              {photo && <img src={photo} alt="" />}
              <span>{e}</span>
            </Link>
          );
        })}
      </div>

      <div className="section-head">
        <h2>Your wardrobe, at a glance</h2>
        <Link className="text-link" to="/wardrobe">View wardrobe →</Link>
      </div>
      <div className="stats">
        <div className="stat"><strong>{wardrobe.length}</strong><span>Total items</span></div>
        <div className="stat"><strong>{count('Tops')}</strong><span>Tops</span></div>
        <div className="stat"><strong>{count('Bottoms')}</strong><span>Bottoms</span></div>
        <div className="stat"><strong>{count('Shoes')}</strong><span>Shoes</span></div>
        <div className="stat"><strong>{count('Accessories')}</strong><span>Accessories</span></div>
      </div>

      <div className="section-head">
        <h2>Recommended for you</h2>
        <Link className="text-link" to="/style-me">Style something new →</Link>
      </div>
      <div className="looks">
        {picks.map((look) => {
          const photo = lookFor(look.name);
          return (
            <div className="look" key={look.id}>
              {photo ? (
                <img className="look-photo" src={photo} alt={look.name} />
              ) : (
                <div className="look-img">{look.name}</div>
              )}
              <div className="look-body">
                <h3>{look.name}</h3>
                <p className="look-tagline">{look.tagline}</p>
                <p className="look-cost">
                  You have {look.have} of {look.items.length} pieces
                </p>
                <Link className="text-link" to="/style-me">See look →</Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="section-head">
        <h2>Weekly style progress</h2>
        <Link className="text-link" to="/planner">View my week →</Link>
      </div>
      <div className="progress-card">
        <div className="progress-top">
          <strong>{planned} of 7 days planned</strong>
          <span>{planned < 7 ? `${7 - planned} more looks. You've got this.` : 'All set.'}</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${(planned / 7) * 100}%` }} />
        </div>
      </div>
    </div>
  );
}