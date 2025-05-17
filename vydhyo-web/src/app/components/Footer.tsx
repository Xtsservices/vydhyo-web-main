'use client';
import React from "react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Top icons */}
        <div className="footer-icons">
          <div className="icon-item">
            <div className="icon-circle" style={{ background: "#ff7f50" }}>
              <span role="img" aria-label="Elite Author" className="icon-emoji">
                📦
              </span>
            </div>
            <div className="icon-label">Elite Author</div>
          </div>
          <div className="icon-item">
            <div className="icon-circle" style={{ background: "#00bfff" }}>
              <span role="img" aria-label="Trendsetter" className="icon-emoji">
                ⚡
              </span>
            </div>
            <div className="icon-label">Trendsetter</div>
          </div>
          <div className="icon-item">
            <div className="icon-circle" style={{ background: "#ff4d4f" }}>
              <span role="img" aria-label="Author Level" className="icon-emoji">
                🐾
              </span>
            </div>
            <div className="icon-label">Author Level</div>
          </div>
        </div>

        {/* Main text */}
        <h2 className="footer-heading">
          Build Your Doctor Online Appointment <br />
          Booking Website with Doccure
        </h2>

        {/* Envato & Purchase */}
        <div className="footer-purchase">
          <span className="purchase-label">Available in</span>
          <img
            src="https://cdn.envato.com/files/295834682/envato-logo.png"
            alt="envato"
            className="envato-logo"
          />
          <a href="#" className="purchase-button">
            &#128722; Purchase Now
          </a>
        </div>
      </div>

      {/* Copyright and links */}
      <div className="footer-bottom">
        <div className="copyright">
          © Copyright 2025 Doccure. All rights reserved.
        </div>
        <div className="footer-links">
          <a href="#" className="footer-link">Term of use</a>
          <a href="#" className="footer-link">License</a>
          <a href="#" className="footer-link">Refund Policy</a>
          <a href="#" className="footer-link">Regular License</a>
          <a href="#" className="footer-link">Extended License</a>
        </div>
      </div>

      {/* Floating buttons */}
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
          href="mailto:support@example.com"
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
        <span className="whatsapp-label">We Are Here!</span>
      </div>

      <style jsx>{`
        .footer-container {
          background: #011126;
          color: #fff;
          border-radius: 15px;
          margin: 16px;
          padding: 0;
          position: relative;
          overflow: hidden;
        }
        
        .footer-content {
          min-height: 350px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        
        .footer-icons {
          display: flex;
          gap: 40px;
          margin-bottom: 16px;
        }
        
        .icon-item {
          text-align: center;
        }
        
        .icon-circle {
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 4px auto;
        }
        
        .icon-emoji {
          font-size: 22px;
        }
        
        .icon-label {
          font-size: 12px;
        }
        
        .footer-heading {
          font-weight: 700;
          font-size: 32px;
          margin: 0;
          text-align: center;
        }
        
        .footer-purchase {
          margin-top: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .purchase-label {
          font-size: 14px;
        }
        
        .envato-logo {
          height: 18px;
          margin-right: 4px;
        }
        
        .purchase-button {
          background: #009cff;
          color: #fff;
          border-radius: 18px;
          padding: 7px 22px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          margin-left: 8px;
          transition: background 0.2s;
        }
        
        .purchase-button:hover {
          background: #007acc;
        }
        
        .footer-bottom {
          border-top: 1px solid #22304a;
          padding: 18px 0 8px 0;
          text-align: center;
          font-size: 13px;
          background: rgba(1,17,38,0.98);
        }
        
        .copyright {
          margin-bottom: 6px;
        }
        
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
        }
        
        .footer-link {
          color: #fff;
          text-decoration: underline;
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
            padding: 0 16px;
          }
          
          .footer-icons {
            gap: 24px;
          }
          
          .footer-purchase {
            flex-direction: column;
            gap: 8px;
          }
          
          .purchase-button {
            margin-left: 0;
          }
          
          .footer-links {
            gap: 12px;
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