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
      transition={{ duration: 0.4, delay }}
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
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.5 }}
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
        initial={{ opacity: 0, y: 25 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6 }}
        className="glass-card team-workspace"
      >
         <img src={imgTeam} alt="Our Team Workspace" className="team-workspace-img" />
      </motion.div>

      <style>{`
        .founder-card {
          max-width: 620px;
          margin: 0 auto clamp(22px, 3vw, 36px) auto;
          display: flex;
          gap: clamp(14px, 2.5vw, 24px);
          align-items: center;
          border-radius: clamp(14px, 2.5vw, 20px);
          position: relative;
          overflow: hidden;
          padding: clamp(16px, 2.8vw, 30px);
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
          width: clamp(78px, 11vw, 105px);
          height: clamp(78px, 11vw, 105px);
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #0a42db);
          padding: 2.5px;
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
          font-size: clamp(1.05rem, 2vw, 1.45rem);
          margin-bottom: 4px;
          font-weight: 700;
          line-height: 1.2;
        }

        .founder-badges {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          margin-bottom: clamp(8px, 1.5vw, 11px);
        }

        .founder-badge {
          padding: 2px 9px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 14px;
          font-size: clamp(0.62rem, 1.2vw, 0.68rem);
          color: #60a5fa;
          border: 1px solid rgba(59, 130, 246, 0.2);
          font-weight: 500;
        }

        .founder-bio {
          color: #94a3b8;
          line-height: 1.45;
          font-size: clamp(0.68rem, 1.2vw, 0.76rem);
          margin-bottom: clamp(10px, 1.6vw, 14px);
        }

        .founder-btn {
          padding: 6px 14px;
          font-size: 0.68rem;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 175px), 1fr));
          gap: clamp(10px, 1.6vw, 14px);
          position: relative;
          z-index: 1;
          max-width: 900px;
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
          padding: clamp(12px, 2vw, 16px);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          border-radius: clamp(10px, 1.6vw, 14px);
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
          width: 60px;
          height: 60px;
          background: radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .team-card:hover .team-glow {
          opacity: 1;
        }

        .team-avatar-wrapper {
          width: clamp(46px, 7vw, 56px);
          height: clamp(46px, 7vw, 56px);
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 2px;
          border: 1.5px solid rgba(59, 130, 246, 0.3);
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
          font-size: clamp(0.76rem, 1.4vw, 0.86rem);
          font-weight: 600;
          margin-bottom: 2px;
        }

        .team-member-role {
          font-size: 0.62rem;
          color: #3b82f6;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .team-member-detail {
          font-size: clamp(0.62rem, 1.1vw, 0.68rem);
          color: #94a3b8;
          line-height: 1.4;
          margin: 0;
        }

        .team-workspace {
          margin-top: clamp(20px, 3vw, 34px);
          border-radius: clamp(12px, 2vw, 18px);
          overflow: hidden;
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);
          height: clamp(120px, 17vw, 220px);
          width: 100%;
          max-width: 800px;
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
            padding: 18px 12px;
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
            gap: 8px;
          }
          .team-card {
            padding: 10px 6px;
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
