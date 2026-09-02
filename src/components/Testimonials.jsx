import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, TechNova Solutions',
    content: 'The level of innovation and technical expertise is unmatched. They transformed our outdated platform into a next-generation experience.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'David Chen',
    role: 'Founder, MetaVerse Dynamics',
    content: 'Their AR/VR and motion graphics capabilities completely blew our minds. We saw a 300% increase in user engagement after the redesign.',
    avatar: 'https://i.pravatar.cc/150?u=david'
  },
  {
    name: 'Elena Rodriguez',
    role: 'CMO, Quantum AI',
    content: 'A truly futuristic agency. From the sleek digital designs to the AI-driven marketing strategies, they are lightyears ahead of the competition.',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Contained Background glow */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: -1 }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60%', height: '50%', background: 'rgba(59, 130, 246, 0.05)', filter: 'blur(70px)' }}></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        <div className="section-title">Client <span className="gradient-text">Testimonials</span></div>
        <p className="section-subtitle">
          Don't just take our word for it. See what industry leaders are saying about our transformative solutions.
        </p>
      </motion.div>

      <div className="testimonials-grid">
        {testimonials.map((test, i) => (
          <motion.div
            key={i}
            className="glass-card testimonial-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
          >
            {/* Quote Icon */}
            <div className="quote-mark">"</div>
            
            <p className="testimonial-content">
              {test.content}
            </p>
            
            <div className="testimonial-author">
              <img src={test.avatar} alt={test.name} className="testimonial-avatar" />
              <div className="testimonial-author-info">
                <h4 className="testimonial-author-name">{test.name}</h4>
                <span className="testimonial-author-role">{test.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
          gap: clamp(16px, 3vw, 24px);
          max-width: 1200px;
          margin: clamp(24px, 4vw, 40px) auto 0 auto;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .testimonial-card {
          padding: clamp(22px, 4vw, 36px) clamp(18px, 3.5vw, 28px);
          position: relative;
          display: flex;
          flex-direction: column;
          border-radius: clamp(16px, 3vw, 22px);
          box-sizing: border-box;
          height: 100%;
        }

        .quote-mark {
          position: absolute;
          top: clamp(12px, 2.5vw, 20px);
          right: clamp(16px, 3vw, 28px);
          font-size: clamp(2.5rem, 6vw, 4rem);
          color: rgba(255, 255, 255, 0.05);
          font-family: serif;
          line-height: 1;
          pointer-events: none;
        }

        .testimonial-content {
          font-size: clamp(0.88rem, 2vw, 1rem);
          line-height: 1.65;
          color: var(--text-main);
          margin-bottom: clamp(18px, 3vw, 30px);
          position: relative;
          z-index: 1;
          flex: 1;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: clamp(10px, 2.5vw, 15px);
          position: relative;
          z-index: 1;
        }

        .testimonial-avatar {
          width: clamp(42px, 8vw, 50px);
          height: clamp(42px, 8vw, 50px);
          border-radius: 50%;
          border: 2px solid var(--blue);
          flex-shrink: 0;
          object-fit: cover;
        }

        .testimonial-author-info {
          display: flex;
          flex-direction: column;
        }

        .testimonial-author-name {
          margin: 0 0 2px 0;
          font-size: clamp(0.95rem, 2.2vw, 1.1rem);
          color: var(--text-h);
          font-weight: 600;
        }

        .testimonial-author-role {
          font-size: clamp(0.75rem, 1.8vw, 0.85rem);
          color: var(--cyan);
        }

        @media (max-width: 480px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
