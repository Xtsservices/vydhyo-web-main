"use client";

import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Menu items with corresponding icons
  const menuItems = [
    { name: "Home", icon: "🏠" },
    { name: "Demos", icon: "🖥️" },
    { name: "Technologies", icon: "⚙️" },
    { name: "Pages", icon: "📄" },
    { name: "Modules", icon: "🧩" },
    { name: "Features", icon: "✨" },
    { name: "Pricing", icon: "💰" },
    { name: "FAQ", icon: "❓" },
  ];

  return (
    <header style={headerStyle}>
      {/* Logo */}
      <div style={logoContainerStyle}>
        <img
          src="/images/logo.png"
          alt="Vydhyo"
          style={{
            ...logoImageStyle,
            height: isMobile ? "90px" : "120px",
          }}
        />
      </div>

      {/* Desktop Navigation */}
      {!isMobile && (
        <>
          <nav style={navStyle}>
            {menuItems.map((item, index) => (
              <a
                href="#"
                style={index === 0 ? activeLinkStyle : linkStyle}
                key={item.name}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div style={actionStyle}>
            <a href="#" style={changeLogStyle}>Change Log</a>
            <button style={buyButtonStyle}>🛒 Buy Template</button>
          </div>
        </>
      )}

      {/* Mobile Hamburger Icon */}
      {isMobile && (
        <button 
          style={mobileMenuButtonStyle} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span style={{
            ...hamburgerLineStyle,
            transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none"
          }}></span>
          <span style={{
            ...hamburgerLineStyle,
            opacity: isMenuOpen ? "0" : "1"
          }}></span>
          <span style={{
            ...hamburgerLineStyle,
            transform: isMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none"
          }}></span>
        </button>
      )}

      {/* Mobile Menu Dropdown */}
      {isMobile && isMenuOpen && (
        <div style={mobileMenuStyle}>
          <nav style={mobileNavStyle}>
            {menuItems.map((item, index) => (
              <a
                href="#"
                style={index === 0 ? mobileActiveLinkStyle : mobileLinkStyle}
                key={item.name}
                onClick={toggleMenu}
              >
                <span style={mobileIconStyle}>{item.icon}</span> {item.name}
              </a>
            ))}
          </nav>
          <div style={mobileActionStyle}>
            <a href="#" style={mobileChangeLogStyle} onClick={toggleMenu}>
              <span style={mobileIconStyle}>📝</span> Change Log
            </a>
            <button style={mobileBuyButtonStyle} onClick={toggleMenu}>
              <span style={mobileIconStyle}>🛒</span> Buy Template
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

// Styles
const headerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "2rem",
  backgroundColor: "#ffffff",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  position: "relative",
  flexWrap: "wrap",
  gap: "1rem",
};

const logoContainerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  zIndex: 1001
};

const logoImageStyle: React.CSSProperties = {
  width: "auto",
  maxWidth: "100%",
  objectFit: "contain",
  transition: "height 0.3s ease",
  marginTop: "-4rem",
  marginBottom: "-4rem",
  marginLeft: "-1rem",
};

const navStyle: React.CSSProperties = {
  display: "flex",
  gap: "1rem",
  fontSize: "1rem",
  fontWeight: 500,
  color: "#374151",
  flex: 1,
  justifyContent: "center",
  flexWrap: "wrap",
};

const linkStyle: React.CSSProperties = {
  color: "#374151",
  textDecoration: "none",
  padding: "0.5rem 0",
  borderBottom: "2px solid transparent",
  transition: "all 0.3s",
};

const activeLinkStyle: React.CSSProperties = {
  ...linkStyle,
  color: "#2563EB",
  borderBottomColor: "#2563EB",
};

const actionStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
};

const changeLogStyle: React.CSSProperties = {
  color: "#9333EA",
  fontWeight: 600,
  textDecoration: "none",
};

const buyButtonStyle: React.CSSProperties = {
  backgroundColor: "#000000",
  color: "#ffffff",
  padding: "0.5rem 1rem",
  borderRadius: "9999px",
  fontWeight: 600,
  cursor: "pointer",
  border: "none",
};

// Mobile styles
const mobileMenuButtonStyle: React.CSSProperties = {
  background: "none",
  border: "none",
  padding: "0.5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "30px",
  height: "21px",
  cursor: "pointer",
  zIndex: 1001,
};

const hamburgerLineStyle: React.CSSProperties = {
  width: "100%",
  height: "3px",
  backgroundColor: "#374151",
  borderRadius: "10px",
  transition: "all 0.3s ease",
};

const mobileMenuStyle: React.CSSProperties = {
  position: "fixed",
  top: "80px",
  left: 0,
  right: 0,
  backgroundColor: "#ffffff",
  padding: "2rem",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  zIndex: 1000,
  width: "100%",
};

const mobileNavStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
};

const mobileLinkStyle: React.CSSProperties = {
  ...linkStyle,
  padding: "0.5rem 0",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
};

const mobileActiveLinkStyle: React.CSSProperties = {
  ...mobileLinkStyle,
  color: "#2563EB",
};

const mobileActionStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  paddingTop: "1.5rem",
  borderTop: "1px solid #e5e7eb",
  marginTop: "1rem",
};

const mobileChangeLogStyle: React.CSSProperties = {
  ...changeLogStyle,
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
};

const mobileBuyButtonStyle: React.CSSProperties = {
  ...buyButtonStyle,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
};

const mobileIconStyle: React.CSSProperties = {
  fontSize: "1.2rem",
};

export default Header;