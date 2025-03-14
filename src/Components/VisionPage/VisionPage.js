import React from "react";
import "./VisionPage.css";

const VisionPage = () => {
  return (
    <section className="vision-section">
      <div className="container text-center">
        <h2 className="vision-title mt-5">Our Vision</h2>
        <p className="vision-text">
          At <strong>Miracle Info</strong>, we aim to revolutionize the healthcare industry by providing 
          accurate and reliable medical coding services. Our vision is to empower 
          healthcare providers with efficient coding solutions to enhance patient care 
          and streamline operations. we aim to revolutionize the healthcare industry by providing 
          accurate and reliable medical coding services. Our vision is to empower 
          healthcare providers with efficient coding solutions to enhance patient care 
          and streamline operations.
        </p>   <p className="vision-text">
          At <strong>Miracle Info</strong>, we aim to revolutionize the healthcare industry by providing 
          accurate and reliable medical coding services. Our vision is to empower 
          healthcare providers with efficient coding solutions to enhance patient care 
          and streamline operations.
        </p>
        
        <div className="vision-icons">
          <div className="icon-item">
            <img src="https://cdn.dribbble.com/users/2221077/screenshots/14110896/media/f6bd29562775b724409df2c851c5b49c.gif" alt="Accuracy" />
            <p>Accuracy</p>
          </div>
          <div className="icon-item">
            <img src="https://cdn.dribbble.com/users/4617613/screenshots/14162661/media/2c1687a8752cc5ede0520a4856213b48.gif" alt="Technology" />
            <p>Cutting-Edge Technology</p>
          </div>
          <div className="icon-item">
            <img src="https://cdn.dribbble.com/users/5920881/screenshots/14072541/dribbble.gif" alt="Trust" />
            <p>Trust & Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionPage;
