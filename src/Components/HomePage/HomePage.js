import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">

      <video autoPlay muted loop className="homepage-background-video">
        <source
          src="https://res.cloudinary.com/dmv2tjzo7/video/upload/v1743407924/nausaozyf9w4qe754nfd.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

   
      <div className="logo-container">
        <img
          className="headerPage-image"
          src="https://res.cloudinary.com/dmv2tjzo7/image/upload/v1743407439/sptg6uejtdbcc1ty5aog.png"
          alt="Header Logo"
        />
      </div>
    </div>
  );
};

export default HomePage;
