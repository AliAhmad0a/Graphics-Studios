import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import imgTeam from '../assets/images/team_workspace_1788284064043.jpg';
import imgSafia from '../assets/safia_mukhtar.jpg';
import imgElena from '../assets/elena.jpg';
import imgMarcus from '../assets/marcus.jpg';
import imgSarah from '../assets/sarah.jpg';
import imgAisha from '../assets/aisha.jpg';
import imgDavid from '../assets/david.jpg';
import imgLiam from '../assets/liam.jpg';

const teamMembers = [
  { name: "Haiqa", role: "Graphic Designer", detail: "Crafting stunning visual identities and creative digital graphics.", image: imgElena, link: "https://www.behance.net/haiqazarbakht" },
  { name: "Esha", role: "Graphic Designer", detail: "Designing visually striking and engaging brand graphics.", image: imgSarah, link: "https://www.linkedin.com/in/esha-imran-794b2a274/" },
  { name: "Sarah Jenkins", role: "Digital Marketing", detail: "Scaling brands through data-driven performance strategies.", image: imgSarah },
  { name: "Dr. Aisha Rahman", role: "AI Solutions", detail: "Architecting next-generation artificial intelligence systems.", image: imgAisha },
  { name: "David Kim", role: "Web Developer", detail: "Building robust, scalable full-stack web applications.", image: imgDavid },
  { name: "Liam O'Connor", role: "3D Designer", detail: "Pushing boundaries with immersive 3D and WebGL environments.", image: imgLiam }
];

const TeamCard = ({ name, role, detail, image, link, delay }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onClick={() => { if(link) window.open(link, '_blank'); }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="vision-pro-glass"
        style={{ padding: '30px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', rotateX, rotateY, borderRadius: '24px', cursor: 'pointer', height: '100%', position: 'relative', overflow: 'hidden' }}
        whileHover={{ scale: 1.05, borderColor: "rgba(59,130,246,0.5)" }}
      >
        <div className="team-glow"></div>
        <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translateZ(30px)', overflow: 'hidden', padding: '3px', border: '2px solid rgba(59, 130, 246, 0.3)' }}>
          <img src={image} alt={name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
        </div>
        <div style={{ transform: 'translateZ(40px)' }}>
          <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '5px' }}>{name}</h4>
          <div style={{ fontSize: '0.85rem', color: '#3b82f6', fontWeight: '500', marginBottom: '10px' }}>{role}</div>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>{detail}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <section id="team" className="section" style={{ position: 'relative' }}>
      <div className="section-title">Meet Our <span className="gradient-text">Creative Team</span></div>
      <p className="section-subtitle">
        The passionate minds behind Graphics Studios Media Agency.
      </p>

      {/* Founder Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="vision-pro-glass founder-card" 
        style={{ maxWidth: '850px', margin: '0 auto 60px auto', display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap', borderRadius: '30px', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '400px', height: '400px', background: 'rgba(59, 130, 246, 0.1)', filter: 'blur(100px)' }}></div>
        
        <div style={{ width: '180px', height: '180px', borderRadius: '50%', background: 'linear-gradient(135deg, #3b82f6, #0a42db)', padding: '4px', flexShrink: 0, margin: '0 auto', position: 'relative' }}>
          <img src={imgSafia} alt="Safia Mukhtar Kayani" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: 1, textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h3 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Safia Mukhtar Kayani</h3>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
            <span style={{ padding: '6px 16px', background: 'rgba(59,130,246,0.1)', borderRadius: '20px', fontSize: '0.9rem', color: '#60a5fa', border: '1px solid rgba(59,130,246,0.2)' }}>Founder</span>
            <span style={{ padding: '6px 16px', background: 'rgba(59,130,246,0.1)', borderRadius: '20px', fontSize: '0.9rem', color: '#60a5fa', border: '1px solid rgba(59,130,246,0.2)' }}>Creative Director</span>
          </div>
          <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '25px' }}>
            Creative Graphics Designer leading the agency's vision. Dedicated to building a premium environment where technology and art seamlessly blend.
          </p>
          <a 
            href="https://safia-blond-psi.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '8px 24px', fontSize: '0.95rem' }}
          >
            View My Portfolio
          </a>
        </div>
      </motion.div>

      {/* Teams Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', position: 'relative', zIndex: 1 }}>
        {teamMembers.map((member, index) => (
          <TeamCard 
            key={index} 
            name={member.name} 
            role={member.role} 
            detail={member.detail} 
            image={member.image} 
            link={member.link}
            delay={index * 0.1} 
          />
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        style={{ marginTop: '80px', borderRadius: '30px', overflow: 'hidden', height: '450px', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }} 
        className="glass-card"
      >
         <img src={imgTeam} alt="Our Team Workspace" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
      </motion.div>

      <style>{`
        .team-glow { position: absolute; top: 0; right: 0; width: 100px; height: 100px; background: radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%); opacity: 0; transition: opacity 0.3s; }
        .vision-pro-glass:hover .team-glow { opacity: 1; }
        .founder-card { padding: 50px; }
        @media (max-width: 768px) {
          .founder-card { padding: 30px 20px; flex-direction: column; gap: 20px; }
          .founder-card h3 { font-size: 2rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Team;
