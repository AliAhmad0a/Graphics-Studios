import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      // Check if it's a touch device or mobile/tablet screen
      const isTouch = 
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        window.matchMedia('(pointer: coarse)').matches ||
        window.matchMedia('(hover: none)').matches ||
        window.innerWidth <= 1024;

      const isDesktopFine = 
        window.matchMedia('(pointer: fine)').matches && 
        window.matchMedia('(hover: hover)').matches && 
        window.innerWidth > 1024;

      return !isTouch && isDesktopFine;
    };

    const isCapable = checkDevice();
    setEnabled(isCapable);

    if (!isCapable) return;

    const onMove = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
      if (!isVisible) setIsVisible(true);
    };

    const onOver = (e) => {
      const el = e.target;
      setIsHovered(!!(el.closest('a') || el.closest('button') || el.closest('.glass-card') || el.closest('.service-card') || el.closest('.tech-card') || el.closest('.portfolio-item')));
    };

    const onLeave = () => {
      setIsVisible(false);
    };

    const onResize = () => {
      const active = checkDevice();
      setEnabled(active);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseleave', onLeave, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', onResize);
    };
  }, [isVisible]);

  // Completely unmount on phone / touch / small screens
  if (!enabled) return null;

  return (
    <>
      <style>{`
        @media (pointer: fine) and (hover: hover) and (min-width: 1025px) {
          body, a, button, [role="button"] { cursor: none !important; }
        }
        @media (max-width: 1024px), (pointer: coarse), (hover: none) {
          body, a, button, [role="button"], * { cursor: auto !important; }
          .custom-cursor-element { display: none !important; }
        }
      `}</style>
      <div
        ref={cursorRef}
        className="custom-cursor-element"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '48px' : '20px',
          height: isHovered ? '48px' : '20px',
          borderRadius: '50%',
          background: isHovered ? 'rgba(59, 130, 246, 0.12)' : 'rgba(59, 130, 246, 0.85)',
          border: isHovered ? '1px solid rgba(59, 130, 246, 0.8)' : 'none',
          boxShadow: '0 0 15px rgba(59, 130, 246, 0.6)',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.15s ease, height 0.15s ease, background 0.15s ease, border 0.15s ease, opacity 0.2s ease',
          willChange: 'transform',
          marginTop: isHovered ? '-14px' : '0',
          marginLeft: isHovered ? '-14px' : '0',
        }}
      />
    </>
  );
};

export default CustomCursor;
