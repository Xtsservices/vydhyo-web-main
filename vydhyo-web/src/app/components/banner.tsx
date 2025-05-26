'use client';

import React, { useState, useEffect } from "react";

export default function Banner() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // This code runs only on the client
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        handleResize(); // Set initial value

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: isDesktop ? "row" : "column",
                alignItems: "center",
                justifyContent: "space-between",
                background: "linear-gradient(135deg, #0a2e5a 0%, #1a5b9a 100%)",
                borderRadius: "16px",
                padding: isDesktop ? "24px 32px" : "24px 20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                width: "100%",
                minHeight: isDesktop ? "120px" : "auto",
                margin: "0",
                position: "relative",
                overflow: "hidden",
                color: "#ffffff",
                marginTop: isDesktop ? "5rem" : "3rem",
                boxSizing: "border-box",
                gap: isDesktop ? "0" : "24px",
            }}
        >
            {/* Left Content Container */}
            <div style={{
                display: "flex",
                alignItems: "center",
                zIndex: 2,
                flex: 1,
                width: isDesktop ? "auto" : "100%",
                justifyContent: isDesktop ? "flex-start" : "center",
                flexDirection: isDesktop ? "row" : "column",
                textAlign: isDesktop ? "left" : "center",
                gap: isDesktop ? "0" : "16px",
            }}>
                {/* EMI Icon */}
                <div
                    style={{
                        background: "rgba(255, 255, 255, 0.18)",
                        borderRadius: "50%",
                        width: isDesktop ? 100 : 80,
                        height: isDesktop ? 100 : 80,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: isDesktop ? 24 : 0,
                        flexShrink: 0,
                        boxShadow: "0 2px 8px rgba(10,46,90,0.10)",
                        border: "2px solid rgba(255,255,255,0.25)",
                        backdropFilter: "blur(6px)",
                    }}
                >
                    <img
                        src="images/logo.png"
                        alt="Logo"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            borderRadius: "8px",
                            background: "#f5fafd",
                            boxShadow: "0 1px 4px rgba(10,46,90,0.08)"
                        }}
                    />
                </div>
                {/* Banner Text */}
                <div>
                    <div
                        style={{
                            fontWeight: 700,
                            fontSize: isDesktop ? "1.5rem" : "1.3rem",
                            color: "#fff",
                            marginBottom: 4,
                        }}
                    >
                        No Cost EMI
                    </div>
                    <div style={{
                        color: "rgba(255, 255, 255, 0.9)",
                        fontSize: isDesktop ? "1.1rem" : "1rem",
                        lineHeight: "1.4",
                    }}>
                        Get easy, interest-free EMI options for your treatment.
                    </div>
                </div>
            </div>
            {/* Right Side - Image and Logo */}
            <div style={{
                display: "flex",
                alignItems: "center",
                zIndex: 2,
                gap: "24px",
                justifyContent: isDesktop ? "flex-end" : "center",
                width: isDesktop ? "auto" : "100%",
            }}>
                {/* Main Image */}
                <div style={{
                    width: isDesktop ? "200px" : "160px",
                    height: isDesktop ? "150px" : "120px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "2px solid rgba(255, 255, 255, 0.2)",
                    marginRight: isDesktop ? "5rem" : "0",
                }}>
                    <img
                        src="images/image.png"
                        alt="Medical professionals"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                </div>
            </div>
            {/* Decorative elements */}
            <div style={{
                position: "absolute",
                top: "-20px",
                right: "100px",
                width: "40px",
                height: "40px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "50%",
                zIndex: 1,
                display: isDesktop ? "block" : "none"
            }} />

            <div style={{
                position: "absolute",
                bottom: "-15px",
                left: "200px",
                width: "30px",
                height: "30px",
                background: "rgba(30, 182, 215, 0.3)",
                borderRadius: "50%",
                zIndex: 1,
                display: isDesktop ? "block" : "none"
            }} />
        </div>
    );
}
