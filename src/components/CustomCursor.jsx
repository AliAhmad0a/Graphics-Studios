import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Don't show custom cursor on touch/mobile devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const onMove = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    };

    const onOver = (e) => {
      const el = e.target;
      setIsHovered(!!(el.closest('a') || el.closest('button') || el.closest('.glass-card')));
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          body, a, button { cursor: none !important; }
        }
      `}</style>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: isHovered ? '50px' : '20px',
          height: isHovered ? '50px' : '20px',
          borderRadius: '50%',
          background: isHovered ? 'rgba(59,130,246,0.12)' : 'rgba(59,130,246,0.85)',
          border: isHovered ? '1px solid rgba(59,130,246,0.8)' : 'none',
          boxShadow: '0 0 15px rgba(59,130,246,0.6)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.15s ease, height 0.15s ease, background 0.15s ease, border 0.15s ease',
          willChange: 'transform',
          marginTop: isHovered ? '-15px' : '0',
          marginLeft: isHovered ? '-15px' : '0',
        }}
      />
    </>
  );
};

export default CustomCursor;
