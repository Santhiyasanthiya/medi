import React from 'react';
import "./ContactaPage.css"

const ContactPage = () => {
  return (
    <div>
      <div className='contact-page'>
<div className="contact-page-container">
  <h1 className='contact-page-heading'>Get In Touch</h1>
  <form action="" method="post"/>
    <div className="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required/>
    </div>
    <div className="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required/>
    </div>
    <div className="form-group">
      <label for="subject">Subject:</label>
      <input type="text" id="subject" name="subject" required />
    </div>
    <div className="form-group">
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
    </div>
    <div className="form-group">
      <button className='contact-page-button' type="submit">Submit</button>
    </div>
</div>
</div>
    </div>
  );
}

export default ContactPage;
