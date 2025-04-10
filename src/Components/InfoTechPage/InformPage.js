import React from 'react';
import './InformPage.css';


const InformPage = () => {
  return (
    <div className="inform-container">
      <div className="inform-image-container">
        <img src="https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg?semt=ais_hybrid" alt="Informative" className="inform-image" />
      </div>
      <div className="inform-text-container">
        <h1>For Student</h1>
        <p> Reduced claim denials mean students can focus more on learning and less on financial worries.</p>
      <p>Career-focused programs help students gain the skills they need to succeed in today’s job market.</p>
      <p>We provide international certification guidance to help students achieve global career opportunities.</p>
      <p>Hands-on training with real claims prepares students for real-world healthcare scenarios</p>
    <p>Gain valuable industry experience through internship opportunities within Alphaingen.</p>
    <p>Placement support in billing companies, and healthcare organizations</p>
    
      </div>
    </div>
  );
};

export default InformPage;
