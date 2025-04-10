import React from "react";
import { motion } from "framer-motion";
import "./HealthCare.css";

const HealthCare = () => {
  return (
    <div className="healthcare-container">
     <div className="healthcare-title">
     <h2 className=" mt-5 whyalpha-heading programme-page-main-heading">   Why Choose Alphaingen?</h2>
     </div>
      <motion.div 
        className="parallax-fixed parallax1"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      
  

      {/* Content Section with Smooth Animation */}
<div className="healthcare-total-paratag">
<motion.div 
        className="healthcare-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
       <h2 className="whyalpha-subheading">Healthcare Providers</h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

     
Healthcare providers have seen a significant improvement in revenue cycles due to reduced claim denials.
          
      
      </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
       Fewer claim denials mean faster payments, improving cash flow and financial stability for healthcare providers
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
    Our HIPAA-compliant workflow ensures secure handling of patient data while enhancing operational efficiency for healthcare providers
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
       Certified coders manage your revenue cycle with precision, ensuring accurate claims and maximum reimbursements
        </motion.p>
      </motion.div>

</div>

      <motion.div 
        className="parallax-fixed parallax2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      ></motion.div>
    </div>
  );
};

export default HealthCare;
