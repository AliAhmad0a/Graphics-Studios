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
    <section id="portfolio" className="section" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '400px', height: '400px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', filter: 'blur(150px)', zIndex: -1 }}></div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="section-title">Our <span className="gradient-text">Masterpieces</span></div>
        <p className="section-subtitle">
          A glimpse into our creative journey and successful digital transformations.
        </p>
      </motion.div>

      {/* Standard Grid */}
      <motion.div layout style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '30px',
        marginTop: '50px'
      }}>
        <AnimatePresence>
          {projects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -30 }}
              transition={{ duration: 0.5 }}
              key={project.id}
              className="glass-card portfolio-item"
              onClick={() => { if(project.link) window.open(project.link, '_blank'); }}
              style={{ 
                overflow: 'hidden', position: 'relative', cursor: 'pointer',
                display: 'flex', flexDirection: 'column', height: '100%',
                borderRadius: '24px', padding: 0
              }}
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
            >
              <div style={{ height: '240px', width: '100%', overflow: 'hidden' }}>
                <img src={project.img} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="portfolio-img" />
              </div>
              
              <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={{ display: 'inline-block', alignSelf: 'flex-start', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600', marginBottom: '15px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', fontWeight: '700' }}>
                  {project.title}
                </h3>
                <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                  <div className="view-btn">View Project &rarr;</div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <style>{`
        .portfolio-img { transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        .portfolio-item:hover .portfolio-img { transform: scale(1.1); }
        .view-btn {
          color: var(--cyan); font-size: 0.9rem; font-weight: 600; text-transform: uppercase;
          transition: all 0.3s; display: inline-flex; alignItems: center; gap: 8px;
        }
        .portfolio-item:hover .view-btn { color: #fff; }
      `}</style>
    </section>
  );
};

export default Portfolio;
