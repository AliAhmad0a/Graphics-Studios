import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a') || e.target.closest('button') || e.target.classList.contains('service-card') || e.target.classList.contains('glass-card')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      height: 20,
      width: 20,
      backgroundColor: "rgba(59, 130, 246, 0.8)",
      border: "0px solid rgba(59, 130, 246, 0)",
      transition: { type: "tween", ease: "backOut", duration: 0.15 }
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      height: 60,
      width: 60,
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      border: "1px solid rgba(59, 130, 246, 0.8)",
      transition: { type: "tween", ease: "backOut", duration: 0.15 }
    }
  };

  return (
    <>
      <style>{`body { cursor: none; } a, button { cursor: none; }`}</style>
      <motion.div
        variants={variants}
        animate={isHovered ? "hover" : "default"}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          borderRadius: "50%",
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: "0 0 15px rgba(59, 130, 246, 0.8)"
        }}
      />
    </>
  );
};

export default CustomCursor;
