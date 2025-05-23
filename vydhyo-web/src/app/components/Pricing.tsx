'use client';
import React, { useState, useEffect, useRef } from "react";

const faqs = [
    {
        title: "Get Started Today",
        description: "Simply download the VYDYO app, create an account, and tap 'Book a Doctor.' Search by specialty, location, or availability, then select your preferred doctor and time slot. You'll receive instant confirmation with all visit details.",
        button: "Download App",
        highlight: false,
    },
    {
        title: "Is my medical information secure?",
        description: "Yes, VYDYO uses bank-grade encryption and is ISO/IEC 27001 certified. We comply with all Indian healthcare data protection regulations and follow HIPAA guidelines. Your data is never shared with third parties without your explicit consent.",
        button: "Learn More",
        highlight: true,
        highlightText: "Most Secure 🔒",
    },
    {
        title: "How quickly can I get an ambulance?",
        description: "Our ambulance service connects you to the nearest available vehicle, typically arriving within minutes. You can track the ambulance in real-time through the app and all nearby hospitals are automatically notified of incoming emergencies.",
        button: "Emergency Help",
        highlight: false,
    },
];

const Pricing: React.FC = () => {
    const [hoveredButton, setHoveredButton] = useState<number | null>(null);
    const leftCardRef = useRef<HTMLDivElement>(null);
    const rightCardRef = useRef<HTMLDivElement>(null);
    const centerCardRef = useRef<HTMLDivElement>(null);
    
    // Track whether elements are in view to manage animations
    const [isLeftInView, setIsLeftInView] = useState(false);
    const [isRightInView, setIsRightInView] = useState(false);
    const [isCenterInView, setIsCenterInView] = useState(false);

    useEffect(() => {
        // Function to reset animations when elements leave viewport
        const handleScroll = () => {
            if (leftCardRef.current) {
                const rect = leftCardRef.current.getBoundingClientRect();
                const isVisible = 
                    rect.top < window.innerHeight && 
                    rect.bottom > 0;
                
                if (!isVisible && isLeftInView) {
                    leftCardRef.current.style.transform = "translateX(-50px)";
                    leftCardRef.current.style.opacity = "0";
                    setIsLeftInView(false);
                } else if (isVisible && !isLeftInView) {
                    leftCardRef.current.style.transform = "translateX(0)";
                    leftCardRef.current.style.opacity = "1";
                    setIsLeftInView(true);
                }
            }
            
            if (rightCardRef.current) {
                const rect = rightCardRef.current.getBoundingClientRect();
                const isVisible = 
                    rect.top < window.innerHeight && 
                    rect.bottom > 0;
                
                if (!isVisible && isRightInView) {
                    rightCardRef.current.style.transform = "translateX(50px)";
                    rightCardRef.current.style.opacity = "0";
                    setIsRightInView(false);
                } else if (isVisible && !isRightInView) {
                    rightCardRef.current.style.transform = "translateX(0)";
                    rightCardRef.current.style.opacity = "1";
                    setIsRightInView(true);
                }
            }
            
            if (centerCardRef.current) {
                const rect = centerCardRef.current.getBoundingClientRect();
                const isVisible = 
                    rect.top < window.innerHeight && 
                    rect.bottom > 0;
                
                if (!isVisible && isCenterInView) {
                    centerCardRef.current.style.transform = "translateY(50px)";
                    centerCardRef.current.style.opacity = "0";
                    setIsCenterInView(false);
                } else if (isVisible && !isCenterInView) {
                    centerCardRef.current.style.transform = "translateY(0)";
                    centerCardRef.current.style.opacity = "1";
                    setIsCenterInView(true);
                }
            }
        };

        // Initial check on mount
        handleScroll();
        
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        
        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isLeftInView, isRightInView, isCenterInView]);

    return (
        <div className="pricing-container">
            <div className="spacer" />
            <div className="pricing-header">
                <span className="pricing-badge">
                    <svg
                        width="16"
                        height="16"
                        fill="none"
                        className="badge-icon"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="8" cy="8" r="8" fill="#e0f2fe" />
                        <path
                            d="M8 4.5a1 1 0 0 1 1 1v2.086l1.293 1.293a1 1 0 0 1-1.414 1.414l-1.293-1.293V5.5a1 1 0 0 1 1-1Z"
                            fill="#3b82f6"
                        />
                    </svg>
                    Quick Answers
                </span>
                <h2 className="pricing-title">
                    Frequently Asked Questions
                </h2>
            </div>
            <div className="plans-container">
                <div
                    ref={leftCardRef}
                    className="plan-card"
                    style={{
                        transform: "translateX(-50px)",
                        opacity: 0,
                        transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
                    }}
                >
                    <div className="plan-title">{faqs[0].title}</div>
                    <div className="plan-description">{faqs[0].description}</div>
                    <button
                        className={`plan-button ${hoveredButton === 0 ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredButton(0)}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        {faqs[0].button} <span className="button-arrow">→</span>
                    </button>
                </div>

                <div
                    ref={centerCardRef}
                    className="plan-card highlighted"
                    style={{
                        transform: "translateY(50px)",
                        opacity: 0,
                        transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
                    }}
                >
                    {faqs[1].highlight && <div className="highlight-badge">{faqs[1].highlightText}</div>}
                    <div className="plan-title">{faqs[1].title}</div>
                    <div className="plan-description">{faqs[1].description}</div>
                    <button
                        className={`plan-button ${hoveredButton === 1 ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredButton(1)}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        {faqs[1].button} <span className="button-arrow">→</span>
                    </button>
                </div>

                <div
                    ref={rightCardRef}
                    className="plan-card"
                    style={{
                        transform: "translateX(50px)",
                        opacity: 0,
                        transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
                    }}
                >
                    <div className="plan-title">{faqs[2].title}</div>
                    <div className="plan-description">{faqs[2].description}</div>
                    <button
                        className={`plan-button ${hoveredButton === 2 ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredButton(2)}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        {faqs[2].button} <span className="button-arrow">→</span>
                    </button>
                </div>
            </div>
            <div className="clients-section">
                <div className="clients-title">Join Thousands of Healthcare Providers</div>
                <div className="clients-badge">
                    <span className="client-avatars">
                        <img
                            src="/api/placeholder/32/32"
                            alt="user1"
                            className="client-avatar"
                        />
                        <img
                            src="/api/placeholder/32/32"
                            alt="user2"
                            className="client-avatar"
                        />
                        <img
                            src="/api/placeholder/32/32"
                            alt="user3"
                            className="client-avatar"
                        />
                    </span>
                    10,000+ Doctors trust
                    <span className="brand-name">Vydhyo</span>
                </div>
            </div>
            <div className="spacer" />

            <style jsx>{`
                .pricing-container {
                    min-height: 100vh;
                    background: #fff;
                    font-family: 'Inter', sans-serif;
                    padding: 0;
                    margin: 0;
                }
                
                .spacer {
                    height: 60px;
                }
                
                .pricing-header {
                    text-align: center;
                    margin-bottom: 16px;
                }
                
                .pricing-badge {
                    display: inline-flex;
                    align-items: center;
                    background: #f4f8ff;
                    color: #3b82f6;
                    font-weight: 500;
                    font-size: 14px;
                    border-radius: 20px;
                    padding: 4px 14px;
                    margin-bottom: 12px;
                    gap: 6px;
                }
                
                .badge-icon {
                    margin-right: 4px;
                }
                
                .pricing-title {
                    font-weight: 700;
                    font-size: 32px;
                    margin: 0;
                    color: #222;
                    letter-spacing: -0.01em;
                    background: linear-gradient(90deg, #0a1f44 0%, #1a3d8d 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 20px;
                }
                
                .plans-container {
                    display: flex;
                    justify-content: center;
                    gap: 32px;
                    margin-top: 32px;
                    margin-bottom: 32px;
                    padding: 0 20px;
                }
                
                .plan-card {
                    background: #f4f8ff;
                    border-radius: 16px;
                    box-shadow: 0 4px 24px rgba(59,130,246,0.1);
                    border: 1px solid #e5e7eb;
                    width: 100%;
                    max-width: 360px;
                    padding: 28px;
                    position: relative;
                    transition: all 0.3s ease;
                }
                
                .plan-card:hover {
                    background: linear-gradient(135deg, rgba(10,31,68,0.9) 0%, rgba(26,61,141,0.9) 100%);
                    color: #fff;
                    transform: translateY(-5px) !important;
                }
                
                .plan-card:hover .plan-title,
                .plan-card:hover .price,
                .plan-card:hover .old-price,
                .plan-card:hover .plan-description,
                .plan-card:hover .features-title,
                .plan-card:hover .feature-label {
                    color: #fff !important;
                }
                
                .plan-card.highlighted {
                    box-shadow: 0 8px 32px 0 rgba(59,130,246,0.2);
                    border: 2px solid #3b82f6;
                    transform: scale(1.04);
                }
                
                .highlight-badge {
                    position: absolute;
                    top: -10px;
                    right: 20px;
                    background: #fff7ed;
                    color: #fb923c;
                    font-weight: 600;
                    font-size: 13px;
                    border-radius: 12px;
                    padding: 2px 10px;
                }
                
                .plan-title {
                    font-weight: 600;
                    font-size: 20px;
                    color: #222;
                    margin-bottom: 8px;
                }
                
                .price-container {
                    display: flex;
                    align-items: baseline;
                    gap: 8px;
                }
                
                .price {
                    font-weight: 700;
                    font-size: 42px;
                    color: #222;
                    margin-top: 8px;
                    margin-bottom: 8px;
                    letter-spacing: -0.02em;
                }
                
                .old-price {
                    color: #9ca3af;
                    text-decoration: line-through;
                    font-size: 16px;
                    font-weight: 500;
                    margin-top: 8px;
                }
                
                .plan-description {
                    color: #6b7280;
                    font-size: 14px;
                    margin-bottom: 18px;
                    margin-top: 2px;
                    line-height: 1.6;
                }
                
                .features-title {
                    font-weight: 600;
                    font-size: 16px;
                    margin-bottom: 12px;
                    color: #222;
                }
                
                .features-list {
                    padding: 0;
                    margin: 0;
                    list-style: none;
                }
                
                .feature-item {
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    margin-bottom: 10px;
                    transition: color 0.2s;
                }
                
                .feature-item.included {
                    color: #059669;
                }
                
                .feature-item.excluded {
                    color: #ef4444;
                }
                
                .feature-icon {
                    margin-right: 8px;
                }
                
                .feature-label {
                    color: #222;
                    font-weight: 500;
                    transition: color 0.2s;
                }
                
                .feature-item.excluded .feature-label {
                    color: #9ca3af;
                    font-weight: 400;
                }
                
                .plan-button {
                    margin-top: 24px;
                    width: 100%;
                    background: linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%);
                    color: #fff;
                    font-weight: 600;
                    font-size: 16px;
                    border: none;
                    border-radius: 8px;
                    padding: 14px 0;
                    cursor: pointer;
                    box-shadow: 0 4px 12px rgba(59,130,246,0.2);
                    transition: all 0.3s ease;
                    outline: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }
                
                .plan-button.hovered {
                    background: linear-gradient(90deg, #2563eb 0%, #0ea5e9 100%);
                    transform: translateY(-2px);
                    box-shadow: 0 6px 16px rgba(59,130,246,0.3);
                }
                
                .button-arrow {
                    font-size: 18px;
                    transition: transform 0.2s;
                }
                
                .plan-button.hovered .button-arrow {
                    transform: translateX(4px);
                }
                
                .clients-section {
                    text-align: center;
                    margin-top: 48px;
                }
                
                .clients-title {
                    font-weight: 700;
                    font-size: 28px;
                    color: #222;
                    margin-bottom: 16px;
                    letter-spacing: -0.01em;
                    background: linear-gradient(90deg, #0a1f44 0%, #1a3d8d 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .clients-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: #f4f8ff;
                    border-radius: 24px;
                    padding: 8px 20px;
                    font-size: 16px;
                    color: #6b7280;
                    font-weight: 500;
                }
                
                .client-avatars {
                    display: flex;
                }
                
                .client-avatar {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    border: 2px solid #fff;
                    margin-left: 0;
                    margin-right: -10px;
                    box-shadow: 0 0 0 2px #f4f8ff;
                }
                
                .brand-name {
                    color: #3b82f6;
                    font-weight: 600;
                    margin-left: 4px;
                }
                
                @media (max-width: 1024px) {
                    .plans-container {
                        flex-direction: column;
                        align-items: center;
                        gap: 24px;
                    }
                    
                    .plan-card {
                        max-width: 400px;
                    }
                    
                    .plan-card.highlighted {
                        transform: none;
                    }
                    
                    .pricing-title {
                        font-size: 28px;
                        padding: 0 16px;
                    }
                    
                    .clients-title {
                        font-size: 24px;
                    }
                }
                
                @media (max-width: 768px) {
                    .pricing-title {
                        font-size: 24px;
                    }
                    
                    .clients-title {
                        font-size: 20px;
                    }
                    
                    .clients-badge {
                        font-size: 14px;
                        padding: 6px 12px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Pricing;