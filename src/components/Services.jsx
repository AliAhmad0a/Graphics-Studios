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
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.42, delay: index * 0.05 }}
      onMouseMove={(e) => {
        if (window.innerWidth < 1024) return;
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
        <div className="service-img-container">
          <img src={service.img} alt={service.title} className="service-img" />
        </div>
        
        <div className="service-content">
          <div className="service-header">
            <div className="service-icon">
              {service.icon}
            </div>
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
        <div style={{ position: 'absolute', top: '5%', right: '5%', width: 'clamp(145px, 18vw, 270px)', height: 'clamp(145px, 18vw, 270px)', background: 'rgba(34, 211, 238, 0.035)', borderRadius: '50%', filter: 'blur(60px)' }}></div>
        <div style={{ position: 'absolute', bottom: '5%', left: '5%', width: 'clamp(125px, 16vw, 235px)', height: 'clamp(125px, 16vw, 235px)', background: 'rgba(99, 102, 241, 0.035)', borderRadius: '50%', filter: 'blur(60px)' }}></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 22 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        style={{ width: '100%', maxWidth: '1020px', margin: '0 auto', position: 'relative', zIndex: 1 }}
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
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 230px), 1fr));
          gap: clamp(11px, 1.8vw, 16px);
          position: relative;
          z-index: 1;
          max-width: 1020px;
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
          border-radius: clamp(11px, 1.8vw, 15px);
        }

        .service-img-container {
          height: clamp(110px, 14vw, 145px);
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .service-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .service-card:hover .service-img {
          transform: scale(1.05);
        }

        .service-content {
          padding: clamp(12px, 1.8vw, 15px);
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .service-header {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 7px;
        }

        .service-icon {
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: rgba(6, 182, 212, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--cyan);
          font-size: 0.96rem;
          box-shadow: inset 0 0 9px rgba(6, 182, 212, 0.2);
          flex-shrink: 0;
        }

        .service-title {
          font-size: clamp(0.86rem, 1.6vw, 0.98rem);
          font-weight: 700;
          margin: 0;
          line-height: 1.25;
        }

        .service-desc {
          color: #94a3b8;
          line-height: 1.48;
          font-size: clamp(0.74rem, 1.3vw, 0.82rem);
          margin-bottom: 10px;
          flex: 1;
        }

        .service-explore {
          color: #60a5fa;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.7rem;
          margin-top: auto;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @media (max-width: 480px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 11px;
          }
          .service-img-container {
            height: 130px;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
