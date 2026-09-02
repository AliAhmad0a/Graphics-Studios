import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Courses from './components/Courses';
import Team from './components/Team';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Mission from './components/Mission';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';

const TechBackground = lazy(() => import('./components/TechBackground'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);

    const handleMouseMove = (e) => {
      document.querySelectorAll('.glass-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      <div className="app-container">
        <CustomCursor />
        <Suspense fallback={null}>
          <TechBackground />
        </Suspense>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <TechStack />
          <Portfolio />
          <Courses />
          <Testimonials />
          <Team />
          <Mission />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
