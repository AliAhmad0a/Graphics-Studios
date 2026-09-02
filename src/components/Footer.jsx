import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ background: '#020617', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '60px', paddingBottom: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
        
        {/* Brand Info */}
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '15px' }}>
            Graphics Studios
          </h3>
          <p style={{ color: '#94a3b8', lineHeight: '1.6', marginBottom: '20px' }}>
            "Where Creativity Meets Strategy." <br/>
            Premium creative technology agency.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#3b82f6'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}><FaFacebookF /></a>
            <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#3b82f6'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}><FaInstagram /></a>
            <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#3b82f6'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}><FaLinkedinIn /></a>
            <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#3b82f6'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Quick Links</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><a href="#home" style={{ color: '#94a3b8', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#3b82f6'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Home</a></li>
            <li><a href="#about" style={{ color: '#94a3b8', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#3b82f6'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>About Us</a></li>
            <li><a href="#services" style={{ color: '#94a3b8', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#3b82f6'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Services</a></li>
            <li><a href="#courses" style={{ color: '#94a3b8', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#3b82f6'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Courses</a></li>
            <li><a href="#contact" style={{ color: '#94a3b8', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#3b82f6'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Contact</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', listStyle: 'none', padding: 0 }}>
            <li><a href="mailto:graphicsstudiosmediaagency@gmail.com" style={{ color: '#94a3b8', display: 'block', textDecoration: 'none' }}>Email: <br/><span style={{ color: 'white' }}>graphicsstudiosmediaagency@gmail.com</span></a></li>
            <li><a href="tel:03365821674" style={{ color: '#94a3b8', display: 'block', textDecoration: 'none' }}>Phone: <br/><span style={{ color: 'white' }}>0336 5821674</span></a></li>
          </ul>
        </div>
        
      </div>
      
      <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '40px', paddingTop: '20px', color: '#64748b', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} Graphics Studios Media Agency. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
