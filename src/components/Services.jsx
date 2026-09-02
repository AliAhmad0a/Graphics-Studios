import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaPaintBrush, FaLaptopCode, FaVideo, FaBullhorn, FaRobot, FaCode, FaCube, FaMobileAlt } from 'react-icons/fa';
import imgGraphic from '../assets/images/graphic_designer_workspace_1788284001078.jpg';
import imgUIUX from '../assets/images/ui_ux_screens_1788283959900.jpg';
import imgVideo from '../assets/images/video_editing_setup_1788284013820.jpg';
import imgAI from '../assets/images/ai_technology_1788283971125.jpg';
import imgMarketing from '../assets/images/marketing_dashboard_1788284025825.jpg';
import img3D from '../assets/images/three_d_design_1788284076868.jpg';
import imgMobileApp from '../assets/mobile_app_design.jpg';

const servicesList = [
  { id: 1, title: 'Graphic Design & Branding', icon: <FaPaintBrush />, desc: 'Crafting unique brand identities, logos, and visual assets that tell your story.', img: imgGraphic },
  { id: 2, title: 'UI/UX Design', icon: <FaLaptopCode />, desc: 'Designing intuitive, user-centric interfaces and seamless digital experiences.', img: imgUIUX },
  { id: 3, title: 'Mobile App Development', icon: <FaMobileAlt />, desc: 'Building high-performance, responsive native & cross-platform iOS and Android apps.', img: imgMobileApp },
  { id: 4, title: 'Web Design & Development', icon: <FaCode />, desc: 'Building responsive, high-performance websites and scalable web applications.', img: imgUIUX },
  { id: 5, title: 'Video Editing, AR/VR & Motion Graphics', icon: <FaVideo />, desc: 'Producing captivating video content, AR/VR experiences, and dynamic motion graphics.', img: imgVideo },
  { id: 6, title: 'Digital Marketing & Meta Ads', icon: <FaBullhorn />, desc: 'Data-driven marketing strategies and targeted Meta ad campaigns for rapid growth.', img: imgMarketing },
  { id: 7, title: 'AI Solutions & Automation', icon: <FaRobot />, desc: 'Implementing smart AI tools and custom automated workflows to scale your business.', img: imgAI },
  { id: 8, title: '3D Design & Modeling', icon: <FaCube />, desc: 'Creating immersive 3D models, interactive environments, and photorealistic product renderings.', img: img3D }
];

const ServiceCard = ({ service, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
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
        whileHover={{ y: -6, borderColor: 'rgba(255, 182, 193, 0.5)' }}
      >
        <div className="service-img-container">
          <img src={service.img} alt={service.title} className="service-img" />
          <div className="service-img-overlay"></div>
        </div>
        
        <div className="service-content">
          <div className="service-header">
            <motion.div 
              className="service-icon"
              whileHover={{ rotate: 12, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {service.icon}
            </motion.div>
            <h3 className="service-title">{service.title}</h3>
          </div>
          <p className="service-desc">
            {service.desc}
          </p>
          <div className="service-explore">
            Explore <span className="explore-arrow">→</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Contained background glow with clip-path */}
      <div className="services-bg-glow">
        <div style={{ position: 'absolute', top: '5%', right: '5%', width: 'min(45%, 240px)', height: 'min(45%, 240px)', background: 'rgba(255, 240, 245, 0.035)', borderRadius: '50%', filter: 'blur(45px)' }}></div>
        <div style={{ position: 'absolute', bottom: '5%', left: '5%', width: 'min(45%, 220px)', height: 'min(45%, 220px)', background: 'rgba(99, 102, 241, 0.035)', borderRadius: '50%', filter: 'blur(45px)' }}></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 25 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 1, boxSizing: 'border-box' }}
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
        .services-bg-glow {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden !important;
          pointer-events: none;
          z-index: 0;
          contain: strict;
          clip-path: inset(0);
          -webkit-clip-path: inset(0);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 270px), 1fr));
          gap: clamp(12px, 2vw, 18px);
          position: relative;
          z-index: 1;
          max-width: 1140px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
        }

        .service-card-outer {
          perspective: 1000px;
          -webkit-perspective: 1000px;
          height: 100%;
          display: flex;
          width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        .service-card {
          overflow: hidden !important;
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          min-width: 0;
          transform-style: preserve-3d;
          cursor: pointer;
          position: relative;
          border-radius: clamp(12px, 2vw, 16px);
          box-sizing: border-box;
        }

        .service-img-container {
          height: clamp(120px, 16vw, 160px);
          width: 100%;
          overflow: hidden;
          position: relative;
          box-sizing: border-box;
        }

        .service-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(11, 17, 32, 0.85) 100%);
          pointer-events: none;
        }

        .service-card:hover .service-img {
          transform: scale(1.08);
        }

        .service-content {
          padding: clamp(12px, 2vw, 18px);
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
          box-sizing: border-box;
        }

        .service-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
          min-width: 0;
        }

        .service-icon {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          background: rgba(6, 182, 212, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--cyan);
          font-size: 1rem;
          box-shadow: inset 0 0 9px rgba(6, 182, 212, 0.25);
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .service-title {
          font-size: clamp(0.92rem, 1.8vw, 1.08rem);
          font-weight: 700;
          margin: 0;
          line-height: 1.25;
          overflow-wrap: break-word;
          word-break: break-word;
          min-width: 0;
        }

        .service-desc {
          color: var(--text-main);
          line-height: 1.5;
          font-size: clamp(0.82rem, 1.5vw, 0.92rem);
          margin-bottom: 12px;
          flex: 1;
          overflow-wrap: break-word;
        }

        .service-explore {
          color: #ffc0cb;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          margin-top: auto;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.25s ease;
        }

        .explore-arrow {
          display: inline-block;
          transition: transform 0.25s ease;
        }

        .service-card:hover .explore-arrow {
          transform: translateX(4px);
        }

        .service-card:hover .service-explore {
          color: var(--cyan);
        }

        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 12px;
          }
          .service-img-container {
            height: 140px;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
