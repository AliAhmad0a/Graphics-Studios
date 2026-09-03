import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import imgTeam from '../assets/images/team_workspace_1788284064043.jpg';
import imgSafia from '../assets/safia_mukhtar.jpg';
import imgElena from '../assets/elena.jpg';
import imgSarah from '../assets/sarah.jpg';
import imgAisha from '../assets/aisha.jpg';
import imgDavid from '../assets/david.jpg';
import imgLiam from '../assets/liam.jpg';
import imgLaiba from '../assets/laiba.jpg';
import imgAli from '../assets/ali.jpg';

const teamMembers = [
  { name: "Haiqa", role: "Graphic Designer", detail: "Crafting stunning visual identities and creative digital graphics.", image: imgElena, link: "https://www.behance.net/haiqazarbakht" },
  { name: "Esha", role: "Graphic Designer", detail: "Designing visually striking and engaging brand graphics.", image: imgSarah, link: "https://www.linkedin.com/in/esha-imran-794b2a274/" },
  { name: "Sarah Jenkins", role: "Digital Marketing", detail: "Scaling brands through data-driven performance strategies.", image: imgSarah },
  { name: "Dr. Aisha Rahman", role: "AI Solutions", detail: "Architecting next-generation artificial intelligence systems.", image: imgAisha },
  { name: "David Kim", role: "Web Developer", detail: "Building robust, scalable full-stack web applications.", image: imgDavid },
  { name: "Liam O'Connor", role: "3D Designer", detail: "Pushing boundaries with immersive 3D and WebGL environments.", image: imgLiam },
  { name: "Laiba Shehzad", role: "Digital Marketer", detail: "Developing and executing innovative digital marketing campaigns.", image: imgLaiba, link: "https://la-five-olive.vercel.app/" },
  { name: "Ali Ahmad", role: "Website And App Developer", detail: "Building engaging and functional websites and applications.", image: imgAli, link: "https://my-portfolio-th1n.vercel.app/" }
];

