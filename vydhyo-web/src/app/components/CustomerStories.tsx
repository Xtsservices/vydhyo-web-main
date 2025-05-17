import React from "react";

const customerStories = [
    {
        name: "Dr. Anjali Mehra",
        avatar: "🩺",
        rating: 5,
        title: "Appointment Scheduling",
        feedback:
            "Vydhyo Doctor App has made scheduling appointments seamless for my clinic. The interface is intuitive and my patients love the reminders.",
    },
    {
        name: "healthcarepro99",
        avatar: "🩺",
        rating: 5,
        title: "Video Consultation",
        feedback:
            "The video call quality is excellent. I can consult with patients remotely without any hassle. Support team is very responsive.",
    },
    {
        name: "drsureshpatil",
        avatar: "🩺",
        rating: 5,
        title: "Patient Records",
        feedback:
            "Managing patient records is now effortless. I can access history and prescriptions anytime, anywhere. Highly recommended!",
    },
    {
        name: "medic_jane",
        avatar: "🩺",
        rating: 5,
        title: "Customer Support",
        feedback:
            "The support team helped me set up my profile and answered all my queries quickly. Great experience so far.",
    },
    {
        name: "Dr. Rohan Gupta",
        avatar: "🩺",
        rating: 5,
        title: "Prescription Management",
        feedback:
            "Issuing digital prescriptions is fast and secure. My patients appreciate receiving them instantly on their phones.",
    },
    {
        name: "cliniccare",
        avatar: "🩺",
        rating: 5,
        title: "User Experience",
        feedback:
            "The app is user-friendly and reliable. It has improved my workflow and helped me connect with more patients.",
    },
];

const CustomerStories: React.FC = () => {
    return (
        <div
            style={{
                background: "linear-gradient(90deg, #1e90ff 0%, #4f5bd5 100%)",
                minHeight: "100vh",
                padding: "0",
                margin: "0",
                fontFamily: "Segoe UI, Arial, sans-serif",
            }}
        >
            <div style={{ padding: "40px 0 0 0", textAlign: "center" }}>
                <button
                    style={{
                        background: "#fff",
                        color: "#1e90ff",
                        border: "none",
                        borderRadius: "32px",
                        padding: "16px 40px",
                        fontWeight: 600,
                        fontSize: "18px",
                        boxShadow: "0 2px 8px rgba(30,144,255,0.08)",
                        marginBottom: "32px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        cursor: "pointer",
                    }}
                >
                    <span role="img" aria-label="stories">
                        🎤
                    </span>
                    Customer Stories
                </button>
                <h2
                    style={{
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "2.2rem",
                        margin: "0 0 10px 0",
                        letterSpacing: "-1px",
                        lineHeight: 1.2,
                    }}
                >
                    Our Customer’s trust Vydhyo for its<br />
                    reliability and efficiency.
                </h2>
            </div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "32px",
                    margin: "40px auto 0 auto",
                    maxWidth: "1400px",
                }}
            >
                {customerStories.map((story, idx) => (
                    <div
                        key={idx}
                        style={{
                            background: "linear-gradient(90deg, rgba(79,91,213,0.95) 0%, rgba(30,144,255,0.95) 100%)",
                            borderRadius: "16px",
                            padding: "28px 32px",
                            color: "#fff",
                            width: "100%",
                            minHeight: "180px",
                            boxShadow: "0 4px 24px rgba(30,144,255,0.10)",
                            display: "flex",
                            flexDirection: "column",
                            marginBottom: "0",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                            <div
                                style={{
                                    width: 56,
                                    height: 56,
                                    borderRadius: "50%",
                                    background: "#a3e635",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "2rem",
                                    marginRight: 16,
                                }}
                            >
                                {story.avatar}
                            </div>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: "1.15rem", color: "#fff" }}>{story.name}</div>
                                <div>
                                    {Array.from({ length: story.rating }).map((_, i) => (
                                        <span key={i} style={{ color: "#ffd700", fontSize: "1.1rem", marginRight: 2 }}>★</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div style={{ fontWeight: 600, marginBottom: 6, color: "#fff", fontSize: "1.05rem" }}>{story.title}</div>
                        <div style={{ fontSize: "1rem", opacity: 0.95, color: "#fff" }}>{story.feedback}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerStories;
