import React from 'react';
import { motion } from 'framer-motion';
import imgAiman from '../assets/aiman.jpg';
import imgMalaika from '../assets/malaika.jpg';
import imgElena from '../assets/elena.jpg';

const testimonials = [
  {
    name: 'Aiman Nadeem',
    role: 'CEO, TechNova Solutions',
    content: 'The level of innovation and technical expertise is unmatched. They transformed our outdated platform into a next-generation experience.',
    avatar: imgAiman
  },
  {
    name: 'Malaika Khan',
    role: 'Founder, MetaVerse Dynamics',
    content: 'Their AR/VR and motion graphics capabilities completely blew our minds. We saw a 300% increase in user engagement after the redesign.',
    avatar: imgMalaika
  },
  {
    name: 'Elena Rodriguez',
    role: 'CMO, Quantum AI',
    content: 'A truly futuristic agency. From the sleek digital designs to the AI-driven marketing strategies, they are lightyears ahead of the competition.',
    avatar: imgElena
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Contained Background glow with clip-path */}
      <div className="testimonials-bg-glow">
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 'min(45%, 280px)', height: 'min(45%, 230px)', background: 'rgba(59, 130, 246, 0.04)', filter: 'blur(45px)' }}></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 25 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 1, boxSizing: 'border-box' }}
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
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, borderColor: 'rgba(59, 130, 246, 0.45)', boxShadow: '0 16px 36px rgba(59, 130, 246, 0.2)' }}
          >
            {/* Quote Icon */}
            <div className="quote-mark">"</div>
            
            <p className="testimonial-content">
              {test.content}
            </p>
            
            <div className="testimonial-author">
              <motion.img 
                src={test.avatar} 
                alt={test.name} 
                className="testimonial-avatar"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <div className="testimonial-author-info">
                <h4 className="testimonial-author-name">{test.name}</h4>
                <span className="testimonial-author-role">{test.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .testimonials-bg-glow {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden !important;
          pointer-events: none;
          z-index: -1;
          contain: strict;
          clip-path: inset(0);
          -webkit-clip-path: inset(0);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
          gap: clamp(14px, 2.2vw, 20px);
          max-width: 1140px;
          margin: clamp(16px, 3vw, 30px) auto 0 auto;
          width: 100%;
          position: relative;
          z-index: 1;
          box-sizing: border-box;
        }

        .testimonial-card {
          padding: clamp(15px, 2.5vw, 22px) clamp(14px, 2vw, 18px);
          position: relative;
          display: flex;
          flex-direction: column;
          border-radius: clamp(12px, 2vw, 16px);
          box-sizing: border-box;
          height: 100%;
          width: 100%;
          min-width: 0;
          overflow: hidden !important;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .quote-mark {
          position: absolute;
          top: clamp(8px, 1.5vw, 14px);
          right: clamp(12px, 2vw, 18px);
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--blue);
          opacity: 0.15;
          font-family: serif;
          line-height: 1;
          pointer-events: none;
          transition: color 0.3s ease, opacity 0.3s ease;
        }

        .testimonial-card:hover .quote-mark {
          color: var(--cyan);
          opacity: 0.3;
        }

        .testimonial-content {
          font-size: clamp(0.82rem, 1.5vw, 0.95rem);
          line-height: 1.55;
          color: var(--text-main);
          margin-bottom: clamp(14px, 2vw, 18px);
          position: relative;
          z-index: 1;
          flex: 1;
          overflow-wrap: break-word;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 10px;
          position: relative;
          z-index: 1;
          min-width: 0;
        }

        .testimonial-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid var(--blue);
          flex-shrink: 0;
          object-fit: cover;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
        }

        .testimonial-author-info {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .testimonial-author-name {
          margin: 0 0 2px 0;
          font-size: clamp(0.88rem, 1.6vw, 1rem);
          color: var(--text-h);
          font-weight: 600;
          overflow-wrap: break-word;
        }

        .testimonial-author-role {
          font-size: 0.74rem;
          color: var(--cyan);
        }

        @media (max-width: 600px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
