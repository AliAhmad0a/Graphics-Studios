import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <section className="section mission-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Light Beams and Particles Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, overflow: 'hidden', pointerEvents: 'none' }}>
         <div className="light-beam beam-1"></div>
         <div className="light-beam beam-2"></div>
         <div className="particles-overlay"></div>
      </div>
      
      <div className="mission-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="glass-card mission-card"
        >
          <motion.h2 
            initial={{ y: 16, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.14 }}
            className="mission-title"
          >
            Our <span className="gradient-text">Mission</span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: '68px' }} 
            transition={{ delay: 0.28, duration: 0.65 }}
            className="mission-divider"
          ></motion.div>
          
          <motion.p 
            initial={{ y: 16, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.42 }}
            className="mission-quote"
          >
            "To help businesses and individuals grow through creative design, modern digital solutions, strategic marketing, and innovative AI technology."
          </motion.p>
        </motion.div>
      </div>

      <style>{`
        .mission-section {
          min-height: 55vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 65px 5%;
          width: 100%;
          max-width: 100%;
          overflow: hidden !important;
          contain: paint;
        }

        .mission-container {
          max-width: 880px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .mission-card {
          border-radius: clamp(18px, 3.5vw, 24px);
          box-shadow: 0 26px 52px rgba(0, 0, 0, 0.45), inset 0 0 0 1px rgba(255, 255, 255, 0.08);
          background: rgba(11, 17, 32, 0.6);
          padding: clamp(24px, 4.2vw, 48px);
          box-sizing: border-box;
          width: 100%;
          overflow: hidden !important;
        }

        .mission-title {
          font-size: clamp(1.75rem, 3.8vw, 2.75rem);
          margin-bottom: clamp(11px, 2.2vw, 17px);
          font-weight: 800;
          letter-spacing: -0.4px;
          line-height: 1.15;
        }

        .mission-divider {
          height: 3px;
          background: var(--accent);
          margin: 0 auto clamp(14px, 2.6vw, 26px) auto;
          border-radius: 3px;
          box-shadow: 0 0 13px var(--accent);
        }

        .mission-quote {
          font-size: clamp(1.08rem, 2.1vw, 1.32rem);
          line-height: 1.7;
          color: #e2e8f0;
          font-style: italic;
          font-weight: 300;
          margin: 0;
          padding: 0 6px;
        }

        .light-beam {
          position: absolute;
          width: 2.5px;
          height: 100%;
          background: linear-gradient(to bottom, rgba(59,130,246,0), rgba(59,130,246,0.35), rgba(59,130,246,0));
          transform: rotate(45deg);
          filter: blur(5px);
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
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 32px 32px;
          animation: moveBg 20s linear infinite;
          opacity: 0.2;
        }

        @keyframes moveBg {
          0% { background-position: 0 0; }
          100% { background-position: 110px 110px; }
        }

        @media (max-width: 768px) {
          .mission-section {
            min-height: auto;
            padding: 44px 16px;
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
