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

const containerStyle: React.CSSProperties = {
  backgroundColor: '#0f172a', // Navy background
  overflow: 'hidden',
  padding: '1.5rem 0',
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
  backgroundColor: '#334155', // Gray pill
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

export default ScrollingFeaturePills;
