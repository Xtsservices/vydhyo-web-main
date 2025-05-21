"use client";

import React from "react";
import { motion } from "framer-motion";

const missionData = [
  {
    icon: "🚑",
    title: "Transform Healthcare Access",
    subtitle: "Bridging gaps nationwide with instant connections to verified providers",
    color: "linear-gradient(135deg, #e0f2fe 0%, #93c5fd 100%)"
  },
  {
    icon: "⏱️",
    title: "Right Help, Right Time",
    subtitle: "Eliminating long waits through our intelligent matching system",
    color: "linear-gradient(135deg, #93c5fd 0%, #3b82f6 100%)"
  },
  {
    icon: "❤️",
    title: "Patient-First Approach",
    subtitle: "Compassionate care designed around your needs, not systems",
    color: "linear-gradient(135deg, #e0f2fe 0%, #93c5fd 100%)"
  },
];

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const cardHover = {
    y: -8,
    boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.3)",
    background: "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(224,242,254,0.3) 100%)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  };

  const middleCardHover = {
    y: -12,
    scale: 1.03,
    boxShadow: "0 25px 50px -10px rgba(59, 130, 246, 0.4)",
    background: "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(147,197,253,0.3) 100%)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  };

  const iconHover = {
    scale: 1.1,
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div 
      style={{ 
        background: "linear-gradient(135deg, #f8fafc 0%, #f0f9ff 50%, #e0f2fe 100%)", 
        minHeight: "100vh",
        fontFamily: "'Times New Roman', serif",
        padding: "4rem 1rem",
        display: "flex",
        alignItems: "center"
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 1rem",
        width: "100%"
      }}>
        {/* Header */}
        <motion.div variants={itemVariants} style={{ marginBottom: "3rem" }}>
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
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{display: "block", zIndex: 1}} xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_2)">
                <path d="M14 4L23 20H5L14 4Z" fill="#A21CF5"/>
                <path d="M14 4L23 20H5L14 4Z" fill="url(#paint0_linear_1_2)" fillOpacity="0.5"/>
                <path d="M14 4L23 20H5L14 4Z" stroke="#A21CF5" strokeWidth="1.5" strokeLinejoin="round"/>
                </g>
                <defs>
                <filter id="filter0_d_1_2" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="2"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.635294 0 0 0 0 0.109804 0 0 0 0 0.960784 0 0 0 0.15 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_1_2" x1="14" y1="4" x2="14" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#A21CF5"/>
                  <stop offset="1" stopColor="#6366F1"/>
                </linearGradient>
                </defs>
              </svg>
              <span style={{
                fontSize: "1.15rem",
                fontWeight: 500,
                color: "#1e293b",
                letterSpacing: "0.01em",
                zIndex: 1,
              }}>
                Our Mission
              </span>
              </div>
            </div>
            <p style={{
              fontSize: "1.1rem",
              color: "#4b5563",
              maxWidth: "700px",
              margin: "0 auto",
              textAlign: "center",
              lineHeight: 1.6,
            }}>
              VYDYO is revolutionizing healthcare access through technology that connects patients with the right care at the right time.
            </p>
          </motion.div>

        {/* Mission Cards */}
        <motion.div 
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
            width: "100%",
            marginBottom: "3rem",
            flexWrap: "wrap",
            marginLeft: "-1rem",
          }}
          variants={containerVariants}
        >
          {missionData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={index === 1 ? middleCardHover : cardHover}
              style={{
                backgroundColor: "white",
                borderRadius: "1.25rem",
                padding: index === 1 ? "2.5rem 2rem" : "2rem 1.5rem",
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)",
                border: "1px solid #e0f2fe",
                cursor: "default",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                transition: "all 0.3s ease",
                width: index === 1 ? "350px" : "300px",
                position: "relative",
                overflow: "hidden",
                zIndex: 1,
                minHeight: "350px",
                
              }}
            >
              {/* Gradient overlay */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: item.color,
                zIndex: 2,
                

              }} />
              
              <motion.div 
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: item.color,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "2rem",
                  marginBottom: "1.5rem",
                  boxShadow: "0 10px 20px rgba(59, 130, 246, 0.2)",
                  zIndex: 3
                }}
                whileHover={iconHover}
              >
                {item.icon}
              </motion.div>
              
              <motion.h3 
                style={{
                  fontSize: index === 1 ? "1.5rem" : "1.3rem",
                  fontWeight: 600,
                  color: "#1e40af",
                  marginBottom: "0.75rem",
                  zIndex: 3
                }}
                variants={itemVariants}
              >
                {item.title}
              </motion.h3>
              
              <motion.p 
                style={{
                  color: "#4b5563",
                  lineHeight: 1.6,
                  fontSize: index === 1 ? "1.1rem" : "1rem",
                  zIndex: 3
                }}
                variants={itemVariants}
              >
                {item.subtitle}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          style={{
            textAlign: "center"
          }}
          variants={itemVariants}
        >
          <motion.button
            style={{
              background: "linear-gradient(90deg, #1e40af 0%, #3b82f6 100%)",
              color: "white",
              border: "none",
              padding: "1rem 2.5rem",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              fontWeight: 500,
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem"
            }}
            whileHover={{
              y: -3,
              boxShadow: "0 15px 40px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Get Started with VYDYO</span>
            <span>→</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}