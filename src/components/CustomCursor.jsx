import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    const isFinePointer = window.matchMedia('(pointer: fine)').matches && window.innerWidth > 1024;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    const onMove = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    };

    const onOver = (e) => {
      const el = e.target;
      setIsHovered(!!(el.closest('a') || el.closest('button') || el.closest('.glass-card') || el.closest('.service-card') || el.closest('.tech-card') || el.closest('.portfolio-item')));
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <style>{`
        @media (pointer: fine) and (min-width: 1025px) {
          body, a, button { cursor: none !important; }
        }
      `}</style>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: isHovered ? '48px' : '20px',
          height: isHovered ? '48px' : '20px',
          borderRadius: '50%',
          background: isHovered ? 'rgba(59,130,246,0.12)' : 'rgba(59,130,246,0.85)',
          border: isHovered ? '1px solid rgba(59,130,246,0.8)' : 'none',
          boxShadow: '0 0 15px rgba(59,130,246,0.6)',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'width 0.15s ease, height 0.15s ease, background 0.15s ease, border 0.15s ease',
          willChange: 'transform',
          marginTop: isHovered ? '-14px' : '0',
          marginLeft: isHovered ? '-14px' : '0',
        }}
      />
    </>
  );
};

export default CustomCursor;
