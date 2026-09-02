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
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="glass-card course-card-wrapper"
        style={{ 
          padding: '0', position: 'relative', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column',
          rotateX, rotateY, transformStyle: "preserve-3d", borderRadius: '24px'
        }}
        whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(to bottom, #3b82f6, #0a42db)', zIndex: 10 }}></div>
        <div className="course-glow"></div>
        
        <div style={{ height: '200px', width: '100%', overflow: 'hidden', transform: 'translateZ(20px)' }}>
           <img src={course.img} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="course-img" />
        </div>

        <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column', transform: 'translateZ(30px)' }}>
          <span style={{ display: 'inline-block', alignSelf: 'flex-start', padding: '6px 16px', background: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600', marginBottom: '20px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
            {course.level}
          </span>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', fontWeight: '700' }}>{course.title}</h3>
          <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6', marginBottom: '30px', flex: 1 }}>
            {course.desc}
          </p>
          
          <div style={{ marginTop: 'auto' }}>
            <a 
              href="https://api.whatsapp.com/send/?phone=03365821674&text&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline" 
              style={{ width: '100%', position: 'relative', overflow: 'hidden', display: 'block', textAlign: 'center' }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>Enroll Now</span>
              <div className="btn-progress"></div>
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
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="section-title">Professional <span className="gradient-text">Training Courses</span></div>
        <p className="section-subtitle">
          Elevate your skills with our industry-leading courses taught by creative professionals.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '50px' }}>
        {coursesList.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
      </div>

      <style>{`
        .course-glow { position: absolute; top: 0; right: 0; width: 150px; height: 150px; background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%); border-radius: 50%; opacity: 0; transition: opacity 0.3s; }
        .course-card-wrapper:hover .course-glow { opacity: 1; }
        .course-img { transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        .course-card-wrapper:hover .course-img { transform: scale(1.1); }
        .btn-progress { position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: rgba(59,130,246,0.2); transition: left 0.4s ease; z-index: 0; }
        .btn-outline:hover .btn-progress { left: 0; }
      `}</style>
    </section>
  );
};

export default Courses;
