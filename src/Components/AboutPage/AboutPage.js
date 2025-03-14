import React from "react";
import "./AboutPage.css";


const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="title">Empowering Future Medical Coders</h2>
        <p className="description">
          At <strong>Miracle Info</strong>, we are dedicated to shaping the future of medical coding professionals. Our expert-led courses provide hands-on training, real-world case studies, and certification guidance to help you thrive in the ever-growing healthcare industry.
        </p>
        <p className="description">
          With our structured programs, you will master ICD-10, CPT, and HCPCS coding, ensuring accuracy in medical documentation and compliance with healthcare regulations. Join us to build a promising career in health information management!
        </p>
      </div>
      <div className="about-image">
        <img src="https://www.ituonline.com/wp-content/uploads/2023/10/Learn-How-to-Do-Medical-Coding.jpg" alt="Medical Coding" className="rounded-image" />
      </div>
    </div>
  );
};

export default AboutPage;
