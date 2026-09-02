import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      // Only enable on desktop with fine mouse pointer
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

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let animationFrameId;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
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

    // Smooth lerp follower loop
    const renderFollower = () => {
      if (cursorRef.current) {
        currentX += (targetX - currentX) * 0.2;
        currentY += (targetY - currentY) * 0.2;
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(renderFollower);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseleave', onLeave, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    animationFrameId = requestAnimationFrame(renderFollower);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', onResize);
    };
  }, [isVisible]);

  // Unmount completely on touch / mobile devices
  if (!enabled) return null;

  return (
    <>
      <style>{`
        /* NEVER hide standard OS mouse cursor — always keep default & pointer cursors fully visible */
        html, body, *, *::before, *::after {
          cursor: auto !important;
        }
        a, button, [role="button"], input[type="submit"], select, .btn, .glass-card, .service-card, .tech-card, .portfolio-item, .logo-container {
          cursor: pointer !important;
        }
        input[type="text"], input[type="email"], input[type="tel"], textarea {
          cursor: text !important;
        }
      `}</style>
      
      {/* Subtle Glowing Cyan/Blue Halo Following the Visible Mouse Pointer */}
      <div
        ref={cursorRef}
        className="cursor-ambient-glow"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '40px' : '24px',
          height: isHovered ? '40px' : '24px',
          borderRadius: '50%',
          background: isHovered ? 'rgba(34, 211, 238, 0.25)' : 'rgba(59, 130, 246, 0.2)',
          border: isHovered ? '1.5px solid rgba(34, 211, 238, 0.6)' : '1px solid rgba(59, 130, 246, 0.4)',
          boxShadow: isHovered ? '0 0 16px rgba(34, 211, 238, 0.5)' : '0 0 10px rgba(59, 130, 246, 0.3)',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: isVisible ? 1 : 0,
          marginLeft: isHovered ? '-20px' : '-12px',
          marginTop: isHovered ? '-20px' : '-12px',
          transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease, border 0.2s ease, margin 0.2s ease, opacity 0.2s ease',
          willChange: 'transform',
        }}
      />
    </>
  );
};

export default CustomCursor;
