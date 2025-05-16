'use client';

import React, { useState } from 'react';
import { Row, Col, Card } from 'antd';
import {
  FileTextOutlined,
  DatabaseOutlined,
  AppstoreAddOutlined,
  DashboardOutlined,
} from '@ant-design/icons';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
}

const features: Feature[] = [
  {
    icon: <FileTextOutlined />,
    title: 'Feature Rich Template',
    description:
      'Includes essential features such as a navigation bar, hero section, services section, testimonials.',
    iconBgColor: '#8b5cf6',
    iconColor: 'white',
  },
  {
    icon: <DatabaseOutlined />,
    title: '80+ Versatile Inner Pages',
    description:
      'Creating versatile inner pages for a website allows you to present various types of content',
    iconBgColor: '#10b981',
    iconColor: 'white',
  },
  {
    icon: <AppstoreAddOutlined />,
    title: 'Mix & Match Section Blocks',
    description:
      'Creating versatile inner pages for a website allows you to present various types',
    iconBgColor: '#22d3ee',
    iconColor: 'white',
  },
  {
    icon: <DashboardOutlined />,
    title: 'Dashboard Designs',
    description:
      'Multiple Dashboard for Clinic Admin, Doctors & Patient for various information',
    iconBgColor: '#f97316',
    iconColor: 'white',
  },
];

const ChooseUsSection: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div style={sectionStyle}>
      <div style={containerStyle}>
        {/* Left side */}
        <div style={leftContentStyle}>
          <div style={pillStyle}>
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
            <span style={pillTextStyle}>Multiple Template Options</span>
          </div>

          <h2 style={headerStyle}>
            Choose Us for Seamless Booking Management Template
          </h2>

          <p style={subHeaderStyle}>
            Our main aim is to provide simple and effective online services for
            doctor appointments.
          </p>

          <Row gutter={48} style={{ marginTop: 32 }}>
            <Col>
              <div style={statBoxStyle}>
                <span style={statNumberStyle}>
                  17<span style={plusStyle}>+</span>
                </span>
                <p style={statLabelStyle}>Unique Demos</p>
              </div>
            </Col>
            <Col>
              <div style={statBoxStyle}>
                <span style={statNumberStyle}>
                  150<span style={plusStyle}>+</span>
                </span>
                <p style={statLabelStyle}>Well Designed Pages</p>
              </div>
            </Col>
            <Col>
              <div style={statBoxStyle}>
                <span style={statNumberStyle}>
                  6<span style={plusStyle}>+</span>
                </span>
                <p style={statLabelStyle}>Booking & Detail Page</p>
              </div>
            </Col>
          </Row>
        </div>

        {/* Right side */}
        <div style={rightContentStyle}>
          {features.map((feature, index) => {
            const isHovered = hoverIndex === index;
            return (
              <div 
                key={index}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 8,
                }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div 
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: isHovered ? '100%' : 0,
                    background: 'linear-gradient(to top, #0ea5e9 0%, #3b82f6 100%)',
                    transition: 'height 0.3s ease',
                    zIndex: 1,
                  }}
                />
                <Card
                  hoverable
                  style={{
                    ...cardStyle,
                    position: 'relative',
                    zIndex: 2,
                    background: '#0f172a',
                    color: isHovered ? 'white' : '#cbd5e1',
                    border: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  bodyStyle={{
                    padding: 24,
                    textAlign: 'left',
                  }}
                >
                  <div
                    style={{
                      ...iconWrapperStyle,
                      backgroundColor: isHovered ? 'white' : feature.iconBgColor,
                      transition: 'background-color 0.3s ease',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {React.cloneElement(feature.icon as React.ReactElement, {
                      style: {
                        color: isHovered ? '#3b82f6' : feature.iconColor,
                        fontSize: 24,
                        transition: 'color 0.3s ease',
                      },
                    })}
                  </div>
                  <h3
                    style={{
                      ...cardTitleStyle,
                      color: isHovered ? 'white' : '#cbd5e1',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      ...cardDescStyle,
                      color: isHovered ? 'white' : '#94a3b8',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {feature.description}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Styles
const sectionStyle: React.CSSProperties = {
  backgroundColor: '#0a132d',
  padding: '4rem 2rem',
  color: 'white',
  fontFamily: "'Inter', sans-serif",
};

const containerStyle: React.CSSProperties = {
  maxWidth: 1200,
  margin: '0 auto',
  display: 'flex',
  gap: 40,
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};

const leftContentStyle: React.CSSProperties = {
  flex: '1 1 400px',
  maxWidth: 480,
};

const pillStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  borderRadius: 9999,
  padding: '6px 16px',
  border: '2px solid #8b5cf6',
  backgroundColor: 'white',
  width: 'fit-content',
  fontWeight: 500,
  fontSize: 14,
  color: '#4b5563',
  marginBottom: 16,
  userSelect: 'none',
};

const pillIconStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#8b5cf6',
  width: 18,
  height: 18,
};

const pillTextStyle: React.CSSProperties = {
  color: '#4b5563',
  fontWeight: 600,
};

const headerStyle: React.CSSProperties = {
  fontSize: 28,
  fontWeight: 700,
  margin: '8px 0 16px',
  color: 'white',
  lineHeight: 1.2,
};

const subHeaderStyle: React.CSSProperties = {
  fontSize: 16,
  color: '#a1a9bb',
  lineHeight: 1.5,
  maxWidth: 440,
};

const statBoxStyle: React.CSSProperties = {
  textAlign: 'center',
};

const statNumberStyle: React.CSSProperties = {
  fontSize: 32,
  fontWeight: 700,
  color: 'white',
  userSelect: 'none',
};

const plusStyle: React.CSSProperties = {
  color: '#f43f5e',
  fontWeight: 700,
  marginLeft: 4,
};

const statLabelStyle: React.CSSProperties = {
  fontSize: 14,
  color: 'white',
  marginTop: 4,
  fontWeight: 500,
};

const rightContentStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 24,
  flex: '1 1 400px',
  maxWidth: 600,
};

const cardStyle: React.CSSProperties = {
  backgroundColor: 'transparent',
  borderRadius: 8,
  cursor: 'pointer',
};

const iconWrapperStyle: React.CSSProperties = {
  borderRadius: 8,
  width: 40,
  height: 40,
  marginBottom: 16,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const cardTitleStyle: React.CSSProperties = {
  fontWeight: 700,
  fontSize: 16,
  marginBottom: 8,
  color: '#cbd5e1',
};

const cardDescStyle: React.CSSProperties = {
  fontSize: 14,
  lineHeight: 1.5,
  color: '#94a3b8',
};

export default ChooseUsSection;