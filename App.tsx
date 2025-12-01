
import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Events } from './pages/Events';
import { Council } from './pages/Council';
import { Teams } from './pages/Teams';
import { Legacy } from './pages/Legacy';
import { Resources } from './pages/Resources';
import { Gallery } from './pages/Gallery';
import { Alumni } from './pages/Alumni';
import { Contact } from './pages/Contact';
import { MouseTrail } from './components/MouseTrail';
import { LogoPreloader } from './components/LogoPreloader';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Fallback loader
const Loader = () => (
  <div className="min-h-screen flex items-center justify-center bg-dark">
    <div className="flex flex-col items-center gap-4">
       <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
       <p className="text-primary font-medium animate-pulse">Loading Gir House...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <LogoPreloader />
      <ScrollToTop />
      <MouseTrail />
      <div className="flex flex-col min-h-screen bg-dark text-white font-sans selection:bg-accent selection:text-black">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/council" element={<Council />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/legacy" element={<Legacy />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
