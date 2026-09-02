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

const AnimatedSoftwareBackground = lazy(() => import('./components/AnimatedSoftwareBackground'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      <Suspense fallback={null}>
        <AnimatedSoftwareBackground />
      </Suspense>
      <div className="app-container">
        <CustomCursor />
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
