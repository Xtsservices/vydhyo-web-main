"use client";

import React, { useState } from "react";

const privacySections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p>We collect the following types of information:</p>
        <h4>A. Personal Information</h4>
        <ul>
          <li>Name, gender, date of birth</li>
          <li>Phone number, email address, postal address</li>
          <li>Government-issued IDs (as required for verification)</li>
        </ul>
        
        <h4>B. Health Information</h4>
        <ul>
          <li>Medical history, reports, prescriptions</li>
          <li>Appointment records</li>
          <li>Diagnostic and consultation data</li>
        </ul>
        
        <h4>C. Device & Usage Information</h4>
        <ul>
          <li>IP address, browser type, device identifiers</li>
          <li>App usage data and interaction logs</li>
        </ul>
        
        <h4>D. Location Information</h4>
        <ul>
          <li>Real-time location (for ambulance services, nearest providers, etc.)</li>
        </ul>
      </>
    )
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>We use your data to:</p>
        <ul>
          <li>Enable doctor and diagnostic bookings</li>
          <li>Provide ambulance and blood bank access</li>
          <li>Coordinate home healthcare services</li>
          <li>Maintain medical history for continuity of care</li>
          <li>Improve user experience and offer personalized services</li>
          <li>Process payments and issue invoices</li>
          <li>Ensure regulatory compliance and audit readiness</li>
        </ul>
      </>
    )
  },
  {
    title: "3. Data Sharing and Disclosure",
    content: (
      <>
        <p>We do not sell or rent your personal data. Your information may only be shared with:</p>
        <ul>
          <li>Verified hospitals, doctors, diagnostic labs, and ambulances for service fulfillment</li>
          <li>Our internal support and tech teams (bound by strict confidentiality)</li>
          <li>Government authorities if mandated by law or in emergency situations</li>
        </ul>
      </>
    )
  },
  {
    title: "4. Your Rights",
    content: (
      <>
        <p>You have full control over your data. You can:</p>
        <ul>
          <li>Access and review your data anytime</li>
          <li>Request corrections or deletions</li>
          <li>Withdraw consent and deactivate your account</li>
          <li>Download your data in portable format</li>
        </ul>
        <p>To exercise these rights, email us at <a href="mailto:privacy@vydyo.in" style={{color: "#3d56f0"}}>privacy@vydyo.in</a></p>
      </>
    )
  },
  {
    title: "5. Data Retention",
    content: (
      <>
        <p>We retain your information only as long as necessary for:</p>
        <ul>
          <li>Legal, regulatory, or operational reasons</li>
          <li>Providing uninterrupted healthcare continuity</li>
        </ul>
        <p>Inactive user data is securely deleted after [X years] or upon formal request.</p>
      </>
    )
  },
  {
    title: "6. Security Measures",
    content: (
      <>
        <p>We use bank-grade encryption, secure cloud infrastructure, and industry-standard protocols:</p>
        <ul>
          <li>End-to-end encryption (TLS 1.3)</li>
          <li>Role-based access control and audit logs</li>
          <li>ISO/IEC 27001 certified systems</li>
          <li>HIPAA-compliant data handling</li>
        </ul>
      </>
    )
  },
  {
    title: "7. Cookies and Tracking",
    content: (
      <>
        <p>We use minimal cookies for:</p>
        <ul>
          <li>Analytics and performance improvement</li>
          <li>Remembering user preferences</li>
        </ul>
        <p>You can disable cookies via your browser without affecting core functionality.</p>
      </>
    )
  },
  {
    title: "8. Third-Party Services",
    content: (
      <>
        <p>Some services may be integrated via trusted third parties (e.g., payment gateways). We ensure these partners meet equivalent data privacy and security standards.</p>
      </>
    )
  },
  {
    title: "9. Children's Privacy",
    content: (
      <>
        <p>VYDYO is not intended for users under the age of 18 without parental/guardian consent. We do not knowingly collect data from minors.</p>
      </>
    )
  },
  {
    title: "10. Grievance Officer",
    content: (
      <>
        <p><strong>Name:</strong> [Grievance Officer Name]</p>
        <p><strong>Email:</strong> <a href="mailto:grievance@vydyo.in" style={{color: "#3d56f0"}}>grievance@vydyo.in</a></p>
        <p><strong>Contact:</strong> +91-XXXXXXXXXX</p>
        <p><strong>Address:</strong> VYDYO HealthTech Pvt Ltd, Hall Mark Sunny Side, Manchirevula, Hyderabad, Telangana, India</p>
      </>
    )
  },
  {
    title: "11. Policy Updates",
    content: (
      <>
        <p>We may revise this Privacy Policy to reflect legal or business changes. Users will be notified via app/website or email. Continued use of VYDYO implies consent to the updated policy.</p>
      </>
    )
  }
];

