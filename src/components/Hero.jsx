import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section id="home" className="hero-section">
      <motion.div 
        style={{ y: y1 }}
        className="hero-content"
      >
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="hero-badge-dot"></span>
          Graphics Studios Media Agency
        </motion.div>
        
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Building the future of <br />
          <span className="gradient-text">digital experiences.</span>
        </motion.h1>
        
        <motion.p 
          className="hero-p"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          A premium software house and media agency delivering high-end UI/UX, robust full-stack development, and AI-driven creative solutions.
        </motion.p>
        
        <motion.div 
          className="hero-btns"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a href="#services" className="btn btn-primary">Explore Services</a>
          <a href="#portfolio" className="btn btn-outline">Our Portfolio</a>
        </motion.div>
      </motion.div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 100px 5% 60px 5%;
          overflow: hidden;
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
          text-align: center;
        }

        .hero-content {
          z-index: 1;
          text-align: center;
          max-width: 850px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto clamp(16px, 3vw, 24px) auto;
          padding: 6px 16px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          font-size: clamp(0.75rem, 2.2vw, 0.85rem);
          color: var(--text-main);
          max-width: 95%;
          letter-spacing: 0.2px;
        }

        .hero-badge-dot {
          width: 8px;
          height: 8px;
          background: var(--cyan);
          border-radius: 50%;
          display: inline-block;
          margin-right: 8px;
          box-shadow: 0 0 10px var(--cyan);
          flex-shrink: 0;
        }

        .hero-title {
          font-size: clamp(2.1rem, 6.5vw, 4.2rem);
          line-height: 1.08;
          margin: 0 auto clamp(16px, 3vw, 24px) auto;
          letter-spacing: -0.04em;
          font-weight: 700;
          width: 100%;
          word-break: break-word;
          text-align: center;
        }

        .hero-p {
          font-size: clamp(0.95rem, 2.5vw, 1.2rem);
          color: var(--text-main);
          line-height: 1.6;
          max-width: 650px;
          width: 100%;
          margin: 0 auto clamp(28px, 4vw, 50px) auto;
          padding: 0 10px;
          box-sizing: border-box;
          text-align: center;
        }

        .hero-btns {
          display: flex;
          gap: clamp(10px, 2.5vw, 16px);
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 90px 18px 40px 18px;
            min-height: 92vh;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 80px 14px 30px 14px;
            min-height: auto;
            padding-top: 90px;
            padding-bottom: 40px;
          }
          .hero-btns {
            flex-direction: column;
            width: 100%;
            gap: 12px;
          }
          .hero-btns .btn {
            width: 100%;
            max-width: 280px;
          }
        }

        @media (max-width: 360px) {
          .hero-section {
            padding-top: 75px;
          }
          .hero-title {
            font-size: 1.85rem;
          }
          .hero-p {
            font-size: 0.88rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
