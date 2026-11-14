import { NavLink } from 'react-router-dom';

const links = [
  { to: '/overview', label: 'Overview' },
  { to: '/style-me', label: 'Style Me' },
  { to: '/beauty-studio', label: 'Beauty Studio' },
  { to: '/wardrobe', label: 'My Wardrobe' },
  { to: '/planner', label: 'Weekly Planner' },
  { to: '/discover', label: 'Discover' },
  { to: '/saved', label: 'Saved Outfits' },
  { to: '/profile', label: 'My Profile' },
  { to: '/settings', label: 'Settings' },
];

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <h2 className="logo">StyleMate</h2>
      <p className="tagline">YOUR PERSONAL STYLIST</p>
      {links.map((l) => (
        <NavLink
          key={l.to}
          to={l.to}
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          {l.label}
        </NavLink>
      ))}
    </nav>
  );
}