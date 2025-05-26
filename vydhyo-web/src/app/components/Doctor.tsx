import React from "react";

const Doctor: React.FC = () => {
    return (
        <div style={{ background: "#f5f7fa", minHeight: "100vh", padding: 24 }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 24 }}>
                {/* Left Column */}
                <div style={{ flex: 3 }}>
                    {/* Profile Header */}
                    <div style={{ background: "#fff", borderRadius: 8, padding: 24, display: "flex", alignItems: "center", gap: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
                        <img
                            src="https://www.practo.com/assets/images/avatar.png"
                            alt="Doctor"
                            style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", border: "2px solid #e0e0e0" }}
                        />
                        <div>
                            <div style={{ fontWeight: 600, fontSize: 18, color: "#1a1a1a" }}>
                                Dr. Karthik Valila, Cardio Thoracic Surgeon
                            </div>
                            <div style={{ color: "#666", fontSize: 14, marginTop: 2 }}>
                                MBBS, DNB (CT)
                            </div>
                            <div style={{ color: "#007bff", fontSize: 13, marginTop: 2 }}>
                                Cardio Thoracic Surgeon
                            </div>
                            <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
                                <button style={buttonStyle}>PRACTICE LOCATIONS (2)</button>
                                <button style={buttonStyle}>PROFILE</button>
                                <button style={buttonStyle}>PATIENT REVIEWS</button>
                                <button style={buttonStyle}>MEDIA</button>
                                <button style={buttonStyle}>Q&A</button>
                            </div>
                        </div>
                    </div>

                    {/* Appointment and Practice Location */}
                    <div style={sectionStyle}>
                        <div style={sectionTitleStyle}>
                            <span role="img" aria-label="location">📍</span> Dr. Karthik Valila Appointment and Practice Location
                        </div>
                    </div>

                    {/* About */}
                    <div style={sectionStyle}>
                        <div style={sectionTitleStyle}>
                            <span role="img" aria-label="about">ℹ️</span> About Dr. Karthik Valila Cardio Thoracic Surgeon
                        </div>
                        <div style={{ color: "#444", fontSize: 15, marginTop: 8 }}>
                            <b>Dr. Karthik Valila</b>, MBBS, DNB (Cardiothoracic surgery) is an renowned Cardiothoracic surgeon with extensive experience in the field. He has worked at several prestigious hospitals and has expertise in performing complex heart and lung surgeries.<br /><br />
                            Throughout his career, Dr. Valila has been involved in various research projects, teaching, and has published several articles in reputed journals. He is known for his patient-centric approach, dedication, and commitment towards providing excellent healthcare.<br /><br />
                            He is currently associated with multiple hospitals in Hyderabad and is a member of various medical associations. Dr. Valila is also actively involved in training young surgeons and is passionate about advancing the field of cardiothoracic surgery.<br /><br />
                            Apart from his clinical work, he is a regular attendee at national and international conferences.<br /><br />
                            Some of the services provided by the doctor are: Adult Cardiac Surgery, Valve Replacement, Minimally Invasive Cardiac Surgery, and Thoracic Surgery.
                        </div>
                    </div>

                    {/* Specifications */}
                    <div style={sectionStyle}>
                        <div style={sectionTitleStyle}>
                            <span role="img" aria-label="specs">🔬</span> Specifications
                        </div>
                        <ul style={ulStyle}>
                            <li>Cardio Thoracic Surgeon - 17+ Years</li>
                        </ul>
                    </div>

                    {/* Qualifications */}
                    <div style={sectionStyle}>
                        <div style={sectionTitleStyle}>
                            <span role="img" aria-label="qualifications">🎓</span> Qualifications
                        </div>
                        <ul style={ulStyle}>
                            <li>MBBS - Mamata Medical College - 2008 - Khammam</li>
                            <li>DNB - Cardiothoracic Surgery - 2016 - Hyderabad</li>
                        </ul>
                    </div>

                    {/* Experience */}
                    <div style={sectionStyle}>
                        <div style={sectionTitleStyle}>
                            <span role="img" aria-label="experience">💼</span> Experience
                        </div>
                        <ul style={ulStyle}>
                            <li>Consultant Cardiothoracic Surgeon Apollo Hospitals (Secunderabad) - May 2021 - Mar 2023</li>
                            <li>Consultant Cardiothoracic Surgeon Yashoda Hospitals - Hyderabad - Dec 2019 - Dec 2022</li>
                            <li>Consultant Cardiothoracic Surgeon KIMS Hospital - Hyderabad - Oct 2019 - Dec 2022</li>
                            <li>Consultant Cardiothoracic Surgeon Medicover Hospital - Nizamabad - Jun 2021 - Jan 2023</li>
                            <li>Consultant Cardiothoracic Surgeon Prathima Hospital - Nizamabad - Jan 2021</li>
                        </ul>
                    </div>

                    {/* Registrations */}
                    <div style={sectionStyle}>
                        <div style={sectionTitleStyle}>
                            <span role="img" aria-label="registration">📝</span> Registrations
                        </div>
                        <ul style={ulStyle}>
                            <li>CVMC Telangana State Medical Council 2010</li>
                        </ul>
                    </div>

                    {/* Reviews */}
                    <div style={sectionStyle}>
                        <div style={sectionTitleStyle}>
                            <span role="img" aria-label="reviews">⭐</span> Dr. Karthik Valila, Cardio Thoracic Surgeon Reviews
                            <button style={{ ...buttonStyle, float: "right", background: "#007bff", color: "#fff" }}>Write a Feedback</button>
                        </div>
                        <div style={{ textAlign: "center", margin: "32px 0" }}>
                            <img src="https://www.practo.com/assets/images/no-feedback.svg" alt="No feedback" style={{ width: 120, marginBottom: 12 }} />
                            <div style={{ color: "#888" }}>No feedback available for this Doctor.</div>
                            <div style={{ color: "#aaa", fontSize: 13 }}>Be the first to write a review.</div>
                        </div>
                    </div>

                    {/* Q&A */}
                    <div style={sectionStyle}>
                        <div style={sectionTitleStyle}>
                            <span role="img" aria-label="qa">❓</span> Question & Answers by Dr. Karthik Valila
                        </div>
                        <div style={{ textAlign: "center", margin: "32px 0" }}>
                            <img src="https://www.practo.com/assets/images/no-questions.svg" alt="No Q&A" style={{ width: 120, marginBottom: 12 }} />
                            <div style={{ color: "#888" }}>No Question & Answer by this doctor.</div>
                        </div>
                    </div>

                    {/* Media */}
                    <div style={sectionStyle}>
                        <div style={sectionTitleStyle}>
                            <span role="img" aria-label="media">🎥</span> Media from Dr. Karthik Valila
                        </div>
                        <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                            <button style={buttonStyle}>Videos</button>
                            <button style={buttonStyle}>Events & News</button>
                        </div>
                        <div style={{ textAlign: "center", margin: "32px 0" }}>
                            <img src="https://www.practo.com/assets/images/no-media.svg" alt="No media" style={{ width: 120, marginBottom: 12 }} />
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div style={{ flex: 1, minWidth: 260 }}>
                    {/* Related Searches */}
                    <div style={{ background: "#fff", borderRadius: 8, padding: 16, marginBottom: 24, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
                        <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 8 }}>Related searches</div>
                        <ul style={{ color: "#007bff", fontSize: 14, paddingLeft: 16, marginBottom: 0 }}>
                            <li>Best CT Surgeon / Cardio thoracic surgeon in Hyderabad</li>
                            <li>Cardio thoracic surgeon in Hyderabad</li>
                            <li>Cardio thoracic surgeon in Secunderabad</li>
                            <li>Cardio thoracic surgeon in Telangana</li>
                        </ul>
                    </div>
                    {/* Ask a Question */}
                    <div style={{ background: "#fff", borderRadius: 8, padding: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
                        <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 8 }}>Ask a Question</div>
                        <input
                            type="text"
                            placeholder="Type your question"
                            style={{
                                width: "100%",
                                padding: 8,
                                borderRadius: 4,
                                border: "1px solid #e0e0e0",
                                marginBottom: 8,
                                fontSize: 14,
                            }}
                            disabled
                        />
                        <button style={{ ...buttonStyle, width: "100%", background: "#ff6600", color: "#fff" }}>Ask Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const buttonStyle: React.CSSProperties = {
    background: "#f5f7fa",
    border: "1px solid #e0e0e0",
    borderRadius: 4,
    padding: "6px 14px",
    fontSize: 13,
    color: "#333",
    cursor: "pointer",
    fontWeight: 500,
};

const sectionStyle: React.CSSProperties = {
    background: "#fff",
    borderRadius: 8,
    padding: 20,
    marginTop: 24,
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
};

const sectionTitleStyle: React.CSSProperties = {
    fontWeight: 600,
    fontSize: 16,
    color: "#1a1a1a",
    marginBottom: 6,
};

const ulStyle: React.CSSProperties = {
    paddingLeft: 20,
    color: "#444",
    fontSize: 15,
    margin: 0,
};

export default Doctor;