import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Brand Info */}
        <div className="footer-col brand-col">
          <h3 className="footer-brand-title">
            Graphics Studios
          </h3>
          <p className="footer-brand-tagline">
            "Where Creativity Meets Strategy." <br/>
            Premium creative technology agency.
          </p>
          <div className="footer-social-links">
            <a href="#" aria-label="Facebook" className="footer-social-btn"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram" className="footer-social-btn"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="footer-social-btn"><FaLinkedinIn /></a>
            <a href="#" aria-label="YouTube" className="footer-social-btn"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col links-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-nav-list">
            <li><a href="#home" className="footer-nav-link">Home</a></li>
            <li><a href="#about" className="footer-nav-link">About Us</a></li>
            <li><a href="#services" className="footer-nav-link">Services</a></li>
            <li><a href="#courses" className="footer-nav-link">Courses</a></li>
            <li><a href="#contact" className="footer-nav-link">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col contact-col">
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
        </div>
        
      </div>
      
      <div className="footer-bottom-bar">
        &copy; {new Date().getFullYear()} Graphics Studios Media Agency. All rights reserved.
      </div>

      <style>{`
        .footer-section {
          background: #020617;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: clamp(40px, 6vw, 60px);
          padding-bottom: 24px;
          width: 100%;
          box-sizing: border-box;
          position: relative;
          z-index: 10;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 5%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
          gap: clamp(24px, 4vw, 36px);
          box-sizing: border-box;
          width: 100%;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
        }

        .footer-brand-title {
          font-size: clamp(1.25rem, 2.5vw, 1.5rem);
          font-weight: 700;
          margin-bottom: 12px;
          color: #ffffff;
        }

        .footer-brand-tagline {
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 18px;
          font-size: clamp(0.85rem, 2vw, 0.95rem);
        }

        .footer-social-links {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .footer-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 0.9rem;
        }

        .footer-social-btn:hover {
          background: #3b82f6;
          border-color: #3b82f6;
          transform: translateY(-2px);
        }

        .footer-col-title {
          font-size: clamp(1.05rem, 2vw, 1.2rem);
          margin-bottom: clamp(12px, 2.5vw, 18px);
          color: #ffffff;
          font-weight: 600;
        }

        .footer-nav-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-nav-link {
          color: #94a3b8;
          font-size: clamp(0.85rem, 2vw, 0.95rem);
          transition: color 0.3s ease;
          display: inline-block;
        }

        .footer-nav-link:hover {
          color: #3b82f6;
        }

        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-contact-link {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          gap: 2px;
          overflow-wrap: anywhere;
          word-break: break-word;
        }

        .footer-contact-label {
          color: #94a3b8;
          font-size: clamp(0.78rem, 1.8vw, 0.85rem);
        }

        .footer-contact-val {
          color: #ffffff;
          font-weight: 500;
          font-size: clamp(0.85rem, 2vw, 0.92rem);
          overflow-wrap: anywhere;
          word-break: break-word;
        }

        .footer-bottom-bar {
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          margin-top: clamp(28px, 4vw, 40px);
          padding-top: 20px;
          padding-left: 16px;
          padding-right: 16px;
          color: #64748b;
          font-size: clamp(0.78rem, 1.8vw, 0.88rem);
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
