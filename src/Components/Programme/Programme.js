import React from "react";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import "./Programme.css";

const Programme = () => {
  const navigate = useNavigate();

  return (
    <div className="programme-container">

      <h1 className="programme-page-main-heading"> Elevate Your Potential with Expert Learning & Services </h1>
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
                <button className="learning-button" onClick={() => navigate("/courses")}>
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
                <button className="service-button" onClick={() => navigate("/services")}>
                  View Services
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programme;
