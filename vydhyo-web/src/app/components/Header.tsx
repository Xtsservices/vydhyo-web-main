"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Search suggestions data
  const searchSuggestions = [
    "dr-karthik-vallala",
    "cardio-thoracic-surgeon",
    "heart-surgery",
    "cardiac-specialist",
    "thoracic-surgery"
  ];

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

    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      clearTimeout(appearanceTimer);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter suggestions based on search query
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = searchSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions(searchSuggestions);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      performSearch(searchQuery);
    }
  };

  const performSearch = (query: string) => {
  // Navigate to the doctor profile page - Fix the routing path
  if (query.toLowerCase().includes("dr-karthik-vallala") || query.toLowerCase().includes("karthik")) {
    // This should match your actual file name in the pages directory
    router.push("/dr-karthik-vallala-cardio-thoracic-surgeon");
  } else {
    // For other searches, you can implement different logic
    console.log("Searching for:", query);
    // You could navigate to a general search results page
    // router.push(`/search?q=${encodeURIComponent(query)}`);
  }
  
  setSearchQuery("");
  setShowSuggestions(false);
};

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    performSearch(suggestion);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchInputFocus = () => {
    if (filteredSuggestions.length > 0 || searchQuery.trim()) {
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions(searchSuggestions);
      setShowSuggestions(true);
    }
  };

  const navigateToDoctorProfile = () => {
  // Navigate to your internal page instead of external URL
  router.push("/dr-karthik-vallala-cardio-thoracic-surgeon");
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
          onClick={() => router.push("/")}
        />
      </div>

      {!isMobile && (
        <>
          <div style={searchContainerStyle} ref={searchRef}>
            <form onSubmit={handleSearch} style={searchFormStyle}>
              <input
                type="text"
                placeholder="Search doctors, specialties..."
                value={searchQuery}
                onChange={handleSearchInputChange}
                onFocus={handleSearchInputFocus}
                style={searchInputStyle}
              />
              <button type="submit" style={searchButtonStyle}>
                <span style={searchIconStyle}>🔍</span>
              </button>
            </form>
            
            <AnimatePresence>
              {showSuggestions && (filteredSuggestions.length > 0) && (
                <motion.div
                  style={suggestionsContainerStyle}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {filteredSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      style={suggestionItemStyle}
                      onClick={() => handleSuggestionClick(suggestion)}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = '#f3f4f6';
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = 'white';
                      }}
                    >
                      <span style={suggestionIconStyle}>🔍</span>
                      {suggestion.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
            <div style={mobileSearchContainerStyle}>
              <form onSubmit={handleSearch} style={mobileSearchFormStyle}>
                <input
                  type="text"
                  placeholder="Search doctors, specialties..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onFocus={handleSearchInputFocus}
                  style={mobileSearchInputStyle}
                />
                <button type="submit" style={mobileSearchButtonStyle}>
                  <span style={searchIconStyle}>🔍</span>
                </button>
              </form>
              
              <AnimatePresence>
                {showSuggestions && (filteredSuggestions.length > 0) && (
                  <motion.div
                    style={mobileSuggestionsContainerStyle}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {filteredSuggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        style={mobileSuggestionItemStyle}
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        <span style={suggestionIconStyle}>🔍</span>
                        {suggestion.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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

// Styles
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

const searchContainerStyle: React.CSSProperties = {
  flex: 1,
  maxWidth: "300px",
  margin: "0 1rem",
  position: "relative",
};

const searchFormStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  
};

const searchInputStyle: React.CSSProperties = {
  flex: 1,
  padding: "0.75rem 1rem",
  border: "1px solid #d1d5db",
  borderRadius: "9999px 0 0 9999px",
  outline: "none",
  fontSize: "1rem",
  
};

const searchButtonStyle: React.CSSProperties = {
  padding: "0.75rem 1rem",
  backgroundColor: "#000000",
  color: "white",
  border: "none",
  borderRadius: "0 9999px 9999px 0",
  cursor: "pointer",
};

const searchIconStyle: React.CSSProperties = {
  fontSize: "1rem",
};

const suggestionsContainerStyle: React.CSSProperties = {
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  backgroundColor: "white",
  border: "1px solid #e5e7eb",
  borderRadius: "0.5rem",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  zIndex: 1002,
  maxHeight: "200px",
  overflowY: "auto",
  marginTop: "0.25rem",
};

const suggestionItemStyle: React.CSSProperties = {
  padding: "0.75rem 1rem",
  cursor: "pointer",
  borderBottom: "1px solid #f3f4f6",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "0.9rem",
  transition: "background-color 0.2s",
};

const suggestionIconStyle: React.CSSProperties = {
  fontSize: "0.8rem",
  opacity: 0.6,
};

const mobileSearchContainerStyle: React.CSSProperties = {
  width: "100%",
  marginBottom: "1.5rem",
  position: "relative",
  
  marginRight: "-5rem",
};

const mobileSearchFormStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  marginRight: "-5rem",
};

const mobileSearchInputStyle: React.CSSProperties = {
  flex: 1,
  padding: "0.75rem 1rem",
  border: "1px solid #d1d5db",
  borderRadius: "9999px 0 0 9999px",
  outline: "none",
  fontSize: "1rem",
};

const mobileSearchButtonStyle: React.CSSProperties = {
  padding: "0.75rem 1rem",
  backgroundColor: "#000000",
  color: "white",
  border: "none",
  borderRadius: "0 9999px 9999px 0",
  cursor: "pointer",
  marginRight: "5rem",
};

const mobileSuggestionsContainerStyle: React.CSSProperties = {
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  backgroundColor: "white",
  border: "1px solid #e5e7eb",
  borderRadius: "0.5rem",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  zIndex: 1002,
  maxHeight: "200px",
  overflowY: "auto",
  marginTop: "0.25rem",
};

const mobileSuggestionItemStyle: React.CSSProperties = {
  padding: "0.75rem 1rem",
  cursor: "pointer",
  borderBottom: "1px solid #f3f4f6",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "0.9rem",
  backgroundColor: "white",
  transition: "background-color 0.2s",
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