"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const cardData = [
  {
    icon: (
      <svg width="32" height="32" fill="none">
        <rect x="7" y="10" width="18" height="2" rx="1" fill="#3B4CCA" />
        <rect x="7" y="15" width="18" height="2" rx="1" fill="#3B4CCA" />
        <rect x="7" y="20" width="12" height="2" rx="1" fill="#3B4CCA" />
      </svg>
    ),
    title: "Get Listed",
    subtitle: "Join our verified provider network",
    width: 320,
  },
  {
    icon: (
      <svg width="32" height="32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#3B4CCA" strokeWidth="2" />
        <rect x="15" y="10" width="2" height="8" rx="1" fill="#3B4CCA" />
        <rect x="16" y="16" width="6" height="2" rx="1" fill="#3B4CCA" />
      </svg>
    ),
    title: "Hospital Dashboard",
    subtitle: "Manage bookings and patient flow",
    width: 400,
  },
  {
    icon: (
      <svg width="32" height="32" fill="none">
        <rect x="7" y="15" width="18" height="2" rx="1" fill="#3B4CCA" />
        <rect x="7" y="20" width="18" height="2" rx="1" fill="#3B4CCA" />
      </svg>
    ),
    title: "Referral Programs",
    subtitle: "Expand your patient network",
    width: 480,
  },
  
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const FrontEndDashboards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // This function resets all animations by removing animation classes
    const resetAnimations = () => {
      if (containerRef.current) {
        containerRef.current.classList.remove('animate-up');
      }
      
      if (headerRef.current) {
        headerRef.current.classList.remove('animate-up');
      }
      
      cardsRef.current.forEach((card) => {
        if (card) card.classList.remove('animate-up');
      });
    };

    // This function applies animations by adding animation classes
    const applyAnimations = () => {
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.classList.add('animate-up');
        }
        
        if (headerRef.current) {
          headerRef.current.classList.add('animate-up');
        }
        
        cardsRef.current.forEach((card, index) => {
          if (card) {
            setTimeout(() => {
              card.classList.add('animate-up');
            }, 300 + (index * 100)); // Staggered delay for cards
          }
        });
      }, 100);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the container enters the viewport
          if (entry.isIntersecting && !isVisibleRef.current) {
            isVisibleRef.current = true;
            applyAnimations();
          } 
          // When the container exits the viewport
          else if (!entry.isIntersecting && isVisibleRef.current) {
            isVisibleRef.current = false;
            resetAnimations();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="dashboard-container"
      ref={containerRef}
    >
      <div className="dashboard-content">
        {/* Header */}
        <motion.div variants={itemVariants} style={{ marginBottom: "3rem" }} ref={headerRef}>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "120px",
            margin: "0 auto 1.5rem auto"
          }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "rgba(162, 28, 245, 0.07)",
              borderRadius: "2rem",
              padding: "0.5rem 1.5rem",
              border: "1.5px solid #e0e7ef",
              boxShadow: "0 2px 8px rgba(162, 28, 245, 0.09)",
              position: "relative",
              zIndex: 1
            }}>
              {/* Gradient border overlay */}
              <span style={{
                position: "absolute",
                top: "-5px",
                left: "-5px",
                right: "-5px",
                bottom: "-5px",
                borderRadius: "2.5rem",
                padding: 0,
                zIndex: 0,
                pointerEvents: "none",
                background: "linear-gradient(90deg, #a21cf5 0%, #6366f1 100%)",
                opacity: 0.18,
                border: "none",
                boxShadow: "none"
              }} />
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{ display: "block", zIndex: 1 }} xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_2)">
                  <path d="M14 4L23 20H5L14 4Z" fill="#A21CF5" />
                  <path d="M14 4L23 20H5L14 4Z" fill="url(#paint0_linear_1_2)" fillOpacity="0.5" />
                  <path d="M14 4L23 20H5L14 4Z" stroke="#A21CF5" strokeWidth="1.5" strokeLinejoin="round" />
                </g>
                <defs>
                  <filter id="filter0_d_1_2" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.635294 0 0 0 0 0.109804 0 0 0 0 0.960784 0 0 0 0.15 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2" result="shape" />
                  </filter>
                  <linearGradient id="paint0_linear_1_2" x1="14" y1="4" x2="14" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A21CF5" />
                    <stop offset="1" stopColor="#6366F1" />
                  </linearGradient>
                </defs>
              </svg>
              <span style={{
                fontSize: "1.15rem",
                fontWeight: 500,
                color: "white",
                letterSpacing: "0.01em",
                zIndex: 1
              }}>
                For Hospitals & Clinics
              </span>
            </div>
          </div>
        </motion.div>

        <div className="cards-container">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`dashboard-card ${card ? 'pro-card' : ''}`}
              style={{ width: `${card.width}px` }}
              ref={el => { cardsRef.current[index] = el; }}
            >
              <div className="card-icon">
                {card.icon}
              </div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-subtitle">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .dashboard-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #011126 0%, #1E40AF 100%);
          padding: 80px 0;
          color: #fff;
          font-family: 'Segoe UI', Arial, sans-serif;
          overflow: hidden;
          margin-bottom: -10rem;
        }
        
        .dashboard-content {
          max-width: 600px;
          margin: 0 auto;
          padding: 0 24px;
          transform: translateY(100px);
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          width: 100%;
          box-sizing: border-box;
        }
        
        .dashboard-heading {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 48px;
          transform: translateY(20px);
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s;
        }
        
        .cards-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
          overflow-x: hidden;
        }
        
        .dashboard-card {
          display: flex;
          align-items: center;
          background: #F3F6FD;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 12px rgba(30, 64, 175, 0.08);
          color: #1E293B;
          gap: 20px;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          transform: translateX(30px);
          opacity: 0;
          max-width: 100%;
          box-sizing: border-box;
        }
        
        .dashboard-card.pro-card {
          background: linear-gradient(135deg, #3B4CCA 0%, #1E40AF 100%);
          color: white;
        }
        
        .dashboard-card.pro-card .card-subtitle {
          color: rgba(255, 255, 255, 0.8);
        }
        
        .card-icon {
          background: #E0E7FF;
          border-radius: 10px;
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        
        .pro-card .card-icon {
          background: rgba(255, 255, 255, 0.15);
        }
        
        .card-content {
          flex: 1;
          min-width: 0;
        }
        
        .card-title {
          font-weight: 600;
          font-size: 20px;
          margin: 0 0 4px 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .card-subtitle {
          font-size: 15px;
          color: #64748B;
          margin: 0;
          line-height: 1.5;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        /* Animation classes */
        .animate-up .dashboard-content {
          transform: translateY(0);
          opacity: 1;
        }
        
        .animate-up .dashboard-heading {
          transform: translateY(0);
        }
        
        .dashboard-content,
        .dashboard-card {
          will-change: transform, opacity;
        }
        
        .dashboard-card {
          will-change: transform, opacity;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), 
                      opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.3s ease;
        }
        
        .animate-up .dashboard-card {
          transform: translateX(0);
          opacity: 1;
        }
        
        .animate-up .dashboard-card:nth-child(1) {
          transition-delay: 0.3s;
        }
        
        .animate-up .dashboard-card:nth-child(2) {
          transition-delay: 0.4s;
        }
        
        .animate-up .dashboard-card:nth-child(3) {
          transition-delay: 0.5s;
        }
        
        .animate-up .dashboard-card:nth-child(4) {
          transition-delay: 0.6s;
        }
        
        /* Hover effects */
        .dashboard-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 12px 24px rgba(30, 64, 175, 0.15);
        }
        
        .dashboard-card:hover .card-icon {
          background: #3B4CCA;
        }
        
        .dashboard-card:hover .card-icon svg rect,
        .dashboard-card:hover .card-icon svg circle,
        .dashboard-card:hover .card-icon svg path {
          fill: white;
          stroke: white;
        }
        
        .pro-card:hover .card-icon {
          background: rgba(255, 255, 255, 0.3);
        }
        
        @media (max-width: 768px) {
          .dashboard-container {
            padding: 60px 0;
          }
          
          .dashboard-heading {
            font-size: 28px;
            margin-bottom: 36px;
          }
          
          .dashboard-card {
            width: 100% !important;
            padding: 20px;
            gap: 16px;
            max-width: calc(100% - 48px);
          }
          
          .card-icon {
            width: 56px;
            height: 56px;
          }
        }
        
        @media (max-width: 480px) {
          .dashboard-content {
            padding: 0 16px;
          }
          
          .dashboard-heading {
            font-size: 24px;
          }
          
          .dashboard-card {
            max-width: calc(100% - 32px);
          }
          
          .card-title {
            font-size: 18px;
            white-space: normal;
          }
          
          .card-subtitle {
            font-size: 14px;
            white-space: normal;
          }
        }
      `}</style>
    </div>
  );
};

export default FrontEndDashboards;