import React from 'react';
import "./PowerPractice.css";
import { Fade } from 'react-awesome-reveal';

const PowerPractice = () => {
  return (
    <div className="powerPractice_section">
      <div className="row">
        {/* Left Image Section */}
        <div className="col-lg-6 col-md-12 image_section">
        <Fade direction='left' duration={1400}>
        <img 
            src="https://unity-connect.com/wp-content/uploads/2022/04/pros-and-cons-of-medical-billing-and-coding-Featured-image.jpg" 
            alt="Medical Billing & Coding" 
            className="practice_image"
          />
        </Fade>
        </div>

        {/* Right Text Section */}
        <div className="col-lg-6 col-md-12 text_section">
       <Fade direction='up' duration={1800}>
       <div className="PowerPractice">
            <p className="powerPractice_content">
              We Power Practices We Train Professionals
              <br />
              Alphaingen is a leading medical coding and billing center, as well as a trusted training institution preparing the next generation of certified professionals. Whether you're a healthcare provider seeking accurate billing services or a student pursuing a career in healthcare revenue cycle management, Alphaingen has you covered.
            </p>
        
          </div>
       </Fade>
        </div>
      </div>
    </div>
  );
};

export default PowerPractice;
