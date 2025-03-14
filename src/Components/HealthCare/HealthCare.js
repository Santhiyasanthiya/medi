import React from "react";
import { motion } from "framer-motion";
import "./HealthCare.css";

const HealthCare = () => {
  return (
    <div className="healthcare-container">
     <div className="healthcare-title">
     <h2 className=" mt-5">Health Care</h2>
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
        <h1>HealthCare</h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Medical Coding Certification Program: Master core coding concepts with in-depth instruction.
          Prepare for industry-recognized certifications.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Advanced Medical Coding and Auditing: Dive deeper into specialty coding and compliance auditing.
          Gain expertise in areas like oncology, orthopedics, and cardiovascular coding.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Medical Billing and Reimbursement Training: Learn about insurance claims processing,
          billing guidelines, and payer regulations.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Customized Corporate Training: Upskill your workforce with tailored training solutions for hospitals,
          clinics, and healthcare organizations.
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
