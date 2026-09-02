import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Animated Blue Glass Waves Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, overflow: 'hidden', pointerEvents: 'none' }}>
        <motion.div 
          animate={{ x: ['-4%', '4%', '-4%'], y: ['-3%', '3%', '-3%'] }} 
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '10%', left: '0%', width: '100%', height: '280px', background: 'rgba(10, 66, 219, 0.1)', filter: 'blur(70px)', borderRadius: '50%', transform: 'rotate(-10deg)' }}
        />
        <motion.div 
          animate={{ x: ['4%', '-4%', '4%'], y: ['3%', '-3%', '3%'] }} 
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', bottom: '-5%', right: '0%', width: '100%', height: '300px', background: 'rgba(59, 130, 246, 0.1)', filter: 'blur(70px)', borderRadius: '50%', transform: 'rotate(10deg)' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}
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
            <motion.div whileHover={{ scale: 1.03 }} className="about-stat">
              <h3 className="stat-number">150+</h3>
              <p className="stat-label">Projects Completed</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="about-stat">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Global Clients</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="about-stat">
              <h3 className="stat-number">10+</h3>
              <p className="stat-label">Expert Team Members</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      <style>{`
        .about-card {
          display: flex;
          flex-direction: column;
          gap: clamp(16px, 3.5vw, 30px);
          text-align: center;
          max-width: 900px;
          margin: clamp(20px, 4vw, 40px) auto 0 auto;
          border-radius: clamp(18px, 4vw, 30px);
          padding: clamp(22px, 5vw, 52px);
          box-sizing: border-box;
        }

        .about-text-lead {
          font-size: clamp(1rem, 2.4vw, 1.25rem);
          line-height: 1.7;
          color: #e2e8f0;
          font-weight: 300;
          margin: 0;
        }

        .about-text-sub {
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          line-height: 1.65;
          color: #94a3b8;
          margin: 0;
        }

        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 140px), 1fr));
          gap: clamp(12px, 2.5vw, 16px);
          margin-top: clamp(12px, 2.5vw, 24px);
          width: 100%;
        }

        .about-stat {
          padding: clamp(14px, 3vw, 24px) clamp(10px, 2vw, 16px);
          background: rgba(255, 255, 255, 0.02);
          border-radius: clamp(12px, 2.5vw, 16px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .stat-number {
          font-size: clamp(1.8rem, 4.5vw, 2.8rem);
          color: #3b82f6;
          margin-bottom: 6px;
          font-family: var(--heading);
          line-height: 1.1;
        }

        .stat-label {
          color: #94a3b8;
          font-size: clamp(0.82rem, 2vw, 0.95rem);
          margin: 0;
          line-height: 1.4;
        }

        @media (max-width: 480px) {
          .about-stats-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .about-stat {
            padding: 14px 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;