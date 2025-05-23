'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const demoData = [
  { 
    title: 'Skilled Nursing', 
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'HOME CARE',
    description: 'Professional nursing care from medication administration to wound care delivered by experienced, dedicated registered nurses.'
  },
  { 
    title: 'Elder Care', 
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'HOME CARE',
    description: 'Compassionate assistance for seniors, including daily living activities, medication management, and companionship by trained caregivers.'
  },
  { 
    title: 'Physiotherapy', 
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'HOME CARE',
    description: 'Personalized rehabilitation programs conducted at home by experienced therapists, helping patients recover mobility and strength.'
  },
  { 
    title: 'Post-Surgery Care', 
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'HOME CARE',
    description: 'Specialized recovery support following hospital discharge, ensuring proper healing and preventing complications.'
  },
  { 
    title: 'Check Availability', 
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'BLOOD BANK',
    description: 'View real-time blood inventory in nearby hospitals.'
  },
  { 
    title: 'Locate Centers', 
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'BLOOD BANK',
    description: 'Find verified blood banks in your locality.'
  },
  { 
    title: 'Receive Updates', 
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'BLOOD BANK',
    description: 'Get notifications when your blood type is available.'
  },
  
];

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
  width: 100%;
  overflow-x: hidden;
  padding: 3rem 0;
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const DemoPagesBtn = styled.button`
  background: #ffffff;
  color: #4f46e5;
  border: 1px solid #c7d2fe;
  border-radius: 24px;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.15);
  transition: all 0.2s ease;
  
  &:hover {
    background: #4f46e5;
    color: white;
    box-shadow: 0 8px 16px rgba(79, 70, 229, 0.2);
  }
`;

const MainTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 800;
  margin: 1rem 0;
  background: linear-gradient(90deg, #4338ca, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SubTitle = styled.p`
  text-align: center;
  font-size: 1.25rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  padding: 0 1rem;
`;

const GalleryContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
`;

const GalleryCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid rgba(224, 231, 255, 0.7);
  box-shadow: 0 10px 30px rgba(79, 70, 229, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  perspective: 1000px;
`;

const CardInner = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
`;

const CardFront = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #011126 0%, #1E40AF 100%);
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: -2rem;

`;

const CategoryBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.95);
  color: #4f46e5;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  z-index: 2;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const FlippedCategoryBadge = styled(CategoryBadge)`
  background: rgba(255, 255, 255, 0.15);
  color: white;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  background: #f1f5f9;
  overflow: hidden;
`;

const GalleryInfo = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-grow: 1;
`;

const DemoTitle = styled.h3`
  font-size: 1.3rem;
  color: #1e293b;
  font-weight: 700;
  margin: 0;
`;

const FlippedTitle = styled(DemoTitle)`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const DemoDescription = styled.p`
  font-size: 0.9375rem;
  color: #64748b;
  line-height: 1.6;
`;

const FlippedDescription = styled(DemoDescription)`
  color: rgba(255, 255, 255, 0.85);
  font-size: 1rem;
  
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
`;

const DemoBtn = styled.button`
  background: linear-gradient(135deg, #011126 0%, #1E40AF 100%);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s ease;
  
  &:hover {
    background: #4338ca;
  }
`;

const BackBtn = styled(DemoBtn)`
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-top: 1.5rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  padding: 0 1rem;
`;

const Services = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [cardsPerRow] = useState(4); // Assuming 4 cards per row based on your grid

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Calculate which row a card belongs to
  const getRowNumber = (index: number) => {
    return Math.floor(index / cardsPerRow);
  };

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut",
        // Delay based on row number to create row-by-row animation
        delay: getRowNumber(index) * 0.3 + (index % cardsPerRow) * 0.05
      }
    }),
    hover: { 
      scale: 1.05,
      y: -5,
      boxShadow: "0 15px 30px rgba(79, 70, 229, 0.2)",
      transition: {
        duration: 0.2
      }
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <PageWrapper>
      <TopBar>
        <DemoPagesBtn>
          Vydhyo Healthcare Services
        </DemoPagesBtn>
      </TopBar>

      <TitleContainer>
        <MainTitle>
          Vydhyo Healthcare
        </MainTitle>

        <SubTitle>
          Comprehensive healthcare services at your fingertips - from doctor appointments to emergency care
        </SubTitle>
      </TitleContainer>

      <GalleryContainer>
        <AnimatePresence>
          <GalleryGrid>
            {demoData.map((demo, index) => (
              <GalleryCard
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={index} // Pass index as custom prop to use in variants
              >
                <CardInner
                  style={{ transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                >
                  <CardFront>
                    <CategoryBadge>
                      {demo.category}
                    </CategoryBadge>
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
                        <DemoBtn onClick={() => toggleFlip(index)}>
                          Use Service
                        </DemoBtn>
                      </ActionButtons>
                    </GalleryInfo>
                  </CardFront>
                  
                  <CardBack>
                    <FlippedCategoryBadge>
                      {demo.category}
                    </FlippedCategoryBadge>
                    <FlippedTitle>{demo.title}</FlippedTitle>
                    <FlippedDescription>{demo.description}</FlippedDescription>
                    <BackBtn onClick={() => toggleFlip(index)}>
                      Back to Service
                    </BackBtn>
                  </CardBack>
                </CardInner>
              </GalleryCard>
            ))}
          </GalleryGrid>
        </AnimatePresence>
      </GalleryContainer>
    </PageWrapper>
  )
}

export default Services