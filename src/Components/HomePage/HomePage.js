import React, { useState, useEffect } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Welcome to Our Website 🩺",
    "Discover Amazing Content 🩺",
    "Enjoy Your Experience 🩺"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <video autoPlay muted loop className="homepage-background-video">
        <source
          src="https://res.cloudinary.com/dmv2tjzo7/video/upload/v1743407924/nausaozyf9w4qe754nfd.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="homepage-text">{texts[textIndex]}</div>
    </div>
  );
};

export default HomePage;
