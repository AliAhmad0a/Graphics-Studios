import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Animated Blue Glass Waves Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <motion.div 
          animate={{ x: ['-20%', '0%', '-20%'], y: ['-10%', '10%', '-10%'] }} 
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '10%', left: '-10%', width: '120%', height: '300px', background: 'rgba(10, 66, 219, 0.1)', filter: 'blur(80px)', borderRadius: '50%', transform: 'rotate(-15deg)' }}
        />
        <motion.div 
          animate={{ x: ['0%', '-20%', '0%'], y: ['10%', '-10%', '10%'] }} 
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '100%', height: '400px', background: 'rgba(59, 130, 246, 0.1)', filter: 'blur(90px)', borderRadius: '50%', transform: 'rotate(10deg)' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">About <span className="gradient-text">Us</span></h2>
        
        <div className="vision-pro-glass" style={{ padding: '60px', display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'center', maxWidth: '900px', margin: '40px auto 0 auto', borderRadius: '30px' }}>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#e2e8f0', fontWeight: '300' }}>
            <strong style={{ color: 'white', fontWeight: '600' }}>Graphics Studios Media Agency</strong> is a creative digital media agency providing professional Graphic Design, Branding, UI/UX Design, Video Editing, Motion Graphics, Digital Marketing, AI Solutions, Automation, Web Development, and 3D Design services.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#94a3b8' }}>
            We merge cutting-edge AI technology with unparalleled creative vision. From branding that resonates to immersive web experiences and data-driven marketing, we build solutions that elevate your brand in the digital future.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginTop: '30px' }}>
            <motion.div whileHover={{ scale: 1.05 }} style={{ padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ fontSize: '3rem', color: '#3b82f6', marginBottom: '10px', fontFamily: 'Space Grotesk' }}>150+</h3>
              <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Projects Completed</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} style={{ padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ fontSize: '3rem', color: '#3b82f6', marginBottom: '10px', fontFamily: 'Space Grotesk' }}>50+</h3>
              <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Global Clients</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} style={{ padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ fontSize: '3rem', color: '#3b82f6', marginBottom: '10px', fontFamily: 'Space Grotesk' }}>10+</h3>
              <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Expert Team Members</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
