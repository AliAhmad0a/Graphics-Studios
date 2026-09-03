import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const videos = [
  { id: 1, title: "Sabalon - Pakistan's Top Brand", category: 'Brand Collaboration', src: '/videos/brand-video1.mp4', link: 'https://sabalonpk.com/' },
  { id: 2, title: 'AI Animation videos for brands', category: 'Brand Collaboration', src: '/videos/brand-video2.mp4' },
  { id: 3, title: 'Graphics Studio Agency', category: 'Agency Promotion', src: '/videos/graphics-studio-agency.mp4' }
];

const VideoCard = ({ video, index }) => {
  const videoRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 25 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="glass-card video-item"
      whileHover={{ y: -6, borderColor: 'rgba(34, 211, 238, 0.45)', boxShadow: '0 16px 36px rgba(59, 130, 246, 0.22)' }}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => videoRef.current?.pause()}
      onClick={() => { if(video.link) window.open(video.link, '_blank'); }}
    >
      <div className="video-container">
        <video 
          ref={videoRef}
          src={video.src} 
          className="portfolio-video" 
          muted 
          loop 
          playsInline
          preload="metadata"
        />
        <div className="video-overlay">
          <div className="play-icon">▶</div>
        </div>
      </div>
      
      <div className="video-content">
        <span className="video-category">{video.category}</span>
        <h3 className="video-title">{video.title}</h3>
      </div>
    </motion.div>
  );
};

const OurWorkTopBrands = () => {
  return (
    <section id="our-work-top-brands" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="video-bg-glow">
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: 'min(45%, 240px)', height: 'min(45%, 240px)', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '50%', filter: 'blur(45px)' }}></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 25 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 1, boxSizing: 'border-box' }}
      >
        <div className="section-title">Our Work With <span className="gradient-text">Top Brands</span></div>
        <p className="section-subtitle">
          Collaborations that redefine industry standards and elevate brand presence.
        </p>
      </motion.div>

      <div className="video-grid">
        {videos.map((video, idx) => (
          <VideoCard key={video.id} video={video} index={idx} />
        ))}
      </div>

      <style>{`
        .video-bg-glow {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden !important;
          pointer-events: none;
          z-index: -1;
          contain: strict;
          clip-path: inset(0);
          -webkit-clip-path: inset(0);
        }

        .video-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
          gap: clamp(14px, 2.2vw, 20px);
          max-width: 1140px;
          margin: clamp(16px, 3vw, 30px) auto 0 auto;
          width: 100%;
          box-sizing: border-box;
        }

        .video-item {
          overflow: hidden !important;
          position: relative;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          min-width: 0;
          border-radius: clamp(12px, 2vw, 16px);
          padding: 0;
          box-sizing: border-box;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .video-container {
          height: clamp(180px, 25vw, 220px);
          width: 100%;
          overflow: hidden;
          position: relative;
          box-sizing: border-box;
          background: #000;
        }

        .portfolio-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .play-icon {
          width: 40px;
          height: 40px;
          background: rgba(59, 130, 246, 0.8);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          padding-left: 3px;
          backdrop-filter: blur(4px);
          opacity: 0.9;
          transition: all 0.3s ease;
        }

        .video-item:hover .portfolio-video {
          transform: scale(1.05);
        }

        .video-item:hover .video-overlay {
          background: rgba(0, 0, 0, 0.1);
        }
        
        .video-item:hover .play-icon {
          opacity: 0;
          transform: scale(1.2);
        }

        .video-content {
          padding: clamp(12px, 2vw, 18px);
          display: flex;
          flex-direction: column;
          flex: 1;
          min-width: 0;
          box-sizing: border-box;
        }

        .video-category {
          display: inline-block;
          align-self: flex-start;
          padding: 3px 9px;
          background: rgba(59, 130, 246, 0.1);
          color: var(--cyan);
          border-radius: 14px;
          font-size: 0.72rem;
          font-weight: 600;
          margin-bottom: 6px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.2s ease;
        }

        .video-item:hover .video-category {
          background: rgba(34, 211, 238, 0.15);
          color: var(--cyan);
          border-color: rgba(34, 211, 238, 0.3);
        }

        .video-title {
          font-size: clamp(0.96rem, 1.8vw, 1.15rem);
          margin-bottom: 5px;
          font-weight: 700;
          line-height: 1.25;
          overflow-wrap: break-word;
          word-break: break-word;
        }

        @media (max-width: 600px) {
          .video-grid {
            grid-template-columns: 1fr !important;
            gap: 12px;
          }
          .video-container {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default OurWorkTopBrands;
