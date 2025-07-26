import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GlassmorphismShowcase from './pages/GlassmorphismShowcase';
import TextGlowShowcase from './pages/TextGlowShowcase';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/glassmorphism" element={<GlassmorphismShowcase />} />
        <Route path="/text-glow" element={<TextGlowShowcase />} />
      </Routes>
    </Router>
  );
}

export default App