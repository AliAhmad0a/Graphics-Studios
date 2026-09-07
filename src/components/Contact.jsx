import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Contact = () => {
  const formRef = useRef(null);
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: '', message: '' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || EMAILJS_CONFIG.SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || EMAILJS_CONFIG.TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || EMAILJS_CONFIG.PUBLIC_KEY;

    // Check if configuration exists
    if (!serviceId || !templateId || !publicKey) {
      setSending(false);
      setStatus({
        type: 'error',
        message: 'EmailJS credentials are not set. Please add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.'
      });
      return;
    }

    const templateParams = {
      name: formState.name,
      user_name: formState.name,
      from_name: formState.name,
      email: formState.email,
      user_email: formState.email,
      reply_to: formState.email,
      phone: formState.phone || 'Not provided',
      user_phone: formState.phone || 'Not provided',
      service: formState.service,
      message: formState.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSending(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err) {
      console.error('EmailJS send error:', err);
      setSending(false);
      const errorDetail = err?.text || err?.message || 'Failed to send message. Please check your credentials or try again later.';
      setStatus({
        type: 'error',
        message: `Failed to send email: ${errorDetail}`
      });
    }
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Contained Background Glow with clip-path */}
      <div className="contact-bg-glow">
        <div style={{ position: 'absolute', bottom: '5%', right: '5%', width: 'min(45%, 260px)', height: 'min(45%, 260px)', background: 'rgba(59, 130, 246, 0.08)', borderRadius: '50%', filter: 'blur(45px)' }}></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px 100px 0px" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-title">Get In <span className="gradient-text">Touch</span></div>
        <p className="section-subtitle">
          Ready to transform your brand? Let's discuss your next big project.
        </p>
      </motion.div>

      <div className="contact-grid">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px 80px 0px" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="contact-col-outer"
        >
          <div className="glass-card contact-card">
            <h3 className="contact-card-title">Contact Information</h3>
            
            <div className="contact-items-list">
              <motion.a 
                href="mailto:graphicsstudiosmediaagency@gmail.com" 
                className="contact-item-row"
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="contact-icon-box">
                  <FaEnvelope />
                </div>
                <div className="contact-item-text">
                  <p className="contact-item-label">Email Us</p>
                  <span className="contact-item-value">graphicsstudiosmediaagency@gmail.com</span>
                </div>
              </motion.a>

              <motion.a 
                href="tel:03365821674" 
                className="contact-item-row"
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="contact-icon-box">
                  <FaPhoneAlt />
                </div>
                <div className="contact-item-text">
                  <p className="contact-item-label">Call Us</p>
                  <span className="contact-item-value">0336 5821674</span>
                </div>
              </motion.a>

              <motion.a 
                href="https://api.whatsapp.com/send/?phone=03365821674&text&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-item-row"
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="contact-icon-box" style={{ color: '#22c55e', borderColor: 'rgba(34, 197, 94, 0.3)', background: 'rgba(34, 197, 94, 0.1)' }}>
                  <FaWhatsapp />
                </div>
                <div className="contact-item-text">
                  <p className="contact-item-label">WhatsApp Us</p>
                  <span className="contact-item-value">0336 5821674</span>
                </div>
              </motion.a>
              
              <motion.div 
                className="contact-item-row"
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="contact-icon-box">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-item-text">
                  <p className="contact-item-label">Location</p>
                  <p className="contact-item-value" style={{ margin: 0 }}>Global (Remote) / Headquarters</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px 80px 0px" }}
          transition={{ duration: 0.35, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="contact-col-outer"
        >
          <div className="glass-card contact-card">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="contact-submitted"
              >
                <FaCheckCircle style={{ fontSize: '2.5rem', color: 'var(--cyan)' }} />
                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Message Sent Successfully!</h3>
                <p style={{ color: 'var(--text-main)', margin: 0, fontSize: '0.86rem' }}>
                  Thank you! Your message has been sent via email. We will review your project details and get back to you shortly.
                </p>
                <button className="btn btn-outline" onClick={() => { setSubmitted(false); setStatus({ type: '', message: '' }); setFormState({ name: '', email: '', phone: '', service: '', message: '' }); }} style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
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
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Web Design & Development">Web Design & Development</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="AI Solutions">AI Solutions</option>
                    <option value="3D Design">3D Design</option>
                    <option value="Training Courses">Training Courses</option>
                  </select>
                </div>
                <textarea name="message" placeholder="Your Message" rows="3" required className="neon-input" value={formState.message} onChange={handleChange}></textarea>
                
                {status.type === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      padding: '10px 14px',
                      borderRadius: '8px',
                      background: 'rgba(239, 68, 68, 0.12)',
                      border: '1px solid rgba(239, 68, 68, 0.35)',
                      color: '#fca5a5',
                      fontSize: '0.84rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      lineHeight: 1.4,
                    }}
                  >
                    <FaExclamationCircle style={{ marginTop: '2px', flexShrink: 0, color: '#ef4444' }} />
                    <span>{status.message}</span>
                  </motion.div>
                )}

                <motion.button 
                  type="submit" 
                  className="btn btn-primary contact-submit-btn" 
                  disabled={sending}
                  whileHover={!sending ? { scale: 1.02 } : {}}
                  whileTap={!sending ? { scale: 0.98 } : {}}
                  style={sending ? { opacity: 0.75, cursor: 'not-allowed' } : {}}
                >
                  {sending ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                      <span className="contact-spinner" />
                      Sending Message...
                    </span>
                  ) : 'Send Message →'}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>

      </div>
      <style>{`
        .contact-bg-glow {
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
          transition: all 0.35s ease;
        }

        .contact-card:hover {
          border-color: rgba(59, 130, 246, 0.4);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5), 0 0 20px rgba(59, 130, 246, 0.15);
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
          cursor: pointer;
        }

        .contact-icon-box {
          width: clamp(34px, 6.5vw, 42px);
          height: clamp(34px, 6.5vw, 42px);
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue);
          font-size: clamp(0.9rem, 1.8vw, 1.05rem);
          flex-shrink: 0;
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.25s ease;
        }

        .contact-item-row:hover .contact-icon-box {
          transform: scale(1.1);
          box-shadow: 0 0 12px rgba(59, 130, 246, 0.4);
        }

        .contact-item-text {
          min-width: 0;
          flex: 1 1 auto;
          overflow-wrap: anywhere !important;
          word-break: break-all !important;
          max-width: calc(100% - 46px);
        }

        .contact-item-label {
          color: var(--text-main);
          font-size: clamp(0.72rem, 1.3vw, 0.8rem);
          margin: 0 0 2px 0;
        }

        .contact-item-value {
          font-weight: 500;
          color: var(--text-h);
          font-size: clamp(0.8rem, 1.5vw, 0.92rem);
          line-height: 1.35;
          display: block;
          overflow-wrap: anywhere !important;
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
          background: var(--white-alpha-04);
          border: 1px solid var(--border);
          border-radius: 9px;
          color: var(--text-h);
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
          box-shadow: 0 0 14px rgba(6, 182, 212, 0.35);
          background: var(--background-alpha-80);
        }

        .neon-input::placeholder {
          color: var(--text-muted);
        }

        select.neon-input option {
          background: var(--navy);
          color: var(--text-h);
        }

        .contact-submit-btn {
          width: 100%;
          padding: clamp(10px, 1.8vw, 13px);
          margin-top: 2px;
          font-size: 0.92rem;
        }

        .contact-spinner {
          display: inline-block;
          width: 14px;
          height: 14px;
          border: 2px solid rgba(255, 255, 255, 0.35);
          border-top-color: #ffffff;
          border-radius: 50%;
          animation: contact-spin 0.8s linear infinite;
        }

        @keyframes contact-spin {
          to {
            transform: rotate(360deg);
          }
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
