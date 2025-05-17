"use client"; // Add this directive at the very top

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const IndexPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div style={pageStyle}>
      <motion.section 
        style={sectionStyle}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* === LEFT TEXT SIDE === */}
        <motion.div style={leftContentStyle} variants={itemVariants}>
          <motion.div 
            style={badgeStyle}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span style={{ color: '#f97316', fontSize: '16px' }}>★ ★ ★ ★ ★</span>
            <span> Trusted by 10,000+ doctors & patients</span>
          </motion.div>

          <motion.h1 style={titleStyle} variants={itemVariants}>
            <span style={{ color: '#2563eb' }}>Vydhyo</span> - Complete Digital Healthcare 
            <br />Solution for Modern Clinics
          </motion.h1>

          <motion.p style={descriptionStyle} variants={itemVariants}>
            Vydhyo is an all-in-one doctor appointment booking platform that transforms your 
            healthcare practice. Manage appointments, patient records, prescriptions, and 
            telemedicine consultations seamlessly with our React-powered solution.
          </motion.p>

          <motion.div style={buttonContainerStyle} variants={itemVariants}>
            <motion.button 
              style={liveDemoButton}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#333333"
              }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Live Demo
            </motion.button>
            <motion.button 
              style={seePricingButton}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#f3f4f6"
              }}
              whileTap={{ scale: 0.95 }}
            >
              💲 See Pricing Plans
            </motion.button>
          </motion.div>

          <motion.div style={featureGridStyle} variants={itemVariants}>
            <div style={featureItemStyle}>
              <div style={featureIconStyle}>📅</div>
              <span>Smart Appointment Scheduling</span>
            </div>
            <div style={featureItemStyle}>
              <div style={featureIconStyle}>💊</div>
              <span>Digital Prescriptions</span>
            </div>
            <div style={featureItemStyle}>
              <div style={featureIconStyle}>🩺</div>
              <span>Telemedicine Integration</span>
            </div>
            <div style={featureItemStyle}>
              <div style={featureIconStyle}>📊</div>
              <span>Analytics Dashboard</span>
            </div>
          </motion.div>
        </motion.div>

        {/* === RIGHT IMAGE SIDE === */}
        <motion.div 
          style={rightImageContainer}
          variants={imageVariants}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Vydhyo Doctor App Screenshot"
            style={imageStyle}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          <div style={imageOverlayStyle}>
            <div style={overlayTextStyle}>Vydhyo Doctor Dashboard</div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

// === Inline Styles ===
const pageStyle: React.CSSProperties = {
  backgroundColor: '#f6f9ff',
  minHeight: '100vh',
  fontFamily: "'Inter', sans-serif",
  overflowX: 'hidden'
};

const sectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap-reverse',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '6rem 2.5rem',
  gap: '3rem',
  maxWidth: '1400px',
  margin: '0 auto',
};

const leftContentStyle: React.CSSProperties = {
  flex: 1,
  minWidth: '320px',
  maxWidth: '650px',
};

const badgeStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  padding: '0.5rem 1.25rem',
  borderRadius: '9999px',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  fontSize: '14px',
  fontWeight: 500,
  marginBottom: '1rem',
};

const titleStyle: React.CSSProperties = {
  fontSize: '3rem',
  fontWeight: 600,
  margin: '1.5rem 0',
  lineHeight: 1.2,
  color: '#111827',
  background: 'linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const descriptionStyle: React.CSSProperties = {
  margin: '1.5rem 0',
  color: '#4B5563',
  fontSize: '1.25rem',
  lineHeight: 1.6,
  maxWidth: '90%',
};

const buttonContainerStyle: React.CSSProperties = {
  margin: '2.5rem 0',
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
};

const liveDemoButton: React.CSSProperties = {
  backgroundColor: '#000000',
  color: '#ffffff',
  padding: '0.875rem 2rem',
  borderRadius: '12px',
  fontWeight: 600,
  fontSize: '16px',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
};

const seePricingButton: React.CSSProperties = {
  backgroundColor: '#ffffff',
  color: '#000000',
  border: '1px solid #D1D5DB',
  padding: '0.875rem 2rem',
  borderRadius: '12px',
  fontWeight: 600,
  fontSize: '16px',
  cursor: 'pointer',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease',
};

const rightImageContainer: React.CSSProperties = {
  flex: 1,
  minWidth: '350px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
};

const imageStyle: React.CSSProperties = {
  borderRadius: '1.5rem',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
  width: '100%',
  maxWidth: '600px',
  zIndex: 1,
};

const imageOverlayStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '-1rem',
  right: '2rem',
  backgroundColor: 'white',
  padding: '0.5rem 1.5rem',
  borderRadius: '9999px',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  zIndex: 2,
};

const overlayTextStyle: React.CSSProperties = {
  fontWeight: 600,
  color: '#2563eb',
  fontSize: '0.875rem',
};

const featureGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '1rem',
  marginTop: '2rem',
};

const featureItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  backgroundColor: '#ffffff',
  padding: '0.75rem 1rem',
  borderRadius: '0.75rem',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
  fontSize: '0.95rem',
  fontWeight: 500,
  transition: 'all 0.3s ease',
};

const featureIconStyle: React.CSSProperties = {
  fontSize: '1.25rem',
};

export default IndexPage;