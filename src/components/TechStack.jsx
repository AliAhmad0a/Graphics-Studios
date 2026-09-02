import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaPython, FaDocker, FaFigma } from 'react-icons/fa';
import { SiVite, SiTensorflow, SiNextdotjs, SiTailwindcss, SiUnrealengine, SiBlender } from 'react-icons/si';

const techData = [
  { icon: <FaReact />, name: 'React', color: '#61DAFB' },
  { icon: <SiNextdotjs />, name: 'Next.js', color: '#ffffff' },
  { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
  { icon: <FaPython />, name: 'Python', color: '#3776AB' },
  { icon: <SiTensorflow />, name: 'TensorFlow', color: '#FF6F00' },
  { icon: <FaAws />, name: 'AWS', color: '#FF9900' },
  { icon: <FaDocker />, name: 'Docker', color: '#2496ED' },
  { icon: <SiVite />, name: 'Vite', color: '#646CFF' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: '#06B6D4' },
  { icon: <SiUnrealengine />, name: 'Unreal Engine', color: '#ffffff' },
  { icon: <SiBlender />, name: 'Blender', color: '#F5792A' },
  { icon: <FaFigma />, name: 'Figma', color: '#F24E1E' }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="section" style={{ position: 'relative' }}>
      <motion.div 
        initial={{ opacity: 0, y: 25 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}
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
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03, type: 'spring', stiffness: 220, damping: 22 }}
          >
            <div className="tech-icon" style={{ color: tech.color }}>
              {tech.icon}
            </div>
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
          max-width: 860px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
        }

        .tech-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: clamp(74px, 10vw, 92px);
          height: clamp(74px, 10vw, 92px);
          cursor: pointer;
          transition: border-color 0.25s ease, transform 0.25s ease;
          border-radius: clamp(10px, 1.8vw, 14px);
          padding: 8px 6px;
          box-sizing: border-box;
          flex-shrink: 0;
        }

        .tech-icon {
          font-size: clamp(1.6rem, 3vw, 2.1rem);
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease;
        }

        .tech-card:hover .tech-icon {
          transform: scale(1.12);
        }

        .tech-name {
          font-size: clamp(0.68rem, 1.4vw, 0.76rem);
          font-weight: 600;
          color: var(--text-main);
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }

        @media (max-width: 480px) {
          .tech-grid-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
          }
          .tech-card {
            width: 100%;
            height: 76px;
          }
        }

        @media (max-width: 360px) {
          .tech-grid-container {
            grid-template-columns: repeat(3, 1fr);
            gap: 7px;
          }
          .tech-card {
            height: 72px;
          }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
