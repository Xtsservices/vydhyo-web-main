"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faLinkedin, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';

const barData = [
    { label: "Email", value: 4.2 },
    { label: "Phone", value: 0.6 },
    { label: "Live Chat", value: 0.2 },
    { label: "Social Media", value: 1.7 },
];

const socialMediaLinks = [
    { name: "Facebook", icon: faFacebook, url: "https://facebook.com/vydyo" },
    { name: "Twitter", icon: faTwitter, url: "https://twitter.com/vydyo" },
    { name: "Instagram", icon: faInstagram, url: "https://instagram.com/vydyo" },
    { name: "LinkedIn", icon: faLinkedin, url: "https://linkedin.com/company/vydyo" },
    { name: "YouTube", icon: faYoutube, url: "https://youtube.com/vydyo" },
];

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);
    const [chatMessages, setChatMessages] = useState<{sender: string, text: string}[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const [isMobile, setIsMobile] = useState(false);
    const [hoverStates, setHoverStates] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Thank you for your message, ${formData.name}! We'll get back to you soon.`);
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: ""
        });
    };

    const handleSendChatMessage = () => {
        if (newMessage.trim()) {
            setChatMessages([...chatMessages, {sender: "You", text: newMessage}]);
            setNewMessage("");
            // Simulate response after 1 second
            setTimeout(() => {
                setChatMessages(prev => [...prev, {sender: "Support", text: "Thanks for your message! Our team will assist you shortly."}]);
            }, 1000);
        }
    };

    const toggleHover = (element: string) => {
        setHoverStates(prev => ({
            ...prev,
            [element]: !prev[element]
        }));
    };

    // Style objects
    const contactFormStyle = {
        flex: 1, 
        minWidth: 320, 
        background: "linear-gradient(145deg, #ffffff 0%, #f0f7ff 100%)", 
        borderRadius: 12,
        padding: 24,
        boxShadow: hoverStates.contactForm ? "0 6px 24px rgba(0,0,0,0.15)" : "0 4px 20px rgba(0,0,0,0.1)",
        transform: hoverStates.contactForm ? "translateY(-5px)" : "",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxSizing: "border-box" as const,
        width: "100%"
    };

    const barChartContainerStyle = {
        background: "white", 
        borderRadius: 12, 
        padding: isMobile ? "16px" : "24px", 
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        marginBottom: 24,
        transform: hoverStates.barChart ? "translateY(-2px)" : "",
        transition: "transform 0.3s ease",
        width: "100%",
        overflow: "hidden"
    };

    const liveChatButtonStyle = {
        background: "white", 
        borderRadius: 12, 
        padding: isMobile ? "16px" : "20px", 
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        marginBottom: 24,
        textAlign: "center" as const,
        transform: hoverStates.liveChatButton ? "translateY(-2px)" : "",
        transition: "transform 0.3s ease",
        width: "100%"
    };

    const socialMediaContainerStyle = {
        background: "white", 
        borderRadius: 12, 
        padding: isMobile ? "16px" : "20px", 
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        textAlign: "center" as const,
        transform: hoverStates.socialMedia ? "translateY(-2px)" : "",
        transition: "transform 0.3s ease",
        width: "100%"
    };

    const contactDetailsStyle = {
        display: "flex", 
        flexWrap: "wrap" as const, 
        gap: 32, 
        marginTop: 32,
        marginBottom: 32,
        background: "linear-gradient(145deg, #ffffff 0%, #f0f7ff 100%)",
        borderRadius: 12,
        padding: isMobile ? "20px" : "24px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        transform: hoverStates.contactDetails ? "translateY(-2px)" : "",
        transition: "transform 0.3s ease",
        width: "100%",
        boxSizing: "border-box" as const
    };

    const inputStyle = {
        width: "100%",
        padding: "12px 16px",
        borderRadius: 8,
        border: "1px solid #d1d5db",
        fontSize: 14,
        transition: "all 0.3s ease",
        backgroundColor: "#f9fafb",
        boxSizing: "border-box" as const
    };

    const submitButtonStyle = {
        background: "linear-gradient(90deg, #1e40af 0%, #3b82f6 100%)",
        color: "white",
        border: "none",
        padding: "14px 28px",
        borderRadius: 8,
        fontSize: 16,
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: hoverStates.submitButton ? "0 6px 8px rgba(30, 64, 175, 0.3)" : "0 4px 6px rgba(30, 64, 175, 0.2)",
        transform: hoverStates.submitButton ? "translateY(-2px)" : "",
        width: "100%",
        boxSizing: "border-box" as const
    };

    const socialIconStyle = (icon: any) => ({
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 44,
        height: 44,
        borderRadius: "50%",
        marginRight: 8,
        color: "white",
        fontSize: 18,
        transition: "all 0.3s ease",
        cursor: "pointer",
        background: 
            icon === faFacebook ? '#3b5998' :
            icon === faTwitter ? '#1da1f2' :
            icon === faInstagram ? '#e1306c' :
            icon === faLinkedin ? '#0077b5' :
            '#ff0000',
        transform: hoverStates[`socialIcon-${icon.iconName}`] ? "scale(1.1) translateY(-3px)" : "scale(1)",
        boxShadow: hoverStates[`socialIcon-${icon.iconName}`] ? "0 4px 8px rgba(0,0,0,0.2)" : "none",
        flexShrink: 0
    });

    const emailLinkStyle = {
        color: hoverStates.emailLink ? "#1e40af" : "#3b82f6", 
        textDecoration: "none",
        transition: "color 0.3s ease",
        wordBreak: "break-all" as const
    };

    return (
        <div style={{ 
            background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)", 
            color: "#1e293b", 
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif", 
            minHeight: "100vh",
            padding: isMobile ? "16px" : "32px 24px 0 24px",
            overflowX: "hidden",
            boxSizing: "border-box" as const
        }}>
            {/* Contact Us Section */}
            <div style={{ 
                maxWidth: 1200, 
                margin: "0 auto",
                padding: isMobile ? "0" : "0 12px",
                width: "100%",
                boxSizing: "border-box" as const
            }}>
                <h1 style={{ 
                    fontSize: isMobile ? "2rem" : "2.5rem", 
                    fontWeight: 700, 
                    marginBottom: 24,
                    background: "linear-gradient(90deg, #1e40af, #3b82f6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                    lineHeight: 1.2,
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                }}>
                    Contact Us
                </h1>
                <div style={{ 
                    display: "flex", 
                    flexWrap: "wrap" as const, 
                    gap: 32,
                    marginBottom: 32,
                    width: "100%",
                    boxSizing: "border-box" as const
                }}>
                    {/* Bar Chart */}
                    <div style={{ 
                        flex: 1, 
                        minWidth: isMobile ? "100%" : 320, 
                        maxWidth: "100%",
                        boxSizing: "border-box" as const
                    }}>
                        <h2 style={{ 
                            fontSize: isMobile ? "1.3rem" : "1.5rem", 
                            fontWeight: 600, 
                            marginBottom: 16,
                            color: "#1e293b",
                            width: "100%",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }}>
                            Preferred Contact Methods
                        </h2>
                        <p style={{ 
                            color: "#64748b", 
                            marginBottom: 20,
                            fontSize: isMobile ? "0.9rem" : "1rem",
                            width: "100%"
                        }}>
                            Our customers prefer these methods to reach our support team (average response time in hours)
                        </p>
                        <div 
                            style={barChartContainerStyle}
                            onMouseEnter={() => toggleHover("barChart")}
                            onMouseLeave={() => toggleHover("barChart")}
                        >
                            <svg width="100%" height={isMobile ? 180 : 220} viewBox={`0 0 ${isMobile ? 400 : 500} ${isMobile ? 180 : 220}`} preserveAspectRatio="xMinYMin meet">
                                {/* Gradient for bars */}
                                <defs>
                                    <linearGradient id="barGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#3b82f6" />
                                        <stop offset="100%" stopColor="#1e40af" />
                                    </linearGradient>
                                </defs>
                                
                                {/* Y Axis Labels */}
                                {barData.map((d, i) => (
                                    <text
                                        key={d.label}
                                        x={0}
                                        y={isMobile ? 40 * i + 50 : 50 * i + 50}
                                        fontSize={isMobile ? 12 : 14}
                                        fontFamily="'Inter', sans-serif"
                                        fill="#1e293b"
                                        alignmentBaseline="middle"
                                        fontWeight="500"
                                    >
                                        {d.label}
                                    </text>
                                ))}
                                
                                {/* Bars with gradient and animation */}
                                {barData.map((d, i) => (
                                    <g key={d.label}>
                                        <rect
                                            x={100}
                                            y={isMobile ? 40 * i + 35 : 50 * i + 35}
                                            width={0}
                                            height={isMobile ? 18 : 22}
                                            fill="url(#barGradient)"
                                            rx={4}
                                            style={{ transition: "width 1s ease" }}
                                        >
                                            <animate
                                                attributeName="width"
                                                from="0"
                                                to={d.value * (isMobile ? 60 : 80)}
                                                dur="1s"
                                                fill="freeze"
                                            />
                                        </rect>
                                        <text
                                            x={100 + d.value * (isMobile ? 60 : 80) + 5}
                                            y={isMobile ? 40 * i + 44 : 50 * i + 46}
                                            fontSize={isMobile ? 10 : 12}
                                            fill="#1e293b"
                                            alignmentBaseline="middle"
                                        >
                                            {d.value}h
                                        </text>
                                    </g>
                                ))}
                                
                                {/* X Axis */}
                                <line 
                                    x1={100} 
                                    y1={isMobile ? 160 : 200} 
                                    x2={isMobile ? 400 : 500} 
                                    y2={isMobile ? 160 : 200} 
                                    stroke="#cbd5e1" 
                                    strokeWidth={1} 
                                />
                                
                                {/* X Axis Ticks and Labels */}
                                {[0, 1, 2, 3, 4, 5].map((n) => (
                                    <g key={n}>
                                        <line 
                                            x1={100 + n * (isMobile ? 60 : 80)} 
                                            y1={isMobile ? 155 : 195} 
                                            x2={100 + n * (isMobile ? 60 : 80)} 
                                            y2={isMobile ? 160 : 200} 
                                            stroke="#cbd5e1" 
                                        />
                                        <text
                                            x={100 + n * (isMobile ? 60 : 80)}
                                            y={isMobile ? 175 : 215}
                                            fontSize={isMobile ? 10 : 12}
                                            fill="#64748b"
                                            textAnchor="middle"
                                        >
                                            {n}h
                                        </text>
                                    </g>
                                ))}
                            </svg>
                        </div>

                        {/* Live Chat Button */}
                        <div 
                            style={liveChatButtonStyle}
                            onMouseEnter={() => toggleHover("liveChatButton")}
                            onMouseLeave={() => toggleHover("liveChatButton")}
                        >
                            <h3 style={{ 
                                fontSize: isMobile ? "1.1rem" : "1.2rem", 
                                fontWeight: 600, 
                                marginBottom: 12,
                                color: "#1e293b"
                            }}>
                                Need Immediate Help?
                            </h3>
                            <p style={{ 
                                color: "#64748b", 
                                marginBottom: 16,
                                fontSize: isMobile ? "0.9rem" : "1rem"
                            }}>
                                Start a live chat with our support team
                            </p>
                            <button
                                onClick={() => setIsLiveChatOpen(true)}
                                style={{
                                    background: "linear-gradient(90deg, #1e40af 0%, #3b82f6 100%)",
                                    color: "white",
                                    border: "none",
                                    padding: "12px 24px",
                                    borderRadius: 8,
                                    fontSize: isMobile ? 14 : 16,
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    boxShadow: hoverStates.startChatButton ? "0 6px 8px rgba(30, 64, 175, 0.3)" : "0 4px 6px rgba(30, 64, 175, 0.2)",
                                    transform: hoverStates.startChatButton ? "translateY(-2px)" : "",
                                    width: "100%",
                                    maxWidth: "300px",
                                    margin: "0 auto"
                                }}
                                onMouseEnter={() => toggleHover("startChatButton")}
                                onMouseLeave={() => toggleHover("startChatButton")}
                            >
                                Start Live Chat
                            </button>
                        </div>

                        {/* Social Media Icons */}
                        <div 
                            style={socialMediaContainerStyle}
                            onMouseEnter={() => toggleHover("socialMedia")}
                            onMouseLeave={() => toggleHover("socialMedia")}
                        >
                            <h3 style={{ 
                                fontSize: isMobile ? "1.1rem" : "1.2rem", 
                                fontWeight: 600, 
                                marginBottom: 16,
                                color: "#1e293b"
                            }}>
                                Connect With Us
                            </h3>
                            <div style={{ 
                                display: "flex", 
                                justifyContent: "center", 
                                gap: isMobile ? 8 : 12,
                                flexWrap: "wrap",
                                width: "100%"
                            }}>
                                {socialMediaLinks.map((social) => (
                                    <a 
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={socialIconStyle(social.icon)}
                                        onMouseEnter={() => toggleHover(`socialIcon-${social.icon.iconName}`)}
                                        onMouseLeave={() => toggleHover(`socialIcon-${social.icon.iconName}`)}
                                        title={social.name}
                                    >
                                        <FontAwesomeIcon icon={social.icon} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact Form */}
                    <div 
                        style={{
                            ...contactFormStyle,
                            minWidth: isMobile ? "100%" : 320
                        }}
                        onMouseEnter={() => toggleHover("contactForm")}
                        onMouseLeave={() => toggleHover("contactForm")}
                    >
                        <h2 style={{ 
                            fontSize: isMobile ? "1.3rem" : "1.5rem", 
                            fontWeight: 600, 
                            marginBottom: 20,
                            color: "#1e293b",
                            borderBottom: "2px solid #3b82f6",
                            paddingBottom: 8,
                            width: "100%",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }}>
                            Send us a Message
                        </h2>
                        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                            <div style={{ marginBottom: 16, width: "100%" }}>
                                <label style={{ 
                                    display: "block", 
                                    marginBottom: 8, 
                                    fontWeight: 500,
                                    color: "#1e293b",
                                    fontSize: isMobile ? "0.9rem" : "1rem"
                                }}>
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your name"
                                    required
                                    style={{
                                        ...inputStyle,
                                        fontSize: isMobile ? "0.9rem" : "1rem"
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.outline = "none";
                                        e.target.style.borderColor = "#3b82f6";
                                        e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.2)";
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = "#d1d5db";
                                        e.target.style.boxShadow = "none";
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: 16, width: "100%" }}>
                                <label style={{ 
                                    display: "block", 
                                    marginBottom: 8, 
                                    fontWeight: 500,
                                    color: "#1e293b",
                                    fontSize: isMobile ? "0.9rem" : "1rem"
                                }}>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    required
                                    style={{
                                        ...inputStyle,
                                        fontSize: isMobile ? "0.9rem" : "1rem"
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.outline = "none";
                                        e.target.style.borderColor = "#3b82f6";
                                        e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.2)";
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = "#d1d5db";
                                        e.target.style.boxShadow = "none";
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: 16, width: "100%" }}>
                                <label style={{ 
                                    display: "block", 
                                    marginBottom: 8, 
                                    fontWeight: 500,
                                    color: "#1e293b",
                                    fontSize: isMobile ? "0.9rem" : "1rem"
                                }}>
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Enter your phone number"
                                    style={{
                                        ...inputStyle,
                                        fontSize: isMobile ? "0.9rem" : "1rem"
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.outline = "none";
                                        e.target.style.borderColor = "#3b82f6";
                                        e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.2)";
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = "#d1d5db";
                                        e.target.style.boxShadow = "none";
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: 20, width: "100%" }}>
                                <label style={{ 
                                    display: "block", 
                                    marginBottom: 8, 
                                    fontWeight: 500,
                                    color: "#1e293b",
                                    fontSize: isMobile ? "0.9rem" : "1rem"
                                }}>
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="How can we help you?"
                                    required
                                    rows={4}
                                    style={{
                                        ...inputStyle,
                                        fontSize: isMobile ? "0.9rem" : "1rem"
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.outline = "none";
                                        e.target.style.borderColor = "#3b82f6";
                                        e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.2)";
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = "#d1d5db";
                                        e.target.style.boxShadow = "none";
                                    }}
                                />
                            </div>
                            <button
                                type="submit"
                                style={submitButtonStyle}
                                onMouseEnter={() => toggleHover("submitButton")}
                                onMouseLeave={() => toggleHover("submitButton")}
                                onMouseDown={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                                onMouseUp={(e) => {
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                }}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                
                {/* Contact Details */}
                <div 
                    style={contactDetailsStyle}
                    onMouseEnter={() => toggleHover("contactDetails")}
                    onMouseLeave={() => toggleHover("contactDetails")}
                >
                    <div style={{ flex: 1, minWidth: isMobile ? "100%" : 260 }}>
                        <h3 style={{ 
                            fontWeight: 700, 
                            fontSize: isMobile ? "1.1rem" : "1.125rem", 
                            marginBottom: 16, 
                            color: "#1e293b" 
                        }}>
                            Headquarters
                        </h3>
                        <div style={{ 
                            fontSize: isMobile ? "0.9rem" : "0.95rem", 
                            color: "#64748b", 
                            marginBottom: 16,
                            lineHeight: 1.6
                        }}>
                            VYDYO HealthTech Pvt Ltd<br />
                            Hall Mark Sunny Side, Manchirevula<br />
                            Hyderabad, Telangana, India
                        </div>
                        <div>
                            <h4 style={{ 
                                fontWeight: 600, 
                                fontSize: isMobile ? "1rem" : "1.0625rem", 
                                marginBottom: 12, 
                                color: "#1e293b" 
                            }}>
                                Business Hours
                            </h4>
                            <div style={{ 
                                fontSize: isMobile ? "0.9rem" : "0.95rem", 
                                color: "#64748b",
                                lineHeight: 1.6
                            }}>
                                <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                                <div>Saturday: 10:00 AM - 4:00 PM</div>
                                <div>Sunday: Closed</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ flex: 1, minWidth: isMobile ? "100%" : 260 }}>
                        <h3 style={{ 
                            fontWeight: 700, 
                            fontSize: isMobile ? "1.1rem" : "1.125rem", 
                            marginBottom: 16, 
                            color: "#1e293b" 
                        }}>
                            Reach Us
                        </h3>
                        <div style={{ 
                            fontSize: isMobile ? "0.9rem" : "0.95rem",
                            lineHeight: 1.6
                        }}>
                            <div style={{ marginBottom: 12 }}>
                                <span style={{ fontWeight: 500, color: "#1e293b" }}>Call:</span> 
                                <span style={{ color: "#64748b" }}> +91-XXXXXXXXXX</span>
                            </div>
                            <div style={{ marginBottom: 12 }}>
                                <span style={{ fontWeight: 500, color: "#1e293b" }}>Email:</span>{" "}
                                <a 
                                    href="mailto:care@vydyo.in" 
                                    style={emailLinkStyle}
                                    onMouseEnter={() => toggleHover("emailLink")}
                                    onMouseLeave={() => toggleHover("emailLink")}
                                >
                                    care@vydyo.in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Live Chat Popup */}
            {isLiveChatOpen && (
                <div style={{
                    position: "fixed",
                    bottom: isMobile ? 0 : 20,
                    right: isMobile ? 0 : 20,
                    width: isMobile ? "100%" : 350,
                    height: isMobile ? "70vh" : 500,
                    background: "white",
                    borderRadius: isMobile ? "12px 12px 0 0" : 12,
                    boxShadow: "0 5px 30px rgba(0,0,0,0.2)",
                    display: "flex",
                    flexDirection: "column",
                    zIndex: 1000,
                    overflow: "hidden",
                    maxWidth: "100vw"
                }}>
                    <div style={{
                        background: "linear-gradient(90deg, #1e40af 0%, #3b82f6 100%)",
                        color: "white",
                        padding: "15px 20px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <h3 style={{ margin: 0, fontSize: 18 }}>Live Support</h3>
                        <button 
                            onClick={() => setIsLiveChatOpen(false)}
                            style={{
                                background: "none",
                                border: "none",
                                color: "white",
                                fontSize: 20,
                                cursor: "pointer",
                                transition: "transform 0.2s ease",
                                transform: hoverStates.closeChatButton ? "rotate(90deg)" : ""
                            }}
                            onMouseEnter={() => toggleHover("closeChatButton")}
                            onMouseLeave={() => toggleHover("closeChatButton")}
                        >
                            ×
                        </button>
                    </div>
                    <div style={{
                        flex: 1,
                        padding: 15,
                        overflowY: "auto",
                        background: "#f9fafb"
                    }}>
                        {chatMessages.length === 0 ? (
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                                color: "#64748b",
                                textAlign: "center"
                            }}>
                                <div style={{ 
                                    fontSize: 48, 
                                    marginBottom: 10,
                                    animation: "wave 2s infinite"
                                }}>
                                    👋
                                </div>
                                <div style={{ 
                                    fontWeight: 500,
                                    fontSize: isMobile ? "1rem" : "1.1rem",
                                    marginBottom: 4
                                }}>
                                    Hello! How can we help you today?
                                </div>
                                <div style={{ 
                                    fontSize: isMobile ? "0.85rem" : "0.9rem",
                                    color: "#94a3b8"
                                }}>
                                    Send us a message and we'll respond shortly.
                                </div>
                            </div>
                        ) : (
                            chatMessages.map((msg, index) => (
                                <div key={index} style={{
                                    marginBottom: 10,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: msg.sender === "You" ? "flex-end" : "flex-start"
                                }}>
                                    <div style={{
                                        fontWeight: 600,
                                        fontSize: 12,
                                        color: "#64748b",
                                        marginBottom: 2
                                    }}>
                                        {msg.sender}
                                    </div>
                                    <div style={{
                                        background: msg.sender === "You" 
                                            ? "linear-gradient(90deg, #1e40af 0%, #3b82f6 100%)" 
                                            : "#e2e8f0",
                                        color: msg.sender === "You" ? "white" : "#1e293b",
                                        padding: "8px 16px",
                                        borderRadius: 12,
                                        maxWidth: "80%",
                                        wordBreak: "break-word",
                                        boxShadow: msg.sender === "You" 
                                            ? "0 2px 4px rgba(30, 64, 175, 0.2)"
                                            : "0 2px 4px rgba(0, 0, 0, 0.05)",
                                        transition: "all 0.3s ease",
                                        animation: "fadeIn 0.3s ease"
                                    }}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div style={{
                        padding: 15,
                        borderTop: "1px solid #e2e8f0",
                        display: "flex",
                        background: "white"
                    }}>
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type your message..."
                            style={{
                                flex: 1,
                                padding: "12px 16px",
                                borderRadius: 24,
                                border: "1px solid #d1d5db",
                                fontSize: 14,
                                outline: "none",
                                marginRight: 10,
                                transition: "all 0.3s ease",
                                borderColor: hoverStates.chatInput ? "#3b82f6" : "#d1d5db",
                                boxShadow: hoverStates.chatInput ? "0 0 0 3px rgba(59, 130, 246, 0.2)" : "none",
                                boxSizing: "border-box" as const
                            }}
                            onFocus={() => toggleHover("chatInput")}
                            onBlur={() => toggleHover("chatInput")}
                            onKeyPress={(e) => e.key === "Enter" && handleSendChatMessage()}
                        />
                        <button
                            onClick={handleSendChatMessage}
                            style={{
                                background: hoverStates.sendChatButton 
                                    ? "linear-gradient(90deg, #1d4ed8, #3b82f6)" 
                                    : "linear-gradient(90deg, #1e40af, #3b82f6)",
                                color: "white",
                                border: "none",
                                borderRadius: 24,
                                padding: "0 20px",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                minWidth: 80,
                                flexShrink: 0
                            }}
                            onMouseEnter={() => toggleHover("sendChatButton")}
                            onMouseLeave={() => toggleHover("sendChatButton")}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}

            <style jsx global>{`
                @keyframes wave {
                    0% { transform: rotate(0deg); }
                    10% { transform: rotate(-10deg); }
                    20% { transform: rotate(12deg); }
                    30% { transform: rotate(-10deg); }
                    40% { transform: rotate(9deg); }
                    50% { transform: rotate(0deg); }
                    100% { transform: rotate(0deg); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default ContactUs;