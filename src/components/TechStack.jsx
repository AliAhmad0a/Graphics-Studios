import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaPython, FaDocker, FaFigma } from 'react-icons/fa';
import { SiVite, SiTensorflow, SiNextdotjs, SiTailwindcss, SiUnrealengine, SiBlender } from 'react-icons/si';

const AdobeIcon = ({ text }) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
    <text x="12" y="16.5" fontFamily="system-ui, -apple-system, sans-serif" fontSize="10.5" fontWeight="800" fill="currentColor" textAnchor="middle">{text}</text>
  </svg>
);

const techData = [
  { icon: <FaReact />, name: 'React', color: 'var(--cyan)' },
  { icon: <SiNextdotjs />, name: 'Next.js', color: 'var(--strong-text)' },
  { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
  { icon: <FaPython />, name: 'Python', color: 'var(--blue)' },
  { icon: <SiTensorflow />, name: 'TensorFlow', color: '#FF6F00' },
  { icon: <FaAws />, name: 'AWS', color: '#FF9900' },
  { icon: <FaDocker />, name: 'Docker', color: 'var(--blue)' },
  { icon: <SiVite />, name: 'Vite', color: 'var(--blue)' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: 'var(--cyan)' },
  { icon: <SiUnrealengine />, name: 'Unreal Engine', color: 'var(--strong-text)' },
  { icon: <SiBlender />, name: 'Blender', color: '#F5792A' },
  { icon: <FaFigma />, name: 'Figma', color: '#F24E1E' },
  { icon: <AdobeIcon text="Ps" />, name: 'Photoshop', color: 'var(--blue)' },
  { icon: <AdobeIcon text="Ai" />, name: 'Illustrator', color: '#FF9A00' },
  { icon: <AdobeIcon text="Pr" />, name: 'Premiere Pro', color: '#9999FF' },
  { icon: <AdobeIcon text="Ae" />, name: 'After Effects', color: '#9999FF' },
  { icon: <AdobeIcon text="Lr" />, name: 'Lightroom', color: 'var(--blue)' },
  { icon: <AdobeIcon text="Id" />, name: 'InDesign', color: '#FF3366' },
  { icon: <AdobeIcon text="Xd" />, name: 'Adobe XD', color: '#FF61F6' }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div 
        initial={{ opacity: 0, y: 25 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '900px', margin: '0 auto', boxSizing: 'border-box' }}
      >
        <div className="section-title">Powered by <span className="gradient-text">Next-Gen Tech</span></div>
        <p className="section-subtitle">
          We leverage industry-leading tools and cutting-edge frameworks to build scalable, high-performance digital experiences.
        </p>
      </motion.div>

      <div className="tech-grid-container">
        {techData.map((tech, index) => (
          <motion.div
            key={index}
            className="glass-card tech-card"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.035, type: 'spring', stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.12, y: -6, borderColor: tech.color }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="tech-icon" 
              style={{ color: tech.color }}
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.4 }}
            >
              {tech.icon}
            </motion.div>
            <span className="tech-name">{tech.name}</span>
          </motion.div>
        ))}
      </div>

      <style>{`
        .tech-grid-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: clamp(8px, 1.8vw, 14px);
          max-width: 900px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
        }

        .tech-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: clamp(70px, 9.5vw, 90px);
          height: clamp(70px, 9.5vw, 90px);
          cursor: pointer;
          border-radius: clamp(10px, 1.8vw, 14px);
          padding: 8px 4px;
          box-sizing: border-box;
          flex-shrink: 0;
          min-width: 0;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .tech-icon {
          font-size: clamp(1.45rem, 3vw, 2rem);
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease;
          flex-shrink: 0;
        }

        .tech-name {
          font-size: clamp(0.68rem, 1.3vw, 0.78rem);
          font-weight: 600;
          color: var(--text-main);
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }

        @media (max-width: 600px) {
          .tech-grid-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
            width: 100%;
          }
          .tech-card {
            width: 100%;
            height: 72px;
          }
        }

        @media (max-width: 360px) {
          .tech-grid-container {
            grid-template-columns: repeat(3, 1fr);
            gap: 6px;
          }
          .tech-card {
            height: 68px;
          }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
