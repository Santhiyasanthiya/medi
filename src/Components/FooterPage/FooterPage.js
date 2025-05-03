// import React, { useState } from "react";
// import "./FooterPage.css";
// import { useNavigate } from "react-router-dom";

// import footerLogo from "../../Assets/HeaderImage/homelogo.png"

// const FooterPage = () => {
//   const navigate = useNavigate();


//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };
  
//   return (
//     <div>
//       <link
//         href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
//         rel="stylesheet"
//       />
//       <footer className="hero">
//         <div className="container flex">
//           <img
//             className="image-footer-logo"
//             src={footerLogo}
//             alt="Logo"
//           />

//           <div className="container__about">
//             <h3>Address</h3>
//             <p>#13-C, Mosque Street, </p>
//             <p>100 Feet Road, M.G. Nagar, </p>
//             <p>Chennai, Tamil Nadu 600032</p>
//             <p>India.</p>
//           </div>

//           {/* <div className="container__more">
        
//   <h3>Explore</h3>

//   <button onClick={() => scrollToSection("programme")}>Service</button>
//   <button onClick={() => scrollToSection("programme")}>Learning</button>
//   <button onClick={() => scrollToSection("whychoose")}>Why Alphaingen</button>
//   <button onClick={() => scrollToSection("endroll")}>Endroll</button>


//           </div> */}

//           <div className="container-pages flex">
//   <div className="container__recentpages">
//     <iframe
//       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0193196333145!2d80.21219837458129!3d13.010849987312422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d2cc8e9e6b%3A0x9585c3656a3ea3d2!2sAlphaingen%20Medical%20Coding%20and%20Billing%20Center!5e0!3m2!1sen!2sin!4v1713332451995!5m2!1sen!2sin"
//       width="100%"
//       height="250"
//       style={{ border: 0, borderRadius: "10px", marginTop: "10px" }}
//       allowFullScreen=""
//       loading="lazy"
//       referrerPolicy="no-referrer-when-downgrade"
//       title="Alphaingen Location"
//     ></iframe>

//     <div style={{ textAlign: "center", marginTop: "10px" }}>
//       <a
//         href="https://www.google.com/maps/dir/?api=1&destination=Alphaingen+Medical+Coding+and+Billing+Center,+13C,+Mosque+St,+Mahatma+Gandhi+Nagar,+Tharamani,+Chennai,+Tamil+Nadu+600113"
//         target="_blank"
//         rel="noopener noreferrer"
//         style={{
//           backgroundColor: "white",
//           padding: "10px 20px",
//           color: "red",
//           borderRadius: "5px",
//           textDecoration: "none",
//           fontWeight: "bold"
//         }}
//       >
//         Get Directions 🚗
//       </a>
//     </div>
//   </div>
// </div>


//         </div>

//         <div className="line__separete"></div>
//         <div className="by flex">
//           <p className="copyright">
//             Copyright © 2022 All Rights Reserved by Alphaingen
//           </p>
//           <hr />
//           <div className="icons">
//             <a
//               href="https://www.instagram.com/alphaingen_mcbc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
//               target="_blank"
//               className="icon1 icon--instagram"
//               rel="noreferrer"
//             >
//               <i className="ri-instagram-line"></i>
//             </a>
//             <a
//               href="https://www.linkedin.com/company/alphaingen-medical-coding-and-billing-center/"
//               target="_blank"
//               className="icon1 icon--linkedin"
//               rel="noreferrer"
//             >
//               <i className="ri-linkedin-line"></i>
//             </a>
//             <a
//               href="https://youtube.com/@alphaingenmcbc?si=71nkpiYYvzewII7S"
//               className="icon1 icon--youtube"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <i className="ri-youtube-line"></i>
//             </a>
//           </div>
//         </div>
//       </footer>

    
//     </div>
//   );
// };

// export default FooterPage;





import React from 'react';
import './FooterPage.css';
import footerLogo from "../../Assets/HeaderImage/homelogo.png";

const FooterPage = () => {
  return (
    <div className="alpha_footer-container">
      <div className="alpha_footer-topRow">
        {/* Logo and Description */}
        <div className="alpha_footer-logoBlock">
          <img src={footerLogo} alt="Alphaingen Logo" className="alpha_footer-logo" />
    </div>

        {/* Address and Map */}
        <div className="alpha_footer-addressMapBlock">
          <div className="alpha_footer-address mt-5">
            <h3>Address</h3>
            <div className="alpha_footer-line">#13-C, Mosque Street,</div>
            <div className="alpha_footer-line">100 Feet Road, M.G. Nagar,</div>
            <div className="alpha_footer-line">Chennai, Tamil Nadu 600032</div>
            <div className="alpha_footer-line">India.</div>
          </div>

          <div className="alpha_footer-mapContainer">
  <iframe
    title="Alphaingen Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.510742474964!2d80.24119907587826!3d12.979675914778717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dc4a4b64703%3A0x42b833e6c556b582!2sAlphaingen%20Medical%20Coding%20and%20Billing%20Center!5e0!3m2!1sen!2sin!4v1700000000000"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
  <a
    href="https://www.google.com/maps/dir/?api=1&destination=Alphaingen%20Medical%20Coding%20and%20Billing%20Center%2C%2013C%2C%20Mosque%20Street%2C%20Chennai%2C%20Tamil%20Nadu%20600113"
    target="_blank"
    rel="noopener noreferrer"
    className="direction-btn"
  >
    Get Directions 🚗
  </a>
</div>


        </div>
      </div>

      {/* Social Media Icons */}
      <div className="alpha_footer-iconsRow">
        <a
          href="https://www.instagram.com/alphaingen_mcbc"
          target="_blank"
          rel="noopener noreferrer"
          className="alpha_footer-icon instagram"
        ></a>
        <a
          href="https://www.linkedin.com/company/alphaingen-medical-coding-and-billing-center"
          target="_blank"
          rel="noopener noreferrer"
          className="alpha_footer-icon linkedin"
        ></a>
        <a
          href="https://youtube.com/@alphaingenmcbc"
          target="_blank"
          rel="noopener noreferrer"
          className="alpha_footer-icon youtube"
        ></a>
      </div>

      {/* Bottom Line and Copyright */}
      <hr className="alpha_footer-hr" />
      <div className="alpha_footer-bottom">All rights reserved © Alphaingen</div>
    </div>
  );
};

export default FooterPage;
