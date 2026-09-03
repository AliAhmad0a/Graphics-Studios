import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../assets/hero_video.mp4';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <motion.video 
        src={heroVideo}
        autoPlay 
        loop 
        muted 
        playsInline
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hero-video-bg"
      />

      {/* Optional overlay to make navbar readable if needed, or just let video play */}
      <div className="hero-overlay"></div>

      <style>{`
        .hero-section {
          height: 100vh;
          height: 100dvh;
          width: 100%;
          position: relative;
          overflow: hidden !important;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--background-dark); /* fallback */
        }

        .hero-video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.4) 100%);
          z-index: 1;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default Hero;
