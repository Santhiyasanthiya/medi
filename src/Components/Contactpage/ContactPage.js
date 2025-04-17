import React, { useState } from 'react';
import "./ContactaPage.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = ({ closePopup }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Submitted successfully");
    setSubmitted(true);

    // Close popup after 2 seconds
    setTimeout(() => {
      closePopup();
    }, 2000);
  };

  return (
    <div className="footer_popup-content">
      <h2 className="footer_popup-title">Contact Us</h2>
      <p className="footer_popup-text">You can reach us at hello@alphaingen.com or fill out the form below.</p>

      <form className="footer_popup-form" onSubmit={handleSubmit}>
        <div className="footer_popup-form-group">
          <label className="footer_popup-label">Username</label>
          <input type="text" className="footer_popup-input" placeholder="Enter your name" required />
        </div>

        <div className="footer_popup-form-group">
          <label className="footer_popup-label">Email ID</label>
          <input type="email" className="footer_popup-input" placeholder="Enter your email" required />
        </div>

        <div className="footer_popup-form-group">
          <label className="footer_popup-label">Phone Number</label>
          <input type="tel" className="footer_popup-input" placeholder="Enter your phone number" required />
        </div>

        <div className="footer_popup-form-group">
          <label className="footer_popup-label">Subject</label>
          <input type="text" className="footer_popup-input" placeholder="Enter the subject" required />
        </div>

        <button type="submit" className="footer_popup-submit-btn">Submit</button>
      </form>

      {submitted && (
        <p className="footer_popup-message">We will get back soon 😊</p>
      )}

      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default ContactPage;
