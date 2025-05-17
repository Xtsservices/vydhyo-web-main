"use client";

import React, { useState } from "react";
import { Row, Col, Card } from "antd";
import {
  FileTextOutlined,
  DatabaseOutlined,
  AppstoreAddOutlined,
  DashboardOutlined,
  CalendarOutlined,
  TeamOutlined,
  MedicineBoxOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
}

const features: Feature[] = [
  {
    icon: <CalendarOutlined />,
    title: "Smart Appointment System",
    description:
      "Automated scheduling with real-time availability, reminders, and rescheduling options for patients.",
    iconBgColor: "#8b5cf6",
    iconColor: "white",
  },
  {
    icon: <TeamOutlined />,
    title: "Patient Management",
    description:
      "Comprehensive patient profiles with medical history, prescriptions, and visit records all in one place.",
    iconBgColor: "#10b981",
    iconColor: "white",
  },
  {
    icon: <MedicineBoxOutlined />,
    title: "E-Prescriptions",
    description:
      "Generate digital prescriptions that can be shared instantly with patients and pharmacies.",
    iconBgColor: "#22d3ee",
    iconColor: "white",
  },
  {
    icon: <LineChartOutlined />,
    title: "Analytics Dashboard",
    description:
      "Track clinic performance, patient flow, and financial metrics with intuitive visualizations.",
    iconBgColor: "#f97316",
    iconColor: "white",
  },
];

