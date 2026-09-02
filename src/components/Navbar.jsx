import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logo from '../assets/logo/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Courses', href: '#courses' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: scrolled ? '15px' : '25px',
        left: '5%',
        right: '5%',
        zIndex: 100,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        background: scrolled ? 'var(--glass)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        border: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,0.5)' : 'none',
        borderRadius: '100px',
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <div 
        style={{ display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }} 
        onClick={(e) => scrollToSection(e, '#home')}
        className="logo-container"
      >
        <div style={{ position: 'relative' }}>
          <img src={logo} alt="Logo" style={{ height: '45px', borderRadius: '50%', position: 'relative', zIndex: 2 }} />
          <div className="logo-glow"></div>
        </div>
        <span style={{ fontSize: '1.3rem', fontWeight: '800', color: 'white', letterSpacing: '-0.5px' }} className="hide-mobile">
          Graphics Studios
        </span>
      </div>

      <div style={{ display: 'flex', gap: '35px', alignItems: 'center' }} className="desktop-nav">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className="nav-link"
          >
            {link.name}
            <div className="nav-underline"></div>
          </a>
        ))}
      </div>

      <div className="mobile-toggle" style={{ display: 'none', cursor: 'pointer', color: 'white' }} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            style={{
              position: 'absolute', top: '120%', left: 0, right: 0,
              background: 'rgba(2, 6, 23, 0.95)', backdropFilter: 'blur(20px)',
              padding: '20px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex', flexDirection: 'column', gap: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                style={{ color: 'white', fontSize: '1.2rem', fontWeight: '600', padding: '10px 20px', borderRadius: '12px', transition: 'background 0.3s' }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
                onMouseLeave={(e) => e.target.style.background = 'transparent'}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .logo-glow {
          position: absolute; top: 50%; left: 50%; width: 100%; height: 100%;
          transform: translate(-50%, -50%); background: #3b82f6; filter: blur(15px);
          opacity: 0; transition: opacity 0.3s; z-index: 1; border-radius: 50%;
        }
        .logo-container:hover .logo-glow { opacity: 0.8; }
        .nav-link {
          color: #cbd5e1; font-weight: 500; font-size: 0.95rem; position: relative; padding: 5px 0; transition: color 0.3s;
        }
        .nav-link:hover { color: white; }
        .nav-underline {
          position: absolute; bottom: 0; left: 0; width: 100%; height: 2px;
          background: #3b82f6; transform: scaleX(0); transform-origin: right; transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-link:hover .nav-underline { transform: scaleX(1); transform-origin: left; }
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
