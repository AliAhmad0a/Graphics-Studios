import React from 'react';
import { motion } from 'framer-motion';

const statsData = [
  { number: '150+', label: 'Projects Completed' },
  { number: '50+', label: 'Global Clients' },
  { number: '10+', label: 'Expert Team Members' }
];

const About = () => {
  return (
    <section id="about" className="section about-section" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Animated Blue Glass Waves Background - Strictly Contained with clip-path */}
      <div className="about-bg-wrapper">
        <motion.div 
          animate={{ y: ['-4%', '4%', '-4%'], scale: [1, 1.05, 1] }} 
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="about-blur-wave wave-top animate-breathe"
        />
        <motion.div 
          animate={{ y: ['4%', '-4%', '4%'], scale: [1, 0.95, 1] }} 
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="about-blur-wave wave-bottom animate-breathe"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="about-inner"
      >
        <h2 className="section-title">About <span className="gradient-text">Us</span></h2>
        
        <motion.div 
          className="vision-pro-glass about-card"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ borderColor: 'rgba(255, 182, 193, 0.4)' }}
        >
          <p className="about-text-lead">
            <strong style={{ color: 'var(--strong-text)', fontWeight: '600' }}>Graphics Studios Media Agency</strong> is a creative digital media agency providing professional Graphic Design, Branding, UI/UX Design, Mobile App Development, Web Development, Video Editing, Motion Graphics, Digital Marketing, AI Solutions, Automation, and 3D Design services.
          </p>
          <p className="about-text-sub">
            We merge cutting-edge AI technology with unparalleled creative vision. From branding that resonates to immersive mobile and web experiences, we build solutions that elevate your brand in the digital future.
          </p>
          
          <div className="about-stats-grid">
            {statsData.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 240, 245, 0.4)', boxShadow: '0 8px 24px rgba(255, 240, 245, 0.15)' }}
                className="about-stat"
              >
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      <style>{`
        .about-section {
          contain: paint;
          overflow: hidden !important;
          width: 100% !important;
          max-width: 100% !important;
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
          clip-path: inset(0);
          -webkit-clip-path: inset(0);
        }

        .about-blur-wave {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(40px);
          -webkit-filter: blur(40px);
        }

        .wave-top {
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
          width: min(85%, 480px);
          height: 160px;
          background: rgba(255, 182, 193, 0.08);
        }

        .wave-bottom {
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
          width: min(85%, 480px);
          height: 160px;
          background: rgba(255, 182, 193, 0.08);
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
          margin: clamp(14px, 3vw, 26px) auto 0 auto;
          border-radius: clamp(14px, 3vw, 20px);
          padding: clamp(16px, 3.5vw, 32px);
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
          transition: all 0.35s ease;
        }

        .about-text-lead {
          font-size: clamp(0.9rem, 1.8vw, 1.08rem);
          line-height: 1.6;
          color: var(--text-dark);
          font-weight: 300;
          margin: 0;
          overflow-wrap: break-word;
        }

        .about-text-sub {
          font-size: clamp(0.8rem, 1.5vw, 0.94rem);
          line-height: 1.55;
          color: var(--text-main);
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
          padding: clamp(10px, 2vw, 15px) clamp(6px, 1.5vw, 10px);
          background: var(--white-alpha-02);
          border-radius: clamp(10px, 2vw, 14px);
          border: 1px solid var(--white-alpha-05);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 0;
          box-sizing: border-box;
          cursor: default;
          transition: all 0.3s ease;
        }

        .stat-number {
          font-size: clamp(1.3rem, 3vw, 2rem);
          color: #ffb6c1;
          margin-bottom: 2px;
          font-family: var(--heading);
          line-height: 1.1;
          word-break: normal;
        }

        .stat-label {
          color: var(--text-main);
          font-size: clamp(0.7rem, 1.4vw, 0.85rem);
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