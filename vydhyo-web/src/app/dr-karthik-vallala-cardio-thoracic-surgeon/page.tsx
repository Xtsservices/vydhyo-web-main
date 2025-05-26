"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DrKarthikVallalaProfile() {
  const [activeTab, setActiveTab] = useState("profile");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [patientDetails, setPatientDetails] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    reason: "",
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tabs = [
    { key: "locations", label: "PRACTICE LOCATIONS" },
    { key: "profile", label: "PROFILE" },
    { key: "reviews", label: "PATIENT REVIEWS" },
    { key: "media", label: "MEDIA" },
    { key: "qa", label: "Q&A" },
  ];

  const availableSlots = [
    "10:00 AM - 10:30 AM",
    "11:00 AM - 11:30 AM",
    "2:00 PM - 2:30 PM",
    "4:00 PM - 4:30 PM",
    "5:00 PM - 5:30 PM",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPatientDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSlotSelection = (slot: string) => {
    setSelectedSlot(slot);
    setBookingStep(2);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log("Booking submitted:", { ...patientDetails, slot: selectedSlot });
    setBookingStep(3); // Move to confirmation step
  };

  const resetBooking = () => {
    setSelectedSlot(null);
    setPatientDetails({
      name: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
      reason: "",
    });
    setBookingStep(1);
  };

  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedback, setFeedback] = useState({
    rating: 0,
    purpose: "",
    recommend: undefined as boolean | undefined,
    name: "",
    mobile: "",
    otp: "",
  });

  function handleFeedbackSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log("Feedback submitted:", feedback);
    setShowFeedbackModal(false);
    setFeedback({
      rating: 0,
      purpose: "",
      recommend: undefined,
      name: "",
      mobile: "",
      otp: "",
    });
  }

  return (
    <>
      <Header />
      <div style={pageStyle}>
        {/* Left Column */}
        <div style={isMobile ? mobileLeftColStyle : leftColStyle}>
          {/* Doctor Card */}
          <div style={isMobile ? mobileDoctorCardStyle : doctorCardStyle}>
            <img
              src="/images/dr-karthik-vallala.jpg"
              alt="Dr. Karthik Vallala"
              style={isMobile ? mobileAvatarStyle : avatarStyle}
              onError={e => {
                (e.target as HTMLImageElement).src =
                  "https://via.placeholder.com/150x150?text=Dr";
              }}
            />
            <div>
              <div style={isMobile ? mobileDoctorNameStyle : doctorNameStyle}>
                Dr. Karthik Vallala, Cardio Thoracic Surgeon
              </div>
              <div style={isMobile ? mobileDoctorDegreeStyle : doctorDegreeStyle}>MBBS, DNB (CT)</div>
              <div style={isMobile ? mobileDoctorSpecialtyStyle : doctorSpecialtyStyle}>Cardio Thoracic Surgeon</div>
              <div style={ratingContainerStyle}>
              </div>
              <div style={experienceStyle}>12+ Years Experience</div>
            </div>
          </div>

          {/* Tabs */}
          <div style={isMobile ? mobileTabsRowStyle : tabsRowStyle}>
            {tabs.map(tab => (
              <button
                key={tab.key}
                style={activeTab === tab.key ? activeTabBtnStyle : tabBtnStyle}
                onClick={() => setActiveTab(tab.key)}
              >
                {isMobile ? tab.label.split(" ")[0] : tab.label}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div style={isMobile ? mobileMainCardStyle : mainCardStyle}>
            <div style={sectionTitleStyle}>
              <span style={iconStyle}>ℹ️</span> About Dr. Karthik Vallala
            </div>
            <div style={aboutTextStyle}>
              <b>Dr. Karthik Vallala</b> (MBBS, DNB - Cardiothoracic surgeon) is a renowned Cardiothoracic surgeon with extensive experience in the field. Dr. Karthik Vallala specializes in Mitral/Heart Valve Replacement, Open-heart Surgery, and CABG procedures.<br /><br />
              Throughout his career, Dr. Karthik Vallala has held positions at various prestigious hospitals, including Consultant Cardiothoracic surgeon roles at: Apollo Hospital (May 2017- April 2018), Virinchi Hospital (May 2018-August 2019), and Global Hospital (September 2019-August 2020). He has also maintained an active role in academia, serving as an Assistant Professor at ESI Superspeciality Hospital from September 2020 to December 2022.<br /><br />
              A member of esteemed associations such as the Indian Association of Cardio Thoracic Surgeons, Indian Society of Vascular Surgery, and Indian Society of Coronary Surgeons. Dr. Karthik Vallala graduated from Mamata Medical College, Khammam in 2010. He pursued his DNB in Cardiothoracic Surgery from Yashoda Superspeciality Hospital, Hyderabad in 2017. Proficient in Hindi, English, and Telugu languages, Dr. Vallala is dedicated to providing comprehensive care to his patients.
            </div>

            {/* Specializations */}
            <div style={sectionTitleStyle}>
              <span style={iconStyle}>🩺</span> Specializations
            </div>
            <ul style={listStyle}>
              <li>Cardio Thoracic Surgeon / CT Surgeon</li>
              <li>Heart Valve Replacement Specialist</li>
              <li>Coronary Artery Bypass Grafting (CABG)</li>
              <li>Minimally Invasive Cardiac Surgery</li>
            </ul>

            {/* Qualifications */}
            <div style={sectionTitleStyle}>
              <span style={iconStyle}>🎓</span> Qualifications
            </div>
            <ul style={listStyle}>
              <li>MBBS - Mamata Medical College - 2010 - Khammam</li>
              <li>DNB - Cardiothoracic Surgery - Yashoda Hospitals - 2016 - Hyderabad</li>
            </ul>

            {/* Experiences */}
            <div style={sectionTitleStyle}>
              <span style={iconStyle}>💼</span> Experiences
            </div>
            <ul style={listStyle}>
              <li>Associate Cardio Thoracic Surgeon Apollo Hospitals - Secunderabad - May 2017 - May 2018</li>
              <li>Consultant Cardiothoracic Surgeon Virinchi Hospitals - Banjara Hills - May 2018 - Sep 2020</li>
              <li>Consultant Cardiothoracic Surgeon TX Hospitals - Uppal</li>
              <li>Consultant Cardiothoracic Surgeon TX Hospitals - Kachiguda</li>
              <li>Consultant Cardiothoracic Surgeon ESI Hospital - Hyderabad - Oct 2020 - Dec 2022</li>
              <li>Consultant Cardiothoracic Surgeon Medicover Hospitals - Nizamabad - Jan 2023 - Jan 2023</li>
              <li>Consultant Cardiothoracic Surgeon Pristine Hospitals - Nizamabad - Jan 2024</li>
            </ul>

            {/* Registrations */}
            <div style={sectionTitleStyle}>
              <span style={iconStyle}>📝</span> Registrations
            </div>
            <div style={sectionTitleStyle}></div>
            <ul style={listStyle}>
              <li>67935 Telangana State Medical Council 2010</li>
            </ul>

            {/* Patient Reviews */}
            <div style={mainCardStyle}></div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={iconStyle}>⭐</span>
                <span style={{ fontWeight: 600, fontSize: isMobile ? "1rem" : "1.1rem" }}>Dr. Karthik Vallala Reviews</span>
              </div>
              <button
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 18px",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  cursor: "pointer"
                }}
                onClick={() => setShowFeedbackModal(true)}
              >
                Write Feedback
              </button>
              {showFeedbackModal && (
                <div style={{
                  position: "fixed",
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: "rgba(0,0,0,0.35)",
                  zIndex: 1000,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <div style={{
                    background: "#fff",
                    borderRadius: 12,
                    padding: isMobile ? 16 : 32,
                    minWidth: isMobile ? "90vw" : 400,
                    maxWidth: "90vw",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                    position: "relative"
                  }}>
                    <button
                      style={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        background: "none",
                        border: "none",
                        fontSize: 22,
                        cursor: "pointer",
                        color: "#64748b"
                      }}
                      onClick={() => setShowFeedbackModal(false)}
                      aria-label="Close"
                    >×</button>
                    <div style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: 16, color: "#1e40af" }}>
                      Share your Feedback for
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                      <img
                        src="/images/dr-karthik-vallala.jpg"
                        alt="Dr. Karthik Vallala"
                        style={{ width: 60, height: 60, borderRadius: "50%", objectFit: "cover", border: "2px solid #e5e7eb" }}
                      />
                      <div>
                        <div style={{ fontWeight: 600, fontSize: "1.05rem", color: "#1e293b" }}>Dr. Karthik Vallala</div>
                        <div style={{ color: "#64748b", fontSize: "0.95rem" }}>MBBS, DNB (CT)</div>
                        <div style={{ color: "#475569", fontSize: "0.95rem" }}>Cardio Thoracic Surgeon</div>
                      </div>
                    </div>
                    <form
                      onSubmit={handleFeedbackSubmit}
                      style={{ display: "flex", flexDirection: "column", gap: 16 }}
                    >
                      <div>
                        <div style={{ fontWeight: 500, marginBottom: 4 }}>Rate your experience</div>
                        <div style={{ display: "flex", gap: 4 }}>
                          {[1, 2, 3, 4, 5].map(star => (
                            <span
                              key={star}
                              style={{
                                fontSize: 28,
                                color: feedback.rating >= star ? "#fbbf24" : "#e5e7eb",
                                cursor: "pointer"
                              }}
                              onClick={() => setFeedback(f => ({ ...f, rating: star }))}
                              role="button"
                              aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                            >★</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label style={{ fontWeight: 500, marginBottom: 4, display: "block" }}>Purpose of Visit</label>
                        <input
                          type="text"
                          name="purpose"
                          value={feedback.purpose}
                          onChange={e => setFeedback(f => ({ ...f, purpose: e.target.value }))}
                          style={{
                            width: "100%",
                            padding: "10px 12px",
                            borderRadius: 8,
                            border: "1px solid #cbd5e1",
                            fontSize: "0.95rem",
                            backgroundColor: "#fff"
                          }}
                          placeholder="Eg: Consultation, Surgery, etc."
                        />
                      </div>
                      <div>
                        <div style={{ fontWeight: 500, marginBottom: 4 }}>Do you recommend this Doctor?</div>
                        <label style={{ marginRight: 16 }}>
                          <input
                            type="radio"
                            name="recommend"
                            checked={feedback.recommend === true}
                            onChange={() => setFeedback(f => ({ ...f, recommend: true }))}
                            style={{ marginRight: 6 }}
                          /> Yes
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="recommend"
                            checked={feedback.recommend === false}
                            onChange={() => setFeedback(f => ({ ...f, recommend: false }))}
                            style={{ marginRight: 6 }}
                          /> No
                        </label>
                      </div>
                      <div>
                        <div style={{ fontWeight: 500, marginBottom: 4 }}>To submit feedback enter your details</div>
                        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 8, marginBottom: 8 }}>
                          <input
                            type="text"
                            placeholder="Enter Your Name"
                            value={feedback.name}
                            onChange={e => setFeedback(f => ({ ...f, name: e.target.value }))}
                            style={{
                              flex: 1,
                              padding: "10px 12px",
                              borderRadius: 8,
                              border: "1px solid #cbd5e1",
                              fontSize: "0.95rem"
                            }}
                            required
                          />
                          <input
                            type="tel"
                            placeholder="Mobile Number"
                            value={feedback.mobile}
                            onChange={e => setFeedback(f => ({ ...f, mobile: e.target.value }))}
                            style={{
                              flex: 1,
                              padding: "10px 12px",
                              borderRadius: 8,
                              border: "1px solid #cbd5e1",
                              fontSize: "0.95rem"
                            }}
                            required
                          />
                          <input
                            type="text"
                            placeholder="Verify OTP"
                            value={feedback.otp}
                            onChange={e => setFeedback(f => ({ ...f, otp: e.target.value }))}
                            style={{
                              flex: 1,
                              padding: "10px 12px",
                              borderRadius: 8,
                              border: "1px solid #cbd5e1",
                              fontSize: "0.95rem"
                            }}
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        style={{
                          background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                          color: "#fff",
                          border: "none",
                          borderRadius: 8,
                          padding: "12px 20px",
                          fontWeight: 600,
                          fontSize: "1rem",
                          cursor: "pointer",
                          marginTop: 8
                        }}
                      >
                        Submit Review
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "32px 0" }}>
              <img
                src="./images/feedback.png"
                alt="No feedback"
                style={{ width: 180, marginBottom: 16 }}
              />
              <div style={{ color: "#64748b", fontSize: "1rem", textAlign: "center" }}>
                No feedback available for this Doctor.<br />
                <span style={{ color: "#2563eb", fontWeight: 500 }}>Be the first to write a review.</span>
              </div>
            </div>

            {/* Q&A */}
            <div style={mainCardStyle}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <span style={{ fontWeight: 600, fontSize: isMobile ? "1rem" : "1.1rem" }}>Question & Answers by Dr. Karthik Vallala</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "32px 0" }}>
                <img
                  src="./images/QA.png"
                  alt="No Q&A"
                  style={{ width: 160, marginBottom: 16 }}
                />
                <div style={{ color: "#64748b", fontSize: "1rem", textAlign: "center" }}>
                  No Question & Answers by this doctor.
                </div>
              </div>
            </div>

            {/* Media */}
            <div style={mainCardStyle}>
              <div style={{ marginBottom: 16 }}>
                <span style={{ fontWeight: 600, fontSize: isMobile ? "1rem" : "1.1rem", color: "#1e40af" }}>Media from Dr. Karthik Vallala</span>
              </div>
              <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
                <button style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 18px",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  cursor: "pointer"
                }}>
                  Videos
                </button>
                <button style={{
                  background: "#f1f5f9",
                  color: "#334155",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 18px",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  cursor: "pointer"
                }}>
                  Events & News
                </button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "32px 0" }}></div>
            </div>
          </div>
        </div>

        {/* Right Column - Hidden on mobile when booking step is active */}
        {(!isMobile || bookingStep === 1) && (
          <div style={isMobile ? mobileRightColStyle : rightColStyle}>
            {/* Booking Card */}
            <div style={isMobile ? mobileBookingCardStyle : bookingCardStyle}>
              <div style={bookingCardTitleStyle}>Book Appointment</div>
              
              {bookingStep === 1 && (
                <div style={bookingStepContainer}>
                  <div style={bookingSubtitleStyle}>Available Time Slots</div>
                  <div style={slotsContainerStyle}>
                    {availableSlots.map((slot, index) => (
                      <button
                        key={index}
                        style={slotButtonStyle}
                        onClick={() => handleSlotSelection(slot)}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  <div style={bookingNoteStyle}>
                    <span style={iconStyle}>ℹ️</span> Consultation fee: ₹800
                  </div>
                </div>
              )}

              {bookingStep === 2 && (
                <form onSubmit={handleBookingSubmit} style={bookingFormStyle}>
                  <div style={bookingSubtitleStyle}>Patient Details</div>
                  
                  <div style={formGroupStyle}>
                    <label style={formLabelStyle}>Full Name*</label>
                    <input
                      type="text"
                      name="name"
                      value={patientDetails.name}
                      onChange={handleInputChange}
                      style={formInputStyle}
                      required
                    />
                  </div>
                  
                  <div style={formGroupStyle}>
                    <label style={formLabelStyle}>Email*</label>
                    <input
                      type="email"
                      name="email"
                      value={patientDetails.email}
                      onChange={handleInputChange}
                      style={formInputStyle}
                      required
                    />
                  </div>
                  
                  <div style={formGroupStyle}>
                    <label style={formLabelStyle}>Phone Number*</label>
                    <input
                      type="tel"
                      name="phone"
                      value={patientDetails.phone}
                      onChange={handleInputChange}
                      style={formInputStyle}
                      required
                    />
                  </div>
                  
                  <div style={formRowStyle}>
                    <div style={{...formGroupStyle, flex: 1}}>
                      <label style={formLabelStyle}>Age*</label>
                      <input
                        type="number"
                        name="age"
                        value={patientDetails.age}
                        onChange={handleInputChange}
                        style={formInputStyle}
                        required
                        min="1"
                        max="120"
                      />
                    </div>
                    
                    <div style={{...formGroupStyle, flex: 1, marginLeft: isMobile ? 0 : 12}}>
                      <label style={formLabelStyle}>Gender*</label>
                      <select
                        name="gender"
                        value={patientDetails.gender}
                        onChange={handleInputChange}
                        style={formInputStyle}
                        required
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div style={formGroupStyle}>
                    <label style={formLabelStyle}>Reason for Visit</label>
                    <textarea
                      name="reason"
                      value={patientDetails.reason}
                      onChange={handleInputChange}
                      style={{...formInputStyle, minHeight: 80}}
                      placeholder="Briefly describe your symptoms or reason for consultation"
                    />
                  </div>
                  
                  <div style={selectedSlotStyle}>
                    <span style={{fontWeight: 600}}>Selected Slot:</span> {selectedSlot}
                  </div>
                  
                  <div style={isMobile ? mobileBookingActionsStyle : bookingActionsStyle}>
                    <button
                      type="button"
                      style={secondaryButtonStyle}
                      onClick={() => setBookingStep(1)}
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      style={primaryButtonStyle}
                    >
                      Confirm Booking →
                    </button>
                  </div>
                </form>
              )}

              {bookingStep === 3 && (
                <div style={confirmationContainer}>
                  <div style={confirmationIconStyle}>✓</div>
                  <div style={confirmationTitleStyle}>Appointment Booked Successfully!</div>
                  <div style={confirmationDetailsStyle}>
                    <p><strong>Doctor:</strong> Dr. Karthik Vallala</p>
                    <p><strong>Time:</strong> {selectedSlot}</p>
                    <p><strong>Patient:</strong> {patientDetails.name}</p>
                    <p>A confirmation has been sent to {patientDetails.email}</p>
                  </div>
                  <button
                    style={primaryButtonStyle}
                    onClick={resetBooking}
                  >
                    Book Another Appointment
                  </button>
                </div>
              )}
            </div>

            {/* Related Searches - Hidden on mobile */}
            {!isMobile && (
              <>
                <div style={sideCardStyle}>
                  <div style={sideCardTitleStyle}>Related searches</div>
                  <ul style={sideListStyle}>
                    <li>Best CT Surgeon / Cardio thoracic surgeons in Hyderabad</li>
                    <li>Best CT Surgeon / Cardio thoracic surgeons in Mehdipatnam</li>
                    <li>Best Doctors for CABG / Open Heart in Hyderabad</li>
                    <li>Best CT Surgery Hospitals in Hyderabad</li>
                  </ul>
                </div>

                {/* Clinic Photos */}
                <div style={sideCardStyle}>
                  <div style={sideCardTitleStyle}>Clinic Photos</div>
                  <div style={photosContainerStyle}>
                    <img
                      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                      alt="Clinic Photo 1"
                      style={clinicPhotoStyle}
                    />
                    <img
                      src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                      alt="Clinic Photo 2"
                      style={clinicPhotoStyle}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

// --- Styles ---
const pageStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  background: "#f8fafc",
  minHeight: "100vh",
  marginTop: "5rem",
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  padding: "32px 16px",
  backgroundImage: "radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
};

const leftColStyle: React.CSSProperties = {
  flex: 2,
  maxWidth: 800,
  margin: "0 24px 0 48px",
};

const mobileLeftColStyle: React.CSSProperties = {
  width: "100%",
  margin: "0",
};

const rightColStyle: React.CSSProperties = {
  flex: 1,
  minWidth: 320,
  maxWidth: 380,
  marginRight: 32,
  marginLeft: 16,
};

const mobileRightColStyle: React.CSSProperties = {
  width: "100%",
  margin: "16px 0",
};

const doctorCardStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  background: "#fff",
  borderRadius: 12,
  padding: "24px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  marginBottom: 24,
  gap: 20,
  border: "1px solid rgba(0, 0, 0, 0.05)",
};

const mobileDoctorCardStyle: React.CSSProperties = {
  ...doctorCardStyle,
  flexDirection: "column",
  textAlign: "center",
  padding: "16px",
};

const avatarStyle: React.CSSProperties = {
  width: 100,
  height: 100,
  borderRadius: "50%",
  objectFit: "cover",
  border: "3px solid #e5e7eb",
};

const mobileAvatarStyle: React.CSSProperties = {
  ...avatarStyle,
  width: 80,
  height: 80,
};

const doctorNameStyle: React.CSSProperties = {
  fontWeight: 700,
  fontSize: "1.3rem",
  marginBottom: 4,
  color: "#1e293b",
};

const mobileDoctorNameStyle: React.CSSProperties = {
  ...doctorNameStyle,
  fontSize: "1.1rem",
};

const doctorDegreeStyle: React.CSSProperties = {
  color: "#64748b",
  fontSize: "1rem",
  marginBottom: 4,
};

const mobileDoctorDegreeStyle: React.CSSProperties = {
  ...doctorDegreeStyle,
  fontSize: "0.9rem",
};

const doctorSpecialtyStyle: React.CSSProperties = {
  color: "#475569",
  fontSize: "1rem",
  fontWeight: 600,
  marginBottom: 8,
};

const mobileDoctorSpecialtyStyle: React.CSSProperties = {
  ...doctorSpecialtyStyle,
  fontSize: "0.9rem",
};

const ratingContainerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  marginBottom: 8,
};

const ratingStyle: React.CSSProperties = {
  backgroundColor: "#dcfce7",
  color: "#166534",
  padding: "4px 8px",
  borderRadius: 20,
  fontSize: "0.85rem",
  fontWeight: 600,
};

const reviewCountStyle: React.CSSProperties = {
  color: "#64748b",
  fontSize: "0.85rem",
};

const experienceStyle: React.CSSProperties = {
  color: "#1e40af",
  fontSize: "0.9rem",
  fontWeight: 600,
};

const tabsRowStyle: React.CSSProperties = {
  display: "flex",
  gap: 8,
  marginBottom: 24,
  overflowX: "auto",
  paddingBottom: 8,
};

const mobileTabsRowStyle: React.CSSProperties = {
  ...tabsRowStyle,
  gap: 4,
};

const tabBtnStyle: React.CSSProperties = {
  background: "#f1f5f9",
  border: "none",
  borderRadius: 8,
  padding: "12px 20px",
  color: "#334155",
  fontWeight: 600,
  fontSize: "0.95rem",
  cursor: "pointer",
  whiteSpace: "nowrap",
  transition: "all 0.2s ease",
};

const activeTabBtnStyle: React.CSSProperties = {
  ...tabBtnStyle,
  background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
  color: "#fff",
};

const mainCardStyle: React.CSSProperties = {
  background: "#fff",
  borderRadius: 12,
  padding: "32px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  marginBottom: 24,
  border: "1px solid rgba(0, 0, 0, 0.05)",
};

const mobileMainCardStyle: React.CSSProperties = {
  ...mainCardStyle,
  padding: "16px",
};

const sectionTitleStyle: React.CSSProperties = {
  fontWeight: 700,
  fontSize: "1.2rem",
  color: "#1e40af",
  margin: "24px 0 12px 0",
  display: "flex",
  alignItems: "center",
  gap: 8,
};

const iconStyle: React.CSSProperties = {
  fontSize: "1.2rem",
};

const aboutTextStyle: React.CSSProperties = {
  color: "#334155",
  fontSize: "1rem",
  marginBottom: 16,
  lineHeight: 1.7,
  textAlign: "justify", // Add this line
  textJustify: "inter-word", // Add this for better spacing
};

const listStyle: React.CSSProperties = {
  color: "#334155",
  fontSize: "1rem",
  margin: "0 0 16px 24px",
  padding: 0,
  lineHeight: 1.7,
  textAlign: "justify", // Add this line
  textJustify: "inter-word", // Add this for better spacing
};

const sideCardStyle: React.CSSProperties = {
  background: "#fff",
  borderRadius: 12,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  padding: "20px",
  marginBottom: 24,
  border: "1px solid rgba(0, 0, 0, 0.05)",
};

const bookingCardStyle: React.CSSProperties = {
  ...sideCardStyle,
  background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
  border: "1px solid rgba(59, 130, 246, 0.2)",
};

const mobileBookingCardStyle: React.CSSProperties = {
  ...bookingCardStyle,
  padding: "16px",
};

const bookingCardTitleStyle: React.CSSProperties = {
  fontWeight: 700,
  fontSize: "1.2rem",
  color: "#1e40af",
  marginBottom: 16,
  paddingBottom: 12,
  borderBottom: "1px solid #e2e8f0",
};

const bookingSubtitleStyle: React.CSSProperties = {
  fontWeight: 600,
  fontSize: "1rem",
  color: "#334155",
  marginBottom: 16,
};

const slotsContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  marginBottom: 16,
};

const slotButtonStyle: React.CSSProperties = {
  background: "#fff",
  border: "1px solid #e2e8f0",
  borderRadius: 8,
  padding: "12px 16px",
  color: "#334155",
  fontWeight: 500,
  fontSize: "0.95rem",
  cursor: "pointer",
  textAlign: "center",
  transition: "all 0.2s ease",
};

const slotButtonHoverStyle: React.CSSProperties = {
  borderColor: "#2563eb",
  backgroundColor: "#eff6ff",
};

const bookingNoteStyle: React.CSSProperties = {
  color: "#64748b",
  fontSize: "0.9rem",
  display: "flex",
  alignItems: "center",
  gap: 6,
};

const bookingFormStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

const formGroupStyle: React.CSSProperties = {
  marginBottom: 16,
};

const formRowStyle: React.CSSProperties = {
  display: "flex",
  gap: 12,
  marginBottom: 16,
};

const formLabelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: 6,
  fontSize: "0.9rem",
  fontWeight: 500,
  color: "#475569",
};

const formInputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 8,
  border: "1px solid #cbd5e1",
  fontSize: "0.95rem",
  backgroundColor: "#fff",
  transition: "border 0.2s ease",
};

const selectedSlotStyle: React.CSSProperties = {
  padding: "12px",
  backgroundColor: "#eff6ff",
  borderRadius: 8,
  margin: "16px 0",
  color: "#1e40af",
  fontSize: "0.95rem",
};

const bookingActionsStyle: React.CSSProperties = {
  display: "flex",
  gap: 12,
  marginTop: 16,
};

const mobileBookingActionsStyle: React.CSSProperties = {
  ...bookingActionsStyle,
  flexDirection: "column",
  gap: 8,
};

const primaryButtonStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  padding: "12px 20px",
  fontWeight: 600,
  fontSize: "1rem",
  cursor: "pointer",
  flex: 1,
  transition: "all 0.2s ease",
};

