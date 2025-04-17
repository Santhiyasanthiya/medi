import React, { useState, useEffect } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      mode: 'no-cors'
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Form submission error:', error);
      });
  };

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        window.location.href = "https://www.alphaingen.com";
      }, 2000); // Redirect after 2 seconds
    }
  }, [submitted]);

  return (
    <div className="student_contact_wrapper">
      {submitted ? (
        <div className="student_contact_success">
          <h2>Thank you! We received your details</h2>
         <p>we will get back soon</p>
        </div>
      ) : (
        <form
          className="student_contact_form"
          action="https://crm.zoho.in/crm/WebToLeadForm"
          name="WebToLeads896376000000420790"
          method="POST"
          acceptCharset="UTF-8"
          onSubmit={handleSubmit}
        >
          {/* Hidden Inputs */}
          <input type="hidden" name="xnQsjsdp" value="0615834f8daa7625cbc97a778b9a26316f6196045d288c13fd51827065c0fa5f" />
          <input type="hidden" name="zc_gad" id="zc_gad" value="" />
          <input type="hidden" name="xmIwtLD" value="fd49050ead9867e053a27d590ec19cf82690d38e1b517c62e5a7eb81e2747f17fcded59be414d014c1f785c8e1ad9db2" />
          <input type="hidden" name="actionType" value="TGVhZHM=" />
          <input type="hidden" name="returnURL" value="https://www.alphaingen.com" />

          <h2 className="student_contact_title">Contact Us</h2>

          <div className="student_contact_field">
            <label htmlFor="First_Name">First Name</label>
            <input type="text" id="First_Name" name="First Name" maxLength="40" />
          </div>

          <div className="student_contact_field">
            <label htmlFor="Last_Name">Last Name <span className="student_contact_required">*</span></label>
            <input type="text" id="Last_Name" name="Last Name" maxLength="80" required />
          </div>

          <div className="student_contact_field">
            <label htmlFor="Mobile">Mobile</label>
            <input type="text" id="Mobile" name="Mobile" maxLength="30" />
          </div>

          <div className="student_contact_field">
            <label htmlFor="Email">Email</label>
            <input type="email" id="Email" name="Email" maxLength="100" />
          </div>

          <div className="student_contact_field">
            <label htmlFor="LEADCF2">Interested Course</label>
            <select name="LEADCF2" id="LEADCF2">
              <option value="-None-">-None-</option>
              <option value="CPC">CPC</option>
              <option value="CCS">CCS</option>
              <option value="CRC">CRC</option>
              <option value="Basic Medical Coding Training">Basic Medical Coding Training</option>
              <option value="Advanced Medical Coding Training">Advanced Medical Coding Training</option>
              <option value="Specialty Medical Coding Training">Specialty Medical Coding Training</option>
            </select>
          </div>

          <div className="student_contact_field">
            <button type="submit" className="student_contact_button">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