const PrivacyPolicy: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div style={{ 
            background: "#fff", 
            minHeight: "100vh", 
            padding: "20px", 
            boxSizing: "border-box",
            width: "100%",
            overflowX: "hidden"
        }}>
            <div style={{ 
                textAlign: "center", 
                marginTop: 40,
                maxWidth: 1200,
                marginLeft: "auto",
                marginRight: "auto",
                padding: "0 20px"
            }}>
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
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        cursor: "pointer",
                        margin: "0 auto"
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
                                !
                            </text>
                        </svg>
                    </span>
                    PRIVACY POLICY
                </button>
                <h2
                    style={{
                        fontWeight: 700,
                        fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
                        marginBottom: 32,
                        color: "#222",
                        lineHeight: 1.3
                    }}
                >
                    Your Data Privacy Matters
                </h2>
                <p style={{
                    color: "#4b5563",
                    fontSize: "clamp(14px, 3vw, 16px)",
                    maxWidth: 800,
                    margin: "0 auto 40px auto",
                    lineHeight: 1.6
                }}>
                    At VYDYO, we are committed to protecting your personal and health information with the highest security standards. This policy explains how we collect, use, and safeguard your data.
                </p>
            </div>
            <div
                style={{
                    maxWidth: 900,
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    padding: "0 20px",
                    width: "100%",
                    boxSizing: "border-box"
                }}
            >
                {privacySections.map((section, idx) => (
                    <div
                        key={idx}
                        style={{
                            background: "#fff",
                            borderRadius: 8,
                            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                            border: "1px solid #e8eaf1",
                            overflow: "hidden",
                            width: "100%"
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
                                padding: "18px 20px",
                                fontSize: "clamp(14px, 3vw, 16px)",
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
                                    flexShrink: 0
                                }}
                            >
                                +
                            </span>
                            {section.title}
                        </button>
                        {openIndex === idx && (
                            <div
                                style={{
                                    padding: "0 20px 18px 54px",
                                    color: "#555",
                                    fontSize: "clamp(14px, 3vw, 15px)",
                                    lineHeight: 1.7,
                                    background: "#f9faff",
                                    borderTop: "1px solid #e8eaf1",
                                    animation: "fadeIn 0.2s",
                                }}
                            >
                                {section.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {/* Trust Badge Section */}
            <div
                style={{
                    marginTop: 60,
                    background: "#f9faff",
                    borderRadius: 12,
                    maxWidth: 900,
                    margin: "40px auto 60px auto",
                    padding: "36px 32px",
                    position: "relative",
                    overflow: "hidden",
                    minHeight: 180,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 16,
                    width: "calc(100% - 40px)",
                    boxSizing: "border-box",
                    textAlign: "center",
                    border: "1px solid #e3e8ff"
                }}
            >
                <div style={{ 
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: "#e3e8ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16
                }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3d56f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 12L11 15L16 9" stroke="#3d56f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <h3
                    style={{
                        color: "#222",
                        fontWeight: 700,
                        fontSize: "clamp(18px, 4vw, 22px)",
                        marginBottom: 8,
                    }}
                >
                    🔒 Built for Trust. Powered by Compliance.
                </h3>
                <p style={{ 
                    color: "#4b5563", 
                    fontSize: "clamp(14px, 3vw, 15px)", 
                    marginBottom: 24,
                    maxWidth: 600
                }}>
                    We stand for transparency, security, and patient rights.<br />
                    Thank you for trusting VYDYO with your healthcare journey.
                </p>
                <div style={{
                    display: "flex",
                    gap: 16,
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginTop: 16
                }}>
                    <div style={{
                        background: "#fff",
                        borderRadius: 8,
                        padding: "12px 20px",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                        border: "1px solid #e3e8ff"
                    }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 12L11 15L16 9" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span style={{ color: "#222", fontWeight: 500 }}>ISO 27001 Certified</span>
                    </div>
                    <div style={{
                        background: "#fff",
                        borderRadius: 8,
                        padding: "12px 20px",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                        border: "1px solid #e3e8ff"
                    }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3d56f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 12L11 15L16 9" stroke="#3d56f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span style={{ color: "#222", fontWeight: 500 }}>HIPAA Compliant</span>
                    </div>
                    <div style={{
                        background: "#fff",
                        borderRadius: 8,
                        padding: "12px 20px",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                        border: "1px solid #e3e8ff"
                    }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 12L11 15L16 9" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span style={{ color: "#222", fontWeight: 500 }}>256-bit Encryption</span>
                    </div>
                </div>
            </div>
            {/* FadeIn animation */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-8px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                ul {
                    padding-left: 20px;
                    margin: 12px 0;
                }
                li {
                    margin-bottom: 8px;
                }
                h4 {
                    margin: 16px 0 8px 0;
                    color: #222;
                    font-weight: 600;
                }
                @media (max-width: 768px) {
                    div[style*="flex-direction: row"] {
                        flex-direction: column !important;
                        align-items: stretch !important;
                    }
                }
                @media (max-width: 480px) {
                    div[style*="padding: 36px 32px"] {
                        padding: 24px 20px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default PrivacyPolicy;