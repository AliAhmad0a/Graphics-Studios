import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaPython, FaDocker, FaFigma } from 'react-icons/fa';
import { SiVite, SiTensorflow, SiNextdotjs, SiTailwindcss, SiUnrealengine, SiBlender } from 'react-icons/si';

const AdobeIcon = ({ text }) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" />
    <text x="12" y="16.5" fontFamily="system-ui, -apple-system, sans-serif" fontSize="10.5" fontWeight="800" fill="currentColor" textAnchor="middle">{text}</text>
  </svg>
);

const ChatGPTIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M22.28 9.37a5.52 5.52 0 0 0-.49-4.7 5.7 5.7 0 0 0-3.92-2.73 5.66 5.66 0 0 0-5.74 1.74A5.63 5.63 0 0 0 7.82 2 5.71 5.71 0 0 0 2.6 5.17a5.55 5.55 0 0 0 .7 6.06 5.52 5.52 0 0 0-.48 4.7 5.7 5.7 0 0 0 3.92 2.73A5.66 5.66 0 0 0 12.48 20a5.63 5.63 0 0 0 4.31 1.64 5.71 5.71 0 0 0 5.22-3.17 5.55 5.55 0 0 0-.73-6.1zm-8.8 9.53a4.15 4.15 0 0 1-2.65-.95l.13-.08 4.41-2.55a.8.8 0 0 0 .4-.69v-6.22l1.87 1.08a.07.07 0 0 1 .04.05v5.18a4.18 4.18 0 0 1-4.2 4.18zm-7.7-3.48a4.14 4.14 0 0 1-.5-2.77l.13.08 4.41 2.55a.8.8 0 0 0 .8 0l5.39-3.11v2.16a.07.07 0 0 1-.03.06l-4.49 2.59a4.18 4.18 0 0 1-5.71-1.56zm-1.4-8.31a4.14 4.14 0 0 1 2.15-1.82v5.27a.8.8 0 0 0 .4.69l5.39 3.11-1.87 1.08a.07.07 0 0 1-.07 0L5.9 12.85a4.18 4.18 0 0 1-1.52-5.74zm13.14 2.14L12.13 6.1a.8.8 0 0 0-.8 0L5.94 9.21 4.07 8.13a.07.07 0 0 1-.03-.06l4.49-2.59a4.18 4.18 0 0 1 6.35 2.18zm2.86 4.83a4.14 4.14 0 0 1-2.15 1.82v-5.27a.8.8 0 0 0-.4-.69L12.54 6.8l1.87-1.08a.07.07 0 0 1 .07 0l4.47 2.58a4.18 4.18 0 0 1 1.48 5.76zm-7.53-2.16l-2.4-1.39 2.4-1.39 2.4 1.39z"/>
  </svg>
);

const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M12 2a1 1 0 0 1 1 1v3.27a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm6.36 3.64a1 1 0 0 1 0 1.41l-2.31 2.31a1 1 0 1 1-1.41-1.41l2.31-2.31a1 1 0 0 1 1.41 0zM22 12a1 1 0 0 1-1 1h-3.27a1 1 0 0 1 0-2H21a1 1 0 0 1 1 1zm-3.64 6.36a1 1 0 0 1-1.41 0l-2.31-2.31a1 1 0 0 1 1.41-1.41l2.31 2.31a1 1 0 0 1 0 1.41zM12 22a1 1 0 0 1-1-1v-3.27a1 1 0 0 1 2 0V21a1 1 0 0 1-1 1zm-6.36-3.64a1 1 0 0 1 0-1.41l2.31-2.31a1 1 0 0 1 1.41 1.41l-2.31 2.31a1 1 0 0 1-1.41 0zM2 12a1 1 0 0 1 1-1h3.27a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm3.64-6.36a1 1 0 0 1 1.41 0l2.31 2.31a1 1 0 0 1-1.41 1.41L5.64 7.05a1 1 0 0 1 0-1.41zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/>
  </svg>
);

const GeminiIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M12 2C12 7.52 7.52 12 2 12c5.52 0 10 4.48 10 10 0-5.52 4.48-10 10-10-5.52 0-10-4.48-10-10z" />
  </svg>
);

const FlowAIIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12h7a4 4 0 0 1 4 4v1a3 3 0 0 0 3 3h2" />
    <path d="M4 6h10a4 4 0 0 1 4 4v2" />
    <circle cx="4" cy="12" r="2" fill="currentColor" stroke="none" />
    <circle cx="4" cy="6" r="2" fill="currentColor" stroke="none" />
    <circle cx="20" cy="20" r="2" fill="currentColor" stroke="none" />
  </svg>
);

const StitchAIIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6" width="18" height="12" rx="4" fill="currentColor" fillOpacity="0.15" />
    <path d="M7 3v6M12 3v6M17 3v6" />
    <path d="M7 15v6M12 15v6M17 15v6" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const DeepSeekIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4 21l3.5-.96C9.01 20.64 10.45 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 4.5c2.48 0 4.5 2.02 4.5 4.5s-2.02 4.5-4.5 4.5-4.5-2.02-4.5-4.5 2.02-4.5 4.5-4.5z"/>
  </svg>
);

const MidjourneyIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M3 17l4-11 5 11-4-2-5 2zm9-3l3-8 6 12-5-2-4-2z"/>
  </svg>
);

const RunwayIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M4 4h7a5 5 0 0 1 5 5 5 5 0 0 1-3.2 4.65L17.5 20h-3.6l-4.2-5.7H7.5V20H4V4zm3.5 3.3v3.7h3.2a1.85 1.85 0 0 0 0-3.7H7.5z"/>
  </svg>
);

const ElevenLabsIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <rect x="7" y="4" width="3.5" height="16" rx="1.75" />
    <rect x="13.5" y="4" width="3.5" height="16" rx="1.75" />
  </svg>
);

const PerplexityIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M12 2a1 1 0 0 1 1 1v4.06l3.4-3.4a1 1 0 0 1 1.41 1.41L14.41 8.5H19a1 1 0 1 1 0 2h-4.06l3.4 3.4a1 1 0 0 1-1.41 1.41l-3.4-3.4V16a1 1 0 1 1-2 0v-4.09l-3.4 3.4a1 1 0 0 1-1.41-1.41l3.4-3.4H5a1 1 0 1 1 0-2h4.09l-3.4-3.4A1 1 0 0 1 7.1 4.69l3.4 3.4V3a1 1 0 0 1 1-1z"/>
  </svg>
);

const StableDiffusionIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5zM6 6l1.25 3.75L11 11l-3.75 1.25L6 16l-1.25-3.75L1 11l3.75-1.25z"/>
  </svg>
);

const SoraIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M12 2l2.8 6.4L21 11.2l-5.6 4.4 1.7 6.8L12 18.5l-5.1 3.9 1.7-6.8L3 11.2l6.2-2.8z"/>
  </svg>
);

const techData = [
  // Next-Gen AI Models
  { icon: <ChatGPTIcon />, name: 'ChatGPT', color: '#10a37f', category: 'ai' },
  { icon: <ClaudeIcon />, name: 'Claude', color: '#d97706', category: 'ai' },
  { icon: <GeminiIcon />, name: 'Gemini', color: '#38bdf8', category: 'ai' },
  { icon: <FlowAIIcon />, name: 'Google Flow AI', color: '#06b6d4', category: 'ai' },
  { icon: <StitchAIIcon />, name: 'Stitch AI', color: '#ec4899', category: 'ai' },
  { icon: <DeepSeekIcon />, name: 'DeepSeek', color: '#3b82f6', category: 'ai' },
  { icon: <MidjourneyIcon />, name: 'Midjourney', color: '#60a5fa', category: 'ai' },
  { icon: <RunwayIcon />, name: 'Runway ML', color: '#a855f7', category: 'ai' },
  { icon: <ElevenLabsIcon />, name: 'ElevenLabs', color: '#f59e0b', category: 'ai' },
  { icon: <PerplexityIcon />, name: 'Perplexity', color: '#2dd4bf', category: 'ai' },
  { icon: <StableDiffusionIcon />, name: 'Stable Diffusion', color: '#8b5cf6', category: 'ai' },
  { icon: <SoraIcon />, name: 'Sora', color: '#f43f5e', category: 'ai' },

  // Development & Cloud
  { icon: <FaReact />, name: 'React', color: 'var(--cyan)', category: 'dev' },
  { icon: <SiNextdotjs />, name: 'Next.js', color: 'var(--strong-text)', category: 'dev' },
  { icon: <FaNodeJs />, name: 'Node.js', color: '#339933', category: 'dev' },
  { icon: <FaPython />, name: 'Python', color: 'var(--blue)', category: 'dev' },
  { icon: <SiTensorflow />, name: 'TensorFlow', color: '#FF6F00', category: 'dev' },
  { icon: <FaAws />, name: 'AWS', color: '#FF9900', category: 'dev' },
  { icon: <FaDocker />, name: 'Docker', color: 'var(--blue)', category: 'dev' },
  { icon: <SiVite />, name: 'Vite', color: 'var(--blue)', category: 'dev' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: 'var(--cyan)', category: 'dev' },

  // Design, 3D & Media
  { icon: <SiUnrealengine />, name: 'Unreal Engine', color: 'var(--strong-text)', category: 'design' },
  { icon: <SiBlender />, name: 'Blender', color: '#F5792A', category: 'design' },
  { icon: <FaFigma />, name: 'Figma', color: '#F24E1E', category: 'design' },
  { icon: <AdobeIcon text="Ps" />, name: 'Photoshop', color: 'var(--blue)', category: 'design' },
  { icon: <AdobeIcon text="Ai" />, name: 'Illustrator', color: '#FF9A00', category: 'design' },
  { icon: <AdobeIcon text="Pr" />, name: 'Premiere Pro', color: '#9999FF', category: 'design' },
  { icon: <AdobeIcon text="Ae" />, name: 'After Effects', color: '#9999FF', category: 'design' },
  { icon: <AdobeIcon text="Lr" />, name: 'Lightroom', color: 'var(--blue)', category: 'design' },
  { icon: <AdobeIcon text="Id" />, name: 'InDesign', color: '#FF3366', category: 'design' },
  { icon: <AdobeIcon text="Xd" />, name: 'Adobe XD', color: '#FF61F6', category: 'design' }
];

