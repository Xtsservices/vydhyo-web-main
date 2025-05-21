
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Set a timeout to show the header after 3 seconds
    const appearanceTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const sections = ['home', 'about-us', 'services', 'CitiesWeServe', 'pricing', 'testimonials', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      clearTimeout(appearanceTimer);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: "Home", icon: "🏠", section: "home" },
    { name: "About Us", icon: "👥", section: "about-us" },
    { name: "Services", icon: "🛠️", section: "services" },
    { name: "CitiesWeServe", icon: "✨", section: "CitiesWeServe" },
    { name: "FAQ", icon: "💰", section: "pricing" },
    { name: "Testimonials", icon: "🌟", section: "testimonials" },
    { name: "Contact", icon: "📞", section: "contact" },
  ];

  return (
    <motion.header 
      style={headerStyle}
      initial={{ y: -100, opacity: 0 }}
      animate={isVisible ? { 
        y: 0, 
        opacity: 1 
      } : { 
        y: -100, 
        opacity: 0 
      }}
      transition={{ 
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8
      }}
    >
      <div style={logoContainerStyle}>
        <img
          src="/images/logo.png"
          alt="Company Logo"
          style={{
            ...logoImageStyle,
            height: isMobile ? "100px" : "120px",
          }}
          onClick={() => scrollToSection("home")}
        />
      </div>

      {!isMobile && (
        <>
          <nav style={navStyle}>
            {menuItems.map((item) => (
              <button
                style={activeSection === item.section ? activeLinkStyle : linkStyle}
                key={item.name}
                onClick={() => scrollToSection(item.section)}
              >
                {item.name}
              </button>
            ))}
          </nav>
          <div style={actionStyle}>
            <button style={buyButtonStyle}>Login</button>
          </div>
          <div style={actionStyle}>
            <button style={buyButtonStyle}>Sign up</button>
          </div>
        </>
      )}

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

      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div 
            style={mobileMenuStyle}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav style={mobileNavStyle}>
              {menuItems.map((item) => (
                <button
                  style={activeSection === item.section ? mobileActiveLinkStyle : mobileLinkStyle}
                  key={item.name}
                  onClick={() => scrollToSection(item.section)}
                >
                  <span style={mobileIconStyle}>{item.icon}</span> {item.name}
                </button>
              ))}
            </nav>
            <div style={mobileActionStyle}>
              <button style={mobileBuyButtonStyle}>
                <span style={mobileIconStyle}></span> Login
              </button>
              <button style={mobileBuyButtonStyle}>
                <span style={mobileIconStyle}></span> Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

// Styles remain the same as in your original code
const headerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "2rem",
  backgroundColor: "#eafff8",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
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
  marginTop: "-4.3rem",
  marginBottom: "-4rem",
  marginLeft: "-1.5rem",
  cursor: "pointer",
};

const navStyle: React.CSSProperties = {
  display: "flex",
  gap: "1.5rem",
  fontSize: "1rem",
  fontWeight: 500,
  flex: 1,
  justifyContent: "center",
  flexWrap: "wrap",
};

const linkStyle: React.CSSProperties = {
  color: "#374151",
  textDecoration: "none",
  padding: "0.5rem 0",
  borderBottom: "2px solid transparent",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  transition: "all 0.3s",
  background: "none",
  cursor: "pointer",
  fontFamily: "inherit",
  fontSize: "inherit",
};

const activeLinkStyle: React.CSSProperties = {
  ...linkStyle,
  color: "#2563EB",
  borderBottom: "2px solid #2563EB",
  fontWeight: 600,
};

const actionStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
};

const buyButtonStyle: React.CSSProperties = {
  backgroundColor: "#000000",
  color: "#ffffff",
  padding: "0.75rem 1.5rem",
  borderRadius: "9999px",
  fontWeight: 600,
  cursor: "pointer",
  border: "none",
  transition: "all 0.3s",
  whiteSpace: "nowrap",
};

const mobileMenuButtonStyle: React.CSSProperties = {
  background: "none",
  border: "none",
  padding: "0.5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "30px",
  height: "27px",
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
  color: "#374151",
  textDecoration: "none",
  padding: "0.75rem 0",
  borderBottom: "2px solid transparent",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  transition: "all 0.3s",
  background: "none",
  cursor: "pointer",
  fontFamily: "inherit",
  fontSize: "1.1rem",
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  textAlign: "left",
};

const mobileActiveLinkStyle: React.CSSProperties = {
  ...mobileLinkStyle,
  color: "#2563EB",
  borderBottom: "2px solid #2563EB",
  fontWeight: 600,
};

const mobileActionStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  paddingTop: "1.5rem",
  borderTop: "1px solid #e5e7eb",
  marginTop: "1rem",
};

const mobileBuyButtonStyle: React.CSSProperties = {
  backgroundColor: "#000000",
  color: "#ffffff",
  padding: "1rem",
  borderRadius: "9999px",
  fontWeight: 600,
  cursor: "pointer",
  border: "none",
  transition: "all 0.3s",
  width: "80%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  fontSize: "1.1rem",
};

const mobileIconStyle: React.CSSProperties = {
  fontSize: "1.2rem",
};

export default Header;