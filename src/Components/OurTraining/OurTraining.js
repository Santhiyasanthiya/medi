import React from 'react';
import './OurTraining.css';

const OurTraining = () => {
  return (
 <div className='container'>
       <div className="training-container container-fluid">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 col-md-12 text-section">
          <h2 className="fade-in">🎆 Industry-oriented syllabus</h2>
          <h2 className="fade-in">🎆 Practical coding projects and case studies</h2>
          <h2 className="fade-in">🎆 Mock exams and interview preparation</h2>
          <h2 className="fade-in">🎆 Placement assistance and career guidance</h2>
          <h2 className="fade-in">🎆 Flexible online & offline batches</h2>
        </div>
        <div className="col-lg-6 col-md-12 image-section">
          <img
            src="https://imarticus.org/blog/wp-content/uploads/2020/01/careerinnab.gif"
            alt="Training"
            className="img-fluid fade-img"
          />
        </div>
      </div>
    </div>
 </div>
  );
};

export default OurTraining;
