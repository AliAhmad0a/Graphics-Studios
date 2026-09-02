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
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={(e) => {
        if (window.innerWidth < 768) return;
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="service-card-outer"
    >
      <motion.div
        className="glass-card service-card"
        style={{
          rotateX, rotateY,
        }}
      >
        {/* Animated Shine Effect */}
        <div className="shine-effect"></div>

        <div className="service-img-container">
          <img src={service.img} alt={service.title} className="service-img" />
        </div>
        
        <div className="service-content">
          <div className="service-header">
            <motion.div 
              className="service-icon"
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              {service.icon}
            </motion.div>
            <h3 className="service-title">{service.title}</h3>
          </div>
          <p className="service-desc">
            {service.desc}
          </p>
          <div className="service-explore">
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
      {/* Contained background glow */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '5%', right: '5%', width: 'clamp(180px, 25vw, 380px)', height: 'clamp(180px, 25vw, 380px)', background: 'rgba(34, 211, 238, 0.04)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
        <div style={{ position: 'absolute', bottom: '5%', left: '5%', width: 'clamp(160px, 22vw, 320px)', height: 'clamp(160px, 22vw, 320px)', background: 'rgba(99, 102, 241, 0.04)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        <div className="section-title">Our <span className="gradient-text">Expertise</span></div>
        <p className="section-subtitle">
          Comprehensive digital solutions designed to elevate your brand and drive results in the modern era.
        </p>
      </motion.div>

      <div className="services-grid">
        {servicesList.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
          gap: clamp(16px, 3vw, 24px);
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .service-card-outer {
          perspective: 1000px;
          -webkit-perspective: 1000px;
          height: 100%;
          display: flex;
        }

        .service-card {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          transform-style: preserve-3d;
          cursor: pointer;
          position: relative;
          border-radius: clamp(16px, 3vw, 22px);
        }

        .service-img-container {
          height: clamp(150px, 22vw, 210px);
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .service-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .service-card:hover .service-img {
          transform: scale(1.08);
        }

        .service-content {
          padding: clamp(16px, 3.5vw, 24px);
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .service-header {
          display: flex;
          align-items: center;
          gap: clamp(10px, 2.5vw, 15px);
          margin-bottom: clamp(10px, 2vw, 14px);
        }

        .service-icon {
          width: clamp(42px, 8vw, 52px);
          height: clamp(42px, 8vw, 52px);
          border-radius: 14px;
          background: rgba(6, 182, 212, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--cyan);
          font-size: clamp(1.2rem, 3vw, 1.45rem);
          box-shadow: inset 0 0 15px rgba(6, 182, 212, 0.2);
          flex-shrink: 0;
        }

        .service-title {
          font-size: clamp(1.05rem, 2.5vw, 1.25rem);
          font-weight: 700;
          margin: 0;
          line-height: 1.25;
        }

        .service-desc {
          color: #94a3b8;
          line-height: 1.6;
          font-size: clamp(0.85rem, 2vw, 0.95rem);
          margin-bottom: clamp(14px, 2.5vw, 20px);
          flex: 1;
        }

        .service-explore {
          color: #60a5fa;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: clamp(0.78rem, 2vw, 0.88rem);
          margin-top: auto;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        .shine-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-20deg);
          z-index: 10;
          pointer-events: none;
        }

        .service-card:hover .shine-effect {
          animation: shine 1s ease forwards;
        }

        @keyframes shine {
          100% { left: 200%; }
        }

        @media (max-width: 480px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .service-img-container {
            height: 160px;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
