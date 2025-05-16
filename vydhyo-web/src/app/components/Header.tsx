import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        DOCC<span style={logoSpanStyle}>URE</span>
      </div>
      <nav style={navStyle}>
        <a href="#" style={activeLinkStyle}>Home</a>
        <a href="#" style={linkStyle}>Demos</a>
        <a href="#" style={linkStyle}>Technologies</a>
        <a href="#" style={linkStyle}>Pages</a>
        <a href="#" style={linkStyle}>Modules</a>
        <a href="#" style={linkStyle}>Features</a>
        <a href="#" style={linkStyle}>Pricing</a>
        <a href="#" style={linkStyle}>FAQ</a>
      </nav>
      <div style={actionStyle}>
        <a href="#" style={changeLogStyle}>Change Log</a>
        <button style={buyButtonStyle}>🛒 Buy Template</button>
      </div>
    </header>
  );
};

// Inline CSS Styles
const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.5rem 2.5rem',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const logoStyle = {
  fontSize: '1.875rem',
  fontWeight: 'bold',
  color: '#2563EB',
};

const logoSpanStyle = {
  color: '#06B6D4',
};

const navStyle = {
  display: 'flex',
  gap: '1.5rem',
  fontSize: '1rem',
  fontWeight: '500',
  color: '#374151',
};

const linkStyle = {
  color: '#374151',
  textDecoration: 'none',
  paddingBottom: '0.25rem',
  borderBottom: '2px solid transparent',
  transition: 'all 0.3s',
};

const activeLinkStyle = {
  ...linkStyle,
  color: '#2563EB',
  borderBottomColor: '#2563EB',
};

const actionStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
};

const changeLogStyle = {
  color: '#9333EA',
  fontWeight: '600',
  textDecoration: 'none',
};

const buyButtonStyle = {
  backgroundColor: '#000000',
  color: '#ffffff',
  padding: '0.5rem 1rem',
  borderRadius: '9999px',
  fontWeight: '600',
  transition: 'background-color 0.3s',
  cursor: 'pointer',
};

// buyButtonStyle[':hover'] = {
//   backgroundColor: '#374151',
// };

export default Header;
