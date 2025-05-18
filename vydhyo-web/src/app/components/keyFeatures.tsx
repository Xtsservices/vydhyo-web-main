'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const features = [
  {
    title: "Appointment Scheduling",
    description: "Ability to schedule, reschedule, or cancel appointments easily",
    icon: "📅"
  },
  {
    title: "Patient Management",
    description: "Database of patient records, including medical history & notes",
    icon: "👨‍⚕️"
  },
  {
    title: "Doctor Availability",
    description: "Set & manage doctors' availability, block out time for vacations",
    icon: "⏱️"
  },
  {
    title: "Automated Notifications",
    description: "Notifications for staff about changes in schedules",
    icon: "🔔"
  },
  {
    title: "Payment Processing",
    description: "Integration with payment gateways for co-pays or fees",
    icon: "💳"
  },
  {
    title: "Reporting & Analytics",
    description: "Generate reports on appointment types, cancellations",
    icon: "📊"
  },
  {
    title: "Telehealth Integration",
    description: "Secure messaging for pre-appointment communication",
    icon: "🖥️"
  },
  {
    title: "Different Booking Types",
    description: "Collect specific information from patients before the appointment",
    icon: "📝"
  },
  {
    title: "Feedback & Reviews",
    description: "Collect patient feedback after appointments",
    icon: "⭐"
  },
  {
    title: "Multi-User Access",
    description: "Different access levels for staff, doctors, administrators",
    icon: "👥"
  },
  {
    title: "Mobile Friendly",
    description: "Mobile-friendly interface for managing bookings on the go",
    icon: "📱"
  },
  {
    title: "Cancel & Rescheduling",
    description: "Ability to reschedule directly through the template",
    icon: "🔄"
  },
];

// Define IconWrapper first since it's referenced in FeatureCard
const IconWrapper = styled(motion.div)`
  width: 48px;
  height: 48px;
  background: #EEF4FF;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.5rem;
  color: #2563EB;
  transition: all 0.3s ease;
`;

// Define FeatureTitle and FeatureDescription before FeatureCard
const FeatureTitle = styled(motion.h3)`
  font-weight: 600;
  font-size: 1.125rem;
  color: #1E293B;
  margin: 0;
  transition: color 0.3s ease;
`;

const FeatureDescription = styled(motion.p)`
  color: #64748B;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  padding-left: 0.5rem;
  z-index: 1;
  transition: color 0.3s ease;
`;

const FeatureCard = styled(motion.div)`
  background: #F9FAFB;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  border: 1px solid #E5E7EB;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.15);
    border-color: #2563EB;
    
    &::before {
      opacity: 1;
    }
    
    ${IconWrapper} {
      background: linear-gradient(135deg, #2563EB, #3B82F6);
      color: white;
      transform: rotate(5deg) scale(1.1);
    }
    
    ${FeatureTitle} {
      color: #2563EB;
    }
    
    ${FeatureDescription} {
      color: #1E40AF;
    }
  }
`;

const FeatureHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  z-index: 1;
`;

const FeatureSection = styled(motion.section)`
  background: #fff;
  padding: 5rem 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Badge = styled(motion.div)`
  background: linear-gradient(145deg, #2563EB, #3B82F6);
  border-radius: 24px;
  padding: 0.5rem 1.5rem;
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  color: white;
  font-size: 1rem;
  box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
  margin-bottom: 1.5rem;
`;

const Title = styled(motion.h2)`
  text-align: center;
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #111827;
  line-height: 1.2;
  background: linear-gradient(90deg, #2563EB, #1E40AF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
`;

const FeaturesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const KeyFeatures = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 0.5
      }
    },
    hover: {
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <FeatureSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Badge
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
            whileHover={{ scale: 1.05 }}
          >
            <span style={{ marginRight: '0.5rem' }}>✨</span> Top Notch Features
          </Badge>
        </div>

        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
        >
          Key Features for Your Healthcare Template
        </Title>

        <FeaturesGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              variants={itemVariants}
              whileHover="hover"
            >
              <FeatureHeader>
                <IconWrapper
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {feature.icon}
                </IconWrapper>
                <FeatureTitle>{feature.title}</FeatureTitle>
              </FeatureHeader>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </FeatureSection>
  );
};

export default KeyFeatures;