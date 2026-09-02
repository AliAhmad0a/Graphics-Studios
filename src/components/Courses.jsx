import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

import imgGraphic from '../assets/images/course_graphic_design_1788286996908.jpg';
import imgUIUX from '../assets/images/course_ui_ux_1788287008043.jpg';
import imgVideo from '../assets/images/course_video_editing_1788287019361.jpg';
import imgAI from '../assets/images/course_ai_tools_1788287078301.jpg';
import imgMarketing from '../assets/images/marketing_dashboard_1788284025825.jpg';

const coursesList = [
  { id: 1, title: 'Graphic Design Masterclass', desc: 'Learn professional branding, typography, and visual design from scratch.', level: 'Beginner to Pro', img: imgGraphic },
  { id: 2, title: 'UI/UX Design Bootcamp', desc: 'Master Figma and learn how to create user-centric digital products.', level: 'Intermediate', img: imgUIUX },
  { id: 3, title: 'Video Editing, AR/VR & Motion Graphics Pro', desc: 'Comprehensive guide to Premiere Pro, After Effects, AR/VR experiences, and motion graphics.', level: 'All Levels', img: imgVideo },
  { id: 4, title: 'AI Tools & Automation', desc: 'Harness the power of AI to supercharge your creative and business workflows.', level: 'Advanced', img: imgAI },
  { id: 5, title: 'Meta Ads & Social Media Management', desc: 'Learn to run profitable campaigns and manage brands online effectively.', level: 'Beginner', img: imgMarketing }
];

const CourseCard = ({ course, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 22 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.42, delay: index * 0.05 }}
      onMouseMove={(e) => {
        if (window.innerWidth < 1024) return;
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="course-card-outer"
    >
      <motion.div
        className="glass-card course-card-wrapper"
        style={{ 
          rotateX, rotateY,
        }}
        whileHover={{ scale: 1.02, boxShadow: '0 14px 28px rgba(59, 130, 246, 0.16)' }}
      >
        <div className="course-accent-bar"></div>
        <div className="course-glow"></div>
        
        <div className="course-img-container">
           <img src={course.img} alt={course.title} className="course-img" />
        </div>

        <div className="course-content">
          <span className="course-level">
            {course.level}
          </span>
          <h3 className="course-title">{course.title}</h3>
          <p className="course-desc">
            {course.desc}
          </p>
          
          <div className="course-btn-wrapper">
            <a 
              href="https://api.whatsapp.com/send/?phone=03365821674&text&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline course-enroll-btn"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Courses = () => {
  return (
    <section id="courses" className="section" style={{ position: 'relative' }}>
      <motion.div 
        initial={{ opacity: 0, y: 22 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        style={{ width: '100%', maxWidth: '1020px', margin: '0 auto' }}
      >
        <div className="section-title">Professional <span className="gradient-text">Training Courses</span></div>
        <p className="section-subtitle">
          Elevate your skills with our industry-leading courses taught by creative professionals.
        </p>
      </motion.div>

      <div className="courses-grid">
        {coursesList.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
      </div>

      <style>{`
        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 240px), 1fr));
          gap: clamp(12px, 1.8vw, 18px);
          margin-top: clamp(16px, 2.8vw, 28px);
          max-width: 1020px;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
        }

        .course-card-outer {
          perspective: 1000px;
          -webkit-perspective: 1000px;
          height: 100%;
          display: flex;
        }

        .course-card-wrapper {
          padding: 0;
          position: relative;
          overflow: hidden;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          transform-style: preserve-3d;
          border-radius: clamp(11px, 1.8vw, 16px);
        }

        .course-accent-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(to bottom, #3b82f6, #0a42db);
          z-index: 10;
        }

        .course-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 105px;
          height: 105px;
          background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .course-card-wrapper:hover .course-glow {
          opacity: 1;
        }

        .course-img-container {
          height: clamp(110px, 14vw, 145px);
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .course-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .course-card-wrapper:hover .course-img {
          transform: scale(1.05);
        }

        .course-content {
          padding: clamp(11px, 1.8vw, 16px);
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .course-level {
          display: inline-block;
          align-self: flex-start;
          padding: 3px 9px;
          background: rgba(59, 130, 246, 0.1);
          color: #60a5fa;
          border-radius: 13px;
          font-size: 0.65rem;
          font-weight: 600;
          margin-bottom: 6px;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .course-title {
          font-size: clamp(0.88rem, 1.6vw, 1.05rem);
          margin-bottom: 5px;
          font-weight: 700;
          line-height: 1.25;
        }

        .course-desc {
          color: #94a3b8;
          font-size: clamp(0.74rem, 1.3vw, 0.82rem);
          line-height: 1.48;
          margin-bottom: 12px;
          flex: 1;
        }

        .course-btn-wrapper {
          margin-top: auto;
          width: 100%;
        }

        .course-enroll-btn {
          width: 100%;
          display: flex;
          text-align: center;
          padding: 7px 13px;
          font-size: 0.76rem;
          transition: all 0.25s ease;
        }

        .course-enroll-btn:hover {
          background: rgba(59, 130, 246, 0.2);
          border-color: #3b82f6;
        }

        @media (max-width: 480px) {
          .courses-grid {
            grid-template-columns: 1fr;
            gap: 11px;
          }
          .course-img-container {
            height: 130px;
          }
        }
      `}</style>
    </section>
  );
};

export default Courses;
