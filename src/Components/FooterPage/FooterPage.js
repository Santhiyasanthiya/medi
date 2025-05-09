
// import React from 'react';
// import './FooterPage.css';
// import footerLogo from "../../Assets/HeaderImage/homelogo.png";

// const FooterPage = () => {
//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="alpha_footer-container">
//       <div className="alpha_footer-topRow">

    
//         <div className="alpha_footer-logoBlock">
//           <img src="https://res.cloudinary.com/dmv2tjzo7/image/upload/v1746264888/dsi64irjwtabuwhbnand.png" alt="Alphaingen Logo" className="alpha_footer-logo" />
        
//           <div className="alpha_footer-address mt-5">
//             <h3>Address</h3>
//             <div className="alpha_footer-line">  13C, Mosque street, Mahatma ghandhi nagar, </div>
//             <div className="alpha_footer-line">    Tharamani, Chennai 600113</div>
           
      
//           </div>

//         </div>

 
//         <div className="alpha_footer-addressMapBlock">
    
       
       
//           <div className="container__more">
//             <h3>Explore</h3>
            
//             <div className="container__more_buttons">
//             <button onClick={() => scrollToSection("programme")}>Service</button>
//             <button onClick={() => scrollToSection("programme")}>Learning</button>
//             <button onClick={() => scrollToSection("whychoose")}>Why Alphaingen</button>
//             <button onClick={() => scrollToSection("endroll")}>Endroll</button>
//             </div>
//           </div>



//           <div className="alpha_footer-mapContainer">
//             <iframe
//               title="Alphaingen Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.510742474964!2d80.24119907587826!3d12.979675914778717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dc4a4b64703%3A0x42b833e6c556b582!2sAlphaingen%20Medical%20Coding%20and%20Billing%20Center!5e0!3m2!1sen!2sin!4v1700000000000"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//             <a
//               href="https://www.google.com/maps/dir/?api=1&destination=Alphaingen%20Medical%20Coding%20and%20Billing%20Center%2C%2013C%2C%20Mosque%20Street%2C%20Chennai%2C%20Tamil%20Nadu%20600113"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="direction-btn"
//             >
//               Get Directions 🚗
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="alpha_footer-iconsRow">
//         <a href="https://www.instagram.com/alphaingen_mcbc" target="_blank" rel="noopener noreferrer" className="alpha_footer-icon instagram"></a>
//         <a href="https://www.linkedin.com/company/alphaingen-medical-coding-and-billing-center" target="_blank" rel="noopener noreferrer" className="alpha_footer-icon linkedin"></a>
//         <a href="https://youtube.com/@alphaingenmcbc" target="_blank" rel="noopener noreferrer" className="alpha_footer-icon youtube"></a>
//       </div>

//       {/* Footer Bottom */}
//       <hr className="alpha_footer-hr" />
//       <div className="alpha_footer-bottom">All rights reserved © Alphaingen 2025</div>
//     </div>
//   );
// };

// export default FooterPage;


import React from 'react';
import './FooterPage.css'; // Custom styles

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white text-center text-lg-start">
      <div className="footer-overlay">
        <div className="container">
          <div className="row">
            {/* About Section */}
            <div className="col-lg-3 col-md-6 mb-4">
              <img
                src="https://res.cloudinary.com/dmv2tjzo7/image/upload/v1746264888/dsi64irjwtabuwhbnand.png"
                className="footerImage"
                alt="Logo"
              />
              <p>
              Alphaingen is a leading medical coding and billing training institution and RCM services provider.
              </p>
<hr/>
              {/* Social Icons */}
              <div className="social-icons mt-3">
                <a
                  href="https://youtube.com/@alphaingenmcbc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="youtube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="https://www.instagram.com/alphaingen_mcbc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/alphaingen-medical-coding-and-billing-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-6 mb-4 ">
              <h5 className="text-uppercase_quik">Quick Links</h5>
              <div className="quick-links ">
                <button onClick={() => scrollToSection("programme")}>
                  Service
                </button>
                <button onClick={() => scrollToSection("programme")}>
                  Learning
                </button>
                <button onClick={() => scrollToSection("whychoose")}>
                  Why Alphaingen
                </button>
                <button onClick={() => scrollToSection("endroll")}>
                  Enroll
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-12 mb-4">
              <h5 className="text-uppercase">Contact</h5>
              <p>Email:info@alphaingen.com</p>
              <p>Phone: +91 94453 52946</p>
              <p>
                13C, Mosque Street,
                <br />
                M.G. Nagar, Tharamani,
                <br />
                Chennai, Tamil Nadu 600113
              </p>
            </div>

            {/* Location Map */}
            <div className="col-lg-3 col-md-12 mb-4">
              <h5 className="text-uppercase text-center">Location</h5>
              <div className="map-responsive">
                <iframe
                  title="Alphaingen Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456789!2d80.2406374!3d12.981489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b8f1a1e1e1%3A0x48188024511c3b88!2sAlphaingen%20Medical%20Coding%20and%20Billing%20Center!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  frameBorder="0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center copyright">
        &copy; {new Date().getFullYear()} Alphaingen. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
