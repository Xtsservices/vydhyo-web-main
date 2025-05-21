import React from "react";
import { m as motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const stories = [
  {
    name: "Priya Sharma",
    image: "/images/patient1.jpg",
    text: `"VYDY0 helped me find a cardiologist for my father at midnight when he experienced chest pain. The ambulance arrived in minutes, potentially saving his life."`,
  },
  {
    name: "Rajesh Patel",
    image: "/images/patient2.jpg",
    text: `"As someone with mobility issues, the home healthcare service has been a blessing. My physiotherapist comes to me regularly, improving my quality of life tremendously."`,
  },
  {
    name: "Anita Reddy",
    image: "/images/patient3.jpg",
    text: `"When my son developed a high fever, I booked a pediatrician instantly through VYDY0. No waiting room, no delay – the doctor saw us within hours."`,
  },
];

export default function CustomerStories() {
  // If motion is still undefined, create a fallback div
  const MotionDiv = motion.div || (({ children, ...props }: { children?: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>);

  return (
    <section style={{ background: "#d6c9bb", padding: "40px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        {/* Header */}
        <MotionDiv 
          initial="hidden"
          animate="show"
          variants={itemVariants} 
          style={{ marginBottom: "3rem" }}
        >
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "120px",
            margin: "0 auto 1.5rem auto"
          }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "rgba(162, 28, 245, 0.07)",
              borderRadius: "2rem",
              padding: "0.5rem 1.5rem",
              border: "1.5px solid #e0e7ef",
              boxShadow: "0 2px 8px rgba(162, 28, 245, 0.09)",
              position: "relative",
              zIndex: 1
            }}>
              <span style={{
                position: "absolute",
                top: "-5px",
                left: "-5px",
                right: "-5px",
                bottom: "-5px",
                borderRadius: "2.5rem",
                padding: 0,
                zIndex: 0,
                pointerEvents: "none",
                background: "linear-gradient(90deg, #a21cf5 0%, #6366f1 100%)",
                opacity: 0.18,
                border: "none",
                boxShadow: "none"
              }} />
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{display: "block", zIndex: 1}} xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_2)">
                  <path d="M14 4L23 20H5L14 4Z" fill="#A21CF5"/>
                  <path d="M14 4L23 20H5L14 4Z" fill="url(#paint0_linear_1_2)" fillOpacity="0.5"/>
                  <path d="M14 4L23 20H5L14 4Z" stroke="#A21CF5" strokeWidth="1.5" strokeLinejoin="round"/>
                </g>
                <defs>
                  <filter id="filter0_d_1_2" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.635294 0 0 0 0 0.109804 0 0 0 0 0.960784 0 0 0 0.15 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2" result="shape"/>
                  </filter>
                  <linearGradient id="paint0_linear_1_2" x1="14" y1="4" x2="14" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A21CF5"/>
                    <stop offset="1" stopColor="#6366F1"/>
                  </linearGradient>
                </defs>
              </svg>
              <span style={{
                fontSize: "1.15rem",
                fontWeight: 500,
                color: "white",
                letterSpacing: "0.01em",
                zIndex: 1
              }}>
                Patient Stories
              </span>
            </div>
          </div>
          <p style={{
            fontSize: "1.1rem",
            color: "white",
            maxWidth: "700px",
            margin: "0 auto",
            textAlign: "center",
            lineHeight: 1.6
          }}>
            VYDYO is revolutionizing healthcare access through technology that connects patients with the right care at the right time.
          </p>
        </MotionDiv>

        <div style={{
          display: "flex",
          gap: 32,
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}>
          {stories.map((story, index) => (
            <MotionDiv
              key={story.name}
              initial="hidden"
              animate="show"
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
              style={{
                background: "transparent",
                flex: "1 1 300px",
                minWidth: 300,
                maxWidth: 370,
                marginBottom: 32,
              }}
            >
              <img
                src={story.image}
                alt={story.name}
                style={{
                  width: "100%",
                  height: 220,
                  objectFit: "cover",
                  borderRadius: 4,
                  marginBottom: 20,
                }}
              />
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#3a2d1a",
                marginBottom: 12,
                fontFamily: "serif",
              }}>
                {story.name}
              </h3>
              <p style={{
                fontSize: "1.1rem",
                color: "#3a2d1a",
                lineHeight: 1.7,
                fontFamily: "serif",
              }}>
                {story.text}
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}