import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <section className="section mission-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Light Beams and Particles Background - Strictly Contained with clip-path */}
      <div className="mission-bg-wrapper">
         <div className="light-beam beam-1"></div>
         <div className="light-beam beam-2"></div>
         <div className="particles-overlay"></div>
      </div>
      
      <div className="mission-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ borderColor: 'rgba(255, 182, 193, 0.45)', boxShadow: '0 24px 50px rgba(0, 0, 0, 0.55), 0 0 25px rgba(255, 182, 193, 0.2)' }}
          className="glass-card mission-card"
        >
          <motion.h2 
            initial={{ y: 16, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mission-title"
          >
            Our <span className="gradient-text">Mission</span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: '64px' }} 
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mission-divider"
          ></motion.div>
          
          <motion.p 
            initial={{ y: 16, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.42, duration: 0.6 }}
            className="mission-quote"
          >
            "To help businesses and individuals grow through creative design, modern digital solutions, strategic marketing, and innovative AI technology."
          </motion.p>
        </motion.div>
      </div>

      <style>{`
        .mission-section {
          min-height: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: clamp(45px, 8vh, 70px) clamp(10px, 4%, 30px);
          width: 100% !important;
          max-width: 100% !important;
          overflow: hidden !important;
          contain: paint;
          box-sizing: border-box;
        }

        .mission-bg-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden !important;
          pointer-events: none;
          contain: strict;
          clip-path: inset(0);
          -webkit-clip-path: inset(0);
        }

        .mission-container {
          max-width: min(100%, 780px);
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }

        .mission-card {
          border-radius: clamp(14px, 3vw, 20px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.45), inset 0 0 0 1px var(--white-alpha-08);
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: clamp(20px, 3.8vw, 40px);
          box-sizing: border-box;
          width: 100%;
          overflow: hidden !important;
          transition: all 0.35s ease;
        }

        .mission-title {
          font-size: clamp(1.45rem, 3.5vw, 2.2rem);
          margin-bottom: clamp(10px, 1.8vw, 15px);
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 1.2;
          overflow-wrap: break-word;
        }

        .mission-divider {
          height: 3px;
          background: linear-gradient(90deg, #ffb6c1, #00d9ff);
          margin: 0 auto clamp(12px, 2.2vw, 22px) auto;
          border-radius: 3px;
          box-shadow: 0 0 14px rgba(0, 217, 255, 0.6);
        }

        .mission-quote {
          font-size: clamp(0.9rem, 1.8vw, 1.12rem);
          line-height: 1.65;
          color: var(--text-dark);
          font-style: italic;
          font-weight: 300;
          margin: 0;
          padding: 0 4px;
          overflow-wrap: break-word;
        }

        .light-beam {
          position: absolute;
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, rgba(255,182,193,0), rgba(255,182,193,0.35), rgba(255,182,193,0));
          transform: rotate(45deg);
          filter: blur(4px);
          animation: sweep 8s infinite linear;
        }

        .beam-1 {
          left: 0;
          top: 0;
        }

        .beam-2 {
          right: 0;
          top: 0;
          transform: rotate(-45deg);
        }

        @keyframes sweep {
          0% { transform: translateX(-20%) rotate(45deg); }
          100% { transform: translateX(120%) rotate(45deg); }
        }

        .particles-overlay {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 28px 28px;
          animation: moveBg 20s linear infinite;
          opacity: 0.2;
        }

        @keyframes moveBg {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }

        @media (max-width: 768px) {
          .mission-section {
            padding: 38px 12px;
          }
          .light-beam {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Mission;
