"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const featuresLeft = [
  "Find Doctors Nearby",
  "Search by Specialty",
  "Filter by Availability",
  "View Patient Ratings",
  "Doctor Profiles",
  "Secure Booking",
];

const featuresRight = [
  "Real-Time Scheduling",
  "Instant Confirmation",
  "Digital Appointment Cards",
  "Reminder Notifications",
  "Cancellation Options",
  "Health Records Access",
];

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const featureItemLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const featureItemRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function DoctorAppointments() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    setIsLoaded(true);

    // Set up Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener("resize", checkIfMobile);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className="doctor-appointments-section"
      ref={sectionRef}
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
        width: "100%",
        minHeight: "100vh",
        padding: 0,
        margin: 0,
        overflow: "hidden",
        position: "relative"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          maxWidth: 1400,
          margin: "0 auto",
          padding: isMobile ? "40px 16px" : "80px 16px 0 16px",
          gap: isMobile ? 24 : 32,
        }}
      >
        {/* Left Side - Content */}
        <motion.div
          initial="hidden"
          animate={isVisible && isLoaded ? "visible" : "hidden"}
          variants={fadeInFromLeft}
          style={{
            flex: 1,
            paddingLeft: isMobile ? 16 : 40,
            paddingRight: isMobile ? 16 : 0,
            minWidth: 0,
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <motion.div
            variants={fadeInFromLeft}
            style={{
              background: "#fff",
              borderRadius: 32,
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 24px",
              boxShadow: "0 4px 12px rgba(79, 70, 229, 0.08)",
              marginBottom: 24,
              fontWeight: 500,
              fontSize: isMobile ? 16 : 18,
              color: "#222",
              gap: 12,
              border: "1px solid rgba(79, 70, 229, 0.1)",
            }}
            whileHover={{ 
              y: -2,
              boxShadow: "0 6px 16px rgba(79, 70, 229, 0.12)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 32,
                height: 32,
                background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                borderRadius: "50%",
                color: "#fff",
                fontSize: 20,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="4" fill="#fff" />
                <rect x="7" y="7" width="10" height="2" rx="1" fill="#4f46e5" />
                <rect x="7" y="11" width="10" height="2" rx="1" fill="#4f46e5" />
                <rect x="7" y="15" width="6" height="2" rx="1" fill="#4f46e5" />
              </svg>
            </motion.span>
            Doctor Appointments
          </motion.div>

          <motion.h2
            variants={fadeInFromLeft}
            style={{
              fontSize: isMobile ? 32 : 48,
              fontWeight: 800,
              color: "#0a2239",
              marginBottom: 16,
              lineHeight: 1.1,
              background: "linear-gradient(90deg, #0a2239 0%, #2563eb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.5px"
            }}
          >
            Find & Book <span style={{ color: "#2563eb" }}>Doctors</span> Nearby
          </motion.h2>

          <motion.p
            variants={fadeInFromLeft}
            style={{
              color: "#4b5563",
              fontSize: isMobile ? 16 : 18,
              marginBottom: 32,
              maxWidth: 540,
              lineHeight: 1.6
            }}
          >
            Search for specialists in your area, filtering by specialty, availability, and
            patient ratings. Book appointments in real-time and receive digital confirmations.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            style={{
              display: "flex",
              gap: isMobile ? 24 : 48,
              marginBottom: 32,
              flexWrap: "wrap",
            }}
          >
            <motion.ul 
              style={{ listStyle: "none", padding: 0, margin: 0 }}
              variants={staggerContainer}
            >
              {featuresLeft.map((feature, index) => (
                <motion.li
                  key={feature}
                  variants={featureItemLeft}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 16,
                    fontSize: isMobile ? 16 : 18,
                    color: "#222",
                  }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.span
                    style={{
                      color: "#10b981",
                      marginRight: 12,
                      fontSize: isMobile ? 16 : 18,
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <svg
                      width={isMobile ? "16" : "18"}
                      height={isMobile ? "16" : "18"}
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="12" fill="#10b981" />
                      <path
                        d="M8 12.5l2.5 2.5 5-5"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.span>
                  {feature}
                </motion.li>
              ))}
            </motion.ul>

            <motion.ul 
              style={{ listStyle: "none", padding: 0, margin: 0 }}
              variants={staggerContainer}
            >
              {featuresRight.map((feature) => (
                <motion.li
                  key={feature}
                  variants={featureItemRight}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 16,
                    fontSize: isMobile ? 16 : 18,
                    color: "#222",
                  }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.span
                    style={{
                      color: "#10b981",
                      marginRight: 12,
                      fontSize: isMobile ? 16 : 18,
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <svg
                      width={isMobile ? "16" : "18"}
                      height={isMobile ? "16" : "18"}
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="12" fill="#10b981" />
                      <path
                        d="M8 12.5l2.5 2.5 5-5"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.span>
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.button
            variants={fadeInFromLeft}
            style={{
              background: "linear-gradient(135deg, #0a2239 0%, #2563eb 100%)",
              color: "#fff",
              border: "none",
              borderRadius: 24,
              padding: isMobile ? "12px 28px" : "16px 40px",
              fontSize: isMobile ? 16 : 18,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              boxShadow: "0 4px 16px rgba(37, 99, 235, 0.2)",
              marginBottom: isMobile ? 24 : 0,
              position: "relative",
              overflow: "hidden"
            }}
            whileHover={{ 
              y: -3,
              boxShadow: "0 8px 24px rgba(37, 99, 235, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span style={{ position: "relative", zIndex: 2 }}>
              Book Appointment
            </span>
            <motion.span
              style={{ position: "relative", zIndex: 2 }}
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg
                width={isMobile ? "16" : "18"}
                height={isMobile ? "16" : "18"}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 18l6-6-6-6"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.span>
            <motion.span
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, #2563eb 0%, #0a2239 100%)",
                opacity: 0,
                zIndex: 1
              }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Right Side - Image (Desktop only) */}
        <AnimatePresence>
          {!isMobile && (
            <motion.div
              initial="hidden"
              animate={isVisible && isLoaded ? "visible" : "hidden"}
              variants={fadeInFromRight}
              style={{
                flex: 1.2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minWidth: 0,
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "100%",
                  height: "100%",
                  aspectRatio: "unset",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Floating layers effect */}
                {[1, 2, 3].map((layer) => (
                  <motion.div
                    key={layer}
                    style={{
                      position: "absolute",
                      top: `${layer * 2.85}%`,
                      left: `${layer * 2.85}%`,
                      width: `${100 - layer * 5.7}%`,
                      height: `${94.3 - layer * 4.3}%`,
                      background: "white",
                      borderRadius: 32,
                      opacity: layer === 1 ? 0.5 : layer === 2 ? 0.32 : 0.18,
                      zIndex: 4 - layer,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.05)"
                    }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 4 + layer,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}

                {/* Doctor appointment image */}
                <motion.div
                  style={{
                    position: "relative",
                    width: "50%",
                    height: "50%",
                    borderRadius: 24,
                    boxShadow: "0 20px 50px rgba(37,99,235,0.2)",
                    zIndex: 4,
                    overflow: "hidden"
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.img
                    src="./images/appointment.jpg"
                    alt="Doctor Appointment Booking"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      background: "white",
                    }}
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                  <motion.div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(10,34,57,0.1) 100%)",
                      zIndex: 5
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating decorative elements */}
      {!isMobile && (
        <>
          <motion.div
            style={{
              position: "absolute",
              top: "20%",
              left: "5%",
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "rgba(79, 70, 229, 0.1)",
              zIndex: 0
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            style={{
              position: "absolute",
              top: "60%",
              right: "10%",
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: "rgba(16, 185, 129, 0.1)",
              zIndex: 0
            }}
            animate={{
              y: [0, 20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            style={{
              position: "absolute",
              bottom: "15%",
              left: "15%",
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "rgba(37, 99, 235, 0.1)",
              zIndex: 0
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, 15, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </>
      )}

      {/* Force re-animation when scrolling - hidden element that tracks visibility */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: 0,
          width: "1px",
          height: "1px",
          opacity: 0,
          pointerEvents: "none"
        }}
        ref={sectionRef}
      />
    </section>
  );
}