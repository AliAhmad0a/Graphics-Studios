import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Light Beams and Particles Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
         <div className="light-beam beam-1"></div>
         <div className="light-beam beam-2"></div>
         <div className="particles-overlay"></div>
      </div>
      
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="glass-card mission-card"
          style={{ borderRadius: '30px', boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'rgba(11, 17, 32, 0.6)' }}
        >
          <motion.h2 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
            style={{ fontSize: '3.5rem', marginBottom: '20px', fontWeight: '800', letterSpacing: '-1px' }}
          >
            Our <span className="gradient-text">Mission</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }} whileInView={{ width: '100px' }} transition={{ delay: 0.5, duration: 0.8 }}
            style={{ height: '4px', background: 'var(--accent)', margin: '0 auto 40px auto', borderRadius: '2px', boxShadow: '0 0 15px var(--accent)' }}
          ></motion.div>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }}
            style={{ fontSize: '1.4rem', lineHeight: '1.8', color: '#e2e8f0', fontStyle: 'italic', fontWeight: '300' }}
          >
            "To help businesses and individuals grow through creative design, modern digital solutions, strategic marketing, and innovative AI technology."
          </motion.p>
        </motion.div>
      </div>

      <style>{`
        .light-beam {
          position: absolute; width: 2px; height: 150%; background: linear-gradient(to bottom, rgba(59,130,246,0), rgba(59,130,246,0.5), rgba(59,130,246,0));
          transform: rotate(45deg); filter: blur(5px); animation: sweep 8s infinite linear;
        }
        .beam-1 { left: -50%; top: -50%; animation-delay: 0s; }
        .beam-2 { right: -50%; top: -50%; animation-delay: -4s; transform: rotate(-45deg); }
        @keyframes sweep { 0% { transform: translateX(-100vw) rotate(45deg); } 100% { transform: translateX(100vw) rotate(45deg); } }
        .particles-overlay {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background-image: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 30px 30px; animation: moveBg 20s linear infinite; opacity: 0.2;
        }
        @keyframes moveBg { 0% { background-position: 0 0; } 100% { background-position: 100px 100px; } }
        
        .mission-card { padding: 60px; }
        @media (max-width: 768px) {
          .mission-card { padding: 32px 20px !important; }
          .mission-card h2 { font-size: 2.2rem !important; }
          .mission-card p { font-size: 1.1rem !important; }
        }
        @media (max-width: 480px) {
          .mission-card { padding: 24px 14px !important; }
          .mission-card h2 { font-size: 1.8rem !important; }
          .mission-card p { font-size: 1rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Mission;
