import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Personalised Outfit Recommendations',
    text: 'The right look for your occasion, weather and personal style.',
  },
  {
    title: 'Digital Wardrobe',
    text: 'Your favourite pieces, beautifully organised in one place.',
  },
  {
    title: 'Weekly Outfit Planner',
    text: 'Plan your week. Make busy mornings feel effortless.',
  },
  {
    title: 'Discover Fashion Stores',
    text: "Find the missing piece from local boutiques you'll love.",
  },
];

const steps = [
  { title: 'Build your wardrobe', text: 'Add the pieces you already love.' },
  { title: 'Tell us the occasion', text: 'Choose your event and preferences.' },
  { title: 'Make the look yours', text: 'Save, plan and step out with confidence.' },
];

export default function Landing() {
  return (
    <div className="landing">
      <header className="landing-nav">
        <span className="logo">StyleMate</span>
        <Link className="btn-primary btn-link" to="/overview">Get started</Link>
      </header>

      <section className="landing-hero">
        <p className="eyebrow">YOUR PERSONAL STYLIST</p>
        <h1>
          Your Style.<br />
          Your Occasion.<br />
          Your Rules.
        </h1>
        <p className="subtitle">
          Never wonder what to wear again. StyleMate turns the clothes you already own
          into outfits for every occasion, and finds the missing piece.
        </p>
        <div className="hero-actions">
          <Link className="btn-primary btn-link" to="/style-me">Style me</Link>
          <Link className="tab btn-link" to="/wardrobe">Open my wardrobe</Link>
        </div>
      </section>

      <section className="landing-section">
        <h2>Already in your pocket.</h2>
        <div className="feature-grid">
          {features.map((f) => (
            <div className="feature" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-section">
        <p className="eyebrow">HOW IT WORKS</p>
        <h2>Good style. No guesswork.</h2>
        <div className="feature-grid">
          {steps.map((s, i) => (
            <div className="feature" key={s.title}>
              <span className="step-num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-cta">
        <h2>Ready to dress with confidence?</h2>
        <Link className="btn-primary btn-link" to="/overview">Get started</Link>
      </section>

      <footer className="landing-footer">Style smarter. Feel like you.</footer>
    </div>
  );
}