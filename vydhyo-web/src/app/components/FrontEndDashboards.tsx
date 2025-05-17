'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FrontEndDashboards: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Doctors' | 'Patients'>('Doctors');

  const doctorPages = [
    { 
      title: 'Doctor Dashboard', 
      img: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive overview of your practice'
    },
    { 
      title: 'Patient Management', 
      img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Manage all patient records and history'
    },
    { 
      title: 'E-Prescriptions', 
      img: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Digital prescription management system'
    },
    { 
      title: 'Appointment Scheduler', 
      img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Manage your availability and bookings'
    }
  ];

  const patientPages = [
    { 
      title: 'Patient Dashboard', 
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Your health overview in one place'
    },
    { 
      title: 'Medical Records', 
      img: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Access your complete medical history'
    },
    { 
      title: 'Book Appointment', 
      img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Schedule visits with your doctors'
    },
    { 
      title: 'Telemedicine', 
      img: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a7d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Virtual consultations from home'
    }
  ];

  const currentPages = activeTab === 'Doctors' ? doctorPages : patientPages;

  return (
    <div className="dashboard-section">
      {/* Badge with animation */}
      <motion.div 
        className="badge"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      > 
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="#3b82f6" strokeWidth="2" />
          <path d="M3 10h18" stroke="#3b82f6" strokeWidth="2" />
        </svg>
        <span>Vydhyo Healthcare Dashboards</span>
      </motion.div>

      {/* Animated Heading */}
      <motion.h1 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Transform Your <strong>Medical Practice</strong> with Vydhyo
      </motion.h1>

      {/* Animated Tabs */}
      <motion.div 
        className="tabs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {['Doctors', 'Patients'].map((tab) => (
          <motion.button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab as 'Doctors' | 'Patients')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab === 'Doctors' ? (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                <path d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" stroke="currentColor" strokeWidth="2" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                <path d="M6 21v-2a6 6 0 0112 0v2" stroke="currentColor" strokeWidth="2" />
              </svg>
            )}
            <span>{tab}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Animated Cards */}
      <div className="cards">
        {currentPages.map((page, idx) => (
          <motion.div 
            key={idx}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="image-container">
              <Image
                src={page.img}
                alt={page.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3>{page.title}</h3>
            <p>{page.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Animated Button */}
      <motion.button 
        className="cta-button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore All Vydhyo Features
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>

      {/* Custom CSS */}
      <style jsx>{`
        .dashboard-section {
          background: linear-gradient(to right, #f0f9ff, #e0f2fe);
          min-height: 100vh;
          padding: 4rem 1rem;
          text-align: center;
          overflow-x: hidden;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: white;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          border: 1px solid #bfdbfe;
          color: #3b82f6;
          font-weight: 600;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          font-size: 1rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e40af;
          margin: 2rem 0 1.5rem;
          line-height: 1.3;
        }

        .section-title strong {
          background: linear-gradient(90deg, #3b82f6, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .tabs {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .tab {
          background: white;
          padding: 1.25rem 2.5rem;
          border-radius: 1rem;
          font-weight: 600;
          border: 2px solid #e0f2fe;
          color: #1e40af;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s ease;
          font-size: 1.1rem;
          cursor: pointer;
        }

        .tab.active {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2);
        }

        .cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          margin: 2rem auto;
          max-width: 1200px;
        }

        .card {
          background: white;
          border-radius: 1.5rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          padding: 1.5rem;
          width: 280px;
          transition: all 0.3s ease;
          text-align: left;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 180px;
          border-radius: 1rem;
          overflow: hidden;
          margin-bottom: 1.5rem;
          background: #f8fafc;
        }

        .card h3 {
          font-weight: 700;
          font-size: 1.25rem;
          color: #1e40af;
          margin-bottom: 0.5rem;
        }

        .card p {
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .cta-button {
          background: linear-gradient(to right, #3b82f6, #10b981);
          color: white;
          font-weight: 600;
          padding: 1rem 2.5rem;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 3rem;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.2);
          border: none;
          font-size: 1.1rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default FrontEndDashboards;