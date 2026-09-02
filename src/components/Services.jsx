import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaPaintBrush, FaLaptopCode, FaVideo, FaBullhorn, FaRobot, FaCode, FaCube } from 'react-icons/fa';
import imgGraphic from '../assets/images/graphic_designer_workspace_1788284001078.jpg';
import imgUIUX from '../assets/images/ui_ux_screens_1788283959900.jpg';
import imgVideo from '../assets/images/video_editing_setup_1788284013820.jpg';
import imgAI from '../assets/images/ai_technology_1788283971125.jpg';
import imgMarketing from '../assets/images/marketing_dashboard_1788284025825.jpg';
import img3D from '../assets/images/three_d_design_1788284076868.jpg';

const servicesList = [
  { id: 1, title: 'Graphic Design & Branding', icon: <FaPaintBrush />, desc: 'Crafting unique brand identities, logos, and visual assets that tell your story.', img: imgGraphic },
  { id: 2, title: 'UI/UX Design', icon: <FaLaptopCode />, desc: 'Designing intuitive, user-centric interfaces and seamless digital experiences.', img: imgUIUX },
  { id: 3, title: 'Video Editing, AR/VR & Motion Graphics', icon: <FaVideo />, desc: 'Producing captivating video content, AR/VR experiences, and dynamic motion graphics.', img: imgVideo },
  { id: 4, title: 'Digital Marketing & Meta Ads', icon: <FaBullhorn />, desc: 'Data-driven marketing strategies and targeted Meta ad campaigns for growth.', img: imgMarketing },
  { id: 5, title: 'AI Solutions & Automation', icon: <FaRobot />, desc: 'Implementing smart AI tools and workflows to automate and scale your business.', img: imgAI },
  { id: 6, title: 'Web Design & Development', icon: <FaCode />, desc: 'Building responsive, high-performance websites and web applications.', img: imgUIUX },
  { id: 7, title: '3D Design & Modeling', icon: <FaCube />, desc: 'Creating immersive 3D models, environments, and product renderings.', img: img3D }
];

const ServiceCard = ({ service, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ perspective: 1000, WebkitPerspective: 1000 }}
    >
      <motion.div
        className="glass-card service-card"
        style={{
          rotateX, rotateY,
          overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%',
          transformStyle: "preserve-3d", cursor: 'pointer', position: 'relative'
        }}
      >
        {/* Animated Shine Effect */}
        <div className="shine-effect"></div>

        <div className="service-img-container">
          <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="service-img" />
        </div>
        <div className="service-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <motion.div 
              className="service-icon"
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
              style={{ width: '55px', height: '55px', borderRadius: '15px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cyan)', fontSize: '1.5rem', boxShadow: 'inset 0 0 15px rgba(6, 182, 212, 0.2)' }}
            >
              {service.icon}
            </motion.div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>{service.title}</h3>
          </div>
          <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '20px', flex: 1 }}>
            {service.desc}
          </p>
          <div style={{ color: '#60a5fa', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', marginTop: 'auto', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Explore <span>→</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', background: 'rgba(34, 211, 238, 0.03)', borderRadius: '50%', filter: 'blur(120px)' }}></div>
      <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '500px', height: '500px', background: 'rgba(99, 102, 241, 0.03)', borderRadius: '50%', filter: 'blur(120px)' }}></div>
      
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="section-title">Our <span className="gradient-text">Expertise</span></div>
        <p className="section-subtitle">
          Comprehensive digital solutions designed to elevate your brand and drive results in the modern era.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px', position: 'relative', zIndex: 1 }}>
        {servicesList.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      <style>{`
        .service-img { transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1); }
        .service-card:hover .service-img { transform: scale(1.1); }
        .service-card { transition: border-color 0.3s ease; }
        .shine-effect {
          position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-20deg); z-index: 10; pointer-events: none;
        }
        .service-card:hover .shine-effect { animation: shine 1s ease forwards; }
        @keyframes shine { 100% { left: 200%; } }
        
        .service-img-container { height: 220px; overflow: hidden; transform: translateZ(30px); }
        .service-content { padding: 25px; flex: 1; display: flex; flexDirection: column; transform: translateZ(40px); }
        @media (max-width: 768px) {
          .service-img-container { height: 170px !important; }
          .service-content { padding: 18px !important; }
        }
      `}</style>
    </section>
  );
};

export default Services;
