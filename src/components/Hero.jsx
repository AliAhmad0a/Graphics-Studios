import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 35]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0.4]);

  return (
    <section id="home" className="hero-section">
      <motion.div 
        style={{ y: y1, opacity: opacityHero }}
        className="hero-content"
      >
        {/* Floating Animated Badge */}
        <motion.div
          className="hero-badge animate-floating"
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero-badge-dot"></span>
          <span>Graphics Studios Media Agency</span>
        </motion.div>
        
        {/* Dynamic Title with Spring Reveal */}
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          Building the future of <br />
          <span className="gradient-text">digital experiences.</span>
        </motion.h1>
        
        {/* Subtitle with Smooth Fade Up */}
        <motion.p 
          className="hero-p"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.65, ease: "easeOut" }}
        >
          A premium software house and media agency delivering high-end UI/UX, robust full-stack development, and AI-driven creative solutions.
        </motion.p>
        
        {/* Interactive CTA Buttons */}
        <motion.div 
          className="hero-btns"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.65, ease: "easeOut" }}
        >
          <motion.a 
            href="#services" 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Explore Services
          </motion.a>
          <motion.a 
            href="#portfolio" 
            className="btn btn-outline"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.15)' }}
            whileTap={{ scale: 0.96 }}
          >
            Our Portfolio
          </motion.a>
        </motion.div>
      </motion.div>

      <style>{`
        .hero-section {
          min-height: 85vh;
          min-height: 85dvh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: clamp(75px, 12vh, 100px) clamp(20px, 4%, 30px) clamp(35px, 6vh, 50px) clamp(20px, 4%, 30px);
          overflow: hidden !important;
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 auto;
          box-sizing: border-box;
          text-align: center;
          contain: paint;
        }

        .hero-content {
          z-index: 1;
          text-align: center;
          max-width: 900px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          min-width: 0;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto clamp(10px, 2vw, 15px) auto;
          padding: 6px 14px;
          background: var(--white-alpha-04);
          border: 1px solid var(--white-alpha-12);
          border-radius: 100px;
          font-size: clamp(0.72rem, 1.8vw, 0.84rem);
          color: var(--text-main);
          max-width: 95%;
          letter-spacing: 0.2px;
          box-sizing: border-box;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
        }

        .hero-badge-dot {
          width: 7px;
          height: 7px;
          background: var(--cyan);
          border-radius: 50%;
          display: inline-block;
          margin-right: 8px;
          box-shadow: 0 0 8px var(--cyan);
          flex-shrink: 0;
        }

        .hero-title {
          font-size: clamp(42px, 5.5vw, 68px);
          line-height: 1.15;
          margin: 0 auto clamp(12px, 2vw, 18px) auto;
          letter-spacing: -0.025em;
          font-weight: 700;
          width: 95%;
          max-width: 100%;
          text-align: center;
          box-sizing: border-box;
          white-space: normal;
          overflow-wrap: normal;
          word-break: keep-all;
        }

        .hero-p {
          font-size: clamp(16px, 2vw, 18px);
          color: var(--text-main);
          line-height: 1.5;
          max-width: min(95%, 600px);
          width: 100%;
          margin: 0 auto clamp(20px, 3.5vw, 36px) auto;
          padding: 0 20px;
          box-sizing: border-box;
          text-align: center;
        }

        .hero-btns {
          display: flex;
          gap: 16px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          width: 100%;
          max-width: 460px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 110px 24px 40px 24px;
            min-height: auto;
          }
          .hero-title {
            font-size: clamp(38px, 8vw, 52px);
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 120px 20px 40px 20px;
            min-height: auto;
          }
          .hero-content {
            width: 100%;
          }
          .hero-title {
            font-size: clamp(36px, 10vw, 46px);
            width: 100%;
          }
          .hero-p {
            font-size: 16px;
            padding: 0 10px;
            max-width: 100%;
          }
          .hero-btns {
            flex-direction: column;
            width: 100%;
            gap: 12px;
          }
          .hero-btns .btn {
            width: 100%;
            max-width: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
