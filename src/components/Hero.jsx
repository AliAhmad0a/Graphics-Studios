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
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="hero-badge-dot"></span>
          Graphics Studios Media Agency
        </motion.div>
        
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Building the future of <br />
          <span className="gradient-text">digital experiences.</span>
        </motion.h1>
        
        <motion.p 
          className="hero-p"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          A premium software house and media agency delivering high-end UI/UX, robust full-stack development, and AI-driven creative solutions.
        </motion.p>
        
        <motion.div 
          className="hero-btns"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
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
          padding: 85px 5% 45px 5%;
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
          max-width: 760px;
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
          margin: 0 auto clamp(12px, 2.5vw, 18px) auto;
          padding: 5px 14px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 100px;
          font-size: clamp(0.72rem, 1.8vw, 0.8rem);
          color: var(--text-main);
          max-width: 95%;
          letter-spacing: 0.2px;
        }

        .hero-badge-dot {
          width: 7px;
          height: 7px;
          background: var(--cyan);
          border-radius: 50%;
          display: inline-block;
          margin-right: 7px;
          box-shadow: 0 0 8px var(--cyan);
          flex-shrink: 0;
        }

        .hero-title {
          font-size: clamp(1.75rem, 4.2vw, 3.2rem);
          line-height: 1.1;
          margin: 0 auto clamp(12px, 2.5vw, 18px) auto;
          letter-spacing: -0.035em;
          font-weight: 700;
          width: 100%;
          word-break: break-word;
          text-align: center;
        }

        .hero-p {
          font-size: clamp(0.85rem, 1.8vw, 1.05rem);
          color: #94a3b8;
          line-height: 1.55;
          max-width: 580px;
          width: 100%;
          margin: 0 auto clamp(22px, 3.5vw, 36px) auto;
          padding: 0 10px;
          box-sizing: border-box;
          text-align: center;
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
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 75px 16px 35px 16px;
            min-height: 85vh;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 70px 12px 25px 12px;
            min-height: auto;
          }
          .hero-btns {
            flex-direction: column;
            width: 100%;
            gap: 9px;
          }
          .hero-btns .btn {
            width: 100%;
            max-width: 240px;
          }
        }

        @media (max-width: 360px) {
          .hero-section {
            padding-top: 65px;
          }
          .hero-title {
            font-size: 1.55rem;
          }
          .hero-p {
            font-size: 0.82rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
