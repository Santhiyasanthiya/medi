import React from "react";
import "./HomePage.css";
import homelogo from "../../Assets/HeaderImage/homelogo.png"

const HomePage = () => {
  return (
    <div className="home-container">

      <video autoPlay muted loop className="homepage-background-video">
        <source
          src="https://res.cloudinary.com/dmv2tjzo7/video/upload/v1746262538/duvwbi5h5dvlwkylzby6.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

   
     
    </div>
  );
};

export default HomePage;
