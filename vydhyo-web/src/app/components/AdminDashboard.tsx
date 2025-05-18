"use client";

import React from "react";

const featuresLeft = [
  "Admin Dashboard",
  "Doctors List",
  "Specialities",
  "Patients List",
  "Profile",
  "Error Pages",
];

const featuresRight = [
  "Reviews",
  "Transactions",
  "Settings",
  "Reports",
  "Authentication",
  "Interfaces & Widgets",
];

export default function AdminDashboard() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Clean up the event listener
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <section
      style={{
        background: "#fcfcfc",
        width: "100%",
        minHeight: "100vh",
        padding: 0,
        margin: 0,
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
        <div
          style={{
            flex: 1,
            paddingLeft: isMobile ? 16 : 40,
            paddingRight: isMobile ? 16 : 0,
            minWidth: 0,
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 32,
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 24px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              marginBottom: 24,
              fontWeight: 500,
              fontSize: isMobile ? 16 : 18,
              color: "#222",
              gap: 12,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 32,
                height: 32,
                background: "#4f46e5",
                borderRadius: "50%",
                color: "#fff",
                fontSize: 20,
              }}
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="4" fill="#fff" />
                <rect x="7" y="7" width="10" height="2" rx="1" fill="#4f46e5" />
                <rect x="7" y="11" width="10" height="2" rx="1" fill="#4f46e5" />
                <rect x="7" y="15" width="6" height="2" rx="1" fill="#4f46e5" />
              </svg>
            </span>
            Admin Dashboard
          </div>

          <h2
            style={{
              fontSize: isMobile ? 28 : 36,
              fontWeight: 700,
              color: "#0a2239",
              marginBottom: 16,
              lineHeight: 1.1,
            }}
          >
            Well Functional <span style={{ color: "#2563eb" }}>Admin</span> Screens
          </h2>

          <p
            style={{
              color: "#4b5563",
              fontSize: isMobile ? 16 : 18,
              marginBottom: 32,
              maxWidth: 540,
            }}
          >
            Admin screens, often referred to as the administrative interface or dashboard, are user
            interfaces designed for administrators or authorized personnel to manage and control
            various aspects.
          </p>

          <div
            style={{
              display: "flex",
              gap: isMobile ? 24 : 48,
              marginBottom: 32,
              flexWrap: "wrap",
            }}
          >
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {featuresLeft.map((feature) => (
                <li
                  key={feature}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 16,
                    fontSize: isMobile ? 16 : 18,
                    color: "#222",
                  }}
                >
                  <span
                    style={{
                      color: "#10b981",
                      marginRight: 12,
                      fontSize: isMobile ? 16 : 18,
                    }}
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
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {featuresRight.map((feature) => (
                <li
                  key={feature}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 16,
                    fontSize: isMobile ? 16 : 18,
                    color: "#222",
                  }}
                >
                  <span
                    style={{
                      color: "#10b981",
                      marginRight: 12,
                      fontSize: isMobile ? 16 : 18,
                    }}
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
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <button
            style={{
              background: "#010c1c",
              color: "#fff",
              border: "none",
              borderRadius: 24,
              padding: isMobile ? "10px 24px" : "12px 32px",
              fontSize: isMobile ? 16 : 18,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              marginBottom: isMobile ? 24 : 0,
            }}
          >
            View Admin
            <span>
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
            </span>
          </button>
        </div>

        {/* Right Side - Image (Desktop only) */}
        {!isMobile && (
          <div
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
                maxWidth: 700,
                height: "auto",
                aspectRatio: "700/420",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Background gradient rectangles */}
              <div
                style={{
                  position: "absolute",
                  top: "5.7%",
                  left: "5.7%",
                  width: "88.5%",
                  height: "81%",
                  background: "linear-gradient(135deg, #2563eb 0%, #6366f1 100%)",
                  borderRadius: 32,
                  opacity: 0.18,
                  zIndex: 1,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "2.85%",
                  left: "2.85%",
                  width: "94.3%",
                  height: "90.5%",
                  background: "linear-gradient(135deg, #2563eb 0%, #6366f1 100%)",
                  borderRadius: 32,
                  opacity: 0.32,
                  zIndex: 2,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg, #2563eb 0%, #6366f1 100%)",
                  borderRadius: 32,
                  opacity: 0.5,
                  zIndex: 3,
                }}
              />
              {/* Admin dashboard image */}
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Admin Dashboard"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: 24,
                  boxShadow: "0 8px 32px rgba(37,99,235,0.15)",
                  zIndex: 4,
                  objectFit: "cover",
                  background: "#fff",
                  aspectRatio: "700/420",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}