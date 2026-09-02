import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import imgWokali from '../assets/fruit_of_wokali.jpg';
import imgHCPL from '../assets/hcpl.jpg';
import imgFoodClub from '../assets/food_club_pro.jpg';
import imgDonateCloths from '../assets/donate_cloths_pro.jpg';
import imgMobileAppDesign from '../assets/mobile_app_design.jpg';
import imgEcoSphere from '../assets/eco_sphere_pro.jpg';
import imgJewelleryBaaz from '../assets/jewellery_baaz_pro.jpg';
import imgQuickServices from '../assets/quick_services_pro.jpg';
import imgInteriorProfile from '../assets/interior_profile_pro.jpg';

const projects = [
  { id: 1, title: 'Fruit of the Wokali', category: 'Graphic Design', img: imgWokali, size: 'large', link: 'https://fruitofthewokalipk.com/' },
  { id: 2, title: 'HCPL Developers & Marketing', category: 'Social Media Campaign', img: imgHCPL, size: 'medium', link: 'https://www.thehcpl.com' },
  { id: 3, title: 'Food Club App', category: 'UI/UX Design', img: imgFoodClub, size: 'medium', link: 'https://www.figma.com/design/HY3ySCdDVGoUggR5xbuT6P/safia-uiux-mids?node-id=0-1&p=f' },
  { id: 4, title: 'Rent & Donate Clothes', category: 'UI/UX Design', img: imgDonateCloths, size: 'large', link: 'https://www.figma.com/design/t7rB4ls310ZqKv7Shwj3LJ/reny-and-donate-cloth?node-id=0-1&p=f&t=FRUBjIBigWvBP29v-0' },
  { id: 5, title: 'Mobile App Figma Design', category: 'UI/UX Design', img: imgMobileAppDesign, size: 'medium', link: 'https://www.figma.com/design/rHE91u5tuEk53ZPsFK05QQ/Free-Login-Register-Screens-UI-Kits--Community-?node-id=512-3239&p=f&t=QgRXPuMYpJURi9NP-0' },
  { id: 6, title: 'EcoSphere App Design', category: 'UI/UX Design', img: imgEcoSphere, size: 'medium', link: 'https://www.figma.com/design/JYmDlkWcB3tJBoypdqfx4j/Untitled?node-id=0-1&p=f&t=SVsEaN1p5deo8dQY-0' },
  { id: 7, title: 'Jewellery Baaz App', category: 'UI/UX Design', img: imgJewelleryBaaz, size: 'large', link: 'https://www.figma.com/design/CmeRT5T6Ud1J9eJSHh0uZl/Untitled?node-id=0-1&p=f&t=kVpyKb43wqhkRseG-0' },
  { id: 8, title: 'Quick Services App', category: 'UI/UX Design', img: imgQuickServices, size: 'medium', link: 'https://www.figma.com/design/3ja3MuPMqbOmUbsMumsmlt/Untitled?node-id=0-1&p=f&t=BrVvQCWsl0uYFEDp-0' },
  { id: 9, title: 'Interior Designer Profile', category: 'UI/UX Design', img: imgInteriorProfile, size: 'large', link: 'https://www.figma.com/design/VG0laKSgbAHq5AWjAtcWYN/User-profile---Settings-screen--Community-?node-id=0-1&p=f&t=RldMJsEswVbLWfFL-0' },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Contained background glow with clip-path */}
      <div className="portfolio-bg-glow">
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: 'min(45%, 240px)', height: 'min(45%, 240px)', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '50%', filter: 'blur(45px)' }}></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 25 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 1, boxSizing: 'border-box' }}
      >
        <div className="section-title">Our <span className="gradient-text">Masterpieces</span></div>
        <p className="section-subtitle">
          A glimpse into our creative journey and successful digital transformations.
        </p>
      </motion.div>

      <motion.div layout className="portfolio-grid">
        <AnimatePresence>
          {projects.map((project, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              key={project.id}
              className="glass-card portfolio-item"
              onClick={() => { if(project.link) window.open(project.link, '_blank'); }}
              whileHover={{ y: -6, borderColor: 'rgba(34, 211, 238, 0.45)', boxShadow: '0 16px 36px rgba(59, 130, 246, 0.22)' }}
            >
              <div className="portfolio-img-container">
                <img src={project.img} alt={project.title} className="portfolio-img" />
                <div className="portfolio-overlay"></div>
              </div>
              
              <div className="portfolio-content">
                <span className="portfolio-category">
                  {project.category}
                </span>
                <h3 className="portfolio-title">
                  {project.title}
                </h3>
                <div className="portfolio-footer">
                  <div className="view-btn">View Project <span className="view-arrow">→</span></div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <style>{`
        .portfolio-bg-glow {
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

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
          gap: clamp(14px, 2.2vw, 20px);
          max-width: 1140px;
          margin: clamp(16px, 3vw, 30px) auto 0 auto;
          width: 100%;
          box-sizing: border-box;
        }

        .portfolio-item {
          overflow: hidden !important;
          position: relative;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          min-width: 0;
          border-radius: clamp(12px, 2vw, 16px);
          padding: 0;
          box-sizing: border-box;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .portfolio-img-container {
          height: clamp(130px, 18vw, 175px);
          width: 100%;
          overflow: hidden;
          position: relative;
          box-sizing: border-box;
        }

        .portfolio-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .portfolio-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(2, 6, 23, 0.7) 100%);
          pointer-events: none;
        }

        .portfolio-item:hover .portfolio-img {
          transform: scale(1.08);
        }

        .portfolio-content {
          padding: clamp(12px, 2vw, 18px);
          display: flex;
          flex-direction: column;
          flex: 1;
          min-width: 0;
          box-sizing: border-box;
        }

        .portfolio-category {
          display: inline-block;
          align-self: flex-start;
          padding: 3px 9px;
          background: rgba(59, 130, 246, 0.1);
          color: #60a5fa;
          border-radius: 14px;
          font-size: 0.72rem;
          font-weight: 600;
          margin-bottom: 6px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.2s ease;
        }

        .portfolio-item:hover .portfolio-category {
          background: rgba(34, 211, 238, 0.15);
          color: var(--cyan);
          border-color: rgba(34, 211, 238, 0.3);
        }

        .portfolio-title {
          font-size: clamp(0.96rem, 1.8vw, 1.15rem);
          margin-bottom: 5px;
          font-weight: 700;
          line-height: 1.25;
          overflow-wrap: break-word;
          word-break: break-word;
        }

        .portfolio-footer {
          margin-top: auto;
          padding-top: 8px;
        }

        .view-btn {
          color: var(--cyan);
          font-size: 0.78rem;
          font-weight: 600;
          text-transform: uppercase;
          transition: all 0.25s ease;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          letter-spacing: 0.4px;
        }

        .view-arrow {
          display: inline-block;
          transition: transform 0.25s ease;
        }

        .portfolio-item:hover .view-arrow {
          transform: translateX(4px);
        }

        .portfolio-item:hover .view-btn {
          color: var(--strong-text);
        }

        @media (max-width: 600px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
            gap: 12px;
          }
          .portfolio-img-container {
            height: 155px;
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
