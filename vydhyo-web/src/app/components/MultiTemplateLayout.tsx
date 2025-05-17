'use client';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Demo data with direct image URLs
const demoData = [
  { 
    title: 'Clinic Dashboard', 
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'DASHBOARD',
    description: 'Comprehensive overview of your clinic operations with real-time analytics' 
  },
  { 
    title: 'Doctor Profile', 
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'PROFILE',
    description: 'Showcase doctor credentials, specialties and availability'
  },
  { 
    title: 'Patient Portal', 
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'PORTAL',
    description: 'Secure patient access to medical records and appointments'
  },
  { 
    title: 'Appointment Booking', 
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'BOOKING',
    description: 'Easy online scheduling system for patients'
  },
  { 
    title: 'Telemedicine', 
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'VIRTUAL',
    description: 'Virtual consultations with secure video calling'
  },
  { 
    title: 'Medical Records', 
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'RECORDS',
    description: 'Digital health records management system'
  },
  { 
    title: 'E-Prescriptions', 
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'PRESCRIPTIONS',
    description: 'Paperless prescription system with pharmacy integration'
  },
  { 
    title: 'Billing System', 
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'BILLING',
    description: 'Integrated payment solutions and invoice management'
  },
  { 
    title: 'Lab Results', 
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'LABS',
    description: 'Digital lab test results with analysis tools'
  },
  { 
    title: 'Admin Panel', 
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'ADMIN',
    description: 'Complete clinic management dashboard'
  },
  { 
    title: 'Mobile App UI', 
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'MOBILE',
    description: 'Patient mobile application interface'
  },
  { 
    title: 'Analytics Dashboard', 
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'ANALYTICS',
    description: 'Performance insights and clinic metrics'
  }
];

// Styled components with stable class names
const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8fafc, #e0e7ff);
  width: 100%;
  overflow-x: hidden;
  padding: 3rem 0;
`

const TopBar = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`

const DemoPagesBtn = styled(motion.button)`
  background: #ffffff;
  color: #4f46e5;
  border: 1px solid #c7d2fe;
  border-radius: 24px;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(79, 70, 229, 0.1);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #4f46e5;
    color: white;
    box-shadow: 0 6px 12px rgba(79, 70, 229, 0.15);
  }
`

const MainTitle = styled(motion.h1)`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin: 1rem 0;
  background: linear-gradient(90deg, #4f46e5, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const SubTitle = styled(motion.p)`
  text-align: center;
  font-size: 1.125rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`

const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
`

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`

const GalleryCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e0e7ff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`

const CategoryBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  color: #4f46e5;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background: #f1f5f9;
  overflow: hidden;
`

const GalleryInfo = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const DemoTitle = styled.h3`
  font-size: 1.125rem;
  color: #1e293b;
  font-weight: 600;
  margin: 0;
`

const DemoDescription = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  margin: 0;
`

const ActionButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
`

const DemoBtn = styled(motion.a).withConfig({
  shouldForwardProp: (prop) => !['$primary'].includes(prop),
})<{ $primary?: boolean }>`
  background: ${({ $primary }) => ($primary ? '#4f46e5' : '#ffffff')};
  color: ${({ $primary }) => ($primary ? '#ffffff' : '#4f46e5')};
  border: 1px solid ${({ $primary }) => ($primary ? '#4f46e5' : '#c7d2fe')};
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  flex: 1;
  
  &:hover {
    background: ${({ $primary }) => ($primary ? '#4338ca' : '#e0e7ff')};
  }
`

const MultiTemplateLayout = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <PageWrapper>
      <TopBar
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <DemoPagesBtn
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>✨</span> Vydhyo Demo Pages
        </DemoPagesBtn>
      </TopBar>

      <MainTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Vydhyo Healthcare Templates
      </MainTitle>

      <SubTitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Discover our comprehensive suite of templates designed specifically for modern healthcare practices
      </SubTitle>

      <GalleryContainer>
        <GalleryGrid>
          {demoData.map((demo, index) => (
            <GalleryCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <CategoryBadge>{demo.category}</CategoryBadge>
              <ImageContainer>
                <Image
                  src={demo.image}
                  alt={demo.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                />
              </ImageContainer>
              <GalleryInfo>
                <DemoTitle>{demo.title}</DemoTitle>
                <DemoDescription>{demo.description}</DemoDescription>
                <ActionButtons>
                  <DemoBtn 
                    href="#" 
                    $primary
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Live Demo
                  </DemoBtn>
                  <DemoBtn 
                    href="#"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Details
                  </DemoBtn>
                </ActionButtons>
              </GalleryInfo>
            </GalleryCard>
          ))}
        </GalleryGrid>
      </GalleryContainer>
    </PageWrapper>
  )
}

export default MultiTemplateLayout