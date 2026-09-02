import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Animated Blue Glass Waves Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, overflow: 'hidden', pointerEvents: 'none' }}>
        <motion.div 
          animate={{ y: ['-5%', '5%', '-5%'] }} 
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '10%', left: '5%', width: '90%', maxWidth: '550px', height: '180px', background: 'rgba(10, 66, 219, 0.07)', filter: 'blur(50px)', borderRadius: '50%' }}
        />
        <motion.div 
          animate={{ y: ['5%', '-5%', '5%'] }} 
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', bottom: '5%', right: '5%', width: '90%', maxWidth: '550px', height: '200px', background: 'rgba(59, 130, 246, 0.07)', filter: 'blur(50px)', borderRadius: '50%' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65 }}
        style={{ width: '100%', maxWidth: '730px', margin: '0 auto' }}
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
        .about-card {
          display: flex;
          flex-direction: column;
          gap: clamp(14px, 2.3vw, 20px);
          text-align: center;
          max-width: 730px;
          margin: clamp(14px, 2.8vw, 27px) auto 0 auto;
          border-radius: clamp(14px, 2.8vw, 20px);
          padding: clamp(16px, 3.2vw, 32px);
          box-sizing: border-box;
        }

        .about-text-lead {
          font-size: clamp(0.84rem, 1.5vw, 0.98rem);
          line-height: 1.6;
          color: #e2e8f0;
          font-weight: 300;
          margin: 0;
        }

        .about-text-sub {
          font-size: clamp(0.78rem, 1.3vw, 0.88rem);
          line-height: 1.55;
          color: #94a3b8;
          margin: 0;
        }

        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 110px), 1fr));
          gap: clamp(9px, 1.7vw, 13px);
          margin-top: clamp(7px, 1.6vw, 14px);
          width: 100%;
        }

        .about-stat {
          padding: clamp(9px, 1.7vw, 14px) clamp(7px, 1.4vw, 11px);
          background: rgba(255, 255, 255, 0.02);
          border-radius: clamp(9px, 1.7vw, 13px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .stat-number {
          font-size: clamp(1.32rem, 2.8vw, 1.9rem);
          color: #3b82f6;
          margin-bottom: 2px;
          font-family: var(--heading);
          line-height: 1.1;
        }

        .stat-label {
          color: #94a3b8;
          font-size: clamp(0.7rem, 1.3vw, 0.8rem);
          margin: 0;
          line-height: 1.35;
        }

        @media (max-width: 480px) {
          .about-stats-grid {
            grid-template-columns: 1fr;
            gap: 7px;
          }
          .about-stat {
            padding: 9px 9px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;