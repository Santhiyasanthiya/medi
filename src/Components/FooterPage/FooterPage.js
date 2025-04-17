import React, { useState } from "react";
import "./FooterPage.css";
import { useNavigate } from "react-router-dom";
import ContactPage from "../Contactpage/ContactPage";
import footerLogo from "../../Assets/HeaderImage/homelogo.png"

const FooterPage = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleOpen = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <footer className="hero">
        <div className="container flex">
          <img
            className="image-footer-logo"
            src={footerLogo}
            alt="Logo"
          />

          <div className="container__about">
            <h3>Address</h3>
            <p>#13-C, Mosque Street, </p>
            <p>100 Feet Road, M.G. Nagar, </p>
            <p>Chennai, Tamil Nadu 600032</p>
            <p>India.</p>
          </div>

          <div className="container__more">
            <h2 className="container__moreheading">Contact Alphaingen</h2>
            <button
              className="container__moreheading_button"
              onClick={handleOpen}
            >
              Get In Touch
            </button>
          </div>

          <div className="container-pages flex">
  <div className="container__recentpages">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0193196333145!2d80.21219837458129!3d13.010849987312422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d2cc8e9e6b%3A0x9585c3656a3ea3d2!2sAlphaingen%20Medical%20Coding%20and%20Billing%20Center!5e0!3m2!1sen!2sin!4v1713332451995!5m2!1sen!2sin"
      width="100%"
      height="250"
      style={{ border: 0, borderRadius: "10px", marginTop: "10px" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Alphaingen Location"
    ></iframe>

    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=Alphaingen+Medical+Coding+and+Billing+Center,+13C,+Mosque+St,+Mahatma+Gandhi+Nagar,+Tharamani,+Chennai,+Tamil+Nadu+600113"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "white",
          padding: "10px 20px",
          color: "red",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        Get Directions 🚗
      </a>
    </div>
  </div>
</div>


        </div>

        <div className="line__separete"></div>
        <div className="by flex">
          <p className="copyright">
            Copyright © 2022 All Rights Reserved by Alphaingen
          </p>
          <hr />
          <div className="icons">
            <a
              href="https://www.instagram.com/..."
              target="_blank"
              className="icon1 icon--instagram"
              rel="noreferrer"
            >
              <i className="ri-instagram-line"></i>
            </a>
            <a
              href="https://www.linkedin.com/..."
              target="_blank"
              className="icon1 icon--linkedin"
              rel="noreferrer"
            >
              <i className="ri-linkedin-line"></i>
            </a>
            <a
              href="https://www.youtube.com/..."
              className="icon1 icon--youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-youtube-line"></i>
            </a>
          </div>
        </div>
      </footer>

      {showPopup && (
        <div className="footer_popup-overlay">
          <div className="footer_popup-container">
            <button className="footer_popup-close" onClick={handleClose}>
              X
            </button>
            <ContactPage closePopup={handleClose} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FooterPage;
