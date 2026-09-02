import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const Bubble = ({ layer }) => {
  // Config based on layer
  const isBg = layer === 'bg';
  const isMid = layer === 'mid';
  
  // Randomize attributes
  const size = useMemo(() => {
    if (isBg) return Math.random() * 2 + 1; // 1px-3px
    if (isMid) return Math.random() * 7 + 5; // 5px-12px
    return Math.random() * 15 + 15; // 15px-30px (Foreground)
  }, [layer]);

  const left = useMemo(() => Math.random() * 100, []);
  const animationDuration = useMemo(() => Math.random() * 15 + (isBg ? 25 : isMid ? 15 : 10), [isBg, isMid]);
  const delay = useMemo(() => Math.random() * -30, []);
  
  const blur = isBg ? 'blur(3px)' : isMid ? 'blur(1px)' : 'blur(0px)';
  const opacity = isBg ? 0.3 : isMid ? 0.6 : 0.8;
  const zIndex = isBg ? 1 : isMid ? 2 : 3;
  
  return (
    <div
      className="floating-bubble"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}vw`,
        animationDuration: `${animationDuration}s`,
        animationDelay: `${delay}s`,
        filter: blur,
        opacity: opacity,
        zIndex: zIndex
      }}
    >
      <div className="bubble-glass"></div>
    </div>
  );
};

const AnimatedBubbleBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20, // -10 to 10
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bubble-bg-container">
      <div className="bubble-gradient-bg"></div>

      <motion.div 
        animate={{ x: mousePos.x * -1, y: mousePos.y * -1 }} 
        transition={{ type: "spring", damping: 50, stiffness: 100 }}
        className="bubble-layer"
      >
        {Array.from({ length: 60 }).map((_, i) => <Bubble key={`bg-${i}`} layer="bg" />)}
      </motion.div>

      <motion.div 
        animate={{ x: mousePos.x * -2, y: mousePos.y * -2 }} 
        transition={{ type: "spring", damping: 50, stiffness: 100 }}
        className="bubble-layer"
      >
        {Array.from({ length: 30 }).map((_, i) => <Bubble key={`mid-${i}`} layer="mid" />)}
      </motion.div>

      <motion.div 
        animate={{ x: mousePos.x * -3, y: mousePos.y * -3 }} 
        transition={{ type: "spring", damping: 50, stiffness: 100 }}
        className="bubble-layer"
      >
        {Array.from({ length: 15 }).map((_, i) => <Bubble key={`fg-${i}`} layer="fg" />)}
      </motion.div>

      <style>{`
        .bubble-bg-container {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          z-index: -2; overflow: hidden; pointer-events: none;
        }
        .bubble-gradient-bg {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(135deg, var(--background), #071A3D, #0A2463, var(--background));
          background-size: 400% 400%;
          animation: gradientShift 20s ease infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .bubble-layer {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
        }
        .floating-bubble {
          position: absolute;
          bottom: -100px;
          border-radius: 50%;
          animation-name: floatUpwards;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          animation-iteration-count: infinite;
        }
        .bubble-glass {
          width: 100%; height: 100%; border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, var(--white-alpha-20), rgba(59, 130, 246, 0.05));
          border: 1px solid var(--white-alpha-10);
          box-shadow: inset 0 0 10px rgba(59, 130, 246, 0.3), 0 0 15px rgba(59, 130, 246, 0.2);
          backdrop-filter: blur(4px);
        }
        @keyframes floatUpwards {
          0% { transform: translateY(100px) translateX(0) scale(0.8); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateY(-50vh) translateX(30px) scale(1.1); }
          90% { opacity: 1; }
          100% { transform: translateY(-120vh) translateX(-20px) scale(1); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBubbleBackground;
