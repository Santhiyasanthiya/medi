import React from "react";
import "./HomePage.css";
import homelogo from "../../Assets/HeaderImage/homelogo.png"

const HomePage = () => {
  return (
    <div className="home-container">

      <video autoPlay muted loop className="homepage-background-video">
        <source
          src="https://res.cloudinary.com/dmv2tjzo7/video/upload/v1745318009/ic4xcghgj3tolaskcvh9.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

   
      <div className="logo-container">
        <img
          className="headerPage-image"
          src={homelogo}
          alt="Header Logo"
        />
      </div>
    </div>
  );
};

export default HomePage;
