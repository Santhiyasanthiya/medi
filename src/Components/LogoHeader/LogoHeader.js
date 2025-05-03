import React from 'react';
import "./LogoHeader.css";

const LogoHeader = () => {
  return (
    <div className="container-fluid logo_header-container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-sm-10 col-md-6 col-lg-4 text-center logo_header-wrapper">
          <img
            className="img-fluid logo_header-image"
            src="https://res.cloudinary.com/dmv2tjzo7/image/upload/v1746264888/dsi64irjwtabuwhbnand.png"
            alt="Header Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoHeader;
