import { useState } from 'react';
import { initialItems } from '../data/wardrobe';
import { options } from '../data/style';
import { Link } from 'react-router-dom';
import { avatarPhoto, lookFor } from '../data/lookPhotos';

const STYLES = ['Casual', 'Smart casual', 'Formal', 'Traditional', 'Streetwear', 'Minimal'];
const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const COLOURS = ['Ivory', 'Black', 'Tan', 'White', 'Navy', 'Burgundy', 'Gold', 'Green'];

const DEFAULTS = {
  name: '',
  email: '',
  location: '',
  style: 'Smart casual',
  top: 'M',
  bottom: 'M',
  shoe: '',
  budget: 'GH₵100–200',
  colours: [],
};

function loadJson(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

export default function Profile() {
  const [profile, setProfile] = useState(() => ({ ...DEFAULTS, ...loadJson('profile', {}) }));
  const [message, setMessage] = useState('');
  const pieces = loadJson('wardrobe', initialItems).length;
  const savedLooks = loadJson('savedOutfits', []);
  const looks = savedLooks.length;

  function update(field, value) {
    setProfile({ ...profile, [field]: value });
    setMessage('');
  }

  function toggleColour(c) {
    const has = profile.colours.includes(c);
    update('colours', has ? profile.colours.filter((x) => x !== c) : [...profile.colours, c]);
  }

  function save(e) {
    e.preventDefault();
    try {
      localStorage.setItem('profile', JSON.stringify(profile));
      setMessage('Saved ✓');
    } catch {
      setMessage('Could not save on this device.');
    }
  }

  return (
    <form onSubmit={save}>
      <div className="page-header">
        <div>
          <p className="eyebrow">STYLE, ON YOUR TERMS</p>
          <h1>A little more you.</h1>
          <p className="subtitle">The details that make your recommendations personal.</p>
        </div>
        <div>
          <button className="btn-primary" type="submit">Save Changes</button>
          {message && <span className="save-message">{message}</span>}
        </div>
      </div>

      <div className="profile">
        <aside className="profile-card">
                    <img className="avatar-photo" src={avatarPhoto} alt="" />
          <h3>{profile.name.trim() || 'Your name'}</h3>
          <p className="profile-meta">
            {profile.location || 'Add your location'} · {pieces} pieces · {looks} saved looks
          </p>
          <div className="signature">
            <span>YOUR STYLE SIGNATURE</span>
            <p>{profile.style}. Quietly confident.</p>
          </div>
        </aside>

        <div>
          <section className="form-section">
            <h2>Personal information</h2>
            <div className="fields">
              <label className="field">
                Full name
                <input value={profile.name} onChange={(e) => update('name', e.target.value)} />
              </label>
              <label className="field">
                Email address
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => update('email', e.target.value)}
                />
              </label>
              <label className="field">
                Location
                <input
                  placeholder="e.g. Kumasi, Ghana"
                  value={profile.location}
                  onChange={(e) => update('location', e.target.value)}
                />
              </label>
            </div>
          </section>

          <section className="form-section">
            <h2>Style preferences</h2>
            <div className="fields">
              <label className="field">
                Preferred fashion style
                <select value={profile.style} onChange={(e) => update('style', e.target.value)}>
                  {STYLES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </label>
              <label className="field">
                Top size
                <select value={profile.top} onChange={(e) => update('top', e.target.value)}>
                  {SIZES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </label>
              <label className="field">
                Bottom size
                <select value={profile.bottom} onChange={(e) => update('bottom', e.target.value)}>
                  {SIZES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </label>
              <label className="field">
                Shoe size
                <input
                  placeholder="e.g. 39"
                  value={profile.shoe}
                  onChange={(e) => update('shoe', e.target.value)}
                />
              </label>
              <label className="field">
                Budget per addition
                <select value={profile.budget} onChange={(e) => update('budget', e.target.value)}>
                  {options.Budget.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </label>
            </div>
          </section>

          <section className="form-section">
            <h2>Preferred colours</h2>
            <div className="choices">
              {COLOURS.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={profile.colours.includes(c) ? 'choice active' : 'choice'}
                  onClick={() => toggleColour(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </section>
               </div>
      </div>

      <section className="form-section profile-saved">
        <div className="section-head">
          <h2>Saved outfits</h2>
          <Link className="text-link" to="/saved">View all {looks} looks →</Link>
        </div>
        {savedLooks.length === 0 ? (
          <p className="subtitle">
            No saved looks yet. <Link className="text-link" to="/style-me">Find a look →</Link>
          </p>
        ) : (
          <div className="saved-looks saved-looks-two">
            {savedLooks.slice(0, 2).map((s) => (
              <div className="saved-look" key={s.id}>
                {lookFor(s.name) && <img src={lookFor(s.name)} alt={s.name} />}
                <div className="saved-look-body">
                  <h3>{s.name}</h3>
                  <Link className="text-link" to="/saved">View look →</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </form>
  );
}