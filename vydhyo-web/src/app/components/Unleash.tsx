'use client';
import React from "react";

const features = [
    {
        title: "3+ Detailed Pages of Doctor & Patients",
        description: "Explore comprehensive profiles and dashboards for both doctors and patients, ensuring clarity and ease of use.",
        image: "/images/doctor-patient.jpg", // Replace with your actual image path
    },
    {
        title: "Virtual Appointment Screens",
        description: "Seamlessly schedule and join virtual appointments with a user-friendly interface designed for efficiency.",
        image: "/images/virtual-appointment.jpg", // Replace with your actual image path
    },
    {
        title: "Well Organized Booking Screens",
        description: "Effortlessly manage bookings with organized screens that simplify the appointment process for everyone.",
        image: "/images/booking-screen.jpg", // Replace with your actual image path
    },
];

export default function Unleash() {
    const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

    return (
        <section className="unleash-section">
            <div className="unleash-container">
                <h1 className="unleash-title">
                    Unleash the Power of Our Booking Management Template{" "}
                    <span role="img" aria-label="fire">
                        🔥
                    </span>
                </h1>
                <p className="unleash-subtitle">
                    Discover the features that make Vydhyo Doctor App a leader in telemedicine solutions.
                </p>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`feature-card ${hoveredCard === index ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="feature-content">
                                <h2 className="feature-title">{feature.title}</h2>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                            <div className="feature-image-container">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="feature-image"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="about-section">
                    <h2 className="about-title">About Vydhyo Doctor App</h2>
                    <p className="about-description">
                        Vydhyo Doctor App is a comprehensive telemedicine platform designed to streamline the process of booking, managing, and conducting virtual medical appointments. Doctors and patients can easily connect through secure video calls, manage appointments, and access detailed medical records.
                    </p>
                </div>
            </div>

            <style jsx>{`
                .unleash-section {
                    background: #f8fafc;
                    padding: 80px 0;
                    font-family: 'Inter', 'Segoe UI', 'Roboto', 'Arial', sans-serif;
                }

                .unleash-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                .unleash-title {
                    font-size: 2.75rem;
                    font-weight: 800;
                    color: #1a223f;
                    margin-bottom: 1rem;
                    text-align: center;
                    line-height: 1.2;
                }

                .unleash-subtitle {
                    color: #64748b;
                    font-size: 1.25rem;
                    margin-bottom: 3rem;
                    text-align: center;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    margin-bottom: 4rem;
                }

                .feature-card {
                    background: #fff;
                    border-radius: 1rem;
                    overflow: hidden;
                    box-shadow: 0 4px 24px rgba(30,41,59,0.08);
                    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                    display: flex;
                    flex-direction: column;
                }

                .feature-card.hovered {
                    box-shadow: 0 8px 32px rgba(30,41,59,0.16);
                    transform: translateY(-8px);
                }

                .feature-content {
                    padding: 1.5rem;
                }

                .feature-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #1a223f;
                    margin-bottom: 1rem;
                }

                .feature-description {
                    color: #334155;
                    font-size: 1rem;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                }

                .feature-image-container {
                    width: 100%;
                    height: 200px;
                    overflow: hidden;
                    position: relative;
                }

                .feature-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .feature-card.hovered .feature-image {
                    transform: scale(1.05);
                }

                .about-section {
                    background: #fff;
                    border-radius: 1rem;
                    padding: 2.5rem;
                    box-shadow: 0 4px 24px rgba(30,41,59,0.08);
                    max-width: 900px;
                    margin: 0 auto;
                }

                .about-title {
                    font-size: 2rem;
                    font-weight: 800;
                    color: #1a223f;
                    margin-bottom: 1.5rem;
                    text-align: center;
                }

                .about-description {
                    color: #334155;
                    font-size: 1.1rem;
                    line-height: 1.7;
                    text-align: center;
                }

                @media (max-width: 1024px) {
                    .unleash-title {
                        font-size: 2.25rem;
                    }
                    
                    .unleash-subtitle {
                        font-size: 1.1rem;
                    }
                }

                @media (max-width: 768px) {
                    .unleash-section {
                        padding: 60px 0;
                    }
                    
                    .unleash-title {
                        font-size: 2rem;
                    }
                    
                    .features-grid {
                        grid-template-columns: 1fr;
                        max-width: 500px;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    
                    .about-section {
                        padding: 2rem;
                    }
                    
                    .about-title {
                        font-size: 1.75rem;
                    }
                }

                @media (max-width: 480px) {
                    .unleash-section {
                        padding: 40px 0;
                    }
                    
                    .unleash-title {
                        font-size: 1.75rem;
                    }
                    
                    .unleash-subtitle {
                        font-size: 1rem;
                    }
                    
                    .feature-content {
                        padding: 1.25rem;
                    }
                    
                    .feature-title {
                        font-size: 1.25rem;
                    }
                    
                    .about-section {
                        padding: 1.5rem;
                    }
                    
                    .about-title {
                        font-size: 1.5rem;
                    }
                    
                    .about-description {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </section>
    );
}