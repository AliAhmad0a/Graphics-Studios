import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand, FaCompress } from 'react-icons/fa';
import teamVideo from '../assets/team_video.mp4';
import imgSafia from '../assets/safia_mukhtar.jpg';
import imgHaiqa from '../assets/haiqa.jpg';
import imgEsha from '../assets/esha.jpg';
import imgLaiba from '../assets/laiba.jpg';
import imgAli from '../assets/ali.jpg';

const teamMembers = [
  { name: "Haiqa", role: "Graphic Designer", detail: "Crafting stunning visual identities and creative digital graphics.", image: imgHaiqa, link: "https://ha-fawn-nine.vercel.app/" },
  { name: "Esha", role: "Graphic Designer", detail: "Designing visually striking and engaging brand graphics.", image: imgEsha, link: "https://ea-rosy.vercel.app/" },
  { name: "Laiba Shehzad", role: "Digital Marketer", detail: "Developing and executing innovative digital marketing campaigns.", image: imgLaiba, link: "https://la-five-olive.vercel.app/" },
  { name: "Ali Ahmad", role: "Website And App Developer", detail: "Building engaging and functional websites and applications.", image: imgAli, link: "https://my-portfolio-th1n.vercel.app/" }
];

const TeamCard = ({ name, role, detail, image, link, delay }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px 100px 0px" }}
      transition={{ duration: 0.35, delay: Math.min(delay, 0.12), ease: [0.22, 1, 0.36, 1] }}
      onClick={() => { if(link) window.open(link, '_blank'); }}
      onMouseMove={(e) => {
        if (window.innerWidth < 1024) return;
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="team-card-outer"
    >
      <motion.div
        className="vision-pro-glass team-card"
        style={{ rotateX, rotateY }}
        whileHover={{ y: -6, borderColor: "rgba(59,130,246,0.5)", boxShadow: '0 16px 36px rgba(59, 130, 246, 0.2)' }}
      >
        <div className="team-glow"></div>
        <div className="team-avatar-wrapper">
          <img src={image} alt={name} className="team-avatar-img" />
        </div>
        <div className="team-info">
          <h4 className="team-member-name">{name}</h4>
          <div className="team-member-role">{role}</div>
          <p className="team-member-detail">{detail}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TeamWorkspaceVideo = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef(null);

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return '0:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const dur = videoRef.current.duration;
    if (dur > 0) {
      setProgress((current / dur) * 100);
      setCurrentTime(formatTime(current));
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(formatTime(videoRef.current.duration));
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      // When played, enable sound!
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play().catch(err => {
        console.warn('Playback error:', err);
      });
      setIsPlaying(true);
    } else {
      // Stop/pause
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMute = !videoRef.current.muted;
    videoRef.current.muted = nextMute;
    setIsMuted(nextMute);
  };

  const handleSeek = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const seekPercent = parseFloat(e.target.value);
    const seekTo = (seekPercent / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTo;
    setProgress(seekPercent);
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen?.().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2800);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime('0:00');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 16 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "0px 0px 100px 0px" }} 
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.01 }}
      ref={containerRef}
      className="glass-card team-workspace"
      onClick={togglePlay}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { if (isPlaying) setShowControls(false); }}
    >
      <video 
        ref={videoRef}
        src={teamVideo} 
        playsInline 
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        className="team-workspace-video" 
      />

      {/* Center Play Overlay when stopped / paused */}
      {!isPlaying && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="team-video-overlay"
        >
          <div className="team-video-center-btn">
            <div className="team-video-play-icon">
              <FaPlay style={{ marginLeft: '4px' }} />
            </div>
            <span className="team-video-play-label">Play Video (Sound On)</span>
          </div>
        </motion.div>
      )}

      {/* Control Bar */}
      <div 
        className="team-video-controls"
        style={{
          opacity: showControls || !isPlaying ? 1 : 0,
          pointerEvents: showControls || !isPlaying ? 'auto' : 'none',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <input 
          type="range" 
          min="0" 
          max="100" 
          step="0.1" 
          value={progress} 
          onChange={handleSeek} 
          className="team-video-timeline"
          aria-label="Video Progress Timeline"
        />

        <div className="team-video-controls-row">
          <div className="team-video-controls-left">
            <button 
              type="button" 
              className="team-ctrl-btn" 
              onClick={togglePlay}
              title={isPlaying ? "Pause / Stop" : "Play (Enable Sound)"}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>

            <button 
              type="button" 
              className="team-ctrl-btn" 
              onClick={toggleMute}
              title={isMuted ? "Unmute Sound" : "Mute Sound"}
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>

            <span className="team-video-time">
              {currentTime} / {duration}
            </span>
          </div>

          <div className="team-video-controls-right">
            <button 
              type="button" 
              className="team-ctrl-btn" 
              onClick={toggleFullscreen}
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              aria-label="Fullscreen"
            >
              {isFullscreen ? <FaCompress /> : <FaExpand />}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <section id="team" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px 100px 0px" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-title">Meet Our <span className="gradient-text">Creative Team</span></div>
        <p className="section-subtitle">
          The passionate minds behind Graphics Studios Media Agency.
        </p>
      </motion.div>

      {/* Founder Section */}
      <motion.div 
        initial={{ opacity: 0, y: 16, scale: 0.98 }} 
        whileInView={{ opacity: 1, y: 0, scale: 1 }} 
        viewport={{ once: true, margin: "0px 0px 100px 0px" }} 
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ borderColor: 'rgba(59, 130, 246, 0.45)', boxShadow: '0 20px 45px rgba(59, 130, 246, 0.18)' }}
        className="vision-pro-glass founder-card"
      >
        <div className="founder-bg-glow"></div>
        
        <div className="founder-image-wrapper">
          <img src={imgSafia} alt="Safia Mukhtar Kayani" className="founder-img" />
        </div>
        
        <div className="founder-content">
          <h3 className="founder-name">Safia Mukhtar Kayani</h3>
          <div className="founder-badges">
            <span className="founder-badge">Founder</span>
            <span className="founder-badge">Creative Director</span>
          </div>
          <p className="founder-bio">
            Creative Graphics Designer leading the agency's vision. Dedicated to building a premium environment where technology and art seamlessly blend.
          </p>
          <motion.a 
            href="https://safia-blond-psi.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary founder-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            View My Portfolio →
          </motion.a>
        </div>
      </motion.div>

      {/* Teams Grid */}
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <TeamCard 
            key={index} 
            name={member.name} 
            role={member.role} 
            detail={member.detail} 
            image={member.image} 
            link={member.link}
            delay={index * 0.05} 
          />
        ))}
      </div>
      
      <TeamWorkspaceVideo />

      <style>{`
        .founder-card {
          max-width: min(100%, 820px);
          margin: 0 auto clamp(24px, 4vw, 42px) auto;
          display: flex;
          gap: clamp(16px, 3vw, 30px);
          align-items: center;
          border-radius: clamp(14px, 3vw, 22px);
          position: relative;
          overflow: hidden !important;
          padding: clamp(18px, 3.5vw, 36px);
          box-sizing: border-box;
          width: 100%;
          transition: all 0.35s ease;
        }

        .founder-bg-glow {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 60%);
          pointer-events: none;
          clip-path: inset(0);
          -webkit-clip-path: inset(0);
        }

        .founder-image-wrapper {
          width: clamp(90px, 14vw, 130px);
          height: clamp(90px, 14vw, 130px);
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #00d9ff);
          padding: 3px;
          flex-shrink: 0;
          position: relative;
          box-sizing: border-box;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
        }

        .founder-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .founder-content {
          flex: 1;
          text-align: left;
          position: relative;
          z-index: 1;
          min-width: 0;
        }

        .founder-name {
          font-size: clamp(1.2rem, 2.5vw, 1.8rem);
          margin-bottom: 5px;
          font-weight: 700;
          line-height: 1.2;
          overflow-wrap: break-word;
        }

        .founder-badges {
          display: flex;
          gap: 7px;
          flex-wrap: wrap;
          margin-bottom: clamp(9px, 1.8vw, 14px);
        }

        .founder-badge {
          padding: 3px 11px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 16px;
          font-size: clamp(0.72rem, 1.4vw, 0.82rem);
          color: var(--cyan);
          border: 1px solid rgba(59, 130, 246, 0.2);
          font-weight: 500;
        }

        .founder-bio {
          color: var(--text-main);
          line-height: 1.5;
          font-size: clamp(0.82rem, 1.5vw, 0.95rem);
          margin-bottom: clamp(12px, 2vw, 18px);
          overflow-wrap: break-word;
        }

        .founder-btn {
          padding: 8px 18px;
          font-size: 0.85rem;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 240px), 1fr));
          gap: clamp(12px, 2vw, 18px);
          position: relative;
          z-index: 1;
          max-width: 1140px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
        }

        .team-card-outer {
          perspective: 1000px;
          -webkit-perspective: 1000px;
          height: 100%;
          display: flex;
          width: 100%;
          min-width: 0;
          box-sizing: border-box;
        }

        .team-card {
          padding: clamp(15px, 2.2vw, 20px);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          border-radius: clamp(12px, 2vw, 16px);
          cursor: pointer;
          height: 100%;
          width: 100%;
          min-width: 0;
          position: relative;
          overflow: hidden !important;
          box-sizing: border-box;
          transform-style: preserve-3d;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .team-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 75px;
          height: 75px;
          background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }

        .team-card:hover .team-glow {
          opacity: 1;
        }

        .team-avatar-wrapper {
          width: clamp(56px, 9vw, 70px);
          height: clamp(56px, 9vw, 70px);
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 2px;
          border: 1.5px solid rgba(59, 130, 246, 0.3);
          flex-shrink: 0;
          transition: transform 0.4s ease, border-color 0.4s ease;
        }

        .team-card:hover .team-avatar-wrapper {
          transform: scale(1.08);
          border-color: var(--cyan);
          box-shadow: 0 0 14px rgba(34, 211, 238, 0.3);
        }

        .team-avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .team-info {
          width: 100%;
          min-width: 0;
        }

        .team-member-name {
          font-size: clamp(0.92rem, 1.7vw, 1.08rem);
          font-weight: 600;
          margin-bottom: 2px;
          overflow-wrap: break-word;
        }

        .team-member-role {
          font-size: 0.78rem;
          color: var(--blue);
          font-weight: 600;
          margin-bottom: 5px;
          transition: color 0.2s ease;
        }

        .team-card:hover .team-member-role {
          color: var(--cyan);
        }

        .team-member-detail {
          font-size: clamp(0.76rem, 1.4vw, 0.86rem);
          color: var(--text-main);
          line-height: 1.42;
          margin: 0;
          overflow-wrap: break-word;
        }

        .team-workspace {
          margin-top: clamp(24px, 4vw, 40px);
          border-radius: clamp(14px, 2.5vw, 20px);
          overflow: hidden !important;
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.4), 0 0 25px rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.25);
          width: 100%;
          max-width: min(100%, 980px);
          aspect-ratio: 16 / 9;
          margin-left: auto;
          margin-right: auto;
          box-sizing: border-box;
          position: relative;
          background: #000;
          cursor: pointer;
          transition: transform 0.4s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }

        .team-workspace:hover {
          border-color: rgba(34, 211, 238, 0.45);
          box-shadow: 0 22px 42px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.25);
        }

        .team-workspace-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .team-video-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.42);
          backdrop-filter: blur(3px);
          -webkit-backdrop-filter: blur(3px);
          transition: all 0.3s ease;
          pointer-events: auto;
          z-index: 2;
        }

        .team-video-center-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          user-select: none;
        }

        .team-video-play-icon {
          width: clamp(52px, 9vw, 72px);
          height: clamp(52px, 9vw, 72px);
          border-radius: 50%;
          background: linear-gradient(135deg, var(--blue), var(--cyan));
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(1.2rem, 2.2vw, 1.6rem);
          box-shadow: 0 0 26px rgba(6, 182, 212, 0.6);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .team-video-center-btn:hover .team-video-play-icon {
          transform: scale(1.1);
          box-shadow: 0 0 36px rgba(6, 182, 212, 0.9);
        }

        .team-video-play-label {
          font-size: clamp(0.8rem, 1.5vw, 0.92rem);
          font-weight: 600;
          color: #ffffff;
          background: rgba(15, 23, 42, 0.85);
          padding: 6px 16px;
          border-radius: 20px;
          border: 1px solid rgba(59, 130, 246, 0.35);
          letter-spacing: 0.3px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .team-video-controls {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: clamp(8px, 1.8vw, 14px) clamp(12px, 2.2vw, 20px);
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 65%, transparent 100%);
          display: flex;
          flex-direction: column;
          gap: 7px;
          z-index: 3;
          transition: opacity 0.35s ease;
        }

        .team-video-timeline {
          width: 100%;
          height: 4px;
          -webkit-appearance: none;
          appearance: none;
          background: rgba(255, 255, 255, 0.25);
          border-radius: 4px;
          outline: none;
          cursor: pointer;
          transition: height 0.15s ease;
        }

        .team-video-timeline:hover {
          height: 6px;
        }

        .team-video-timeline::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: var(--cyan);
          cursor: pointer;
          box-shadow: 0 0 8px rgba(6, 182, 212, 0.8);
        }

        .team-video-controls-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          color: #ffffff;
        }

        .team-video-controls-left,
        .team-video-controls-right {
          display: flex;
          align-items: center;
          gap: clamp(8px, 1.6vw, 14px);
        }

        .team-ctrl-btn {
          background: none;
          border: none;
          color: #ffffff;
          cursor: pointer;
          font-size: clamp(0.92rem, 1.6vw, 1.08rem);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
          border-radius: 6px;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .team-ctrl-btn:hover {
          color: var(--cyan);
          transform: scale(1.15);
        }

        .team-video-time {
          font-variant-numeric: tabular-nums;
          color: rgba(255, 255, 255, 0.85);
          font-size: clamp(0.74rem, 1.3vw, 0.84rem);
        }

        @media (max-width: 768px) {
          .founder-card {
            flex-direction: column;
            text-align: center;
            padding: 20px 14px;
          }
          .founder-content {
            text-align: center;
          }
          .founder-badges {
            justify-content: center;
          }
        }

        @media (max-width: 520px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .team-card {
            padding: 12px 8px;
          }
        }

        @media (max-width: 340px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;
