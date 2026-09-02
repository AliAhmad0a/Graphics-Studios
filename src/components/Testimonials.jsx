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
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50%', height: '40%', background: 'rgba(59, 130, 246, 0.04)', filter: 'blur(50px)' }}></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        style={{ width: '100%', maxWidth: '850px', margin: '0 auto', position: 'relative', zIndex: 1 }}
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
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
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
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 210px), 1fr));
          gap: clamp(10px, 1.6vw, 15px);
          max-width: 850px;
          margin: clamp(14px, 2.5vw, 24px) auto 0 auto;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .testimonial-card {
          padding: clamp(12px, 2vw, 18px) clamp(10px, 1.6vw, 15px);
          position: relative;
          display: flex;
          flex-direction: column;
          border-radius: clamp(10px, 1.6vw, 13px);
          box-sizing: border-box;
          height: 100%;
        }

        .quote-mark {
          position: absolute;
          top: clamp(6px, 1.2vw, 11px);
          right: clamp(10px, 1.6vw, 14px);
          font-size: clamp(1.4rem, 2.6vw, 2rem);
          color: rgba(255, 255, 255, 0.04);
          font-family: serif;
          line-height: 1;
          pointer-events: none;
        }

        .testimonial-content {
          font-size: clamp(0.66rem, 1.1vw, 0.74rem);
          line-height: 1.5;
          color: var(--text-main);
          margin-bottom: clamp(10px, 1.6vw, 15px);
          position: relative;
          z-index: 1;
          flex: 1;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
          z-index: 1;
        }

        .testimonial-avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1.5px solid var(--blue);
          flex-shrink: 0;
          object-fit: cover;
        }

        .testimonial-author-info {
          display: flex;
          flex-direction: column;
        }

        .testimonial-author-name {
          margin: 0 0 1px 0;
          font-size: clamp(0.72rem, 1.2vw, 0.78rem);
          color: var(--text-h);
          font-weight: 600;
        }

        .testimonial-author-role {
          font-size: 0.6rem;
          color: var(--cyan);
        }

        @media (max-width: 480px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
