import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logo from '../assets/logo/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
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
      const navHeight = 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className="navbar-fixed-wrapper">
        <motion.nav 
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`main-navbar ${scrolled ? 'nav-scrolled' : ''}`}
        >
          <div 
            className="logo-container"
            onClick={(e) => scrollToSection(e, '#home')}
          >
            <div className="logo-wrapper">
              <img src={logo} alt="Graphics Studios Logo" className="logo-img" />
              <div className="logo-glow"></div>
            </div>
            <span className="logo-text hide-mobile">
              Graphics Studios
            </span>
          </div>

          <div className="desktop-nav">
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

          <button 
            className="mobile-toggle"
            aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </motion.nav>
      </div>

      {/* Fullscreen Mobile Navigation Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="mobile-nav-header">
              <div className="logo-container" onClick={(e) => scrollToSection(e, '#home')}>
                <div className="logo-wrapper">
                  <img src={logo} alt="Graphics Studios Logo" className="logo-img-mobile" />
                </div>
                <span className="logo-text">Graphics Studios</span>
              </div>
              <button 
                className="mobile-close-btn"
                aria-label="Close Navigation"
                onClick={() => setIsOpen(false)}
              >
                <HiX size={24} />
              </button>
            </div>

            <div className="mobile-nav-links">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="mobile-nav-link"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * idx, duration: 0.25 }}
                >
                  <span className="mobile-nav-index">0{idx + 1}</span>
                  <span className="mobile-nav-title">{link.name}</span>
                </motion.a>
              ))}
            </div>

            <div className="mobile-nav-footer">
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')}
                className="btn btn-primary"
                style={{ width: '100%', padding: '10px' }}
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar-fixed-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
          pointer-events: none;
          padding: 16px 0 0 0;
          box-sizing: border-box;
        }

        .main-navbar {
          width: min(90%, 1080px);
          margin: 0 auto;
          pointer-events: auto;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          background: transparent;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          border: 1px solid transparent;
          border-radius: 100px;
          padding: 10px 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-sizing: border-box;
        }

        .main-navbar.nav-scrolled {
          background: rgba(10, 15, 28, 0.8);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-color: rgba(255, 255, 255, 0.09);
          box-shadow: 0 8px 30px -5px rgba(0, 0, 0, 0.55);
          padding: 8px 20px;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          user-select: none;
        }

        .logo-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-img {
          height: 36px;
          width: 36px;
          border-radius: 50%;
          position: relative;
          z-index: 2;
          object-fit: cover;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .logo-img-mobile {
          height: 34px;
          width: 34px;
          border-radius: 50%;
          object-fit: cover;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .logo-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
          background: var(--blue);
          filter: blur(10px);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
          border-radius: 50%;
        }

        .logo-container:hover .logo-glow {
          opacity: 0.8;
        }

        .logo-text {
          font-family: var(--heading);
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.3px;
        }

        .desktop-nav {
          display: flex;
          gap: 26px;
          align-items: center;
        }

        .nav-link {
          color: #cbd5e1;
          font-weight: 500;
          font-size: 0.86rem;
          position: relative;
          padding: 4px 0;
          transition: color 0.25s ease;
        }

        .nav-link:hover {
          color: #ffffff;
        }

        .nav-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--blue);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-link:hover .nav-underline {
          transform: scaleX(1);
          transform-origin: left;
        }

        .mobile-toggle {
          display: none;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          border-radius: 10px;
          padding: 7px;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .mobile-toggle:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        /* Mobile Menu Fullscreen Sheet */
        .mobile-nav-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          height: 100dvh;
          background: rgba(2, 6, 23, 0.97);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          z-index: 10000;
          display: flex;
          flex-direction: column;
          padding: 18px 18px 26px 18px;
          box-sizing: border-box;
          overflow-y: auto;
          pointer-events: auto;
        }

        .mobile-nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 20px;
        }

        .mobile-close-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #ffffff;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .mobile-close-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid transparent;
          color: #ffffff;
          transition: all 0.2s ease;
        }

        .mobile-nav-link:hover, .mobile-nav-link:active {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
          color: #38bdf8;
        }

        .mobile-nav-index {
          font-family: var(--heading);
          font-size: 0.75rem;
          color: var(--cyan);
          font-weight: 700;
        }

        .mobile-nav-title {
          font-size: 1.05rem;
          font-weight: 600;
        }

        .mobile-nav-footer {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* Responsive Breakpoints */
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
          .navbar-fixed-wrapper {
            padding-top: 10px;
          }
          .main-navbar {
            width: min(94%, 1080px);
            padding: 8px 16px;
          }
        }

        @media (max-width: 600px) {
          .hide-mobile {
            display: none !important;
          }
          .navbar-fixed-wrapper {
            padding-top: 8px;
          }
          .main-navbar {
            width: min(94%, 1080px);
            padding: 6px 12px;
          }
          .logo-img {
            height: 32px;
            width: 32px;
          }
        }

        @media (max-width: 360px) {
          .main-navbar {
            width: 96%;
            padding: 5px 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
