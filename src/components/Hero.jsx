import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 40]);

  return (
    <section id="home" className="hero-section">
      <motion.div 
        style={{ y: y1 }}
        className="hero-content"
      >
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="hero-badge-dot"></span>
          <span>Graphics Studios Media Agency</span>
        </motion.div>
        
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Building the future of <br />
          <span className="gradient-text">digital experiences.</span>
        </motion.h1>
        
        <motion.p 
          className="hero-p"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          A premium software house and media agency delivering high-end UI/UX, robust full-stack development, and AI-driven creative solutions.
        </motion.p>
        
        <motion.div 
          className="hero-btns"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a href="#services" className="btn btn-primary">Explore Services</a>
          <a href="#portfolio" className="btn btn-outline">Our Portfolio</a>
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
          padding: clamp(75px, 12vh, 100px) clamp(10px, 4%, 30px) clamp(35px, 6vh, 50px) clamp(10px, 4%, 30px);
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
          max-width: min(100%, 780px);
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
          padding: 5px 13px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 100px;
          font-size: clamp(0.72rem, 1.8vw, 0.84rem);
          color: var(--text-main);
          max-width: 95%;
          letter-spacing: 0.2px;
          box-sizing: border-box;
        }

        .hero-badge-dot {
          width: 6.5px;
          height: 6.5px;
          background: var(--cyan);
          border-radius: 50%;
          display: inline-block;
          margin-right: 7px;
          box-shadow: 0 0 7px var(--cyan);
          flex-shrink: 0;
        }

        .hero-title {
          font-size: clamp(1.6rem, 5.2vw, 3.1rem);
          line-height: 1.15;
          margin: 0 auto clamp(10px, 2vw, 15px) auto;
          letter-spacing: -0.025em;
          font-weight: 700;
          width: 100%;
          max-width: 100%;
          word-break: break-word;
          overflow-wrap: break-word;
          text-align: center;
          box-sizing: border-box;
        }

        .hero-p {
          font-size: clamp(0.82rem, 2vw, 1.05rem);
          color: #94a3b8;
          line-height: 1.55;
          max-width: min(92%, 560px);
          width: 100%;
          margin: 0 auto clamp(18px, 3.2vw, 30px) auto;
          padding: 0 4px;
          box-sizing: border-box;
          text-align: center;
          overflow-wrap: break-word;
        }

        .hero-btns {
          display: flex;
          gap: 10px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          width: 100%;
          max-width: 420px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 68px 12px 28px 12px;
            min-height: 75vh;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 62px 10px 22px 10px;
            min-height: auto;
          }
          .hero-btns {
            flex-direction: column;
            width: 100%;
            gap: 8px;
          }
          .hero-btns .btn {
            width: 100%;
            max-width: 220px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
