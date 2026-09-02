import React, { useEffect, useRef } from 'react';

const TechBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive configuration based on screen width
    const isMobile = width < 768;
    const particleCount = isMobile ? 36 : 75;
    const linkDistance = isMobile ? 95 : 135;
    const mouseRadius = 140;

    // Mouse coordinates for desktop interactive grab effect
    const mouse = {
      x: null,
      y: null,
      radius: mouseRadius,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Particle class adhering to particles.js standard
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 1.8 + 1; // 1px to 2.8px
        this.baseRadius = this.radius;
        // Subtle drift velocity
        this.vx = (Math.random() - 0.5) * (isMobile ? 0.45 : 0.65);
        this.vy = (Math.random() - 0.5) * (isMobile ? 0.45 : 0.65);
        
        // Colors: Cyan, Electric Blue, Bright White
        const colors = [
          'rgba(34, 211, 238, ',   // #22d3ee cyan
          'rgba(59, 130, 246, ',   // #3b82f6 blue
          'rgba(255, 255, 255, ',  // white
          'rgba(96, 165, 250, '    // light blue
        ];
        this.colorPrefix = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.5 + 0.35; // 0.35 to 0.85
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseAngle = Math.random() * Math.PI * 2;
      }

      update() {
        // Bounce off canvas edges
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        this.x += this.vx;
        this.y += this.vy;

        // Subtle node pulse
        this.pulseAngle += this.pulseSpeed;
        this.radius = this.baseRadius + Math.sin(this.pulseAngle) * 0.4;

        // Mouse attraction/repel grab interaction (desktop only)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 0.8;
            this.x -= (dx / dist) * force;
            this.y -= (dy / dist) * force;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(0.5, this.radius), 0, Math.PI * 2);
        ctx.fillStyle = `${this.colorPrefix}${this.alpha})`;
        ctx.shadowColor = '#3b82f6';
        ctx.shadowBlur = isMobile ? 3 : 6;
        ctx.fill();
        ctx.shadowBlur = 0; // reset for performance
      }
    }

    // Initialize particles
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Grid animation state
    let gridOffset = 0;
    const gridSize = isMobile ? 36 : 48;

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // --- 1. DRAW ANIMATED CYBER DIGITAL GRID ---
      gridOffset = (gridOffset + 0.25) % gridSize;
      ctx.lineWidth = 0.6;
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.04)';

      // Vertical grid lines
      for (let x = 0; x <= width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Animated scrolling horizontal grid lines
      for (let y = gridOffset; y <= height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // --- 2. UPDATE & DRAW PARTICLES.JS CONSTELLATION ---
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Connect particles with constellation lines
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < linkDistance) {
            const lineAlpha = (1 - dist / linkDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Connect to mouse cursor if within range (desktop)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - particles[i].x;
          const dy = mouse.y - particles[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const lineAlpha = (1 - dist / mouse.radius) * 0.35;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${lineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="particles-grid-background">
      {/* Subtle deep ambient glow spots */}
      <div className="bg-glow-spot spot-top-left" />
      <div className="bg-glow-spot spot-center-right" />
      <div className="bg-glow-spot spot-bottom-left" />

      {/* High-Performance Canvas for Particles.js & Grid Animation */}
      <canvas ref={canvasRef} className="particles-canvas" />

      <style>{`
        .particles-grid-background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100% !important;
          max-width: 100% !important;
          height: 100% !important;
          max-height: 100vh !important;
          z-index: -2;
          pointer-events: none;
          touch-action: none;
          background-color: #020617;
          overflow: hidden !important;
          clip-path: inset(0);
          -webkit-clip-path: inset(0);
          contain: strict;
        }

        .particles-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          touch-action: none;
        }

        .bg-glow-spot {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px);
          -webkit-filter: blur(80px);
          opacity: 0.18;
        }

        .spot-top-left {
          top: -10%;
          left: 10%;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, transparent 70%);
        }

        .spot-center-right {
          top: 35%;
          right: -5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.7) 0%, transparent 70%);
        }

        .spot-bottom-left {
          bottom: -10%;
          left: 15%;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%);
        }

        @media (max-width: 768px) {
          .bg-glow-spot {
            opacity: 0.12;
            filter: blur(50px);
            -webkit-filter: blur(50px);
          }
          .spot-top-left, .spot-center-right, .spot-bottom-left {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default TechBackground;
