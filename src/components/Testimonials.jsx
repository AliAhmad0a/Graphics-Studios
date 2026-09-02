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
    <section id="testimonials" className="section" style={{ position: 'relative' }}>
      {/* Background glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '50%', background: 'rgba(59, 130, 246, 0.05)', filter: 'blur(100px)', zIndex: -1 }}></div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="section-title">Client <span className="gradient-text">Testimonials</span></div>
        <p className="section-subtitle">
          Don't just take our word for it. See what industry leaders are saying about our transformative solutions.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {testimonials.map((test, i) => (
          <motion.div
            key={i}
            className="glass-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            style={{ position: 'relative' }}
            className="glass-card testimonial-card"
          >
            {/* Quote Icon */}
            <div style={{ position: 'absolute', top: '20px', right: '30px', fontSize: '4rem', color: 'rgba(255, 255, 255, 0.05)', fontFamily: 'serif', lineHeight: 1 }}>"</div>
            
            <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '30px', position: 'relative', zIndex: 1 }}>
              {test.content}
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img src={test.avatar} alt={test.name} style={{ width: '50px', height: '50px', borderRadius: '50%', border: '2px solid var(--blue)' }} />
              <div>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '1.1rem', color: 'var(--text-h)' }}>{test.name}</h4>
                <span style={{ fontSize: '0.85rem', color: 'var(--cyan)' }}>{test.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .testimonial-card { padding: 36px 28px; }
        @media (max-width: 768px) {
          .testimonial-card { padding: 24px 18px !important; }
        }
        @media (max-width: 480px) {
          .testimonial-card { padding: 20px 14px !important; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
