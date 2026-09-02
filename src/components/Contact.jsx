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
    <section id="contact" className="section" style={{ position: 'relative' }}>
       {/* Background Glow */}
       <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '300px', height: '300px', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '50%', filter: 'blur(100px)', zIndex: -1 }}></div>

      <div className="section-title">Get In <span className="gradient-text">Touch</span></div>
      <p className="section-subtitle">
        Ready to transform your brand? Let's discuss your next big project.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px', marginTop: '40px' }}>
        
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
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', minHeight: '300px', textAlign: 'center' }}
              >
                <FaCheckCircle style={{ fontSize: '3rem', color: '#22d3ee' }} />
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Message Sent!</h3>
                <p style={{ color: '#94a3b8', margin: 0 }}>We've received your enquiry and will get back to you shortly via WhatsApp.</p>
                <button className="btn btn-outline" onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', phone: '', service: '', message: '' }); }}>
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <input type="text" name="name" placeholder="Your Name" required className="neon-input" value={formState.name} onChange={handleChange} />
                  <input type="email" name="email" placeholder="Your Email" required className="neon-input" value={formState.email} onChange={handleChange} />
                </div>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <input type="tel" name="phone" placeholder="Phone Number" className="neon-input" value={formState.phone} onChange={handleChange} />
                  <select name="service" required value={formState.service} onChange={handleChange} className="neon-input" style={{ appearance: 'none' }}>
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
                <textarea name="message" placeholder="Your Message" rows="5" required className="neon-input" value={formState.message} onChange={handleChange}></textarea>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '15px' }} disabled={sending}>
                  {sending ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
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
          padding: 14px 18px;
          background: rgba(2, 6, 23, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-family: var(--sans);
          font-size: 0.95rem;
          transition: all 0.3s ease;
          outline: none;
          width: 100%;
        }
        .neon-input:focus {
          border-color: var(--cyan);
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.3);
          background: rgba(2, 6, 23, 0.8);
        }
        .neon-input::placeholder { color: #64748b; }
        select.neon-input option { background: var(--navy); color: white; }
        
        @media (max-width: 480px) {
          .neon-input { min-width: unset !important; width: 100% !important; padding: 12px 14px !important; }
          .contact-form > div { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
