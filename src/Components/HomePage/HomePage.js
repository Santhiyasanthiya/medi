import React from "react";
import "./HomePage.css";
import homevideo from "../../Assets/HomeVideo/homevideo.mp4";

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Background Video */}
      <video autoPlay muted loop className="homepage-background-video">
        <source src={homevideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HomePage;
