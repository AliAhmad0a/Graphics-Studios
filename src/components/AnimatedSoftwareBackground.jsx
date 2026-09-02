import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const AnimatedSoftwareBackground = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            zIndex: 0, overflow: 'hidden', pointerEvents: 'none', background: 'var(--page-bg)'
        }}>
            {/* Deep Navy Gradient */}
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: 'radial-gradient(circle at 50% 0%, rgba(10, 66, 219, 0.15) 0%, transparent 70%)'
            }}></div>

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
                id="tsparticles-software"
                init={particlesInit}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                options={{
                    background: { color: { value: "transparent" } },
                    fpsLimit: 60,
                    interactivity: {
                        events: { onHover: { enable: true, mode: "grab" }, resize: true },
                        modes: { grab: { distance: 150, links: { opacity: 0.6, color: 'var(--blue)' } } }
                    },
                    particles: {
                        color: { value: ["#3b82f6", "#60a5fa"] },
                        links: { color: "#1e3a8a", distance: 130, enable: true, opacity: 0.5, width: 1 },
                        move: { enable: true, speed: 0.6, direction: "none", random: false, straight: false, outModes: { default: "bounce" } },
                        number: { density: { enable: true, area: 800 }, value: 70 },
                        opacity: { value: 0.6 },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 2.5 } }
                    },
                    detectRetina: true,
                }}
            />

            <style>{`
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