const TeamCard = ({ name, role, detail, image, link, delay }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 25 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
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
        whileHover={{ y: -6, borderColor: "rgba(59,130,246,0.5)", boxShadow: '0 16px 36px rgba(59, 130, 246, 0.2)' }}
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
    <section id="team" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-title">Meet Our <span className="gradient-text">Creative Team</span></div>
        <p className="section-subtitle">
          The passionate minds behind Graphics Studios Media Agency.
        </p>
      </motion.div>

      {/* Founder Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.96 }} 
        whileInView={{ opacity: 1, y: 0, scale: 1 }} 
        viewport={{ once: true, margin: "-40px" }} 
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ borderColor: 'rgba(59, 130, 246, 0.45)', boxShadow: '0 20px 45px rgba(59, 130, 246, 0.18)' }}
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
          <motion.a 
            href="https://safia-blond-psi.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary founder-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            View My Portfolio →
          </motion.a>
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
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, margin: "-40px" }} 
        transition={{ duration: 0.65 }}
        whileHover={{ scale: 1.01 }}
        className="glass-card team-workspace"
      >
         <img src={imgTeam} alt="Our Team Workspace" className="team-workspace-img" />
      </motion.div>

      <style>{`
        .founder-card {
          max-width: min(100%, 820px);
          margin: 0 auto clamp(24px, 4vw, 42px) auto;
          display: flex;
          gap: clamp(16px, 3vw, 30px);
          align-items: center;
          border-radius: clamp(14px, 3vw, 22px);
          position: relative;
          overflow: hidden !important;
          padding: clamp(18px, 3.5vw, 36px);
          box-sizing: border-box;
          width: 100%;
          transition: all 0.35s ease;
        }

        .founder-bg-glow {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 60%);
          pointer-events: none;
          clip-path: inset(0);
          -webkit-clip-path: inset(0);
        }

        .founder-image-wrapper {
          width: clamp(90px, 14vw, 130px);
          height: clamp(90px, 14vw, 130px);
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #00d9ff);
          padding: 3px;
          flex-shrink: 0;
          position: relative;
          box-sizing: border-box;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
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
          min-width: 0;
        }

        .founder-name {
          font-size: clamp(1.2rem, 2.5vw, 1.8rem);
          margin-bottom: 5px;
          font-weight: 700;
          line-height: 1.2;
          overflow-wrap: break-word;
        }

        .founder-badges {
          display: flex;
          gap: 7px;
          flex-wrap: wrap;
          margin-bottom: clamp(9px, 1.8vw, 14px);
        }

        .founder-badge {
          padding: 3px 11px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 16px;
          font-size: clamp(0.72rem, 1.4vw, 0.82rem);
          color: var(--cyan);
          border: 1px solid rgba(59, 130, 246, 0.2);
          font-weight: 500;
        }

        .founder-bio {
          color: var(--text-main);
          line-height: 1.5;
          font-size: clamp(0.82rem, 1.5vw, 0.95rem);
          margin-bottom: clamp(12px, 2vw, 18px);
          overflow-wrap: break-word;
        }

        .founder-btn {
          padding: 8px 18px;
          font-size: 0.85rem;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 240px), 1fr));
          gap: clamp(12px, 2vw, 18px);
          position: relative;
          z-index: 1;
          max-width: 1140px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
        }

        .team-card-outer {
          perspective: 1000px;
          -webkit-perspective: 1000px;
          height: 100%;
          display: flex;
          width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        .team-card {
          padding: clamp(15px, 2.2vw, 20px);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          border-radius: clamp(12px, 2vw, 16px);
          cursor: pointer;
          height: 100%;
          width: 100%;
          min-width: 0;
          position: relative;
          overflow: hidden !important;
          box-sizing: border-box;
          transform-style: preserve-3d;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .team-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 75px;
          height: 75px;
          background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }

        .team-card:hover .team-glow {
          opacity: 1;
        }

        .team-avatar-wrapper {
          width: clamp(56px, 9vw, 70px);
          height: clamp(56px, 9vw, 70px);
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 2px;
          border: 1.5px solid rgba(59, 130, 246, 0.3);
          flex-shrink: 0;
          transition: transform 0.4s ease, border-color 0.4s ease;
        }

        .team-card:hover .team-avatar-wrapper {
          transform: scale(1.08);
          border-color: var(--cyan);
          box-shadow: 0 0 14px rgba(34, 211, 238, 0.3);
        }

        .team-avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .team-info {
          width: 100%;
          min-width: 0;
        }

        .team-member-name {
          font-size: clamp(0.92rem, 1.7vw, 1.08rem);
          font-weight: 600;
          margin-bottom: 2px;
          overflow-wrap: break-word;
        }

        .team-member-role {
          font-size: 0.78rem;
          color: var(--blue);
          font-weight: 600;
          margin-bottom: 5px;
          transition: color 0.2s ease;
        }

        .team-card:hover .team-member-role {
          color: var(--cyan);
        }

        .team-member-detail {
          font-size: clamp(0.76rem, 1.4vw, 0.86rem);
          color: var(--text-main);
          line-height: 1.42;
          margin: 0;
          overflow-wrap: break-word;
        }

        .team-workspace {
          margin-top: clamp(24px, 4vw, 40px);
          border-radius: clamp(14px, 2.5vw, 20px);
          overflow: hidden !important;
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.4);
          height: clamp(145px, 20vw, 270px);
          width: 100%;
          max-width: min(100%, 980px);
          margin-left: auto;
          margin-right: auto;
          box-sizing: border-box;
          transition: transform 0.5s ease;
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
            padding: 20px 14px;
          }
          .founder-content {
            text-align: center;
          }
          .founder-badges {
            justify-content: center;
          }
        }

        @media (max-width: 520px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .team-card {
            padding: 12px 8px;
          }
        }

        @media (max-width: 340px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;
