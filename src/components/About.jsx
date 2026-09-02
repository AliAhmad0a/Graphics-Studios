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
          style={{ position: 'absolute', top: '10%', left: '5%', width: '90%', maxWidth: '600px', height: '200px', background: 'rgba(10, 66, 219, 0.07)', filter: 'blur(50px)', borderRadius: '50%' }}
        />
        <motion.div 
          animate={{ y: ['5%', '-5%', '5%'] }} 
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', bottom: '5%', right: '5%', width: '90%', maxWidth: '600px', height: '220px', background: 'rgba(59, 130, 246, 0.07)', filter: 'blur(50px)', borderRadius: '50%' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        style={{ width: '100%', maxWidth: '820px', margin: '0 auto' }}
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
          gap: clamp(14px, 2.5vw, 22px);
          text-align: center;
          max-width: 800px;
          margin: clamp(16px, 3vw, 30px) auto 0 auto;
          border-radius: clamp(16px, 3vw, 24px);
          padding: clamp(18px, 3.5vw, 36px);
          box-sizing: border-box;
        }

        .about-text-lead {
          font-size: clamp(0.88rem, 1.6vw, 1.05rem);
          line-height: 1.6;
          color: #e2e8f0;
          font-weight: 300;
          margin: 0;
        }

        .about-text-sub {
          font-size: clamp(0.82rem, 1.4vw, 0.92rem);
          line-height: 1.55;
          color: #94a3b8;
          margin: 0;
        }

        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 120px), 1fr));
          gap: clamp(10px, 2vw, 14px);
          margin-top: clamp(8px, 1.8vw, 16px);
          width: 100%;
        }

        .about-stat {
          padding: clamp(10px, 2vw, 16px) clamp(8px, 1.5vw, 12px);
          background: rgba(255, 255, 255, 0.02);
          border-radius: clamp(10px, 2vw, 14px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .stat-number {
          font-size: clamp(1.4rem, 3vw, 2.1rem);
          color: #3b82f6;
          margin-bottom: 3px;
          font-family: var(--heading);
          line-height: 1.1;
        }

        .stat-label {
          color: #94a3b8;
          font-size: clamp(0.75rem, 1.5vw, 0.84rem);
          margin: 0;
          line-height: 1.35;
        }

        @media (max-width: 480px) {
          .about-stats-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }
          .about-stat {
            padding: 10px 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;