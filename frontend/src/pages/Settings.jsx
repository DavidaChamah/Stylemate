import { useState } from 'react';

// Everything the app saves in the browser (Settings itself is not wiped by "reset").
const DATA_KEYS = [
  'wardrobe',
  'plan',
  'savedOutfits',
  'savedAccessories',
  'savedHair',
  'savedMakeup',
  'profile',
];

function loadSettings() {
  try {
    return { reminders: true, ...JSON.parse(localStorage.getItem('settings') || '{}') };
  } catch {
    return { reminders: true };
  }
}

export default function Settings() {
  const [settings, setSettings] = useState(loadSettings);
  const [message, setMessage] = useState('');
  const [confirming, setConfirming] = useState(false);

  function toggleReminders() {
    const next = { ...settings, reminders: !settings.reminders };
    setSettings(next);
    try {
      localStorage.setItem('settings', JSON.stringify(next));
    } catch {
      /* storage unavailable, ignore */
    }
    setMessage('Saved ✓');
  }

  function exportData() {
    const data = {};
    DATA_KEYS.forEach((key) => {
      try {
        const raw = localStorage.getItem(key);
        if (raw) data[key] = JSON.parse(raw);
      } catch {
        /* skip anything unreadable */
      }
    });
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'stylemate-data.json';
    link.click();
    URL.revokeObjectURL(url);
    setMessage('Your data has been downloaded.');
  }

  function resetData() {
    DATA_KEYS.forEach((key) => {
      try {
        localStorage.removeItem(key);
      } catch {
        /* storage unavailable, ignore */
      }
    });
    setConfirming(false);
    setMessage('Your saved data has been cleared. Everything is back to the starting sample.');
  }

  return (
    <div>
      <p className="eyebrow">MANAGE THE DETAILS. KEEP THE CONFIDENCE.</p>
      <h1>Settings</h1>
      <p className="subtitle">Control reminders, your data and your privacy.</p>

      {message && <p className="settings-message">{message}</p>}

      <section className="settings-card">
        <h2>Account settings</h2>

        <div className="settings-row">
          <div>
            <p>Password &amp; security</p>
            <small>Sign-in and password options arrive when accounts are connected.</small>
          </div>
          <span className="soon-badge">Coming soon</span>
        </div>

        <div className="settings-row">
          <div>
            <p>Email styling reminders</p>
            <small>A gentle nudge to plan your week.</small>
          </div>
          <button
            type="button"
            className={settings.reminders ? 'switch on' : 'switch'}
            role="switch"
            aria-checked={settings.reminders}
            aria-label="Email styling reminders"
            onClick={toggleReminders}
          />
        </div>
      </section>

      <section className="settings-card">
        <h2>Privacy &amp; data</h2>
        <p className="settings-note">
          StyleMate never asks for or stores a face photo. Your wardrobe, plans and saved
          looks stay in this browser on this device.
        </p>

        <div className="settings-row">
          <div>
            <p>Export my data</p>
            <small>Download your wardrobe, planner and saved looks as a file.</small>
          </div>
          <button type="button" className="tab" onClick={exportData}>
            Download
          </button>
        </div>

        <div className="settings-row">
          <div>
            <p>Reset my saved data</p>
            <small>Clears your wardrobe, plans and saved looks from this browser.</small>
          </div>
          {confirming ? (
            <div className="settings-confirm">
              <button type="button" className="danger-btn" onClick={resetData}>
                Yes, clear it
              </button>
              <button type="button" className="tab" onClick={() => setConfirming(false)}>
                Cancel
              </button>
            </div>
          ) : (
            <button type="button" className="danger-btn" onClick={() => setConfirming(true)}>
              Reset
            </button>
          )}
        </div>
      </section>
    </div>
  );
}