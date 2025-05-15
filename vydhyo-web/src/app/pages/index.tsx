import React from 'react';

const IndexPage = () => {
  return (
    <div style={pageStyle}>

      <section style={sectionStyle}>
        {/* === LEFT TEXT SIDE === */}
        <div style={leftContentStyle}>
          <div style={badgeStyle}>
            <span style={{ color: '#f97316', fontSize: '16px' }}>★ ★ ★ ★ ★</span>
            <span> Used by 7000+ happy users</span>
          </div>

          <h1 style={titleStyle}>
            <span style={{ color: '#2563eb' }}>React & HTML</span> Clinics & Doctors 
            Online Appointment Booking
            Reactjs Template
          </h1>

          <p style={descriptionStyle}>
            Doctor Appointment Booking Template is a appointment management and patient
            management template. We provide a simple and easy booking online system.
          </p>

          <div style={buttonContainerStyle}>
            <button style={liveDemoButton}>🔴 Live Demo</button>
            <button style={seePricingButton}>💲 See Pricing</button>
          </div>
        </div>

        {/* === RIGHT IMAGE SIDE === */}
        <div style={rightImageContainer}>
          <img
            src="/your-doccure-screenshot.png" // Replace with your actual image path
            alt="Doccure Screenshot"
            style={imageStyle}
          />
        </div>
      </section>
    </div>
  );
};

// === Inline Styles ===
const pageStyle: React.CSSProperties = {
  backgroundColor: '#f6f9ff',
  minHeight: '100vh',
  fontFamily: 'sans-serif',
};

const sectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '4rem 2.5rem',
  gap: '2rem',
};

const leftContentStyle: React.CSSProperties = {
  flex: 1,
  minWidth: '320px',
  maxWidth: '600px',
};

const badgeStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  padding: '0.5rem 1rem',
  borderRadius: '9999px',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
  fontSize: '14px',
  fontWeight: 500,
};

const titleStyle: React.CSSProperties = {
  fontSize: '2.5rem',
  fontWeight: 800,
  marginTop: '1.5rem',
  lineHeight: 1.4,
  color: '#111827',
};

const descriptionStyle: React.CSSProperties = {
  marginTop: '1rem',
  color: '#4B5563',
  fontSize: '1.125rem',
  lineHeight: 1.6,
};

const buttonContainerStyle: React.CSSProperties = {
  marginTop: '2rem',
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
};

const liveDemoButton: React.CSSProperties = {
  backgroundColor: '#000000',
  color: '#ffffff',
  padding: '0.75rem 1.5rem',
  borderRadius: '9999px',
  fontWeight: 600,
  fontSize: '14px',
  border: 'none',
  cursor: 'pointer',
};

const seePricingButton: React.CSSProperties = {
  backgroundColor: '#ffffff',
  color: '#000000',
  border: '1px solid #D1D5DB',
  padding: '0.75rem 1.5rem',
  borderRadius: '9999px',
  fontWeight: 600,
  fontSize: '14px',
  cursor: 'pointer',
};

const rightImageContainer: React.CSSProperties = {
  flex: 1,
  minWidth: '300px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const imageStyle: React.CSSProperties = {
  borderRadius: '1rem',
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '550px',
};

export default IndexPage;
