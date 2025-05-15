'use client'; // Ensures client-side rendering in Next.js App Router

import React from 'react';

// Feature items
const features = [
  { icon: '📱', label: 'Ultra Responsive' },
  { icon: '🌐', label: 'Doctors & Patient Dashboards' },
  { icon: '⚙️', label: 'High Quality Code Standards' },
  { icon: '🅱️', label: 'Based on Bootstrap' },
  { icon: '📅', label: 'Booking Systems' },
  { icon: '🧼', label: 'Clean & Modern Design' },
  { icon: '🎨', label: 'Figma Files Included' },
];

const TemplateComponent = () => {
  return (
    <div style={outerContainerStyle}>
      <h2 style={headerStyle}>Readymade LTR & RTL Templates</h2>

      <div style={templateContainerStyle}>
        <div style={templateStyle}>
          <h3 style={subHeaderStyle}>LTR</h3>
          <div style={imageContainerStyle}>
            <img
              src="/ltr-template.png" 
              alt="LTR Template"
              style={imageStyle}
            />
          </div>
        </div>

        <div style={templateStyle}>
          <h3 style={subHeaderStyle}>RTL</h3>
          <div style={imageContainerStyle}>
            <img
              src="/rtl-template.png"
              alt="RTL Template"
              style={imageStyle}
            />
          </div>
        </div>
      </div>

      <ScrollingFeaturePills />
    </div>
  );
};

const ScrollingFeaturePills = () => {
  return (
    <div style={containerStyle}>
      {/* Embedded keyframes for SSR compatibility */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <div style={scrollWrapperStyle}>
        <div style={scrollContentStyle}>
          {[...features, ...features].map((feature, index) => (
            <div key={index} style={pillStyle}>
              <span style={iconStyle}>{feature.icon}</span>
              {feature.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// === Inline Styles ===
const outerContainerStyle: React.CSSProperties = {
  textAlign: 'center',
  margin: '2rem auto',
  padding: '1rem',
  backgroundColor: '#f1f5f9',
  borderRadius: '0.5rem',
};

const headerStyle: React.CSSProperties = {
  fontSize: '1.8rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
};

const templateContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem',
  flexWrap: 'wrap',
};

const templateStyle: React.CSSProperties = {
  width: '300px',
  backgroundColor: '#fff',
  padding: '1rem',
  borderRadius: '0.5rem',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
};

const subHeaderStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  margin: '0.5rem 0',
};

const imageContainerStyle: React.CSSProperties = {
  marginTop: '0.5rem',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  borderRadius: '0.5rem',
};

const containerStyle: React.CSSProperties = {
  backgroundColor: '#0f172a',
  overflow: 'hidden',
  padding: '1.5rem 0',
  marginTop: '2rem',
};

const scrollWrapperStyle: React.CSSProperties = {
  display: 'flex',
  whiteSpace: 'nowrap',
};

const scrollContentStyle: React.CSSProperties = {
  display: 'inline-flex',
  animation: 'scroll 30s linear infinite',
};

const pillStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  backgroundColor: '#334155',
  color: '#ffffff',
  padding: '0.5rem 1rem',
  margin: '0 0.5rem',
  borderRadius: '9999px',
  fontWeight: 500,
  fontSize: '0.95rem',
  whiteSpace: 'nowrap',
};

const iconStyle: React.CSSProperties = {
  fontSize: '1.1rem',
};

export default TemplateComponent;
