"use client"; // Add this at the very top

import React, { useState } from "react";

const faqData = [
    {
        question: "What will i get?",
        answer:
            "You will receive a complete package including source code, documentation, and support as per the license.",
    },
    {
        question: "What is Extended License?",
        answer:
            "An Extended License allows you to use the product for commercial purposes, including SaaS applications and products for end users.",
    },
    {
        question: "What will be the cancellation Policy?",
        answer:
            "You can cancel your subscription at any time. Please refer to our detailed cancellation policy for more information.",
    },
    {
        question: "What is Regular License?",
        answer:
            "A Regular License allows you to use the product for personal or internal business purposes without redistribution.",
    },
    {
        question: "Is there are lifetime Update?",
        answer:
            "Yes, you will receive lifetime updates for the product as long as it is maintained.",
    },
    {
        question: "Have any refund options before?",
        answer:
            "Yes, we offer a refund within a specified period if you are not satisfied with the product. Please check our refund policy.",
    },
];

const QandA: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div style={{ background: "#fff", minHeight: "100vh", paddingBottom: 60 }}>
            <div style={{ textAlign: "center", marginTop: 40 }}>
                <button
                    style={{
                        background: "#f4f6ff",
                        border: "none",
                        borderRadius: 20,
                        padding: "8px 24px",
                        color: "#3d56f0",
                        fontWeight: 600,
                        fontSize: 16,
                        marginBottom: 16,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        cursor: "pointer",
                    }}
                >
                    <span
                        style={{
                            background: "#e3e8ff",
                            borderRadius: "50%",
                            width: 28,
                            height: 28,
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: 8,
                        }}
                    >
                        <svg width="16" height="16" fill="#3d56f0">
                            <circle cx="8" cy="8" r="8" />
                            <text
                                x="8"
                                y="12"
                                textAnchor="middle"
                                fontSize="10"
                                fill="#fff"
                                fontFamily="Arial"
                            >
                                ?
                            </text>
                        </svg>
                    </span>
                    FAQ
                </button>
                <h2
                    style={{
                        fontWeight: 700,
                        fontSize: 22,
                        marginBottom: 32,
                        color: "#222",
                    }}
                >
                    Your Questions are Answered
                </h2>
            </div>
            <div
                style={{
                    maxWidth: 900,
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                }}
            >
                {faqData.map((item, idx) => (
                    <div
                        key={idx}
                        style={{
                            background: "#fff",
                            borderRadius: 8,
                            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                            border: "1px solid #e8eaf1",
                            overflow: "hidden",
                        }}
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            style={{
                                width: "100%",
                                textAlign: "left",
                                background: "none",
                                border: "none",
                                outline: "none",
                                padding: "18px 24px",
                                fontSize: 16,
                                fontWeight: 600,
                                color: "#222",
                                display: "flex",
                                alignItems: "center",
                                cursor: "pointer",
                                gap: 12,
                            }}
                        >
                            <span
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 20,
                                    height: 20,
                                    borderRadius: "50%",
                                    border: "1.5px solid #3d56f0",
                                    color: "#3d56f0",
                                    fontWeight: 700,
                                    fontSize: 18,
                                    marginRight: 8,
                                    transition: "transform 0.2s",
                                    transform: openIndex === idx ? "rotate(45deg)" : "rotate(0deg)",
                                }}
                            >
                                +
                            </span>
                            {item.question}
                        </button>
                        {openIndex === idx && (
                            <div
                                style={{
                                    padding: "0 24px 18px 54px",
                                    color: "#555",
                                    fontSize: 15,
                                    lineHeight: 1.7,
                                    background: "#f9faff",
                                    borderTop: "1px solid #e8eaf1",
                                    animation: "fadeIn 0.2s",
                                }}
                            >
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {/* Subscription Section */}
            <div
                style={{
                    marginTop: 60,
                    background: "#0a1a3c",
                    borderRadius: 12,
                    maxWidth: 900,
                    marginLeft: "auto",
                    marginRight: "auto",
                    padding: "36px 32px 32px 32px",
                    position: "relative",
                    overflow: "hidden",
                    minHeight: 180,
                    display: "flex",
                    alignItems: "center",
                    gap: 32,
                }}
            >
                <div style={{ flex: 1, zIndex: 2 }}>
                    <h3
                        style={{
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: 22,
                            marginBottom: 8,
                        }}
                    >
                        Need a customized application for your business?
                    </h3>
                    <p style={{ color: "#e3e8ff", fontSize: 15, marginBottom: 24 }}>
                        We are happy to customize your products based on your needs. Please send us a note
                    </p>
                    <form
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            maxWidth: 400,
                        }}
                        onSubmit={e => e.preventDefault()}
                    >
                        <input
                            type="email"
                            placeholder="Enter Email Address"
                            style={{
                                flex: 1,
                                padding: "12px 16px",
                                borderRadius: 24,
                                border: "none",
                                outline: "none",
                                fontSize: 15,
                                background: "#fff",
                                color: "#222",
                            }}
                            required
                        />
                        <button
                            type="submit"
                            style={{
                                background: "#3d56f0",
                                color: "#fff",
                                border: "none",
                                borderRadius: 24,
                                padding: "10px 24px",
                                fontWeight: 600,
                                fontSize: 15,
                                cursor: "pointer",
                            }}
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
                {/* Decorative images */}
                <div
                    style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: 340,
                        zIndex: 1,
                        pointerEvents: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                    }}
                >
                    {/* Placeholder for images */}
                    <img
                        src="https://user-images.githubusercontent.com/7680672/273337010-2a3c2c7e-2a7d-4b3e-9e3e-5e7e2c9e7b6b.png"
                        alt="App Screens"
                        style={{
                            width: 320,
                            borderRadius: 16,
                            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                            objectFit: "cover",
                            opacity: 0.95,
                        }}
                    />
                </div>
            </div>
            {/* FadeIn animation */}
            <style>
                {`
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(-8px);}
                        to { opacity: 1; transform: translateY(0);}
                    }
                    @media (max-width: 900px) {
                        div[style*="display: flex"][style*="align-items: center"][style*="gap: 32px"] {
                            flex-direction: column !important;
                            padding: 32px 12px 32px 12px !important;
                            min-height: 320px !important;
                        }
                        div[style*="position: absolute"][style*="right: 0"] {
                            position: static !important;
                            width: 100% !important;
                            margin-top: 24px !important;
                            display: flex !important;
                            justify-content: center !important;
                        }
                        img[alt="App Screens"] {
                            width: 100% !important;
                            max-width: 320px !important;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default QandA;