const categories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'ai', label: '⚡ AI & Next-Gen Models' },
  { id: 'dev', label: '💻 Code & Cloud' },
  { id: 'design', label: '🎨 Design & Media' }
];

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTech = activeCategory === 'all' 
    ? techData 
    : techData.filter(t => t.category === activeCategory);

  return (
    <section id="tech-stack" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div 
        initial={{ opacity: 0, y: 25 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '960px', margin: '0 auto', boxSizing: 'border-box' }}
      >
        <div className="section-title">Powered by <span className="gradient-text">Next-Gen Tech</span></div>
        <p className="section-subtitle">
          We integrate frontier AI foundation models, industry-standard creative tools, and enterprise cloud frameworks to engineer next-level digital products.
        </p>

        {/* Category Filter Pills */}
        <div className="tech-filter-pills">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`tech-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div layout className="tech-grid-container">
        <AnimatePresence mode="popLayout">
          {filteredTech.map((tech) => (
            <motion.div
              layout
              key={tech.name}
              className={`glass-card tech-card ${tech.category === 'ai' ? 'ai-model-card' : ''}`}
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 15 }}
              transition={{ duration: 0.28 }}
              whileHover={{ scale: 1.12, y: -6, borderColor: tech.color }}
              whileTap={{ scale: 0.95 }}
            >
              {tech.category === 'ai' && <span className="ai-tag">AI</span>}
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
        </AnimatePresence>
      </motion.div>

      <style>{`
        .tech-filter-pills {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 18px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }

        .tech-pill-btn {
          padding: 7px 16px;
          border-radius: 9999px;
          font-size: 0.84rem;
          font-weight: 600;
          cursor: pointer;
          border: 1px solid var(--border);
          background: var(--glass);
          color: var(--text-muted);
          transition: all 0.25s ease;
          backdrop-filter: blur(10px);
        }

        .tech-pill-btn:hover {
          color: var(--strong-text);
          border-color: var(--blue);
          transform: translateY(-1px);
        }

        .tech-pill-btn.active {
          background: var(--blue);
          color: #ffffff;
          border-color: var(--blue);
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
        }

        .ai-model-card {
          position: relative;
        }

        .ai-tag {
          position: absolute;
          top: 4px;
          right: 4px;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.5px;
          padding: 1px 4px;
          border-radius: 4px;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2));
          color: var(--cyan);
          border: 1px solid rgba(6, 182, 212, 0.4);
          line-height: 1.1;
        }

        [data-theme="light"] .ai-tag {
          background: rgba(37, 99, 235, 0.12);
          color: #1d4ed8;
          border-color: rgba(37, 99, 235, 0.3);
        }

        [data-theme="light"] .tech-pill-btn {
          background: #ffffff;
          color: #475569;
          border-color: rgba(15, 23, 42, 0.1);
        }

        [data-theme="light"] .tech-pill-btn.active {
          background: #2563eb;
          color: #ffffff;
          border-color: #2563eb;
        }

        .tech-grid-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: clamp(8px, 1.8vw, 14px);
          max-width: 960px;
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
