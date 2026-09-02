import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    // Build WhatsApp message with form data
    const msg = `New Enquiry from ${formState.name}%0AEmail: ${formState.email}%0APhone: ${formState.phone}%0AService: ${formState.service}%0AMessage: ${formState.message}`;
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      window.open(`https://api.whatsapp.com/send/?phone=03365821674&text=${msg}&type=phone_number&app_absent=0`, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Contained Background Glow */}
      <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: -1, contain: 'strict' }}>
        <div style={{ position: 'absolute', bottom: '5%', right: '5%', width: 'min(50%, 280px)', height: 'min(50%, 280px)', background: 'rgba(59, 130, 246, 0.08)', borderRadius: '50%', filter: 'blur(50px)' }}></div>
      </div>

      <div className="section-title">Get In <span className="gradient-text">Touch</span></div>
      <p className="section-subtitle">
        Ready to transform your brand? Let's discuss your next big project.
      </p>

      <div className="contact-grid">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="contact-col-outer"
        >
          <div className="glass-card contact-card">
            <h3 className="contact-card-title">Contact Information</h3>
            
            <div className="contact-items-list">
              <a href="mailto:graphicsstudiosmediaagency@gmail.com" className="contact-item-row">
                <div className="contact-icon-box">
                  <FaEnvelope />
                </div>
                <div className="contact-item-text">
                  <p className="contact-item-label">Email Us</p>
                  <span className="contact-item-value">graphicsstudiosmediaagency@gmail.com</span>
                </div>
              </a>

              <a href="tel:03365821674" className="contact-item-row">
                <div className="contact-icon-box">
                  <FaPhoneAlt />
                </div>
                <div className="contact-item-text">
                  <p className="contact-item-label">Call Us</p>
                  <span className="contact-item-value">0336 5821674</span>
                </div>
              </a>

              <a href="https://api.whatsapp.com/send/?phone=03365821674&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="contact-item-row">
                <div className="contact-icon-box">
                  <FaWhatsapp />
                </div>
                <div className="contact-item-text">
                  <p className="contact-item-label">WhatsApp Us</p>
                  <span className="contact-item-value">0336 5821674</span>
                </div>
              </a>
              
              <div className="contact-item-row">
                <div className="contact-icon-box">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-item-text">
                  <p className="contact-item-label">Location</p>
                  <p className="contact-item-value" style={{ margin: 0 }}>Global (Remote) / Headquarters</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="contact-col-outer"
        >
          <div className="glass-card contact-card">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                className="contact-submitted"
              >
                <FaCheckCircle style={{ fontSize: '2.4rem', color: '#22d3ee' }} />
                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Message Sent!</h3>
                <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.86rem' }}>We've received your enquiry and will get back to you shortly via WhatsApp.</p>
                <button className="btn btn-outline" onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', phone: '', service: '', message: '' }); }} style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input type="text" name="name" placeholder="Your Name" required className="neon-input" value={formState.name} onChange={handleChange} />
                  <input type="email" name="email" placeholder="Your Email" required className="neon-input" value={formState.email} onChange={handleChange} />
                </div>
                <div className="form-row">
                  <input type="tel" name="phone" placeholder="Phone Number" className="neon-input" value={formState.phone} onChange={handleChange} />
                  <select name="service" required value={formState.service} onChange={handleChange} className="neon-input neon-select">
                    <option value="" disabled>Select Service</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="AI Solutions">AI Solutions</option>
                    <option value="Web Design">Web Design</option>
                    <option value="3D Design">3D Design</option>
                    <option value="Training Courses">Training Courses</option>
                  </select>
                </div>
                <textarea name="message" placeholder="Your Message" rows="3" required className="neon-input" value={formState.message} onChange={handleChange}></textarea>
                <button type="submit" className="btn btn-primary contact-submit-btn" disabled={sending}>
                  {sending ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </motion.div>

      </div>
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
          gap: clamp(16px, 2.5vw, 24px);
          max-width: 1020px;
          margin: clamp(16px, 3vw, 30px) auto 0 auto;
          width: 100%;
          box-sizing: border-box;
        }

        .contact-col-outer {
          height: 100%;
          width: 100%;
          min-width: 0;
          max-width: 100%;
          box-sizing: border-box;
        }

        .contact-card {
          padding: clamp(16px, 3.2vw, 28px);
          border-radius: clamp(14px, 2.5vw, 20px);
          box-sizing: border-box;
          height: 100%;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden !important;
        }

        .contact-card-title {
          font-size: clamp(1.15rem, 2.2vw, 1.45rem);
          margin-bottom: clamp(12px, 2vw, 18px);
          font-weight: 700;
        }

        .contact-items-list {
          display: flex;
          flex-direction: column;
          gap: clamp(11px, 2vw, 16px);
          width: 100%;
          max-width: 100%;
          min-width: 0;
        }

        .contact-item-row {
          display: flex;
          align-items: center;
          gap: clamp(10px, 2vw, 14px);
          text-decoration: none;
          color: inherit;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        .contact-icon-box {
          width: clamp(34px, 6.5vw, 42px);
          height: clamp(34px, 6.5vw, 42px);
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          font-size: clamp(0.9rem, 1.8vw, 1.05rem);
          flex-shrink: 0;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .contact-item-text {
          min-width: 0;
          flex: 1 1 auto;
          overflow-wrap: break-word !important;
          word-break: break-all !important;
          max-width: calc(100% - 46px);
        }

        .contact-item-label {
          color: #94a3b8;
          font-size: clamp(0.72rem, 1.3vw, 0.8rem);
          margin: 0 0 2px 0;
        }

        .contact-item-value {
          font-weight: 500;
          color: var(--text-h);
          font-size: clamp(0.8rem, 1.5vw, 0.92rem);
          line-height: 1.35;
          display: block;
          overflow-wrap: break-word !important;
          word-break: break-all !important;
          max-width: 100%;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: clamp(10px, 1.8vw, 14px);
          width: 100%;
          height: 100%;
          min-width: 0;
        }

        .form-row {
          display: flex;
          gap: clamp(8px, 1.6vw, 12px);
          width: 100%;
          min-width: 0;
        }

        .neon-input {
          flex: 1;
          min-width: 0;
          width: 100%;
          padding: clamp(9px, 1.6vw, 12px) clamp(10px, 1.8vw, 14px);
          background: rgba(2, 6, 23, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 9px;
          color: white;
          font-family: var(--sans);
          font-size: clamp(0.85rem, 1.5vw, 0.94rem);
          transition: all 0.25s ease;
          outline: none;
          box-sizing: border-box;
        }

        .neon-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 12px;
          padding-right: 30px;
        }

        .neon-input:focus {
          border-color: var(--cyan);
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.25);
          background: rgba(2, 6, 23, 0.75);
        }

        .neon-input::placeholder {
          color: #64748b;
        }

        select.neon-input option {
          background: var(--navy);
          color: white;
        }

        .contact-submit-btn {
          width: 100%;
          padding: clamp(10px, 1.8vw, 13px);
          margin-top: 2px;
          font-size: 0.92rem;
        }

        .contact-submitted {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 220px;
          text-align: center;
          padding: 16px;
        }

        @media (max-width: 640px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
