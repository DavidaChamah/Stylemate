import { useEffect, useState } from 'react'
import { hairLooks, makeupLooks, accessories, accessoryTypes } from '../data/beautyCards'

function useSaved(key) {
  const [saved, setSaved] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(key)) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(saved))
  }, [key, saved])

  const toggle = (id) =>
    setSaved((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  return [saved, toggle]
}

export function HairCards() {
  const [saved, toggle] = useSaved('savedHair')
  return (
    <div className="bs-grid">
      {hairLooks.map((look) => (
        <article className="bs-card" key={look.id}>
          <img className="bs-photo bs-photo-hair" src={look.image} alt={look.name} />
          <div className="bs-body">
            <h3>{look.name}</h3>
            <p className="bs-label">Why it may work</p>
            <p className="bs-text">{look.why}</p>
            <button
              className={saved.includes(look.id) ? 'bs-save is-saved' : 'bs-save'}
              onClick={() => toggle(look.id)}
            >
              {saved.includes(look.id) ? 'Saved ✓' : 'Save Favourite'}
            </button>
          </div>
        </article>
      ))}
    </div>
  )
}

export function MakeupCards() {
  const [saved, toggle] = useSaved('savedMakeup')
  return (
    <div className="bs-grid">
      {makeupLooks.map((look) => (
        <article className="bs-card" key={look.id}>
          <img className="bs-photo bs-photo-makeup" src={look.image} alt={look.name} />
          <div className="bs-body">
            <h3>{look.name}</h3>
            <div className="bs-swatches">
              {look.palette.map((hex) => (
                <span key={hex} className="bs-swatch" style={{ background: hex }} />
              ))}
            </div>
            <p className="bs-line"><span>Lip</span> · {look.lip}</p>
            <p className="bs-line"><span>Eyeshadow</span> · {look.eyeshadow}</p>
            <p className="bs-line"><span>Blush</span> · {look.blush}</p>
            <p className="bs-label">Foundation guidance</p>
            <p className="bs-text">{look.foundation}</p>
            <button
              className={saved.includes(look.id) ? 'bs-save is-saved' : 'bs-save'}
              onClick={() => toggle(look.id)}
            >
              {saved.includes(look.id) ? 'Saved ✓' : 'Save Makeup Look'}
            </button>
          </div>
        </article>
      ))}
    </div>
  )
}

export function JewelryGrid({ tip }) {
  const [filter, setFilter] = useState('All')
  const [saved, toggle] = useSaved('savedAccessories')
  const shown = filter === 'All' ? accessories : accessories.filter((a) => a.type === filter)

  return (
    <div>
      {tip && <p className="bs-tip">{tip}</p>}
      <div className="bs-chips">
        {accessoryTypes.map((type) => (
          <button
            key={type}
            className={filter === type ? 'bs-chip is-active' : 'bs-chip'}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="bs-grid bs-grid-4">
        {shown.map((item) => (
          <article className="bs-card" key={item.id}>
            <img className="bs-photo bs-photo-acc" src={item.image} alt={item.name} />
            <div className="bs-body">
              <h3>{item.name}</h3>
              <p className="bs-text">{item.note}</p>
              <button
                className={saved.includes(item.id) ? 'bs-save is-saved' : 'bs-save'}
                onClick={() => toggle(item.id)}
              >
                {saved.includes(item.id) ? 'Saved ✓' : 'Save'}
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}