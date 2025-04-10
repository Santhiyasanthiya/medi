import React from "react";
import "./Service.css"

const Service = () => {
  return (

       <div className="Services_container">
      <h1 className="Our_Services_heading">Our Services</h1>
   <div className="Our_Services_para">
   <p> Medical Coding & Billing Solutions for Healthcare Providers </p>
      <p>
        {" "}
        Medical Coding: Accurate ICD-10, CPT, and HCPCS coding for all
        specialties{" "}
      </p>
      <p> Medical Billing: End-to-end revenue cycle management </p>
      <p> AR Management: Reduce aged receivables and speed up collections </p>
      <p> Credentialing: Enroll providers with insurance networks</p>
      <p> Compliance & Audit: Stay HIPAA-compliant and audit-ready </p>
   </div>
    </div>

  );
};

export default Service;
