import React, { useState } from 'react';
import "./Learning.css";

const Learning = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(!showPopup); // toggle on/off
  };

  return (
    <div>
      <div className="Services_container">
        <h1 className="Our_Services_heading">Certified Medical Coding & Billing Courses</h1>

        <div className="Our_Services_para">
          <p>Certified Professional Coder (CPC) Course</p>
          <p>Certified Coding Specialist (CCS) Course</p>
          <p>Certified Risk Adjustment Coder (CRC) Course</p>
          <p>Advanced Medical Billing & AR Management</p>
          <p>Specialty Coding Programs (Cardiology, Radiology, Surgery, etc.)</p>

          <button className="learning-button" onClick={handleClick}>Features of Our Training</button>

          {/* Popup appears BELOW course list — content stays visible */}
          {showPopup && (
            <div className="popup-box" style={{
              marginTop: '15px',
              padding: '15px',
              backgroundColor: '#f0f8ff',
              border: '1px solid #ccc',
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(0,0,0,0.2)',
              color: '#333', 
              textAlign:"center"
            }}>
              <p> Industry-oriented syllabus 
                <br/>
              Practical coding projects and case studies
              <br/>
              Mock exams and interview preparation
              <br/>
              Placement assistance and career guidance
              <br/>
              Flexible online & offline batches
              </p>
      
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Learning;
