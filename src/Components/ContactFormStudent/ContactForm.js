import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    batch: '',
    source: '',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://miracle-backend-three.vercel.app/api/student-contact', formData);
      setSubmitted(true);
      setTimeout(() => {
        window.location.href = "https://medi-cpcawshjx-santhiyasanthiyas-projects.vercel.app";
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="student_contact_wrapper">
      {submitted ? (
        <div className="student_contact_success">
          <h2>Thank you! We received your details and will get back to you soon.</h2>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <div className="student_contact_field">
            <label htmlFor="name">First Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="student_contact_field">
            <label htmlFor="phone">Mobile</label>
            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="student_contact_field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="student_contact_field">
            <label htmlFor="course">Interested Course</label>
            <select name="course" id="course" value={formData.course} onChange={handleChange} required>
              <option value="">-None-</option>
              <option value="CPC">CPC</option>
              <option value="CCS">CCS</option>
              <option value="CRC">CRC</option>
              <option value="Basic Medical Coding Training">Basic Medical Coding Training</option>
              <option value="Advanced Medical Coding Training">Advanced Medical Coding Training</option>
              <option value="Specialty Training">Specialty Training</option>
            </select>
          </div>

          <div className="student_contact_field">
            <label htmlFor="batch">Preferred Batch</label>
            <select name="batch" id="batch" value={formData.batch} onChange={handleChange}>
              <option value="">-None-</option>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
              <option value="Weekend">Weekend</option>
            </select>
          </div>

          <div className="student_contact_field">
            <label htmlFor="source">Source of Inquiry</label>
            <select name="source" id="source" value={formData.source} onChange={handleChange}>
              <option value="">-None-</option>
              <option value="Referral">Referral</option>
              <option value="Social Media">Social Media</option>
              <option value="Walk-in">Walk-in</option>
              <option value="Website">Website</option>
            </select>
          </div>

          <div className="student_contact_field">
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" value={formData.description} onChange={handleChange}></textarea>
          </div>

          <div className="student_contact_field">
            <button type="submit" className="student_contact_button">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
