import React, { useEffect, useState } from 'react';
import './EndrollPage.css';
import ContactForm from '../ContactFormStudent/ContactForm';
import ContactPage from '../Contactpage/ContactPage';

const EndrollPage = () => {
  const images = [
    "https://i.pinimg.com/736x/72/8d/fe/728dfeff858ccdb8868c9f6ef45124da.jpg",
    "https://img.freepik.com/premium-photo/pink-ribbons-stethoscope-pastel-background-symbol-womens-breast-cancer-awareness_53476-6136.jpg"
  ];
  
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container py-4">
      <h1 className="endroll-page-main-heading">ENROLL NOW</h1>

      <div className="endroll_content">
        <h3 className="whyalpha-subheading">Who Can Enroll ?</h3>
        <div
          className="endroll_content-para"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        >
          <p>🧬 Life science graduates 🧬</p>
          <p>🧬 Healthcare professionals 🧬</p>
          <p>🧬 Freshers looking for a career in healthcare administration 🧬</p>
          <p>🧬 Working professionals aiming for a career shift 🧬</p>
          <p>🧬 Anyone interested in medical coding & billing 🧬</p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 col-md-12 mt-3">
          <p className="endroll_content">For Student</p>
          <ContactForm />
        </div>
        <div className="col-lg-6 col-md-12 mt-3">
          <p className="endroll_content">For Client</p>
          <ContactPage />
        </div>
      </div>
    </div>
  );
};

export default EndrollPage;
