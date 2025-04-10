import React from "react";
import "./WhyAlphaingen.css";

const WhyAlphaingen = () => {
  return (
    <div className="container whyalpha-container">
      <div className="row">
        <h1 className="whyalpha-heading programme-page-main-heading">
          Why Choose Alphaingen?
        </h1>

        <div className="col-lg-6 col-md-12 whyalpha-section fade-in-left">
          <h2 className="whyalpha-subheading">Healthcare Providers</h2>
          <p>Reduced claim denials</p>
          <p>Faster payments</p>
          <p>HIPAA-compliant workflow</p>
          <p>Certified coders working on your revenue cycle</p>
        </div>

        <div className="col-lg-6 col-md-12 text-center fade-in-right">
          <img
            className="whyalpha-image img-fluid"
            src="https://ahpitn.in/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-27-at-1.39.18-PM.jpeg"
            alt="Healthcare Providers"
          />
        </div>

        <div className="col-lg-6 col-md-12 text-center fade-in-left mt-4">
          <img
            className="whyalpha-image img-fluid"
            src="https://www.deltatechnicalcollege.com/wp-content/uploads/2018/12/How-to-get-started-in-medical-coding-and-billing-360-300.jpg"
            alt="Students"
          />
        </div>

        <div className="col-lg-6 col-md-12 whyalpha-section fade-in-right mt-4">
          <h2 className="whyalpha-subheading">For Students</h2>
         <p>Career-focused programs						
International certification guidance						
Hands-on training with real claims						
Internship opportunities within Alphaingen						
Placement support in billing companies, and healthcare organizations						
						
</p>
        </div>
      </div>
    </div>
  );
};

export default WhyAlphaingen;
