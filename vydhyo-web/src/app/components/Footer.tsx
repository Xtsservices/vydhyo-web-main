'use client';
import React, { useState, useEffect, useRef } from "react";

const Footer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const footerContentRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerContentRef.current) {
      observer.observe(footerContentRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (footerContentRef.current) {
        observer.unobserve(footerContentRef.current);
      }
    };
  }, []);

  const sections = [
    {
      id: "quick-links",
      title: "Quick Links",
      links: [
        { name: "About VYDYO", url: "#" },
        { name: "Book a Doctor", url: "#" },
        { name: "Partner with Us", url: "#" },
        { name: "Careers", url: "#" },
        { name: "Blog", url: "#" },
        { name: "FAQs", url: "#" }
      ]
    },
    {
      id: "cities",
      title: "Cities We Serve",
      links: [
        { name: "Nizamabad", url: "#" },
        { name: "Warangal", url: "#" },
        { name: "Karimnagar", url: "#" }
      ]
    },
    {
      id: "hospitals",
      title: "For Hospitals & Clinics",
      links: [
        { name: "Get Listed", url: "#" },
        { name: "Hospital Dashboard", url: "#" },
        { name: "Referral Program", url: "#" },
        { name: "VYDYO Pro Access", url: "#" }
      ]
    },
    {
      id: "policies",
      title: "Policies",
      links: [
        { name: "Patient Rights", url: "#" },
        { name: "Quality Policy", url: "#" },
        { name: "Report Abuse", url: "#" },
        { name: "Trust & Transparency", url: "#" }
      ]
    }
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content" ref={footerContentRef}>
        <h2 className="footer-heading">
          VYDYO – Connect. Care. Cure.
        </h2>

        {isMobile ? (
          <div className="accordion-container">
            {sections.map((section) => (
              <div key={section.id} className="accordion-section">
                <button 
                  className="accordion-header"
                  onClick={() => toggleAccordion(section.id)}
                  aria-expanded={activeAccordion === section.id}
                >
                  <h3 className="links-heading">{section.title}</h3>
                  <svg 
                    className="accordion-icon" 
                    viewBox="0 0 24 24"
                    style={{
                      transform: activeAccordion === section.id ? "rotate(180deg)" : "rotate(0deg)"
                    }}
                  >
                    <path d="M7 10l5 5 5-5z" fill="currentColor" />
                  </svg>
                </button>
                <div 
                  className="accordion-content"
                  style={{
                    maxHeight: activeAccordion === section.id ? "500px" : "0"
                  }}
                >
                  {section.links.map((link) => (
                    <a key={link.name} href={link.url} className="footer-link">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="footer-links-grid">
            {sections.map((section) => (
              <div key={section.id} className="links-column">
                <h3 className="links-heading">{section.title}</h3>
                {section.links.map((link) => (
                  <a key={link.name} href={link.url} className="footer-link">
                    {link.name}
                  </a>
                ))}
              </div>
            ))}
          </div>
        )}

        <div className="privacy-section">
          <h3 className="privacy-heading">Data Privacy & Security You Can Trust</h3>
          <p className="privacy-text">
            We protect your health data with bank-grade, end-to-end encryption and comply with HIPAA and Indian regulations.
          </p>
          <div className="privacy-features">
            <div className="privacy-feature">
              <span className="privacy-check">✅</span>
              <span>No third-party data sharing</span>
            </div>
            <div className="privacy-feature">
              <span className="privacy-check">✅</span>
              <span>You own and control your data</span>
            </div>
            <div className="privacy-feature">
              <span className="privacy-check">✅</span>
              <span>ISO/IEC 27001 certified</span>
            </div>
          </div>
          <a href="#" className="privacy-policy-link">
            🔒 Read our full Privacy Policy
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          © 2025 VYDYO HealthTech Pvt Ltd. All rights reserved.
        </div>
      </div>

      <button 
        className="scroll-top-button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>

      <div className="social-buttons">
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button whatsapp"
        >
          <svg width="22" height="22" viewBox="0 0 32 32" fill="white">
            <circle cx="16" cy="16" r="16" fill="#25d366" />
            <path
              d="M23.6 19.7c-.3-.2-1.7-.8-2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-2-.8-3.3-2.8-3.5-3.2s0-.5.2-.7c.2-.2.4-.5.6-.7.2-.2.2-.4.1-.7s-.8-2-1.1-2.7c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.5s1 2.9 1.2 3.1c.2.2 2.1 3.2 5.2 4.3.7.2 1.2.3 1.6.2.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2z"
              fill="#fff"
            />
          </svg>
        </a>
        <a
          href="mailto:support@vydhyo.com"
          className="social-button email"
        >
          <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l8 6.99 8-6.99V20H4z" />
          </svg>
        </a>
        <a
          href="#"
          className="social-button discord"
        >
          <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" fill="#5865f2" />
            <path
              d="M17.707 8.293a1 1 0 00-1.414 0l-4.293 4.293-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5a1 1 0 000-1.414z"
              fill="#fff"
            />
          </svg>
        </a>
      </div>

      <div className="whatsapp-float">
        <div className="whatsapp-icon">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="white">
            <circle cx="16" cy="16" r="16" fill="#25d366" />
            <path
              d="M23.6 19.7c-.3-.2-1.7-.8-2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-2-.8-3.3-2.8-3.5-3.2s0-.5.2-.7c.2-.2.4-.5.6-.7.2-.2.2-.4.1-.7s-.8-2-1.1-2.7c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.5s1 2.9 1.2 3.1c.2.2 2.1 3.2 5.2 4.3.7.2 1.2.3 1.6.2.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2z"
              fill="#fff"
            />
          </svg>
          <span className="notification-badge">1</span>
        </div>
        <span className="whatsapp-label">Need Help?</span>
      </div>

      <style jsx>{`
        .footer-container {
          background: #011126;
          color: #fff;
          padding: 60px 20px 20px;
          position: relative;
          overflow: hidden;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          transform: translateY(100px);
          opacity: 0;
          transition: all 0.8s ease-out;
        }
        
        .footer-content.animate-up {
          transform: translateY(0);
          opacity: 1;
        }
        
        .footer-heading {
          font-weight: 700;
          font-size: 32px;
          margin: 0 0 40px;
          text-align: center;
          transform: translateY(20px);
          transition: transform 0.6s ease-out 0.2s;
        }
        
        .animate-up .footer-heading {
          transform: translateY(0);
        }
        
        /* Desktop Layout */
        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
          transform: translateY(20px);
          transition: transform 0.6s ease-out 0.3s;
        }
        
        .animate-up .footer-links-grid {
          transform: translateY(0);
        }
        
        .links-column {
          display: flex;
          flex-direction: column;
        }
        
        /* Mobile Accordion */
        .accordion-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 30px;
        }
        
        .accordion-section {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .accordion-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        
        .accordion-icon {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }
        
        .accordion-content {
          overflow: hidden;
          transition: max-height 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-left: 10px;
        }
        
        .links-heading {
          font-size: 18px;
          margin-bottom: 15px;
          color: #009cff;
        }
        
        .footer-link {
          color: #fff;
          margin-bottom: 10px;
          font-size: 14px;
          text-decoration: none;
          transition: color 0.2s;
          display: block;
          padding: 8px 0;
        }
        
        .footer-link:hover {
          color: #009cff;
        }
        
        .privacy-section {
          background: rgba(0, 156, 255, 0.1);
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 40px;
          transform: translateY(20px);
          transition: transform 0.6s ease-out 0.4s;
        }
        
        .animate-up .privacy-section {
          transform: translateY(0);
        }
        
        .privacy-heading {
          font-size: 20px;
          margin-bottom: 15px;
          color: #009cff;
        }
        
        .privacy-text {
          font-size: 14px;
          margin-bottom: 15px;
          line-height: 1.6;
        }
        
        .privacy-features {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 15px;
        }
        
        .privacy-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
        }
        
        .privacy-check {
          font-size: 16px;
        }
        
        .privacy-policy-link {
          color: #009cff;
          font-size: 14px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        
        .footer-bottom {
          border-top: 1px solid #22304a;
          padding: 20px 0;
          text-align: center;
          font-size: 13px;
        }
        
        .scroll-top-button {
          position: fixed;
          left: 16px;
          bottom: 24px;
          background: #175cff;
          color: #fff;
          border: none;
          border-radius: 8px;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          cursor: pointer;
          z-index: 1000;
        }
        
        .social-buttons {
          position: fixed;
          right: 24px;
          top: 40%;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 1000;
        }
        
        .social-button {
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2px;
        }
        
        .whatsapp {
          background: #25d366;
        }
        
        .email {
          background: #222;
        }
        
        .discord {
          background: #5865f2;
        }
        
        .whatsapp-float {
          position: fixed;
          right: 16px;
          bottom: 24px;
          z-index: 1000;
          display: flex;
          align-items: center;
        }
        
        .whatsapp-icon {
          background: #25d366;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        
        .whatsapp-label {
          position: absolute;
          top: -16px;
          left: -60px;
          background: #fff;
          color: #25d366;
          font-weight: 700;
          font-size: 14px;
          padding: 2px 10px;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          transform: rotate(-20deg);
        }
        
        .notification-badge {
          position: absolute;
          top: 2px;
          right: 2px;
          background: #ff4d4f;
          color: #fff;
          border-radius: 50%;
          width: 14px;
          height: 14px;
          font-size: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          border: 2px solid #fff;
        }
        
        @media (max-width: 768px) {
          .footer-heading {
            font-size: 24px;
          }
          
          .social-buttons {
            right: 16px;
            top: auto;
            bottom: 80px;
            flex-direction: row;
          }
          
          .whatsapp-float {
            bottom: 80px;
            right: 16px;
          }
          
          .whatsapp-label {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;