import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Learning from "./Learning/Learning"; // Import Learning component
import Service from "./Service/Service"; // Import Service component
import "./Programme.css";



const Programme = () => {
  const [showPopup, setShowPopup] = useState(null); // Track which popup is open

  return (
    <div className="programme-container">
      <Fade direction="down" duration={1500}>
        <h1 className="programme-page-main-heading">
          Elevate Your Potential with Expert Learning & Services
        </h1>
      </Fade>

      <div className="programme-container-page">
        <div className="row">
          <div className="col-lg-6">
            <Fade direction="left" triggerOnce duration={1800}>
              <div className="programme-page-column">
                <h2 className="programme-page-main-heading">Learning</h2>
                <p className="programme-page-para">
                  Explore a variety of courses designed to enhance your knowledge and skills.
                  From beginner to advanced levels, we have something for everyone!
                </p>
                <button className="learning-button" onClick={() => setShowPopup("learning")}>
                  View Courses
                </button>
              </div>
            </Fade>
          </div>
          <div className="col-lg-6">
            <Fade direction="right" triggerOnce duration={1800}>
              <div className="programme-page-column-second">
                <h2 className="programme-page-main-heading">Services</h2>
                <p className="programme-page-para">
                  Discover our premium services, expertly designed to cater to your needs. We provide professional solutions across various domains.
                </p>
                <button className="service-button" onClick={() => setShowPopup("service")}>
                  View Services
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowPopup(null)}>×</button>
            {showPopup === "learning" && <Learning />}
            {showPopup === "service" && <Service />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Programme;
