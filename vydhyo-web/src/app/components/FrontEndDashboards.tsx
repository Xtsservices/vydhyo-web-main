'use client';
import React, { useState } from 'react';
import Image from 'next/image';

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
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Personal health overview and insights'
  },
  { 
    title: 'My Appointments', 
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'View and manage your appointments'
  },
  { 
    title: 'E-Prescriptions', 
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Access your digital prescriptions'
  },
  { 
    title: 'Health Records', 
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'View and download your health records'
  }
];

const FrontEndDashboards: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Doctors' | 'Patients'>('Doctors');
  const [isFlipping, setIsFlipping] = useState(false);
  const currentPages = activeTab === 'Doctors' ? doctorPages : patientPages;

  const handleTabChange = (tab: 'Doctors' | 'Patients') => {
    if (tab !== activeTab) {
      setIsFlipping(true);
      setTimeout(() => {
        setActiveTab(tab);
        setIsFlipping(false);
      }, 300); // Match this duration with the CSS transition duration
    }
  };

  return (
    <div className="admin-core-section">
      <h1 className="admin-core-title">
        Awesome Structured Admin Core Pages
      </h1>
      <div className="admin-core-tabs">
        <button
          className={`admin-core-tab${activeTab === 'Doctors' ? ' active' : ''}`}
          onClick={() => handleTabChange('Doctors')}
        >
          <span className="tab-icon">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
              <path d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" stroke="currentColor" strokeWidth="2" />
            </svg>
          </span>
          Doctors
        </button>
        <button
          className={`admin-core-tab${activeTab === 'Patients' ? ' active' : ''}`}
          onClick={() => handleTabChange('Patients')}
        >
          <span className="tab-icon">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
              <path d="M6 21v-2a6 6 0 0112 0v2" stroke="currentColor" strokeWidth="2" />
            </svg>
          </span>
          Patients
        </button>
      </div>
      <div className={`admin-core-cards ${isFlipping ? 'flipping' : ''}`}>
        {currentPages.map((page, idx) => (
          <div className="admin-core-card" key={idx}>
            <div className="admin-core-card-inner">
              <div className="admin-core-card-front">
                <div className="admin-core-card-img">
                  <Image
                    src={page.img}
                    alt={page.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="admin-core-card-content">
                  <div className="admin-core-card-title">{page.title}</div>
                  <div className="admin-core-card-description">{page.description}</div>
                </div>
              </div>
              <div className="admin-core-card-back">
                <div className="admin-core-card-back-content">
                  <div className="admin-core-card-back-title">{page.title}</div>
                  <div className="admin-core-card-back-description">{page.description}</div>
                  <button className="admin-core-card-button">Explore</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="admin-core-cta">
        View Clinic Admin Pages
        <span>
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <style jsx>{`
        .admin-core-section {
          background: #fff;
          min-height: 100vh;
          padding: 3rem 2rem 2rem;
          text-align: center;
        }
        .admin-core-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 2.5rem;
        }
        .admin-core-tabs {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }
        .admin-core-tab {
          background: #fff;
          border: 3px solid #e0e7ef;
          color: #1e293b;
          border-radius: 1.25rem;
          font-size: 1.25rem;
          font-weight: 600;
          padding: 1.5rem 3rem;
          box-shadow: 0 2px 8px rgba(30, 41, 59, 0.06);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .admin-core-tab.active {
          background: #3b82f6;
          color: #fff;
          border-color: #3b82f6;
          box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
        }
        .tab-icon {
          display: flex;
          align-items: center;
        }
        .admin-core-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin: 0 auto 2.5rem;
          max-width: 1400px;
          perspective: 1000px;
        }
        .admin-core-cards.flipping .admin-core-card-inner {
          transform: rotateY(180deg);
        }
        .admin-core-card {
          background: transparent;
          perspective: 1000px;
          height: 380px;
        }
        .admin-core-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          box-shadow: 0 8px 32px rgba(30, 41, 59, 0.08);
          border-radius: 1.5rem;
        }
        .admin-core-card-front,
        .admin-core-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1.5rem;
          overflow: hidden;
        }
        .admin-core-card-front {
          background: #fff;
          display: flex;
          flex-direction: column;
        }
        .admin-core-card-back {
          background: #3b82f6;
          color: white;
          transform: rotateY(180deg);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .admin-core-card-img {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
          background: #f1f5f9;
        }
        .admin-core-card-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .admin-core-card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }
        .admin-core-card-description {
          font-size: 1rem;
          color: #64748b;
        }
        .admin-core-card-back-content {
          padding: 2rem;
          text-align: center;
        }
        .admin-core-card-back-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .admin-core-card-back-description {
          font-size: 1rem;
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }
        .admin-core-card-button {
          background: white;
          color: #3b82f6;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .admin-core-card-button:hover {
          background: #f8fafc;
          transform: translateY(-2px);
        }
        .admin-core-cta {
          background: #2563eb;
          color: #fff;
          font-weight: 600;
          padding: 1.25rem 2.5rem;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.15rem;
          border: none;
          margin-top: 1.5rem;
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.13);
          cursor: pointer;
          transition: background 0.2s;
        }
        .admin-core-cta:hover {
          background: #1d4ed8;
        }
        @media (max-width: 1200px) {
          .admin-core-cards {
            grid-template-columns: repeat(2, 1fr);
            max-width: 800px;
          }
        }
        @media (max-width: 768px) {
          .admin-core-cards {
            grid-template-columns: 1fr;
            max-width: 400px;
          }
          .admin-core-title {
            font-size: 2rem;
          }
          .admin-core-tabs {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
          .admin-core-tab {
            width: 100%;
            max-width: 300px;
            padding: 1rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default FrontEndDashboards;