const ChooseUsSection: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div 
      style={sectionStyle}
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div style={containerStyle}>
        {/* Left side */}
        <motion.div style={leftContentStyle} variants={itemVariants}>
          <motion.div 
            style={pillStyle}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div style={pillIconStyle}>
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <span style={pillTextStyle}>Why Choose Vydhyo</span>
          </motion.div>

          <motion.h2 style={headerStyle} variants={itemVariants}>
            Transform Your Clinic with <span style={{ color: "#3b82f6" }}>Vydhyo</span> Digital Healthcare Solution
          </motion.h2>

          <motion.p style={subHeaderStyle} variants={itemVariants}>
            Vydhyo is a comprehensive doctor appointment and clinic management platform designed to streamline your practice, enhance patient experience, and boost operational efficiency.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Row gutter={48} style={{ marginTop: 32 }}>
              <Col>
                <motion.div 
                  style={statBoxStyle}
                  whileHover={{ scale: 1.05 }}
                >
                  <span style={statNumberStyle}>
                    10K<span style={plusStyle}>+</span>
                  </span>
                  <p style={statLabelStyle}>Happy Patients</p>
                </motion.div>
              </Col>
              <Col>
                <motion.div 
                  style={statBoxStyle}
                  whileHover={{ scale: 1.05 }}
                >
                  <span style={statNumberStyle}>
                    500<span style={plusStyle}>+</span>
                  </span>
                  <p style={statLabelStyle}>Partner Clinics</p>
                </motion.div>
              </Col>
              <Col>
                <motion.div 
                  style={statBoxStyle}
                  whileHover={{ scale: 1.05 }}
                >
                  <span style={statNumberStyle}>
                    99<span style={plusStyle}>%</span>
                  </span>
                  <p style={statLabelStyle}>Uptime Reliability</p>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </motion.div>

        {/* Right side */}
        <div style={rightContentStyle}>
          {features.map((feature, index) => {
            const isHovered = hoverIndex === index;
            return (
              <motion.div
                key={index}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 12,
                }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: isHovered ? "100%" : 0,
                    background:
                      "linear-gradient(to top, #0ea5e9 0%, #3b82f6 100%)",
                    transition: "height 0.3s ease",
                    zIndex: 1,
                  }}
                  animate={{
                    height: isHovered ? "100%" : 0,
                  }}
                />
                <Card
                  hoverable
                  style={{
                    ...cardStyle,
                    position: "relative",
                    zIndex: 2,
                    background: "#0f172a",
                    color: isHovered ? "white" : "#cbd5e1",
                    border: "none",
                  }}
                  styles={{
                    body: {
                      padding: 24,
                      textAlign: "left",
                    },
                  }}
                >
                  <motion.div
                    style={{
                      ...iconWrapperStyle,
                      backgroundColor: isHovered
                        ? "white"
                        : feature.iconBgColor,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    animate={{
                      backgroundColor: isHovered ? "white" : feature.iconBgColor,
                    }}
                  >
                    {React.cloneElement(
                      feature.icon as React.ReactElement<{
                        style?: React.CSSProperties;
                      }>,
                      {
                        style: {
                          ...(
                            feature.icon as React.ReactElement<{
                              style?: React.CSSProperties;
                            }>
                          ).props.style,
                          color: isHovered ? "#3b82f6" : feature.iconColor,
                          fontSize: 24,
                        },
                      }
                    )}
                  </motion.div>
                  <h3
                    style={{
                      ...cardTitleStyle,
                      color: isHovered ? "white" : "#cbd5e1",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      ...cardDescStyle,
                      color: isHovered ? "white" : "#94a3b8",
                    }}
                  >
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced Styles
const sectionStyle: React.CSSProperties = {
  backgroundColor: "#0a132d",
  padding: "6rem 2rem",
  color: "white",
  fontFamily: "'Inter', sans-serif",
  backgroundImage: "radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
};

const containerStyle: React.CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  display: "flex",
  gap: 40,
  flexWrap: "wrap",
  justifyContent: "space-between",
};

const leftContentStyle: React.CSSProperties = {
  flex: "1 1 400px",
  maxWidth: 480,
};

const pillStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  borderRadius: 9999,
  padding: "8px 20px",
  border: "2px solid #8b5cf6",
  backgroundColor: "white",
  width: "fit-content",
  fontWeight: 600,
  fontSize: 14,
  color: "#4b5563",
  marginBottom: 16,
  userSelect: "none",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const pillIconStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#8b5cf6",
  width: 20,
  height: 20,
};

const pillTextStyle: React.CSSProperties = {
  color: "#4b5563",
  fontWeight: 600,
};

const headerStyle: React.CSSProperties = {
  fontSize: "2.5rem",
  fontWeight: 800,
  margin: "16px 0 24px",
  color: "white",
  lineHeight: 1.2,
  background: "linear-gradient(90deg, #ffffff, #cbd5e1)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const subHeaderStyle: React.CSSProperties = {
  fontSize: "1.125rem",
  color: "#a1a9bb",
  lineHeight: 1.6,
  maxWidth: 440,
  marginBottom: "1.5rem",
};

const statBoxStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "16px",
  borderRadius: "8px",
  backgroundColor: "rgba(30, 58, 138, 0.2)",
  backdropFilter: "blur(4px)",
  border: "1px solid rgba(59, 130, 246, 0.2)",
};

const statNumberStyle: React.CSSProperties = {
  fontSize: "2rem",
  fontWeight: 700,
  color: "white",
  userSelect: "none",
  background: "linear-gradient(90deg, #3b82f6, #93c5fd)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const plusStyle: React.CSSProperties = {
  color: "#f43f5e",
  fontWeight: 700,
  marginLeft: 4,
};

const statLabelStyle: React.CSSProperties = {
  fontSize: 14,
  color: "#cbd5e1",
  marginTop: 8,
  fontWeight: 500,
};

const rightContentStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 24,
  flex: "1 1 400px",
  maxWidth: 600,
};

const cardStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  borderRadius: 12,
  cursor: "pointer",
  transition: "all 0.3s ease",
  height: "100%",
};

const iconWrapperStyle: React.CSSProperties = {
  borderRadius: 12,
  width: 48,
  height: 48,
  marginBottom: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.3s ease",
};

const cardTitleStyle: React.CSSProperties = {
  fontWeight: 700,
  fontSize: 18,
  marginBottom: 12,
  color: "#cbd5e1",
  transition: "all 0.3s ease",
};

const cardDescStyle: React.CSSProperties = {
  fontSize: 14,
  lineHeight: 1.6,
  color: "#94a3b8",
  transition: "all 0.3s ease",
};

export default ChooseUsSection;