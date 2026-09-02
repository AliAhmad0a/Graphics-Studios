import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
       {/* Background Glow */}
       <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '300px', height: '300px', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '50%', filter: 'blur(100px)', zIndex: -1 }}></div>

      <div className="section-title">Get In <span className="gradient-text">Touch</span></div>
      <p className="section-subtitle">
        Ready to transform your brand? Let's discuss your next big project.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '50px', marginTop: '40px' }}>
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card contact-card" style={{ height: '100%' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Contact Information</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <a href="mailto:graphicsstudiosmediaagency@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', fontSize: '1.2rem', flexShrink: 0 }}>
                  <FaEnvelope />
                </div>
                <div style={{ wordBreak: 'break-all' }}>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>Email Us</p>
                  <span style={{ fontWeight: '500', color: 'var(--text-h)' }}>graphicsstudiosmediaagency@gmail.com</span>
                </div>
              </a>

              <a href="tel:03365821674" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', fontSize: '1.2rem', flexShrink: 0 }}>
                  <FaPhoneAlt />
                </div>
                <div>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>Call Us</p>
                  <span style={{ fontWeight: '500', color: 'var(--text-h)' }}>0336 5821674</span>
                </div>
              </a>

              <a href="https://api.whatsapp.com/send/?phone=03365821674&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', fontSize: '1.2rem', flexShrink: 0 }}>
                  <FaWhatsapp />
                </div>
                <div>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>WhatsApp Us</p>
                  <span style={{ fontWeight: '500', color: 'var(--text-h)' }}>0336 5821674</span>
                </div>
              </a>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', fontSize: '1.2rem', flexShrink: 0 }}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>Location</p>
                  <p style={{ fontWeight: '500', margin: 0, color: 'var(--text-h)' }}>Global (Remote) / Headquarters</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card contact-card">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <input type="text" placeholder="Your Name" required className="neon-input" />
                <input type="email" placeholder="Your Email" required className="neon-input" />
              </div>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <input type="tel" placeholder="Phone Number" className="neon-input" />
                <select required defaultValue="" className="neon-input" style={{ appearance: 'none' }}>
                  <option value="" disabled>Select Service</option>
                  <option value="graphic">Graphic Design</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="video">Video Editing</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="ai">AI Solutions</option>
                  <option value="web">Web Design</option>
                  <option value="3d">3D Design</option>
                  <option value="course">Training Courses</option>
                </select>
              </div>
              <textarea placeholder="Your Message" rows="5" required className="neon-input"></textarea>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '15px' }}>
                Send Message
              </button>
            </form>
          </div>
        </motion.div>

      </div>
      <style>{`
        .contact-card { padding: 40px; }
        @media (max-width: 768px) {
          .contact-card { padding: 25px 20px; }
        }
        .neon-input {
          flex: 1; min-width: 200px;
          padding: 15px 20px;
          background: rgba(2, 6, 23, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-family: var(--sans);
          font-size: 0.95rem;
          transition: all 0.3s ease;
          outline: none;
        }
        .neon-input:focus {
          border-color: var(--cyan);
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.3);
          background: rgba(2, 6, 23, 0.8);
        }
        .neon-input::placeholder {
          color: #64748b;
        }
        select.neon-input option {
          background: var(--navy);
          color: white;
        }
      `}</style>
    </section>
  );
};

export default Contact;
