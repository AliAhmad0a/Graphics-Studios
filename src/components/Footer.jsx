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
          padding-top: clamp(26px, 3.5vw, 38px);
          padding-bottom: 16px;
          width: 100%;
          max-width: 100vw;
          box-sizing: border-box;
          position: relative;
          z-index: 10;
          overflow: hidden !important;
        }

        .footer-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 5%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 170px), 1fr));
          gap: clamp(16px, 2.5vw, 24px);
          box-sizing: border-box;
          width: 100%;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          min-width: 0;
          max-width: 100%;
        }

        .footer-brand-title {
          font-size: clamp(0.98rem, 1.8vw, 1.15rem);
          font-weight: 700;
          margin-bottom: 8px;
          color: #ffffff;
        }

        .footer-brand-tagline {
          color: #94a3b8;
          line-height: 1.45;
          margin-bottom: 11px;
          font-size: clamp(0.68rem, 1.2vw, 0.74rem);
        }

        .footer-social-links {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .footer-social-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: all 0.25s ease;
          border: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.7rem;
        }

        .footer-social-btn:hover {
          background: #3b82f6;
          border-color: #3b82f6;
          transform: translateY(-1.5px);
        }

        .footer-col-title {
          font-size: clamp(0.82rem, 1.5vw, 0.92rem);
          margin-bottom: clamp(8px, 1.6vw, 11px);
          color: #ffffff;
          font-weight: 600;
        }

        .footer-nav-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .footer-nav-link {
          color: #94a3b8;
          font-size: clamp(0.66rem, 1.2vw, 0.72rem);
          transition: color 0.2s ease;
          display: inline-block;
        }

        .footer-nav-link:hover {
          color: #3b82f6;
        }

        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
          min-width: 0;
        }

        .footer-contact-link {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          gap: 2px;
          overflow-wrap: anywhere !important;
          word-break: break-all !important;
          width: 100%;
          min-width: 0;
          max-width: 100%;
        }

        .footer-contact-label {
          color: #94a3b8;
          font-size: clamp(0.6rem, 1.1vw, 0.66rem);
        }

        .footer-contact-val {
          color: #ffffff;
          font-weight: 500;
          font-size: clamp(0.66rem, 1.2vw, 0.72rem);
          overflow-wrap: anywhere !important;
          word-break: break-all !important;
          display: block;
          max-width: 100%;
        }

        .footer-bottom-bar {
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          margin-top: clamp(18px, 2.5vw, 26px);
          padding-top: 12px;
          padding-left: 12px;
          padding-right: 12px;
          color: #64748b;
          font-size: clamp(0.62rem, 1.2vw, 0.68rem);
          line-height: 1.4;
        }

        @media (max-width: 600px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
