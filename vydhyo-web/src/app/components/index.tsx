"use client";

import React, { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Carousel1 from './Carousel1';
const IndexPage = () => {
  const controls = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

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
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  };

  const leftItemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        mass: 0.5,
        duration: 0.8
      }
    }
  };

  const rightItemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        mass: 0.8,
        duration: 1
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const featureItemHover = {
    scale: 1.05,
    y: -5,
    boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.25)",
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const buttonHover = {
    y: -4,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  };

  return (
    <><div style={pageStyle}>
      <div style={backgroundStyle}>
        <div style={purpleShapeStyle}></div>
        <div style={blueShapeStyle}></div>
      </div>
      
      <AnimatePresence>
        {isLoading && (
          <motion.div
            style={spinnerContainerStyle}
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.6, ease: "easeInOut" }
            }}
          >
            <motion.div
              style={spinnerStyle}
              animate={pulseAnimation}
            >
              <span role="img" aria-label="heartbeat" style={{ fontSize: "3rem" }}>❤️</span>
            </motion.div>
            <motion.p 
              style={{ color: "#3b82f6", marginTop: "1rem", fontWeight: 500, fontFamily: "'Times New Roman', serif" }}
              animate={pulseAnimation}
            >
              Loading Vydhyo...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.section 
          style={sectionStyle}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* === LEFT TEXT SIDE === */}
          <motion.div style={leftContentStyle}>
            <motion.div 
              style={badgeStyle}
              variants={leftItemVariants}
              whileHover={featureItemHover}
            >
              <span style={{ color: '#f97316', fontSize: '16px' }}>★ ★ ★ ★ ★</span>
              <span> Trusted by 10,000+ doctors & patients</span>
            </motion.div>

            <motion.h1 style={titleStyle} variants={leftItemVariants}>
              <span style={{ background: "linear-gradient(90deg, #1e40af 0%, #3b82f6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Vydhyo</span> - Connect. Care. Cure.
            </motion.h1>

            <motion.p style={descriptionStyle} variants={leftItemVariants}>
              VYDYO isn't just an app — it's a promise to families who deserve fast, trusted care. When someone you love is unwell, you shouldn't be left searching for the right doctor or waiting endlessly in lines.
              <br /><br />
              We connect you to verified ambulances, live blood bank updates, and certified home healthcare professionals — all in one app.
            </motion.p>

            <motion.div style={buttonContainerStyle} variants={leftItemVariants}>
              <motion.button
                style={primaryButtonStyle}
                whileHover={{
                  ...buttonHover,
                  background: "linear-gradient(90deg, #1d4ed8 0%, #3b82f6 100%)",
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span role="img" aria-label="stethoscope" style={{ fontSize: "1.3em", marginRight: "0.5em" }}>🩺</span>
                Book Appointment Now
              </motion.button>
              <motion.button
                style={secondaryButtonStyle}
                whileHover={{
                  ...buttonHover,
                  backgroundColor: "#f8fafc",
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span role="img" aria-label="phone" style={{ color: "#3b82f6", fontSize: "1.3em", marginRight: "0.5em" }}>📞</span>
                Talk to a Care Advisor
              </motion.button>
            </motion.div>

            <motion.div style={featureContainerStyle} variants={leftItemVariants}>
              <motion.div 
                style={{...featureItemStyle, backgroundColor: "#ffffff"}}
                whileHover={featureItemHover}
              >
                <div style={{ ...featureIconStyle, backgroundColor: "white" }}>🚑</div>
                <span style={featureTextStyle}>Verified Ambulance Services</span>
              </motion.div>
              <motion.div 
                style={{...featureItemStyle, backgroundColor: "#ffffff"}}
                whileHover={featureItemHover}
              >
                <div style={{ ...featureIconStyle, backgroundColor: "white" }}>🩸</div>
                <span style={featureTextStyle}>Live Blood Bank Updates</span>
              </motion.div>
              <motion.div 
                style={{...featureItemStyle, backgroundColor: "#ffffff"}}
                whileHover={featureItemHover}
              >
                <div style={{ ...featureIconStyle, backgroundColor: "white" }}>🏠</div>
                <span style={featureTextStyle}>Certified Home Healthcare</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* === RIGHT IMAGE SIDE === */}
          <motion.div 
            style={rightImageContainer}
            variants={rightItemVariants}
          >
            <motion.div
              style={imageWrapperStyle}
              variants={imageVariants}
              whileHover="hover"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Vydhyo Doctor App Screenshot"
                style={imageStyle}
              />
              <motion.div 
                style={imageOverlayStyle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={overlayTextStyle}>Vydhyo Doctor Dashboard</div>
              </motion.div>
              <div style={imageGlowStyle} />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </div>
    <div>
      <Carousel1/>
    </div>
    </>
    
    
  );
};

// === Inline Styles ===
const pageStyle: React.CSSProperties = {
  position: 'relative',
  backgroundColor: '#ffffff',
  minHeight: '100vh',
  fontFamily: "'Times New Roman', serif",
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  marginTop: '-9rem',
};

const backgroundStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(135deg, #f0f7ff 0%, #dbeafe 100%)',
  clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0% 100%)',
  zIndex: 0,
  overflow: 'hidden',
};

const spinnerContainerStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  zIndex: 1000,
};

const spinnerStyle: React.CSSProperties = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #7dd3fc 100%)',
  boxShadow: '0 15px 40px rgba(59, 130, 246, 0.3)',
};

const sectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap-reverse',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  gap: '2rem',
  maxWidth: '1400px',
  margin: '0 auto',
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
  zIndex: 1,
};