const secondaryButtonStyle: React.CSSProperties = {
  background: "#fff",
  color: "#334155",
  border: "1px solid #cbd5e1",
  borderRadius: 8,
  padding: "12px 20px",
  fontWeight: 600,
  fontSize: "1rem",
  cursor: "pointer",
  flex: 1,
  transition: "all 0.2s ease",
};

const confirmationContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "20px 0",
};

const confirmationIconStyle: React.CSSProperties = {
  fontSize: "3rem",
  color: "#16a34a",
  marginBottom: 16,
};

const confirmationTitleStyle: React.CSSProperties = {
  fontWeight: 700,
  fontSize: "1.3rem",
  color: "#1e293b",
  marginBottom: 16,
};

const confirmationDetailsStyle: React.CSSProperties = {
  color: "#475569",
  fontSize: "0.95rem",
  lineHeight: 1.6,
  marginBottom: 24,
  width: "100%",
   textAlign: "justify", // Add this line
  textJustify: "inter-word", // Add this for better spacing
};

const sideCardTitleStyle: React.CSSProperties = {
  fontWeight: 700,
  fontSize: "1.1rem",
  color: "#1e40af",
  marginBottom: 12,
};

const sideListStyle: React.CSSProperties = {
  color: "#334155",
  fontSize: "0.95rem",
  margin: 0,
  paddingLeft: 18,
  lineHeight: 1.7,
   textAlign: "justify", // Add this line
  textJustify: "inter-word", // Add this for better spacing
};

const photosContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

const clinicPhotoStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: 8,
  objectFit: "cover",
  height: 120,
};

const bookingStepContainer: React.CSSProperties = {
  padding: "8px 0",
};