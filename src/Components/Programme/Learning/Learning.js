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
          <p>Advanced Medical Coding and Training</p>
          <p>Specialty Coding Programs (Cardiology, Radiology, Surgery, etc.)</p>

         
          
        </div>
      </div>
    </div>
  );
};

export default Learning;
