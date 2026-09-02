import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: '0 5%',
      overflow: 'hidden'
    }}>
      <motion.div style={{ y: y1, zIndex: 1, textAlign: 'center', maxWidth: '800px', marginTop: '60px' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '24px', padding: '6px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--text-main)' }}
        >
          <span style={{ width: '8px', height: '8px', background: 'var(--cyan)', borderRadius: '50%', display: 'inline-block', marginRight: '8px', boxShadow: '0 0 10px var(--cyan)' }}></span>
          Graphics Studios Media Agency
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: '4.2rem', lineHeight: '1.05', marginBottom: '24px', letterSpacing: '-0.03em', fontWeight: '600' }}>
          Building the future of <br />
          <span className="gradient-text">digital experiences.</span>
        </motion.h1>
        
        <motion.p 
          className="hero-p"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
          style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '50px', lineHeight: '1.6', maxWidth: '650px', margin: '0 auto 50px auto' }}>
          A premium software house and media agency delivering high-end UI/UX, robust full-stack development, and AI-driven creative solutions.
        </motion.p>
        
        <motion.div 
          className="hero-btns"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <a href="#services" className="btn btn-primary">Explore Services</a>
          <a href="#portfolio" className="btn btn-outline" style={{ background: 'transparent' }}>Our Portfolio</a>
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          h1 { font-size: 3rem !important; }
        }
        @media (max-width: 768px) {
          #home { padding: 0 16px !important; }
          h1 { font-size: 2.4rem !important; line-height: 1.15 !important; }
          .hero-p { font-size: 0.98rem !important; }
        }
        @media (max-width: 480px) {
          h1 { font-size: 2rem !important; }
          .hero-btns { flex-direction: column !important; width: 100% !important; padding: 0 !important; }
          .hero-btns .btn { width: 100% !important; justify-content: center !important; }
          .hero-badge { font-size: 0.78rem !important; padding: 5px 12px !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
