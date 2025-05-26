'use client';
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface FeatureCard {
  title: string;
  description: string;
  image: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const CitiesWeServe: React.FC = () => {
  const features: FeatureCard[] = [
    {
      title: "Nizamabad",
      description: "Comprehensive healthcare network with leading hospitals and clinics offering specialized services.",
      image: "./images/nizamabad.png",
    },
    {
      title: "Warangal",
      description: "Strong presence of verified healthcare providers and emergency services throughout the city.",
      image: "./images/warangal.png",
    },
    {
      title: "Karimnagar",
      description: "Growing network of quality healthcare professionals and facilities for diverse medical needs",
      image: "./images/karimnagar.png",
    },
  ];

  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const lastUpdateTime = useRef<number>(0);
  const progress = useRef<number>(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const [clonedFeatures, setClonedFeatures] = useState<FeatureCard[]>([]);

  // Clone features to create seamless looping
  useEffect(() => {
    setClonedFeatures([...features, ...features, ...features]); // Triple the items for smoother looping
  }, []);

  const getCardsToShow = () => {
    if (!wrapperRef.current) return 3;
    const width = wrapperRef.current.offsetWidth;
    if (width < 768) return 1;
    if (width < 1024) return 2;
    return 3;
  };

  const updateLayout = () => {
    if (!wrapperRef.current) return;
    
    const newCardsToShow = getCardsToShow();
    setCardsToShow(newCardsToShow);
    setCardWidth(wrapperRef.current.offsetWidth / newCardsToShow);
  };

  const handleResize = () => {
    updateLayout();
  };

  // Initialize and handle resize
  useEffect(() => {
    updateLayout();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const animate = (timestamp: number) => {
    if (!lastUpdateTime.current) lastUpdateTime.current = timestamp;
    const delta = timestamp - lastUpdateTime.current;
    lastUpdateTime.current = timestamp;

    if (!isPaused) {
      progress.current += delta / 3000; // 3 seconds per slide
      if (progress.current >= 1) {
        progress.current = 0;
        setCurrentIndex(prev => {
          // When we reach the end of the original array, reset to 0 seamlessly
          const nextIndex = prev + 1;
          if (nextIndex >= features.length) return 0;
          return nextIndex;
        });
      }
    }

    if (carouselRef.current) {
      // Calculate offset with wrapping
      const totalWidth = features.length * cardWidth;
      const offset = -currentIndex * cardWidth - (progress.current * cardWidth);
      
      // When we're at the cloned section, instantly jump back to the original
      if (currentIndex >= features.length) {
        carouselRef.current.style.transition = 'none';
        carouselRef.current.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
        // Force reflow
        carouselRef.current.offsetHeight;
        setCurrentIndex(0);
        progress.current = 0;
        carouselRef.current.style.transition = 'transform 0.7s ease-out';
      } else {
        carouselRef.current.style.transform = `translateX(${offset}px)`;
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [currentIndex, isPaused, cardWidth]);

  return (
    <div className="feature-carousel-container">
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
                      color: "white",
                      letterSpacing: "0.01em",
                      zIndex: 1
                    }}>
                      Cities We Serve
                    </span>
                    </div>
                  </div>
                  <p style={{
                    fontSize: "1.1rem",
                    color: "white",
                    maxWidth: "700px",
                    margin: "0 auto",
                    textAlign: "center",
                    lineHeight: 1.6
                  }}>
                    VYDYO is revolutionizing healthcare access through technology that connects patients with the right care at the right time.
                  </p>
                </motion.div>

      <div 
        className="feature-carousel-wrapper"
        ref={wrapperRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          ref={carouselRef}
          className="feature-carousel"
          style={{
            width: `${clonedFeatures.length * cardWidth}px`
          }}
        >
          {clonedFeatures.map((feature, index) => (
            <motion.div 
              key={`${index}-${feature.title}`}
              className="feature-card"
              style={{ width: `${cardWidth - 32}px` }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="feature-image-container">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="feature-image"
                />
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        className="feature-indicators"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {features.map((_, index) => (
          <motion.button
            key={index}
            className={`indicator ${index === currentIndex % features.length ? 'active' : ''}`}
            onClick={() => {
              setCurrentIndex(index);
              progress.current = 0;
            }}
            aria-label={`View ${features[index].title}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>

      <style jsx>{`
        .feature-carousel-container {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
          padding: 6rem 1rem;
          color: white;
          position: relative;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .feature-carousel-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 4rem;
        }

        .feature-carousel-header h2 {
          font-size: 2.75rem;
          margin-bottom: 1.25rem;
          color: #ffffff;
          font-weight: 800;
          background: linear-gradient(90deg, #3b82f6, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .feature-carousel-header p {
          font-size: 1.25rem;
          color: #cbd5e1;
          font-weight: 400;
          line-height: 1.6;
        }

        .feature-carousel-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 0;
          position: relative;
          overflow: hidden;
        }

        .feature-carousel {
          display: flex;
          transition: transform 0.7s ease-out;
          gap: 2rem;
          will-change: transform;
        }

        .feature-card {
          flex-shrink: 0;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          overflow: hidden;
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }

        .feature-image-container {
          height: 240px;
          overflow: hidden;
          position: relative;
        }

        .feature-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .feature-icon {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(0, 0, 0, 0.6);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          backdrop-filter: blur(4px);
        }

        .feature-content {
          padding: 1.75rem;
        }

        .feature-content h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #ffffff;
          font-weight: 700;
        }

        .feature-content p {
          color: #e2e8f0;
          line-height: 1.6;
          font-size: 1.05rem;
          font-weight: 300;
        }

        .feature-indicators {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 3rem;
        }

        .indicator {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .indicator.active {
          background-color: #3b82f6;
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }

        @media (max-width: 1024px) {
          .feature-carousel-header h2 {
            font-size: 2.25rem;
          }
        }

        @media (max-width: 768px) {
          .feature-carousel-container {
            padding: 4rem 1rem;
          }
          
          .feature-carousel-header h2 {
            font-size: 2rem;
          }
          
          .feature-carousel-header p {
            font-size: 1.1rem;
          }

          .feature-image-container {
            height: 200px;
          }
        }

        @media (max-width: 480px) {
          .feature-carousel-header h2 {
            font-size: 1.75rem;
          }
          
          .feature-content {
            padding: 1.25rem;
          }
          
          .feature-content h3 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CitiesWeServe;