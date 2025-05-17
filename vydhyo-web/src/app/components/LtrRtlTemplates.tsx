'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LtrRtlTemplates = () => {
  // External image URLs
  const images = {
    ltr: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a7d0',
    rtl: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9',
    icon: 'https://cdn-icons-png.flaticon.com/512/2965/2965300.png'
  };

  return (
    <div style={containerStyle}>
      {/* Multiple Template Options Button */}
      <motion.div 
        style={buttonContainerStyle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.button 
          style={buttonStyle}
          whileHover={{ scale: 1.05, backgroundColor: '#f0f4ff' }}
          whileTap={{ scale: 0.98 }}
        >
          <Image 
            src={images.icon}
            alt="Template Icon"
            width={24}
            height={24}
            style={iconStyle}
            loader={({ src }) => src} // Bypass Next.js optimization for external images
            unoptimized // Disable optimization for external images
          />
          Multiple Template Options
        </motion.button>
        <motion.div 
          style={circleStyle}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Title */}
      <motion.h2 
        style={headerStyle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Readymade LTR & RTL Templates
      </motion.h2>

      {/* Templates Wrapper */}
      <motion.div 
        style={templatesWrapperStyle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {/* LTR Template */}
        <motion.div 
          style={templateCardStyle}
          whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)' }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div style={imageContainerStyle}>
            <Image
              src={`${images.ltr}?w=600&h=400&auto=format`}
              alt="LTR Template Preview"
              width={600}
              height={400}
              style={imageStyle}
              loader={({ src }) => src}
              unoptimized
            />
          </div>
          <div style={labelStyle}>LTR (Left-to-Right)</div>
        </motion.div>

        {/* RTL Template */}
        <motion.div 
          style={templateCardStyle}
          whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)' }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div style={imageContainerStyle}>
            <Image
              src={`${images.rtl}?w=600&h=400&auto=format`}
              alt="RTL Template Preview"
              width={600}
              height={400}
              style={imageStyle}
              loader={({ src }) => src}
              unoptimized
            />
          </div>
          <div style={labelStyle}>RTL (Right-to-Left)</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Styles
const containerStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '4rem 1rem',
  backgroundColor: '#f8f9fc',
  position: 'relative',
  overflow: 'hidden',
};

const buttonContainerStyle: React.CSSProperties = {
  position: 'relative',
  display: 'inline-block',
  marginBottom: '2rem',
};

const buttonStyle: React.CSSProperties = {
  padding: '0.75rem 2rem',
  backgroundColor: '#ffffff',
  color: '#1f2937',
  border: '1px solid #e2e8f0',
  borderRadius: '50px',
  fontSize: '1rem',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  cursor: 'pointer',
  boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
  transition: 'all 0.3s ease',
};

const iconStyle: React.CSSProperties = {
  objectFit: 'contain',
};

const circleStyle: React.CSSProperties = {
  position: 'absolute',
  width: '14px',
  height: '14px',
  borderRadius: '50%',
  backgroundColor: '#3b82f6',
  left: '55%',
  top: '100%',
  transform: 'translate(-50%, -50%)',
  filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.5))',
};

const headerStyle: React.CSSProperties = {
  fontSize: '2.25rem',
  fontWeight: 700,
  color: '#1f2937',
  marginBottom: '3rem',
  background: 'linear-gradient(90deg, #1e40af, #3b82f6)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const templatesWrapperStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '3rem',
  flexWrap: 'wrap',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 1rem',
};

const templateCardStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  width: '450px',
  maxWidth: '100%',
  transition: 'all 0.3s ease',
};

const imageContainerStyle: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '300px',
  overflow: 'hidden',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
};

const labelStyle: React.CSSProperties = {
  fontSize: '1.25rem',
  fontWeight: 600,
  padding: '1rem 0',
  backgroundColor: '#f1f5f9',
  textAlign: 'center',
  color: '#1e40af',
};

export default LtrRtlTemplates;