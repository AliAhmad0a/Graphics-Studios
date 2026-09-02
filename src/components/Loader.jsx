import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        maxWidth: '100%',
        height: '100vh',
        height: '100dvh',
        background: '#020617',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '24px',
        overflow: 'hidden'
      }}
    >
      <div style={{ position: 'relative' }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid rgba(59, 130, 246, 0.2)', borderTopColor: '#3b82f6', borderRightColor: '#3b82f6' }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', top: '8px', left: '8px', width: '44px', height: '44px', borderRadius: '50%', border: '2px solid rgba(16, 185, 129, 0.2)', borderBottomColor: '#10b981', borderLeftColor: '#10b981' }}
        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{ fontFamily: 'Space Grotesk', fontSize: '1rem', color: 'white', letterSpacing: '2px' }}
      >
        INITIALIZING <span style={{ color: '#3b82f6' }}>AI ENGINE</span>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
