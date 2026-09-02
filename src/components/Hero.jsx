import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <section id="home" className="hero-section">
      <motion.div 
        style={{ y: y1 }}
        className="hero-content"
      >
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <span className="hero-badge-dot"></span>
          Graphics Studios Media Agency
        </motion.div>
        
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Building the future of <br />
          <span className="gradient-text">digital experiences.</span>
        </motion.h1>
        
        <motion.p 
          className="hero-p"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.65 }}
        >
          A premium software house and media agency delivering high-end UI/UX, robust full-stack development, and AI-driven creative solutions.
        </motion.p>
        
        <motion.div 
          className="hero-btns"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.65 }}
        >
          <a href="#services" className="btn btn-primary">Explore Services</a>
          <a href="#portfolio" className="btn btn-outline">Our Portfolio</a>
        </motion.div>
      </motion.div>

      <style>{`
        .hero-section {
          min-height: 90vh;
          min-height: 90dvh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 95px 5% 48px 5%;
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
          max-width: 860px;
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
          margin: 0 auto clamp(14px, 2.6vw, 20px) auto;
          padding: 6px 16px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 100px;
          font-size: clamp(0.85rem, 1.8vw, 0.95rem);
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
          box-shadow: 0 0 8px var(--cyan);
          flex-shrink: 0;
        }

        .hero-title {
          font-size: clamp(2.1rem, 5vw, 3.8rem);
          line-height: 1.1;
          margin: 0 auto clamp(14px, 2.6vw, 20px) auto;
          letter-spacing: -0.035em;
          font-weight: 700;
          width: 100%;
          word-break: break-word;
          text-align: center;
        }

        .hero-p {
          font-size: clamp(1.05rem, 2.1vw, 1.25rem);
          color: #94a3b8;
          line-height: 1.6;
          max-width: 660px;
          width: 100%;
          margin: 0 auto clamp(24px, 3.8vw, 40px) auto;
          padding: 0 10px;
          box-sizing: border-box;
          text-align: center;
        }

        .hero-btns {
          display: flex;
          gap: 12px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 85px 16px 38px 16px;
            min-height: 85vh;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 78px 14px 30px 14px;
            min-height: auto;
          }
          .hero-btns {
            flex-direction: column;
            width: 100%;
            gap: 10px;
          }
          .hero-btns .btn {
            width: 100%;
            max-width: 270px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
