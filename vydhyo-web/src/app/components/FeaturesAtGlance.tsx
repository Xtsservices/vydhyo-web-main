// "use client";

// import React, { useRef, useEffect } from "react";

// const features = [
//     { icon: "🖥️", label: "Cross Browser" },
//     { icon: "🧑‍💻", label: "SASS Support" },
//     { icon: "📄", label: "Well Documentation" },
//     { icon: "🔄", label: "RTL Layout" },
//     { icon: "🅱️", label: "Bootstrap v5" },
//     { icon: "📱", label: "Fully Responsive" },
//     { icon: "⚙️", label: "Gulp Workflow" },
//     { icon: "🖥️", label: "Multiple Demos" },
//     { icon: "💻", label: "Pure Javascript" },
//     { icon: "🌗", label: "Dark & Light Layouts" },
//     { icon: "🛠️", label: "Easy Customization" },
//     { icon: "⏳", label: "Lifetime Free Updates" },
//     { icon: "✅", label: "Quality Code" },
//     { icon: "📝", label: "Premade Layouts" },
// ];

// const duplicateFeatures = [...features, ...features];

// const FeaturesAtGlance: React.FC = () => {
//     const topScrollRef = useRef<HTMLDivElement>(null);
//     const bottomScrollRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         let topAnimationFrame: number;
//         let bottomAnimationFrame: number;
//         let topScrollAmount = 0;
//         let bottomScrollAmount = 0;

//         const scrollTop = () => {
//             if (topScrollRef.current) {
//                 topScrollAmount += 1.2; // Move left
//                 if (topScrollAmount >= topScrollRef.current.scrollWidth / 2) {
//                     topScrollAmount = 0;
//                 }
//                 topScrollRef.current.scrollLeft = topScrollAmount;
//             }
//             topAnimationFrame = requestAnimationFrame(scrollTop);
//         };

//         const scrollBottom = () => {
//             if (bottomScrollRef.current) {
//                 bottomScrollAmount -= 1.2; // Move right
//                 if (bottomScrollAmount <= 0) {
//                     bottomScrollAmount = bottomScrollRef.current.scrollWidth / 2;
//                 }
//                 bottomScrollRef.current.scrollLeft = bottomScrollAmount;
//             }
//             bottomAnimationFrame = requestAnimationFrame(scrollBottom);
//         };

//         topAnimationFrame = requestAnimationFrame(scrollTop);
//         bottomAnimationFrame = requestAnimationFrame(scrollBottom);

//         return () => {
//             cancelAnimationFrame(topAnimationFrame);
//             cancelAnimationFrame(bottomAnimationFrame);
//         };
//     }, []);

//     return (
//         <div
//             style={{
//                 background: "#011024",
//                 padding: "60px 0 40px 0",
//                 width: "100vw",
//                 overflow: "hidden",
//                 position: "relative",
//             }}
//         >
//             <div
//                 style={{
//                     textAlign: "center",
//                     marginBottom: 24,
//                 }}
//             >
//                 <div
//                     style={{
//                         display: "inline-block",
//                         background: "#fff",
//                         color: "#011024",
//                         borderRadius: 24,
//                         padding: "6px 24px",
//                         fontWeight: 600,
//                         fontSize: 16,
//                         marginBottom: 8,
//                         boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
//                     }}
//                 >
//                     <span role="img" aria-label="features" style={{ marginRight: 8 }}>
//                         🟣
//                     </span>
//                     Features
//                 </div>
//                 <h2
//                     style={{
//                         color: "#fff",
//                         fontWeight: 700,
//                         fontSize: 24,
//                         margin: 0,
//                         letterSpacing: 0.5,
//                     }}
//                 >
//                     Features at a Glance
//                 </h2>
//             </div>

//             {/* Top Scroller (moving left) */}
//             <div
//                 ref={topScrollRef}
//                 style={{
//                     width: "100vw",
//                     overflow: "hidden",
//                     whiteSpace: "nowrap",
//                     position: "relative",
//                     padding: "0 0 20px 0",
//                 }}
//             >
//                 <div
//                     style={{
//                         display: "inline-block",
//                         whiteSpace: "nowrap",
//                         minWidth: "200%",
//                     }}
//                 >
//                     {duplicateFeatures.map((feature, idx) => (
//                         <span
//                             key={`top-${idx}`}
//                             style={{
//                                 display: "inline-flex",
//                                 alignItems: "center",
//                                 background: "#fff",
//                                 color: "#011024",
//                                 borderRadius: 24,
//                                 padding: "10px 28px",
//                                 margin: "12px 12px 0 0",
//                                 fontWeight: 500,
//                                 fontSize: 16,
//                                 boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
//                                 fontFamily: "Inter,Segoe UI,Arial,sans-serif",
//                                 verticalAlign: "top",
//                                 gap: 8,
//                             }}
//                         >
//                             <span style={{ fontSize: 22, marginRight: 10 }}>
//                                 {feature.icon}
//                             </span>
//                             {feature.label}
//                         </span>
//                     ))}
//                 </div>
//             </div>

//             {/* Bottom Scroller (moving right) */}
//             <div
//                 ref={bottomScrollRef}
//                 style={{
//                     width: "100vw",
//                     overflow: "hidden",
//                     whiteSpace: "nowrap",
//                     position: "relative",
//                     padding: "20px 0 0 0",
//                 }}
//             >
//                 <div
//                     style={{
//                         display: "inline-block",
//                         whiteSpace: "nowrap",
//                         minWidth: "200%",
//                     }}
//                 >
//                     {duplicateFeatures.map((feature, idx) => (
//                         <span
//                             key={`bottom-${idx}`}
//                             style={{
//                                 display: "inline-flex",
//                                 alignItems: "center",
//                                 background: "#fff",
//                                 color: "#011024",
//                                 borderRadius: 24,
//                                 padding: "10px 28px",
//                                 margin: "12px 12px 0 0",
//                                 fontWeight: 500,
//                                 fontSize: 16,
//                                 boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
//                                 fontFamily: "Inter,Segoe UI,Arial,sans-serif",
//                                 verticalAlign: "top",
//                                 gap: 8,
//                             }}
//                         >
//                             <span style={{ fontSize: 22, marginRight: 10 }}>
//                                 {feature.icon}
//                             </span>
//                             {feature.label}
//                         </span>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FeaturesAtGlance;