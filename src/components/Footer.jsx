import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Brand Info */}
        <motion.div 
          className="footer-col brand-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="footer-brand-title">
            Graphics Studios
          </h3>
          <p className="footer-brand-tagline">
            "Where Creativity Meets Strategy." <br/>
            Premium creative technology agency.
          </p>
          <div className="footer-social-links">
            <motion.a href="https://www.facebook.com/profile.php?id=61573042965782&rdid=LPqKSNB6cBPZ0bwP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BdLuR7LBe%2F#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-btn" whileHover={{ y: -4, scale: 1.1, backgroundColor: '#3b82f6' }} whileTap={{ scale: 0.95 }}><FaFacebookF /></motion.a>
            <motion.a href="https://www.linkedin.com/posts/graphicsstudiospk_graphicsstudiosmediaagency-nivea-niveacreme-activity-7498494716653576194-9WsW?utm_source=share&utm_medium=member_android&rcm=ACoAAErEqIUBKJf-l5MB7xJEfYMKQrdIXsm9U1I" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-btn" whileHover={{ y: -4, scale: 1.1, backgroundColor: '#0284c7' }} whileTap={{ scale: 0.95 }}><FaLinkedinIn /></motion.a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          className="footer-col links-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-nav-list">
            <li><a href="#home" className="footer-nav-link">Home</a></li>
            <li><a href="#about" className="footer-nav-link">About Us</a></li>
            <li><a href="#services" className="footer-nav-link">Services</a></li>
            <li><a href="#courses" className="footer-nav-link">Courses</a></li>
            <li><a href="#contact" className="footer-nav-link">Contact</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          className="footer-col contact-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="footer-col-title">Contact</h4>
          <ul className="footer-contact-list">
            <li>
              <a href="mailto:graphicsstudiosmediaagency@gmail.com" className="footer-contact-link">
                <span className="footer-contact-label">Email:</span>
                <span className="footer-contact-val">graphicsstudiosmediaagency@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:03365821674" className="footer-contact-link">
                <span className="footer-contact-label">Phone:</span>
                <span className="footer-contact-val">0336 5821674</span>
              </a>
            </li>
          </ul>
        </motion.div>
        
      </div>
      
      <div className="footer-bottom-bar">
        &copy; {new Date().getFullYear()} Graphics Studios Media Agency. All rights reserved.
      </div>

      <style>{`
        .footer-section {
          background: var(--background-alpha-75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid var(--white-alpha-08);
          padding-top: clamp(32px, 4.5vw, 48px);
          padding-bottom: 20px;
          width: 100% !important;
          max-width: 100% !important;
          box-sizing: border-box;
          position: relative;
          z-index: 10;
          overflow: hidden !important;
          contain: paint;
        }

        .footer-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 clamp(14px, 4%, 40px);
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
          gap: clamp(20px, 3vw, 32px);
          box-sizing: border-box;
          width: 100%;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          min-width: 0;
          max-width: 100%;
          box-sizing: border-box;
        }

        .footer-brand-title {
          font-size: clamp(1.15rem, 2.2vw, 1.4rem);
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--strong-text);
          overflow-wrap: break-word;
        }

        .footer-brand-tagline {
          color: var(--text-main);
          line-height: 1.5;
          margin-bottom: 14px;
          font-size: clamp(0.82rem, 1.5vw, 0.94rem);
          overflow-wrap: break-word;
        }

        .footer-social-links {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .footer-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--white-alpha-04);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--strong-text);
          transition: all 0.25s ease;
          border: 1px solid var(--white-alpha-08);
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        .footer-col-title {
          font-size: clamp(0.95rem, 1.8vw, 1.15rem);
          margin-bottom: clamp(10px, 1.8vw, 14px);
          color: var(--strong-text);
          font-weight: 600;
        }

        .footer-nav-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-nav-link {
          color: var(--text-main);
          font-size: clamp(0.82rem, 1.5vw, 0.92rem);
          transition: all 0.2s ease;
          display: inline-block;
        }

        .footer-nav-link:hover {
          color: #38bdf8;
          transform: translateX(4px);
        }

        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
          min-width: 0;
        }

        .footer-contact-link {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          gap: 3px;
          overflow-wrap: anywhere !important;
          word-break: break-all !important;
          width: 100%;
          min-width: 0;
          max-width: 100%;
          box-sizing: border-box;
          transition: all 0.2s ease;
        }

        .footer-contact-link:hover .footer-contact-val {
          color: #38bdf8;
        }

        .footer-contact-label {
          color: var(--text-main);
          font-size: clamp(0.72rem, 1.3vw, 0.8rem);
        }

        .footer-contact-val {
          color: var(--strong-text);
          font-weight: 500;
          font-size: clamp(0.82rem, 1.5vw, 0.92rem);
          overflow-wrap: anywhere !important;
          word-break: break-all !important;
          display: block;
          max-width: 100%;
          transition: color 0.2s ease;
        }

        .footer-bottom-bar {
          text-align: center;
          border-top: 1px solid var(--white-alpha-05);
          margin-top: clamp(22px, 3vw, 32px);
          padding-top: 16px;
          padding-left: 14px;
          padding-right: 14px;
          color: #64748b;
          font-size: clamp(0.74rem, 1.4vw, 0.85rem);
          line-height: 1.5;
        }

        @media (max-width: 640px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
