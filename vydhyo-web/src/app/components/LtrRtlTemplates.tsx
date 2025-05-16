'use client'; // Next.js App Router client-side rendering

import React from 'react';

const LtrRtlTemplates: React.FC = () => {
  return (
    <div style={containerStyle}>
      {/* Multiple Template Options Button */}
      <div style={buttonContainerStyle}>
        <button style={buttonStyle}>
          <img src="/images/icon.png" alt="icon" style={iconStyle} />
          Multiple Template Options
        </button>
        <div style={circleStyle}></div>
      </div>

      {/* Title */}
      <h2 style={headerStyle}>Readymade LTR & RTL Templates</h2>

      {/* Templates Wrapper */}
      <div style={templatesWrapperStyle}>
        {/* LTR Template */}
        <div style={templateCardStyle}>
          <img
            src="/images/ltr-image.png" // Update with your LTR image path
            alt="LTR Template"
            style={imageStyle}
          />
          <div style={labelStyle}>LTR</div>
        </div>

        {/* RTL Template */}
        <div style={templateCardStyle}>
          <img
            src="/images/rtl-image.png" // Update with your RTL image path
            alt="RTL Template"
            style={imageStyle}
          />
          <div style={labelStyle}>RTL</div>
        </div>
      </div>
    </div>
  );
};


// Main Container
const containerStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '2rem 1rem',
  backgroundColor: '#f8f9fc',
  position: 'relative',
};

// Button Container (for circle positioning)
const buttonContainerStyle: React.CSSProperties = {
  position: 'relative',
  display: 'inline-block',
  marginBottom: '1.5rem',
};

const buttonStyle: React.CSSProperties = {
  padding: '0.5rem 1.5rem',
  backgroundColor: '#ffffff',
  color: '#1f2937',
  border: '1px solid #e2e8f0',
  borderRadius: '50px',
  fontSize: '0.95rem',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  cursor: 'pointer',
  boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
};

const iconStyle: React.CSSProperties = {
  width: '20px',
  height: '20px',
};

// Animated Circle
const circleStyle: React.CSSProperties = {
  position: 'absolute',
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor: '#06b6d4',
  left: '55%',
  top: '100%',
  transform: 'translate(-50%, -50%)',
  animation: 'pulse 1.5s infinite',
};

// Header
const headerStyle: React.CSSProperties = {
  fontSize: '1.8rem',
  fontWeight: 'bold',
  color: '#1f2937',
};

// Templates Wrapper
const templatesWrapperStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem',
  flexWrap: 'wrap',
};

// Template Card
const templateCardStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  width: '400px',
  transition: 'transform 0.3s ease',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
};

const labelStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  fontWeight: 600,
  padding: '0.75rem 0',
  backgroundColor: '#eef1f5',
  textAlign: 'center',
};


export default LtrRtlTemplates;
