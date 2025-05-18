'use client';
import React, { useState } from "react";

const plans = [
    {
        title: "Regular License",
        price: 35,
        oldPrice: 55,
        description:
            "End users are not charged for. The total price includes the item price and a buyer fee.",
        features: [
            { label: "Web Application", included: true },
            { label: "Mobile Application", included: true },
            { label: "Lifetime License Validity", included: true },
            { label: "Permitted for 1 Domain", included: true },
            {
                label: "6 Months of Support (Envato Support Policy)",
                included: true,
            },
            { label: "All Features Included", included: true },
            { label: "Lifetime Free Update", included: true },
            { label: "For Commercial Projects", included: false },
            { label: "Priority Support", included: false },
            { label: "White-label Branding", included: false },
            { label: "Installation Support", included: false },
        ],
        button: "Choose Plan",
        highlight: false,
    },
    {
        title: "Extended License",
        price: 499,
        oldPrice: 650,
        description:
            "End users are not charged for. The total price includes the item price and a buyer fee.",
        features: [
            { label: "Web Application", included: true },
            { label: "Mobile Application", included: true },
            { label: "Lifetime License Validity", included: true },
            { label: "Permitted for 1 Domain", included: true },
            {
                label: "6 Months of Support (Envato Support Policy)",
                included: true,
            },
            { label: "All Features Included", included: true },
            { label: "Lifetime Free Update", included: true },
            { label: "For Commercial Projects", included: true },
            { label: "Priority Support", included: true },
            { label: "White-label Branding", included: true },
            { label: "Installation Support", included: false },
        ],
        button: "Choose Plan",
        highlight: true,
        highlightText: "Most Popular 🔥",
    },
];

const Pricing: React.FC = () => {
    const [hoveredButton, setHoveredButton] = useState<number | null>(null);

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
                    Pricing
                </span>
                <h2 className="pricing-title">
                    Pricing that's simple, predictable, and built to scale
                </h2>
            </div>
            <div className="plans-container">
                {plans.map((plan, idx) => (
                    <div
                        key={plan.price}
                        className={`plan-card ${plan.highlight ? 'highlighted' : ''}`}
                    >
                        {plan.highlight && (
                            <div className="highlight-badge">{plan.highlightText}</div>
                        )}
                        <div className="plan-title">{plan.title}</div>
                        <div className="price-container">
                            <span className="price">${plan.price}</span>
                            <span className="old-price">${plan.oldPrice}</span>
                        </div>
                        <div className="plan-description">{plan.description}</div>
                        <div className="features-title">What's Included</div>
                        <ul className="features-list">
                            {plan.features.map((f, i) => (
                                <li key={f.label} className={`feature-item ${f.included ? 'included' : 'excluded'}`}>
                                    <span className="feature-icon">
                                        {f.included ? (
                                            <svg
                                                width="18"
                                                height="18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="9" cy="9" r="9" fill="#d1fae5" />
                                                <path
                                                    d="M6.5 9.5l2 2 3-3"
                                                    stroke="#059669"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                width="18"
                                                height="18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="9" cy="9" r="9" fill="#fee2e2" />
                                                <path
                                                    d="M6.5 11.5l5-5M11.5 11.5l-5-5"
                                                    stroke="#ef4444"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        )}
                                    </span>
                                    <span className="feature-label">{f.label}</span>
                                </li>
                            ))}
                        </ul>
                        <button
                            className={`plan-button ${hoveredButton === idx ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredButton(idx)}
                            onMouseLeave={() => setHoveredButton(null)}
                        >
                            {plan.button} <span className="button-arrow">→</span>
                        </button>
                    </div>
                ))}
            </div>
            <div className="clients-section">
                <div className="clients-title">Invest in Your Healthcare Template</div>
                <div className="clients-badge">
                    <span className="client-avatars">
                        <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="user1"
                            className="client-avatar"
                        />
                        <img
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="user2"
                            className="client-avatar"
                        />
                        <img
                            src="https://randomuser.me/api/portraits/men/45.jpg"
                            alt="user3"
                            className="client-avatar"
                        />
                    </span>
                    300K Happy Clients use
                    <span className="brand-name">Doccure templates</span>
                </div>
            </div>
            <div className="spacer" />

            <style jsx>{`
                .pricing-container {
                    min-height: 100vh;
                    background: #fff;
                    font-family: Inter, sans-serif;
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
                    font-size: 24px;
                    margin: 0;
                    color: #222;
                    letter-spacing: -0.01em;
                }
                
                .plans-container {
                    display: flex;
                    justify-content: center;
                    gap: 32px;
                    margin-top: 32px;
                    margin-bottom: 32px;
                }
                
                .plan-card {
                    background: #f4f8ff;
                    border-radius: 12px;
                    box-shadow: 0 2px 8px 0 rgba(59,130,246,0.06);
                    border: 1px solid #e5e7eb;
                    min-width: 340px;
                    max-width: 360px;
                    padding: 28px 28px 24px 28px;
                    position: relative;
                    transition: all 0.3s ease;
                }
                
                .plan-card.highlighted {
                    box-shadow: 0 8px 32px 0 rgba(59,130,246,0.10);
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
                    font-size: 16px;
                    color: #222;
                }
                
                .price-container {
                    display: flex;
                    align-items: baseline;
                    gap: 8px;
                }
                
                .price {
                    font-weight: 700;
                    font-size: 36px;
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
                }
                
                .features-title {
                    font-weight: 600;
                    font-size: 15px;
                    margin-bottom: 10px;
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
                    margin-bottom: 8px;
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
                    margin-top: 18px;
                    width: 100%;
                    background: linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%);
                    color: #fff;
                    font-weight: 600;
                    font-size: 15px;
                    border: none;
                    border-radius: 24px;
                    padding: 12px 0;
                    cursor: pointer;
                    box-shadow: 0 2px 8px 0 rgba(59,130,246,0.10);
                    transition: all 0.2s ease;
                    outline: none;
                }
                
                .plan-button.hovered {
                    background: linear-gradient(90deg, #2563eb 0%, #0ea5e9 100%);
                }
                
                .button-arrow {
                    font-size: 18px;
                }
                
                .clients-section {
                    text-align: center;
                    margin-top: 32px;
                }
                
                .clients-title {
                    font-weight: 700;
                    font-size: 22px;
                    color: #222;
                    margin-bottom: 8px;
                    letter-spacing: -0.01em;
                }
                
                .clients-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: #f4f8ff;
                    border-radius: 20px;
                    padding: 6px 18px;
                    font-size: 15px;
                    color: #6b7280;
                    font-weight: 500;
                }
                
                .client-avatars {
                    display: flex;
                }
                
                .client-avatar {
                    width: 28px;
                    height: 28px;
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
                
                @media (max-width: 768px) {
                    .plans-container {
                        flex-direction: column;
                        align-items: center;
                        gap: 24px;
                    }
                    
                    .plan-card {
                        min-width: 300px;
                    }
                    
                    .plan-card.highlighted {
                        transform: none;
                    }
                    
                    .pricing-title {
                        font-size: 20px;
                        padding: 0 16px;
                    }
                    
                    .clients-title {
                        font-size: 18px;
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