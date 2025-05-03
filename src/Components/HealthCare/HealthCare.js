import React from "react";
import { motion } from "framer-motion";
import "./HealthCare.css";
import { Zoom } from "react-awesome-reveal";

const HealthCare = () => {
  return (
    <div className="healthcare-container container">
     <div className="healthcare-title">
     <h2 className=" mt-5 whyalpha-heading programme-page-main-heading">   Why Choose Alphaingen?</h2>
     </div>
 
<div className="Healthcare_Providers row">
<div className="col-lg-6">
<Zoom duration={1300} ><img className="Healthcare_Providers_image" src="https://res.cloudinary.com/dmv2tjzo7/image/upload/v1744804125/wsiwbg0kdv3ohbsbl8vo.png"/>
</Zoom> 
  </div>
  <div className="student-text-container col-lg-6">
  <h1 className="whyalpha-subheading mt-5"> For Healthcare Providers</h1>
<div className="student-text">
<p>Healthcare providers have seen a significant improvement in revenue cycles due to reduced claim denials.</p>
 <p>Fewer claim denials mean faster payments, improving cash flow and financial stability for healthcare providers</p>
<p>Our HIPAA-compliant workflow ensures secure handling of patient data while enhancing operational efficiency for healthcare providers
</p>
<p>Certified coders manage your revenue cycle with precision, ensuring accurate claims and maximum reimbursements</p>
  
</div>
  </div>







<div className="second-row row">




      <div className="student-text-container col-lg-6 mt-3">
        <h1 className='for_student '>For Student</h1>
    <div className="student-text ">
    <p> Reduced claim denials mean students can focus more on learning and less on financial worries.</p>
      <p>Career-focused programs help students gain the skills they need to succeed in today’s job market.</p>
      <p>We provide international certification guidance to help students achieve global career opportunities.</p>
      <p>Hands-on training with real claims prepares students for real-world healthcare scenarios</p>
    <p>Gain valuable industry experience through internship opportunities within Alphaingen.</p>
    <p>Placement support in billing companies, and healthcare organizations</p>
    
    </div>
      </div>
      <div className="col-lg-6">
  <Zoom duration={1500} >  <img  className="student-image" src="https://unity-connect.com/wp-content/uploads/2022/04/pros-and-cons-of-medical-billing-and-coding-Featured-image.jpg" alt="Informative" />
  </Zoom></div>
</div>
   </div>  
    

</div>


  );
};

export default HealthCare;
