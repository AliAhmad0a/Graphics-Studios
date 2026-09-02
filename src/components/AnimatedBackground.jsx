import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const AnimatedBackground = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            zIndex: 0, overflow: 'hidden', pointerEvents: 'none', background: 'var(--background)'
        }}>
            {/* Subtle Gradient Glow */}
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                background: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.05) 0%, var(--background) 100%)'
            }}></div>

            {/* Neural Network Visualization with Parallax */}
            <Particles
                id="tsparticles-neural"
                init={particlesInit}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.7 }}
                options={{
                    background: { color: { value: "transparent" } },
                    fpsLimit: 60,
                    interactivity: {
                        events: { 
                            onHover: { enable: true, mode: "grab", parallax: { enable: true, force: 60, smooth: 10 } },
                            resize: true 
                        },
                        modes: { 
                            grab: { distance: 150, links: { opacity: 0.8, color: 'var(--cyan)' } }
                        }
                    },
                    particles: {
                        color: { value: ["#3b82f6", "#22d3ee", "#8b5cf6"] },
                        links: { 
                            color: 'var(--cyan)', distance: 150, enable: true, opacity: 0.15, width: 1,
                            triangles: { enable: true, opacity: 0.03 } 
                        },
                        move: { enable: true, speed: 0.6, direction: "none", random: false, straight: false, outModes: { default: "bounce" } },
                        number: { density: { enable: true, area: 1000 }, value: 70 },
                        opacity: { value: { min: 0.1, max: 0.6 }, animation: { enable: true, speed: 1, minimumValue: 0.1 } },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 3 }, animation: { enable: true, speed: 2, minimumValue: 0.5 } }
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
