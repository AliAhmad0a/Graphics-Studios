import React, { useCallback, useState, useEffect, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const AnimatedSoftwareBackground = () => {
    const [isLight, setIsLight] = useState(() => {
        return typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'light';
    });

    useEffect(() => {
        const checkTheme = () => {
            setIsLight(document.documentElement.getAttribute('data-theme') === 'light');
        };
        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
        return () => observer.disconnect();
    }, []);

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const digitalBoxes = useMemo(() => [
        { top: '8%', left: '10%', width: '60px', height: '60px', delay: '0s', duration: '4.8s' },
        { top: '14%', right: '16%', width: '120px', height: '60px', delay: '1.4s', duration: '6.2s' },
        { top: '24%', left: '38%', width: '60px', height: '60px', delay: '2.6s', duration: '5.0s' },
        { top: '32%', right: '8%', width: '60px', height: '120px', delay: '0.9s', duration: '5.6s' },
        { top: '44%', left: '6%', width: '120px', height: '60px', delay: '3.2s', duration: '6.8s' },
        { top: '52%', right: '32%', width: '60px', height: '60px', delay: '1.8s', duration: '4.5s' },
        { top: '62%', left: '22%', width: '60px', height: '60px', delay: '0.5s', duration: '5.2s' },
        { top: '68%', right: '14%', width: '120px', height: '60px', delay: '2.2s', duration: '6.4s' },
        { top: '78%', left: '48%', width: '60px', height: '60px', delay: '1.1s', duration: '4.9s' },
        { top: '84%', right: '38%', width: '120px', height: '60px', delay: '2.9s', duration: '5.8s' },
        { top: '20%', right: '45%', width: '60px', height: '60px', delay: '3.6s', duration: '5.4s' },
        { top: '40%', left: '72%', width: '60px', height: '60px', delay: '2.1s', duration: '4.7s' },
        { top: '72%', left: '8%', width: '60px', height: '60px', delay: '1.5s', duration: '5.3s' }
    ], []);

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            zIndex: 0, overflow: 'hidden', pointerEvents: 'none', background: 'var(--page-bg)'
        }}>
            {/* Ambient Atmosphere Gradient Glow */}
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: isLight 
                    ? 'radial-gradient(circle at 50% 0%, rgba(29, 78, 216, 0.12) 0%, rgba(37, 99, 235, 0.05) 45%, transparent 70%)'
                    : 'radial-gradient(circle at 50% 0%, rgba(10, 66, 219, 0.15) 0%, transparent 70%)'
            }}></div>

            {/* Digital Boxes Grid Matrix Background */}
            <div className="digital-matrix-lines"></div>

            {/* Animated Digital Grid Boxes */}
            <div className="digital-boxes-layer">
                {digitalBoxes.map((box, i) => (
                    <div 
                        key={i} 
                        className="digital-grid-box"
                        style={{
                            top: box.top,
                            left: box.left,
                            right: box.right,
                            width: box.width,
                            height: box.height,
                            animationDelay: box.delay,
                            animationDuration: box.duration
                        }}
                    >
                        <div className="box-inner">
                            <span className="box-dot"></span>
                        </div>
                        <span className="box-corner tl">+</span>
                        <span className="box-corner tr">+</span>
                        <span className="box-corner bl">+</span>
                        <span className="box-corner br">+</span>
                    </div>
                ))}
            </div>

            {/* 3D Perspective Digital Grid */}
            <div className="perspective-grid"></div>

            {/* Vertical Data Streams */}
            <div className="data-stream stream-1"></div>
            <div className="data-stream stream-2"></div>
            <div className="data-stream stream-3"></div>
            <div className="data-stream stream-4"></div>
            <div className="data-stream stream-5"></div>

            {/* Tech Nodes Particle Network */}
            <Particles
                key={isLight ? 'particles-light' : 'particles-dark'}
                id="tsparticles-software"
                init={particlesInit}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                options={{
                    background: { color: { value: "transparent" } },
                    fpsLimit: 60,
                    interactivity: {
                        events: { onHover: { enable: true, mode: "grab" }, resize: true },
                        modes: { grab: { distance: 150, links: { opacity: isLight ? 0.45 : 0.6, color: isLight ? '#2563eb' : 'var(--blue)' } } }
                    },
                    particles: {
                        color: { value: isLight ? ["#1d4ed8", "#1e40af", "#2563eb"] : ["#3b82f6", "#60a5fa"] },
                        links: { 
                            color: isLight ? "#3b82f6" : "#1e3a8a", 
                            distance: 130, 
                            enable: true, 
                            opacity: isLight ? 0.45 : 0.5, 
                            width: 1 
                        },
                        move: { enable: true, speed: 0.6, direction: "none", random: false, straight: false, outModes: { default: "bounce" } },
                        number: { density: { enable: true, area: 850 }, value: isLight ? 65 : 70 },
                        opacity: { value: isLight ? 0.7 : 0.6 },
                        shape: { type: "circle" },
                        size: { value: { min: 1.2, max: isLight ? 3 : 2.5 } }
                    },
                    detectRetina: true,
                }}
            />

            <style>{`
                .digital-matrix-lines {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    background-image: 
                        linear-gradient(to right, var(--matrix-grid-line) 1px, transparent 1px),
                        linear-gradient(to bottom, var(--matrix-grid-line) 1px, transparent 1px);
                    background-size: 60px 60px;
                    mask-image: radial-gradient(ellipse at 50% 45%, black 45%, transparent 95%);
                    -webkit-mask-image: radial-gradient(ellipse at 50% 45%, black 45%, transparent 95%);
                    pointer-events: none;
                }

                .digital-boxes-layer {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                }

                .digital-grid-box {
                    position: absolute;
                    box-sizing: border-box;
                    animation: digitalBoxPulse ease-in-out infinite;
                    pointer-events: none;
                }

                .box-inner {
                    width: 100%;
                    height: 100%;
                    background: var(--digital-box-bg);
                    border: 1px solid var(--digital-box-border);
                    box-shadow: var(--digital-box-glow);
                    border-radius: 4px;
                    box-sizing: border-box;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .box-dot {
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background: var(--digital-box-dot);
                    box-shadow: 0 0 8px var(--digital-box-dot);
                    opacity: 0.85;
                }

                .box-corner {
                    position: absolute;
                    font-size: 9px;
                    font-family: monospace;
                    line-height: 1;
                    color: var(--digital-box-corner);
                    opacity: 0.7;
                    user-select: none;
                }
                .box-corner.tl { top: -5px; left: -4px; }
                .box-corner.tr { top: -5px; right: -4px; }
                .box-corner.bl { bottom: -5px; left: -4px; }
                .box-corner.br { bottom: -5px; right: -4px; }

                @keyframes digitalBoxPulse {
                    0%, 100% {
                        opacity: 0.12;
                        transform: scale(0.96);
                    }
                    50% {
                        opacity: 0.85;
                        transform: scale(1.02);
                    }
                }

                .perspective-grid {
                    position: absolute;
                    bottom: -20%; left: -20%; width: 140%; height: 70vh;
                    background-image: 
                        linear-gradient(to right, rgba(59, 130, 246, 0.15) 1px, transparent 1px),
                        linear-gradient(to top, rgba(59, 130, 246, 0.15) 1px, transparent 1px);
                    background-size: 60px 60px;
                    transform: perspective(600px) rotateX(75deg);
                    transform-origin: bottom center;
                    animation: gridMove 4s linear infinite;
                    opacity: 0.5;
                }
                @keyframes gridMove {
                    0% { background-position: 0 0; }
                    100% { background-position: 0 60px; }
                }
                .data-stream {
                    position: absolute; width: 1px; height: 150px;
                    background: linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.8), transparent);
                    opacity: 0;
                    animation: streamFall linear infinite;
                }
                .stream-1 { left: 15%; animation-delay: 0s; animation-duration: 6s; height: 250px; }
                .stream-2 { left: 35%; animation-delay: 2s; animation-duration: 4s; height: 100px; }
                .stream-3 { left: 65%; animation-delay: 1s; animation-duration: 7s; height: 300px; }
                .stream-4 { left: 85%; animation-delay: 3s; animation-duration: 5s; height: 200px; }
                .stream-5 { left: 50%; animation-delay: 0.5s; animation-duration: 8s; height: 400px; }
                
                @keyframes streamFall {
                    0% { top: -400px; opacity: 0; }
                    10% { opacity: 0.6; }
                    90% { opacity: 0.6; }
                    100% { top: 100vh; opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default AnimatedSoftwareBackground;
