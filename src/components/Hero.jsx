import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroVideo from '../assets/hero_video.mp4';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 35]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0.4]);

  return (
    <section id="home" className="hero-section">
      <motion.div 
        style={{ y: y1, opacity: opacityHero }}
        className="hero-content"
      >
        <motion.video 
          src={heroVideo}
          autoPlay 
          loop 
          muted 
          playsInline
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-video"
        />
      </motion.div>

      <style>{`
        .hero-section {
          min-height: 85vh;
          min-height: 85dvh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: clamp(75px, 12vh, 100px) clamp(20px, 4%, 30px) clamp(35px, 6vh, 50px) clamp(20px, 4%, 30px);
          overflow: hidden !important;
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 auto;
          box-sizing: border-box;
          text-align: center;
          contain: paint;
        }

        .hero-content {
          z-index: 1;
          text-align: center;
          max-width: 1000px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          min-width: 0;
        }

        .hero-video {
          width: 100%;
          height: auto;
          border-radius: clamp(12px, 2vw, 24px);
          box-shadow: var(--shadow-soft), 0 0 40px rgba(59, 130, 246, 0.15);
          border: 1px solid var(--white-alpha-08);
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 110px 24px 40px 24px;
            min-height: auto;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 120px 20px 40px 20px;
            min-height: auto;
          }
          .hero-content {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
