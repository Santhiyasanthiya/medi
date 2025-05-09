import React from 'react';
import './PowerPractice.css';
import { Fade } from 'react-awesome-reveal';

const PowerPractice = () => {
  return (
    <div className="power_wrapper">
      <div className="power_container">
   <div className='row'>
      
 <div className='col-md-6 mt-5'>

          <Fade direction="left" duration={1200}>
            <img
              src="https://img.freepik.com/free-photo/medical-banner-with-doctor-working-laptop_23-2149611211.jpg?semt=ais_hybrid&w=740"
              alt="Medical Billing & Coding"
              className="power_image"
            />
          </Fade>
     
 </div>

 <div className='col-md-6'>
  
 <div className="power_right">
          <Fade direction="up" duration={1400}>
            <div className="power_text_box">
              <p className="power_text">
                <strong>We Power Practices. We Train Professionals.</strong>
                <br /><br />
                Alphaingen is a leading medical coding and billing center, as well as a trusted training institution preparing the next generation of certified professionals. Whether you're a healthcare provider seeking accurate billing services or a student pursuing a career in healthcare revenue cycle management, Alphaingen has you covered.
              </p>
            </div>
          </Fade>
        </div>
 </div>
   </div>
      </div>
    </div>
  );
};

export default PowerPractice;
