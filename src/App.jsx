
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Landing from './pages/Landing';
import Overview from './pages/Overview';
import StyleMe from './pages/StyleMe';
import BeautyStudio from './pages/BeautyStudio';
import Wardrobe from './pages/Wardrobe';
import Planner from './pages/Planner';
import Discover from './pages/Discover';
import Saved from './pages/Saved';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<AppLayout />}>
          <Route path="/overview" element={<Overview />} />
          <Route path="/style-me" element={<StyleMe />} />
          <Route path="/beauty-studio" element={<BeautyStudio />} />
          <Route path="/wardrobe" element={<Wardrobe />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}