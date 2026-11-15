import { useState } from 'react';
import { events, options } from '../data/style';
import {
  faceShapes,
  hairstyles,
  makeup,
  jewelry,
  fragrances,
  pickFragrance,
} from '../data/beauty';
import { HairCards, MakeupCards, JewelryGrid } from '../components/BeautyCards';

const TABS = ['Hairstyles', 'Makeup', 'Jewelry & accessories', 'Fragrance'];

export default function BeautyStudio() {
  const [tab, setTab] = useState('Hairstyles');
  const [event, setEvent] = useState('Interview');
  const [shape, setShape] = useState('Oval');
  const [time, setTime] = useState('Morning');
  const [weather, setWeather] = useState('Sunny');

  const fragrance = pickFragrance({ time, weather, event });

  return (
    <div>
      <p className="eyebrow">BEAUTY STUDIO</p>
      <h1>Complete your look.</h1>
      <p className="subtitle">
        Hairstyles, makeup, jewelry and a signature scent to go with your outfit.
      </p>

      <div className="filters">
        <label className="filter">
          Event
          <select value={event} onChange={(e) => setEvent(e.target.value)}>
            {events.map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </label>
        <label className="filter">
          Face shape
          <select value={shape} onChange={(e) => setShape(e.target.value)}>
            {faceShapes.map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </label>
        <label className="filter">
          Time of day
          <select value={time} onChange={(e) => setTime(e.target.value)}>
            {options.Time.map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </label>
        <label className="filter">
          Weather
          <select value={weather} onChange={(e) => setWeather(e.target.value)}>
            {options.Weather.map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="tabs">
        {TABS.map((t) => (
          <button
            key={t}
            className={tab === t ? 'tab active' : 'tab'}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 'Hairstyles' && (
        <div>
          <HairCards />
          <h2 className="bs-subhead">More ideas for a {shape.toLowerCase()} face</h2>
          <div className="idea-grid">
            {hairstyles[shape].map((h) => (
              <div className="idea" key={h.name}>
                <h3>{h.name}</h3>
                <p>{h.note}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'Makeup' && (
        <div>
          <p className="bs-tip">
            <strong>Makeup for {event.toLowerCase()}:</strong> {makeup[event]}
          </p>
          <MakeupCards />
        </div>
      )}

      {tab === 'Jewelry & accessories' && (
        <JewelryGrid
          tip={`Finishing touches for ${event.toLowerCase()}: ${jewelry[event]}`}
        />
      )}

      {tab === 'Fragrance' && (
        <div className="idea-grid">
          <div className="idea featured">
            <h3>{fragrance}</h3>
            <p>{fragrances[fragrance]}</p>
          </div>
          {Object.keys(fragrances)
            .filter((f) => f !== fragrance)
            .map((f) => (
              <div className="idea" key={f}>
                <h3>{f}</h3>
                <p>{fragrances[f]}</p>
              </div>
            ))}
        </div>
      )}

      <div className="privacy-note">
        <h3>Beauty, on your terms.</h3>
        <p>
          A face photo is always optional. This version works from the face shape you
          choose, and it never asks for or stores a photo. Everything here is a
          suggestion, not a guarantee, so trust what feels like you.
        </p>
      </div>
    </div>
  );
}