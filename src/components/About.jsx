import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section about-section" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Animated Blue Glass Waves Background - Strictly Contained */}
      <div className="about-bg-wrapper">
        <motion.div 
          animate={{ y: ['-4%', '4%', '-4%'] }} 
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="about-blur-wave wave-top"
        />
        <motion.div 
          animate={{ y: ['4%', '-4%', '4%'] }} 
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="about-blur-wave wave-bottom"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="about-inner"
      >
        <h2 className="section-title">About <span className="gradient-text">Us</span></h2>
        
        <div className="vision-pro-glass about-card">
          <p className="about-text-lead">
            <strong style={{ color: '#ffffff', fontWeight: '600' }}>Graphics Studios Media Agency</strong> is a creative digital media agency providing professional Graphic Design, Branding, UI/UX Design, Video Editing, Motion Graphics, Digital Marketing, AI Solutions, Automation, Web Development, and 3D Design services.
          </p>
          <p className="about-text-sub">
            We merge cutting-edge AI technology with unparalleled creative vision. From branding that resonates to immersive web experiences and data-driven marketing, we build solutions that elevate your brand in the digital future.
          </p>
          
          <div className="about-stats-grid">
            <motion.div whileHover={{ scale: 1.02 }} className="about-stat">
              <h3 className="stat-number">150+</h3>
              <p className="stat-label">Projects Completed</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="about-stat">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Global Clients</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} className="about-stat">
              <h3 className="stat-number">10+</h3>
              <p className="stat-label">Expert Team Members</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      <style>{`
        .about-section {
          contain: paint;
          overflow: hidden !important;
          width: 100%;
          max-width: 100vw;
          box-sizing: border-box;
        }

        .about-bg-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden !important;
          pointer-events: none;
          contain: strict;
        }

        .about-blur-wave {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(45px);
          -webkit-filter: blur(45px);
        }

        .wave-top {
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
          width: min(90%, 500px);
          height: 180px;
          background: rgba(10, 66, 219, 0.08);
        }

        .wave-bottom {
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
          width: min(90%, 500px);
          height: 180px;
          background: rgba(59, 130, 246, 0.08);
        }

        .about-inner {
          width: 100%;
          max-width: min(100%, 820px);
          margin: 0 auto;
          box-sizing: border-box;
          min-width: 0;
        }

        .about-card {
          display: flex;
          flex-direction: column;
          gap: clamp(14px, 2.5vw, 22px);
          text-align: center;
          max-width: 100%;
          margin: clamp(14px, 3vw, 28px) auto 0 auto;
          border-radius: clamp(14px, 3vw, 20px);
          padding: clamp(16px, 3.5vw, 34px);
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
        }

        .about-text-lead {
          font-size: clamp(0.92rem, 1.8vw, 1.1rem);
          line-height: 1.6;
          color: #e2e8f0;
          font-weight: 300;
          margin: 0;
          overflow-wrap: break-word;
        }

        .about-text-sub {
          font-size: clamp(0.82rem, 1.5vw, 0.96rem);
          line-height: 1.55;
          color: #94a3b8;
          margin: 0;
          overflow-wrap: break-word;
        }

        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(8px, 1.8vw, 14px);
          margin-top: clamp(8px, 1.6vw, 14px);
          width: 100%;
          box-sizing: border-box;
        }

        .about-stat {
          padding: clamp(10px, 2vw, 16px) clamp(6px, 1.5vw, 12px);
          background: rgba(255, 255, 255, 0.02);
          border-radius: clamp(10px, 2vw, 14px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 0;
          box-sizing: border-box;
        }

        .stat-number {
          font-size: clamp(1.35rem, 3.2vw, 2.1rem);
          color: #3b82f6;
          margin-bottom: 2px;
          font-family: var(--heading);
          line-height: 1.1;
          word-break: normal;
        }

        .stat-label {
          color: #94a3b8;
          font-size: clamp(0.72rem, 1.4vw, 0.88rem);
          margin: 0;
          line-height: 1.3;
          word-break: break-word;
        }

        @media (max-width: 540px) {
          .about-stats-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }
          .about-stat {
            padding: 10px 8px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;