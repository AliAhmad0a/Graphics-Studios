import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailCanvasRef = useRef(null);
  
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
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

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animationFrameId;

    // Trail spark particles
    const sparks = [];
    const maxSparks = 20;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Add a subtle spark to the trail on motion
      if (Math.random() < 0.45 && sparks.length < maxSparks) {
        sparks.push({
          x: mouseX,
          y: mouseY,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
          radius: Math.random() * 2 + 1,
          alpha: 0.7,
          color: Math.random() > 0.5 ? 'rgba(34, 211, 238,' : 'rgba(59, 130, 246,'
        });
      }
    };

    const onOver = (e) => {
      const el = e.target;
      const isInteractive = !!(el.closest('a') || el.closest('button') || el.closest('.btn') || el.closest('.glass-card') || el.closest('.service-card') || el.closest('.tech-card') || el.closest('.portfolio-item') || el.closest('.logo-container') || el.closest('.founder-btn'));
      const isTextInput = !!(el.closest('input[type="text"]') || el.closest('input[type="email"]') || el.closest('input[type="tel"]') || el.closest('textarea'));

      setIsHovered(isInteractive);
      setIsText(isTextInput);
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);
    const onLeave = () => setIsVisible(false);

    const onResize = () => {
      const active = checkDevice();
      setEnabled(active);
      if (trailCanvasRef.current) {
        trailCanvasRef.current.width = window.innerWidth;
        trailCanvasRef.current.height = window.innerHeight;
      }
    };

    // Canvas setup for glowing spark trail
    const canvas = trailCanvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    // High-performance animation render loop
    const render = () => {
      // 1. Update Precision Dot (instant response)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // 2. Interpolate Outer Magnetic Ring (smooth lag)
      if (ringRef.current) {
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      // 3. Render Sparks on Canvas
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (let i = sparks.length - 1; i >= 0; i--) {
            const p = sparks[i];
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= 0.035;
            p.radius *= 0.95;

            if (p.alpha <= 0 || p.radius <= 0.3) {
              sparks.splice(i, 1);
              continue;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `${p.color} ${p.alpha})`;
            ctx.shadowColor = '#22d3ee';
            ctx.shadowBlur = 4;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    window.addEventListener('mousedown', onDown, { passive: true });
    window.addEventListener('mouseup', onUp, { passive: true });
    document.addEventListener('mouseleave', onLeave, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', onResize);
    };
  }, [isVisible]);

  if (!enabled) return null;

  return (
    <>
      <style>{`
        /* Smooth cursor transition on interactive elements */
        @media (pointer: fine) and (hover: hover) and (min-width: 1025px) {
          body, a, button, [role="button"], input, select, textarea {
            cursor: none !important;
          }
        }
        @media (max-width: 1024px) {
          .custom-cursor-layer { display: none !important; }
        }

        @keyframes cursorRingSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .cursor-ring-spinning::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, transparent 0%, #22d3ee 50%, transparent 100%);
          animation: cursorRingSpin 3s linear infinite;
          opacity: 0.6;
        }
      `}</style>

      <div className="custom-cursor-layer" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 99999, overflow: 'hidden' }}>
        
        {/* Subtle Canvas Sparks Trail */}
        <canvas ref={trailCanvasRef} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', width: '100%', height: '100%' }} />

        {/* 1. Precision Center Glowing Laser Dot */}
        <div
          ref={dotRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: isText ? '2px' : '7px',
            height: isText ? '18px' : '7px',
            borderRadius: isText ? '2px' : '50%',
            background: isHovered ? '#22d3ee' : '#ffffff',
            boxShadow: isHovered ? '0 0 12px #22d3ee, 0 0 20px #3b82f6' : '0 0 8px #3b82f6, 0 0 14px rgba(59, 130, 246, 0.8)',
            transform: 'translate3d(-100px, -100px, 0)',
            marginLeft: isText ? '-1px' : '-3.5px',
            marginTop: isText ? '-9px' : '-3.5px',
            opacity: isVisible ? 1 : 0,
            transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease',
            pointerEvents: 'none',
            willChange: 'transform',
          }}
        />

        {/* 2. Fluid Outer Magnetic Cyber Ring */}
        <div
          ref={ringRef}
          className="cursor-ring-spinning"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: isHovered ? '48px' : isClicking ? '26px' : isText ? '0px' : '34px',
            height: isHovered ? '48px' : isClicking ? '26px' : isText ? '0px' : '34px',
            borderRadius: '50%',
            border: isHovered ? '1.5px solid rgba(34, 211, 238, 0.85)' : '1.2px solid rgba(59, 130, 246, 0.55)',
            background: isHovered ? 'rgba(34, 211, 238, 0.08)' : isClicking ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.03)',
            boxShadow: isHovered ? '0 0 20px rgba(34, 211, 238, 0.4), inset 0 0 10px rgba(34, 211, 238, 0.15)' : '0 0 12px rgba(59, 130, 246, 0.25)',
            backdropFilter: isHovered ? 'blur(2px)' : 'none',
            WebkitBackdropFilter: isHovered ? 'blur(2px)' : 'none',
            transform: 'translate3d(-100px, -100px, 0)',
            marginLeft: isHovered ? '-24px' : isClicking ? '-13px' : isText ? '0px' : '-17px',
            marginTop: isHovered ? '-24px' : isClicking ? '-13px' : isText ? '0px' : '-17px',
            opacity: isVisible && !isText ? 1 : 0,
            transition: 'width 0.22s cubic-bezier(0.16, 1, 0.3, 1), height 0.22s cubic-bezier(0.16, 1, 0.3, 1), margin 0.22s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease',
            pointerEvents: 'none',
            willChange: 'transform',
          }}
        />

      </div>
    </>
  );
};

export default CustomCursor;
