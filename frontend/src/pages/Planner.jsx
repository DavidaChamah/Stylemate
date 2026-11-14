import { useState, useEffect } from 'react';
import { outfits, initialPlan } from '../data/planner';

const DAY_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function getWeek() {
  const today = new Date();
  const monday = new Date(today);
  const offset = (today.getDay() + 6) % 7; // Monday = 0
  monday.setDate(today.getDate() - offset);
  return DAY_NAMES.map((name, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    return { name, date };
  });
}

function loadPlan() {
  try {
    const saved = localStorage.getItem('plan');
    return saved ? JSON.parse(saved) : initialPlan;
  } catch {
    return initialPlan;
  }
}

export default function Planner() {
  const week = getWeek();
  const [plan, setPlan] = useState(loadPlan);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ day: 0, event: '', outfit: outfits[0] });

  useEffect(() => {
    try {
      localStorage.setItem('plan', JSON.stringify(plan));
    } catch {
      /* storage unavailable, ignore */
    }
  }, [plan]);

  const planned = plan.length;
  const firstEmpty = Math.max(0, week.findIndex((_, i) => !plan.some((p) => p.day === i)));

  const first = week[0].date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' });
  const last = week[6].date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  function openForm(day) {
    setForm({ day, event: '', outfit: outfits[0] });
    setShowForm(true);
  }

  function savePlan(e) {
    e.preventDefault();
    if (!form.event.trim()) return;
    const day = Number(form.day);
    setPlan([
      ...plan.filter((p) => p.day !== day),
      { day, event: form.event.trim(), outfit: form.outfit },
    ]);
    setShowForm(false);
  }

  function removeDay(day) {
    setPlan(plan.filter((p) => p.day !== day));
  }

  return (
    <div>
      <div className="page-header">
        <div>
          <p className="eyebrow">A LITTLE PLANNING. A LOT OF CONFIDENCE.</p>
          <h1>Your week, beautifully styled.</h1>
          <p className="subtitle">Less morning rush. More time to be you.</p>
        </div>
        <button className="btn-primary" onClick={() => openForm(firstEmpty)}>
          + Add Event
        </button>
      </div>

      {showForm && (
        <form className="add-form" onSubmit={savePlan}>
          <select value={form.day} onChange={(e) => setForm({ ...form, day: e.target.value })}>
            {week.map((d, i) => (
              <option key={d.name} value={i}>
                {d.name} {d.date.getDate()}
              </option>
            ))}
          </select>
          <input
            placeholder="Event (e.g. Lecture, Church)"
            value={form.event}
            onChange={(e) => setForm({ ...form, event: e.target.value })}
          />
          <select value={form.outfit} onChange={(e) => setForm({ ...form, outfit: e.target.value })}>
            {outfits.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          <button className="btn-primary" type="submit">Save</button>
          <button className="tab" type="button" onClick={() => setShowForm(false)}>
            Cancel
          </button>
        </form>
      )}

      <div className="progress-card">
        <div className="progress-top">
          <strong>{planned} of 7 days planned</strong>
          <span>{planned < 7 ? `${7 - planned} more looks. You've got this.` : 'All set.'}</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${(planned / 7) * 100}%` }} />
        </div>
      </div>

      {planned === 7 && (
        <div className="success-banner">
          <strong>✓ Your week is all styled!</strong>
          <p>7 of 7 days planned. Seven less things to think about. Go wear your confidence.</p>
        </div>
      )}

      <h2 className="week-title">{first} – {last}</h2>

      <div className="week">
        {week.map((d, i) => {
          const entry = plan.find((p) => p.day === i);
          const isToday = d.date.toDateString() === new Date().toDateString();
          return (
            <div key={d.name} className={isToday ? 'day today' : 'day'}>
              <span className="day-name">{d.name}</span>
              <span className="day-date">{d.date.getDate()}</span>
              {entry ? (
                <>
                  <div className="day-outfit">{entry.outfit}</div>
                  <p className="day-event">{entry.event}</p>
                  <button className="link-btn" onClick={() => removeDay(i)}>Remove</button>
                </>
              ) : (
                <button className="day-empty" onClick={() => openForm(i)}>
                  <span>+</span>
                  Plan a look
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}