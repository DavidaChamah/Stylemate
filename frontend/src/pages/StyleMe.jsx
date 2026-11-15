import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { events, options, outfitLibrary } from '../data/style';
import { initialItems } from '../data/wardrobe';
import { lookFor } from '../data/lookPhotos';

const STEPS = ['Occasion', 'Preferences', 'Your looks'];
const BUDGET_MAX = {
  'Under GH₵100': 100,
  'GH₵100–200': 200,
  'GH₵200–500': 500,
  'Above GH₵500': Infinity,
};

function loadJson(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

export default function StyleMe() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [event, setEvent] = useState('');
  const [prefs, setPrefs] = useState({});
  const [saved, setSaved] = useState(() => loadJson('savedOutfits', []));

  function getLooks() {
    const wardrobe = loadJson('wardrobe', initialItems);
    let matches = outfitLibrary.filter((o) => o.events.includes(event));
    const code = prefs['Dress code'];
    if (code) {
      const better = matches.filter((o) => o.dressCodes.includes(code));
      if (better.length) matches = better;
    }
    return matches
      .map((o) => {
        const items = o.items.map((it) => ({
          ...it,
          owned: wardrobe.some(
            (w) =>
              w.category === it.category &&
              w.color.toLowerCase() === it.color.toLowerCase()
          ),
        }));
        const cost = items.filter((i) => !i.owned).reduce((sum, i) => sum + i.price, 0);
        return { ...o, items, cost };
      })
      .sort((a, b) => a.cost - b.cost);
  }

  function toggleSave(look) {
    const exists = saved.some((s) => s.id === look.id);
    const next = exists
      ? saved.filter((s) => s.id !== look.id)
      : [...saved, { id: look.id, name: look.name, event }];
    setSaved(next);
    try {
      localStorage.setItem('savedOutfits', JSON.stringify(next));
    } catch {
      /* storage unavailable, ignore */
    }
  }

  function setPref(name, value) {
    setPrefs({ ...prefs, [name]: prefs[name] === value ? undefined : value });
  }

  function startOver() {
    setStep(1);
    setEvent('');
    setPrefs({});
  }

  const looks = step === 3 ? getLooks() : [];
  const maxBudget = BUDGET_MAX[prefs.Budget] ?? Infinity;

  return (
    <div>
      <p className="eyebrow">YOUR PERSONAL STYLING SESSION</p>
      <h1>A look for every version of you.</h1>
      <p className="subtitle">A few details. A little wardrobe magic. A look that feels like you.</p>

      <div className="stepper">
        {STEPS.map((label, i) => (
          <span
            key={label}
            className={step === i + 1 ? 'step active' : step > i + 1 ? 'step done' : 'step'}
          >
            {i + 1} {label}
          </span>
        ))}
      </div>

      {step === 1 && (
        <section>
          <h2 className="section-title">01 Select an event</h2>
                    <div className="choices choices-events">
            {events.map((e) => (
              <button
                key={e}
                type="button"
                className={event === e ? 'choice event-choice active' : 'choice event-choice'}
                onClick={() => setEvent(e)}
              >
                {lookFor(e) && <img src={lookFor(e)} alt="" />}
                <span>{e}</span>
              </button>
            ))}
          </div>
          <div className="step-actions">
            <button className="btn-primary" disabled={!event} onClick={() => setStep(2)}>
              Continue
            </button>
          </div>
        </section>
      )}

      {step === 2 && (
        <section>
          <h2 className="section-title">02 Make it personal</h2>
          {Object.entries(options).map(([name, list]) => (
            <div key={name} className="option-group">
              <h3 className="group-label">{name}</h3>
              <div className="choices">
                {list.map((v) => (
                  <button
                    key={v}
                    type="button"
                    className={prefs[name] === v ? 'choice active' : 'choice'}
                    onClick={() => setPref(name, v)}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <div className="step-actions">
            <button className="tab" onClick={() => setStep(1)}>Back</button>
            <button className="btn-primary" onClick={() => setStep(3)}>See my looks</button>
          </div>
        </section>
      )}

      {step === 3 && (
        <section>
          <h2 className="section-title">03 Your looks for {event.toLowerCase()}</h2>
          {looks.length === 0 && (
            <p className="subtitle">No matching looks yet. Try another event or dress code.</p>
          )}
          <div className="looks">
            {looks.map((look) => {
              const isSaved = saved.some((s) => s.id === look.id);
              const over = look.cost > maxBudget;
              return (
                <div className="look" key={look.id}>
                                    {(lookFor(look.name) || lookFor(event)) && (
                    <img
                      className="look-photo-lg"
                      src={lookFor(look.name) || lookFor(event)}
                      alt={look.name}
                    />
                  )}
                  <div className="look-body">
                    <h3>{look.name}</h3>
                    <p className="look-tagline">{look.tagline}</p>
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
                    <p className="look-note">✓ Perfect for your {event.toLowerCase()}</p>
                    <p className="look-cost">
                      {look.cost === 0
                        ? 'You already have everything you need.'
                        : `Estimated additions: GH₵${look.cost}`}
                      {over ? ' · Over your budget' : ''}
                    </p>
                    <div className="look-actions">
                      <button className="btn-primary" onClick={() => toggleSave(look)}>
                        {isSaved ? 'Saved ✓' : 'Save Outfit'}
                      </button>
                      {look.cost > 0 && (
                        <button className="tab" onClick={() => navigate('/discover')}>
                          Find Missing Items
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="step-actions">
            <button className="tab" onClick={() => setStep(2)}>Back</button>
            <button className="tab" onClick={startOver}>Start over</button>
          </div>
        </section>
      )}
    </div>
  );
}