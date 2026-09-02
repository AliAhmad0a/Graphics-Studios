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
      {/* Contained background glow */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: -1 }}>
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: 'clamp(180px, 22vw, 340px)', height: 'clamp(180px, 22vw, 340px)', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '50%', filter: 'blur(70px)' }}></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 26 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        <div className="section-title">Our <span className="gradient-text">Masterpieces</span></div>
        <p className="section-subtitle">
          A glimpse into our creative journey and successful digital transformations.
        </p>
      </motion.div>

      <motion.div layout className="portfolio-grid">
        <AnimatePresence>
          {projects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.96, y: 26 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -26 }}
              transition={{ duration: 0.45 }}
              key={project.id}
              className="glass-card portfolio-item"
              onClick={() => { if(project.link) window.open(project.link, '_blank'); }}
              whileHover={{ scale: 1.02, boxShadow: '0 16px 32px rgba(59, 130, 246, 0.18)' }}
            >
              <div className="portfolio-img-container">
                <img src={project.img} alt={project.title} className="portfolio-img" />
              </div>
              
              <div className="portfolio-content">
                <span className="portfolio-category">
                  {project.category}
                </span>
                <h3 className="portfolio-title">
                  {project.title}
                </h3>
                <div className="portfolio-footer">
                  <div className="view-btn">View Project &rarr;</div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <style>{`
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 290px), 1fr));
          gap: clamp(15px, 2.2vw, 22px);
          max-width: 1200px;
          margin: clamp(20px, 3.5vw, 36px) auto 0 auto;
          width: 100%;
        }

        .portfolio-item {
          overflow: hidden;
          position: relative;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          height: 100%;
          border-radius: clamp(14px, 2.2vw, 18px);
          padding: 0;
          box-sizing: border-box;
        }

        .portfolio-img-container {
          height: clamp(150px, 19vw, 205px);
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .portfolio-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .portfolio-item:hover .portfolio-img {
          transform: scale(1.05);
        }

        .portfolio-content {
          padding: clamp(14px, 2.2vw, 20px);
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .portfolio-category {
          display: inline-block;
          align-self: flex-start;
          padding: 4px 11px;
          background: rgba(59, 130, 246, 0.1);
          color: #60a5fa;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 7px;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .portfolio-title {
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          margin-bottom: 6px;
          font-weight: 700;
          line-height: 1.25;
        }

        .portfolio-footer {
          margin-top: auto;
          padding-top: 10px;
        }

        .view-btn {
          color: var(--cyan);
          font-size: 0.88rem;
          font-weight: 600;
          text-transform: uppercase;
          transition: all 0.25s ease;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          letter-spacing: 0.5px;
        }

        .portfolio-item:hover .view-btn {
          color: #ffffff;
        }

        @media (max-width: 480px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .portfolio-img-container {
            height: 175px;
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