const leftContentStyle: React.CSSProperties = {
  flex: 1,
  minWidth: '300px',
  maxWidth: '600px',
  padding: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const badgeStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  padding: '0.5rem 1rem',
  borderRadius: '9999px',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  fontSize: '12px',
  fontWeight: 500,
  marginBottom: '1rem',
  border: '1px solid #f3f4f6',
  fontFamily: "'Times New Roman', serif",
};

const titleStyle: React.CSSProperties = {
  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
  fontWeight: 600,
  margin: '1rem 0',
  lineHeight: 1.2,
  color: '#111827',
  background: 'linear-gradient(90deg, #1e40af 0%, #3b82f6 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  letterSpacing: '-0.025em',
  fontFamily: "'Times New Roman', serif",
};

const descriptionStyle: React.CSSProperties = {
  margin: '1rem 0',
  color: '#4B5563',
  fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
  lineHeight: 1.6,
  maxWidth: '90%',
  fontWeight: 400,
  fontFamily: "'Times New Roman', serif",
};

const buttonContainerStyle: React.CSSProperties = {
  margin: '1.5rem 0',
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
};

const primaryButtonStyle: React.CSSProperties = {
  background: 'linear-gradient(90deg, #1e40af 0%, #3b82f6 100%)',
  color: '#ffffff',
  padding: '0.8rem 1.5rem',
  borderRadius: '10px',
  fontWeight: 500,
  fontSize: '0.9rem',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  fontFamily: "'Times New Roman', serif",
};

const secondaryButtonStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  color: '#1e40af',
  border: '1px solid #dbeafe',
  padding: '0.8rem 1.5rem',
  borderRadius: '10px',
  fontWeight: 500,
  fontSize: '0.9rem',
  cursor: 'pointer',
  boxShadow: '0 10px 25px rgba(59, 130, 246, 0.1)',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  fontFamily: "'Times New Roman', serif",
};

const purpleShapeStyle: React.CSSProperties = {
  position: 'absolute',
  top: '-20%',
  right: '-10%',
  width: '50%',
  height: '80%',
  backgroundColor: '#e0e7ff',
  borderRadius: '50%',
  transform: 'rotate(-15deg)',
  opacity: 0.5,
  zIndex: 0,
};

const blueShapeStyle: React.CSSProperties = {
  position: 'absolute',
  top: '-30%',
  right: '10%',
  width: '40%',
  height: '70%',
  backgroundColor: '#dbeafe',
  borderRadius: '50%',
  transform: 'rotate(10deg)',
  opacity: 0.7,
  zIndex: 0,
};

const rightImageContainer: React.CSSProperties = {
  flex: 1,
  minWidth: '300px',
  maxWidth: '500px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
};

const imageWrapperStyle: React.CSSProperties = {
  position: 'relative',
  borderRadius: '1.2rem',
  overflow: 'hidden',
  boxShadow: '0 25px 50px -10px rgba(59, 130, 246, 0.3)',
  width: '100%',
  maxWidth: '450px',
  zIndex: 1,
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  display: 'block',
};

const imageOverlayStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '1rem',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  padding: '0.5rem 1.5rem',
  borderRadius: '9999px',
  boxShadow: '0 15px 30px -5px rgba(0, 0, 0, 0.1)',
  zIndex: 2,
  backdropFilter: 'blur(4px)',
};

const overlayTextStyle: React.CSSProperties = {
  fontWeight: 500,
  color: '#1e40af',
  fontSize: '0.85rem',
  whiteSpace: 'nowrap',
  fontFamily: "'Times New Roman', serif",
};

const imageGlowStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: '1.2rem',
  boxShadow: 'inset 0 0 80px rgba(59, 130, 246, 0.1)',
  pointerEvents: 'none',
  zIndex: 3,
};

const featureContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.8rem',
  marginTop: '1.5rem',
};

const featureItemStyle: React.CSSProperties = {
  flex: '1 1 150px',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.8rem',
  borderRadius: '0.6rem',
  boxShadow: '0 8px 15px rgba(0, 0, 0, 0.06)',
  fontSize: '0.8rem',
  fontWeight: 400,
  color: '#1f2937',
  border: '1px solid rgba(0,0,0,0.05)',
  cursor: 'default',
  fontFamily: "'Times New Roman', serif",
  minWidth: '150px',
};

const featureIconStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '0.6rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
  color: 'white',
};

const featureTextStyle: React.CSSProperties = {
  fontWeight: 400,
  fontSize: '0.85rem',
  fontFamily: "'Times New Roman', serif",
};

export default IndexPage;