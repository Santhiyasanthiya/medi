import React from "react";
import "./HomePage.css";


const HomePage = () => {
  return (
    <div className="home-container">
      <video autoPlay muted loop className="homepage-background-video">
        <source src="https://cdn.pixabay.com/video/2024/06/17/217018_large.mp4" type="video/mp4" />
        {/* <source src="https://cdn.pixabay.com/video/2016/09/21/5456-183788693_medium.mp4" type="video/mp4" /> */}
        {/* <source src="https://cdn.pixabay.com/video/2024/10/03/234416_large.mp4" type="video/mp4" /> */}
       {/* <source src="https://res.cloudinary.com/dmv2tjzo7/video/upload/v1741581322/ayblbyiqped3tpuq1mqj.mp4"  type="video/mp4"/> */}
        Your browser does not support the video tag.
      </video>
      <div className="homepage-content">
   
       
        {/* <h3 className="homepage-head">Welcome to Our Miracle Info</h3> */}
        {/* <p className="homepage-para">Education is not learning the facts, but training the mind to think</p> */}

      </div>
      
    </div>
  );
};

export default HomePage;
