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

    // Responsive configuration
    const isMobile = width < 768;
    const particleCount = isMobile ? 55 : 110;
    const linkDistance = isMobile ? 110 : 155;
    const mouseRadius = 160;

    // Mouse coordinates for desktop interactive grab/connect effect
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

    // Particle class adhering to particles.js standard with enhanced glow
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 2 + 1.2; // 1.2px to 3.2px
        this.baseRadius = this.radius;
        // Natural drift velocities
        this.vx = (Math.random() - 0.5) * (isMobile ? 0.6 : 0.85);
        this.vy = (Math.random() - 0.5) * (isMobile ? 0.6 : 0.85);
        
        // Colors: Vivid Cyan, Electric Blue, Bright White, Indigo
        const colorPalette = [
          { r: 34, g: 211, b: 238 },  // #22d3ee cyan
          { r: 59, g: 130, b: 246 },  // #3b82f6 blue
          { r: 255, g: 255, b: 255 }, // #ffffff white
          { r: 96, g: 165, b: 250 },  // #60a5fa sky
          { r: 129, g: 140, b: 248 }  // #818cf8 indigo
        ];
        this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        this.alpha = Math.random() * 0.4 + 0.5; // 0.5 to 0.9
        this.pulseSpeed = Math.random() * 0.03 + 0.015;
        this.pulseAngle = Math.random() * Math.PI * 2;
      }

      update() {
        // Bounce off canvas edges with margin
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        this.x += this.vx;
        this.y += this.vy;

        // Dynamic pulsing radius
        this.pulseAngle += this.pulseSpeed;
        this.radius = this.baseRadius + Math.sin(this.pulseAngle) * 0.6;

        // Interactive mouse repel/attraction on desktop
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 1.2;
            this.x -= (dx / dist) * force;
            this.y -= (dy / dist) * force;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(0.6, this.radius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha})`;
        ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.8)`;
        ctx.shadowBlur = isMobile ? 4 : 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Initialize particles array
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animated Cyber Grid Settings
    let gridOffsetY = 0;
    let gridOffsetX = 0;
    const gridSize = isMobile ? 40 : 50;

    // Scan wave animation
    let scanLineY = 0;

    // Main animation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // --- 1. ANIMATED CYBER DIGITAL GRID ---
      gridOffsetY = (gridOffsetY + 0.35) % gridSize;
      gridOffsetX = (gridOffsetX + 0.15) % gridSize;
      
      // Draw Grid Lines
      ctx.lineWidth = 0.75;
      ctx.strokeStyle = isMobile ? 'rgba(59, 130, 246, 0.035)' : 'rgba(59, 130, 246, 0.085)';

      // Vertical grid lines
      for (let x = gridOffsetX; x <= width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal moving grid lines
      for (let y = gridOffsetY; y <= height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Moving cyber scan line sweep
      scanLineY = (scanLineY + 1.2) % (height + 200);
      const scanGrad = ctx.createLinearGradient(0, scanLineY - 60, 0, scanLineY + 60);
      scanGrad.addColorStop(0, 'rgba(34, 211, 238, 0)');
      scanGrad.addColorStop(0.5, isMobile ? 'rgba(34, 211, 238, 0.025)' : 'rgba(34, 211, 238, 0.07)');
      scanGrad.addColorStop(1, 'rgba(34, 211, 238, 0)');
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanLineY - 60, width, 120);

      // Grid Intersection Glowing Dots
      ctx.fillStyle = 'rgba(34, 211, 238, 0.25)';
      for (let x = gridOffsetX; x <= width + gridSize; x += gridSize * 2) {
        for (let y = gridOffsetY; y <= height + gridSize; y += gridSize * 2) {
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // --- 2. PARTICLES.JS CONSTELLATION NETWORK ---
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Connect nearby particles with glowing geometric lines
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < linkDistance) {
            const lineAlpha = (1 - dist / linkDistance) * 0.42;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }

        // Connect to mouse cursor if within interactive radius (desktop)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - particles[i].x;
          const dy = mouse.y - particles[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const lineAlpha = (1 - dist / mouse.radius) * 0.65;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${lineAlpha})`;
            ctx.lineWidth = 1.2;
            ctx.shadowColor = '#22d3ee';
            ctx.shadowBlur = 6;
            ctx.stroke();
            ctx.shadowBlur = 0;
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
      {/* Deep ambient radial glow backdrops */}
      <div className="bg-glow-spot spot-top-left" />
      <div className="bg-glow-spot spot-center-right" />
      <div className="bg-glow-spot spot-bottom-left" />
      <div className="bg-glow-spot spot-center" />

      {/* Pure 60-120fps HTML5 Canvas Engine */}
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
          filter: blur(85px);
          -webkit-filter: blur(85px);
          opacity: 0.22;
        }

        .spot-top-left {
          top: -10%;
          left: 5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.85) 0%, transparent 70%);
        }

        .spot-center-right {
          top: 30%;
          right: -5%;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, transparent 70%);
        }

        .spot-center {
          top: 55%;
          left: 20%;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.65) 0%, transparent 70%);
        }

        .spot-bottom-left {
          bottom: -10%;
          left: 10%;
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, transparent 70%);
        }

        @media (max-width: 768px) {
          .bg-glow-spot {
            opacity: 0.08;
            filter: blur(55px);
            -webkit-filter: blur(55px);
          }
          .spot-top-left, .spot-center-right, .spot-center, .spot-bottom-left {
            width: 260px;
            height: 260px;
          }
        }
      `}</style>
    </div>
  );
};

export default TechBackground;
