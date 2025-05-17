'use client';
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface FeatureCard {
  title: string;
  description: string;
  image: string;
  icon: string;
}

const FeatureCarousel: React.FC = () => {
  const features: FeatureCard[] = [
    {
      title: "Doctor Directory",
      description: "Find and connect with specialized healthcare professionals",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      icon: "👨‍⚕️"
    },
    {
      title: "Instant Appointments",
      description: "Book same-day virtual or in-person consultations",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a7d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      icon: "📅"
    },
    {
      title: "Digital Prescriptions",
      description: "Get medications prescribed and delivered to your pharmacy",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      icon: "💊"
    },
    {
      title: "Health Records",
      description: "Securely access your medical history anytime, anywhere",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      icon: "📋"
    },
    {
      title: "Symptom Checker",
      description: "AI-powered preliminary health assessment tool",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      icon: "🤖"
    },
    {
      title: "Wellness Programs",
      description: "Personalized health plans for chronic condition management",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      icon: "❤️"
    }
  ];

  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Calculate how many cards to show based on screen width
  const getCardsToShow = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());

  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(getCardsToShow());
      if (wrapperRef.current && carouselRef.current) {
        const newCardWidth = wrapperRef.current.offsetWidth / cardsToShow;
        setCardWidth(newCardWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial calculation

    return () => window.removeEventListener('resize', handleResize);
  }, [cardsToShow]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex(prev => (prev + 1) % features.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, features.length]);

  const getTransformValue = () => {
    if (cardsToShow >= features.length) return 0;
    return -currentIndex * cardWidth;
  };

  return (
    <div className="feature-carousel-container">
      <motion.div 
        className="feature-carousel-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Vydhyo Healthcare Solutions</h2>
        <p>Revolutionizing digital healthcare with innovative features</p>
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
            transform: `translateX(${getTransformValue()}px)`,
            width: `${features.length * cardWidth}px`
          }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              style={{ width: `${cardWidth - 32}px` }} // Subtracting gap
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="feature-image-container">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="feature-image"
                  priority={index < 3}
                />
                <div className="feature-icon">{feature.icon}</div>
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
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
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
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          gap: 2rem;
          padding: 0 1rem;
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
          margin-right: 1rem;
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

export default FeatureCarousel;