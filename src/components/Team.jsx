import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import imgTeam from '../assets/images/team_workspace_1788284064043.jpg';
import imgSafia from '../assets/safia_mukhtar.jpg';
import imgElena from '../assets/elena.jpg';
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
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      onClick={() => { if(link) window.open(link, '_blank'); }}
      onMouseMove={(e) => {
        if (window.innerWidth < 1024) return;
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="team-card-outer"
    >
      <motion.div
        className="vision-pro-glass team-card"
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.02, borderColor: "rgba(59,130,246,0.4)" }}
      >
        <div className="team-glow"></div>
        <div className="team-avatar-wrapper">
          <img src={image} alt={name} className="team-avatar-img" />
        </div>
        <div className="team-info">
          <h4 className="team-member-name">{name}</h4>
          <div className="team-member-role">{role}</div>
          <p className="team-member-detail">{detail}</p>
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
        initial={{ opacity: 0, y: 26 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.55 }}
        className="vision-pro-glass founder-card"
      >
        <div className="founder-bg-glow"></div>
        
        <div className="founder-image-wrapper">
          <img src={imgSafia} alt="Safia Mukhtar Kayani" className="founder-img" />
        </div>
        
        <div className="founder-content">
          <h3 className="founder-name">Safia Mukhtar Kayani</h3>
          <div className="founder-badges">
            <span className="founder-badge">Founder</span>
            <span className="founder-badge">Creative Director</span>
          </div>
          <p className="founder-bio">
            Creative Graphics Designer leading the agency's vision. Dedicated to building a premium environment where technology and art seamlessly blend.
          </p>
          <a 
            href="https://safia-blond-psi.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary founder-btn"
          >
            View My Portfolio
          </a>
        </div>
      </motion.div>

      {/* Teams Grid */}
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <TeamCard 
            key={index} 
            name={member.name} 
            role={member.role} 
            detail={member.detail} 
            image={member.image} 
            link={member.link}
            delay={index * 0.05} 
          />
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 32 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.65 }}
        className="glass-card team-workspace"
      >
         <img src={imgTeam} alt="Our Team Workspace" className="team-workspace-img" />
      </motion.div>

      <style>{`
        .founder-card {
          max-width: 880px;
          margin: 0 auto clamp(30px, 4.5vw, 50px) auto;
          display: flex;
          gap: clamp(20px, 3.5vw, 36px);
          align-items: center;
          border-radius: clamp(18px, 3.5vw, 26px);
          position: relative;
          overflow: hidden;
          padding: clamp(22px, 4vw, 42px);
          box-sizing: border-box;
          width: 100%;
        }

        .founder-bg-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 60%);
          pointer-events: none;
        }

        .founder-image-wrapper {
          width: clamp(115px, 16vw, 150px);
          height: clamp(115px, 16vw, 150px);
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #0a42db);
          padding: 3.5px;
          flex-shrink: 0;
          position: relative;
          box-sizing: border-box;
        }

        .founder-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .founder-content {
          flex: 1;
          text-align: left;
          position: relative;
          z-index: 1;
        }

        .founder-name {
          font-size: clamp(1.45rem, 2.8vw, 2.05rem);
          margin-bottom: 6px;
          font-weight: 700;
          line-height: 1.2;
        }

        .founder-badges {
          display: flex;
          gap: 9px;
          flex-wrap: wrap;
          margin-bottom: clamp(11px, 2vw, 16px);
        }

        .founder-badge {
          padding: 4px 13px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 18px;
          font-size: clamp(0.85rem, 1.6vw, 0.94rem);
          color: #60a5fa;
          border: 1px solid rgba(59, 130, 246, 0.2);
          font-weight: 500;
        }

        .founder-bio {
          color: #94a3b8;
          line-height: 1.55;
          font-size: clamp(0.95rem, 1.7vw, 1.08rem);
          margin-bottom: clamp(14px, 2.2vw, 20px);
        }

        .founder-btn {
          padding: 9px 20px;
          font-size: 0.96rem;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 250px), 1fr));
          gap: clamp(14px, 2.2vw, 20px);
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .team-card-outer {
          perspective: 1000px;
          -webkit-perspective: 1000px;
          height: 100%;
          display: flex;
        }

        .team-card {
          padding: clamp(18px, 2.6vw, 24px);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 9px;
          border-radius: clamp(14px, 2.2vw, 20px);
          cursor: pointer;
          height: 100%;
          width: 100%;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          transform-style: preserve-3d;
        }

        .team-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 85px;
          height: 85px;
          background: radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .team-card:hover .team-glow {
          opacity: 1;
        }

        .team-avatar-wrapper {
          width: clamp(66px, 10vw, 80px);
          height: clamp(66px, 10vw, 80px);
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 2.5px;
          border: 2px solid rgba(59, 130, 246, 0.3);
          flex-shrink: 0;
        }

        .team-avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .team-info {
          width: 100%;
        }

        .team-member-name {
          font-size: clamp(1.06rem, 1.9vw, 1.22rem);
          font-weight: 600;
          margin-bottom: 3px;
        }

        .team-member-role {
          font-size: 0.88rem;
          color: #3b82f6;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .team-member-detail {
          font-size: clamp(0.88rem, 1.5vw, 0.98rem);
          color: #94a3b8;
          line-height: 1.45;
          margin: 0;
        }

        .team-workspace {
          margin-top: clamp(28px, 4.5vw, 48px);
          border-radius: clamp(16px, 2.6vw, 24px);
          overflow: hidden;
          box-shadow: 0 22px 45px rgba(0, 0, 0, 0.4);
          height: clamp(170px, 24vw, 310px);
          width: 100%;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
        }

        .team-workspace-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.88;
        }

        @media (max-width: 768px) {
          .founder-card {
            flex-direction: column;
            text-align: center;
            padding: 24px 16px;
          }
          .founder-content {
            text-align: center;
          }
          .founder-badges {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 11px;
          }
          .team-card {
            padding: 14px 9px;
          }
        }

        @media (max-width: 320px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;
