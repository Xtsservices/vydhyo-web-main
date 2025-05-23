'use client';

import React from 'react';

// Feature items for Vydhyo Doctor App
const features = [
  { icon: '👨‍⚕️', label: 'Doctor Profiles' },
  { icon: '📅', label: 'Appointment Scheduling' },
  { icon: '💊', label: 'Prescription Management' },
  { icon: '🏥', label: 'Clinic Management' },
  { icon: '📱', label: 'Telemedicine Support' },
  { icon: '📊', label: 'Patient Analytics' },
  { icon: '🔒', label: 'Secure Messaging' },
  { icon: '💰', label: 'Billing & Payments' },
  { icon: '🔄', label: 'Seamless Sync' },
  { icon: '📝', label: 'Electronic Health Records' },
];

const Carousel1 = () => {
  return (
    <div style={containerStyle}>
      {/* Embedded keyframes for SSR compatibility */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 0.5rem)); }
        }
      `}</style>

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
  backgroundColor: '#0f172a',
  overflow: 'hidden',
  padding: '1.5rem 0',
  width: '100%',
  position: 'relative',
  zIndex: 2,
  marginTop: '-6rem',
};

const scrollWrapperStyle: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  overflow: 'hidden',
  marginTop: '-1rem',
  marginBottom: '-1rem',
};

const scrollContentStyle: React.CSSProperties = {
  display: 'flex',
  animation: 'scroll 30s linear infinite',
  willChange: 'transform',
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
  flexShrink: 0,
};

const iconStyle: React.CSSProperties = {
  fontSize: '1.1rem',
};

export default Carousel1;