import React from 'react';
import './EndrollPage.css';
import ContactForm from '../ContactFormStudent/ContactForm';

const EndrollPage = () => {
  return (
    <div className='container'>
   

      {/* Content */}
      <div className='content'>
        <h1 className='endroll-page-main-heading'>ENDROLL NOW</h1>
        <div className='endroll_content'>
          <h3 className='whyalpha-subheading'>Who Can Endroll ?</h3>
          <p>Life science graduates</p>
          <p>Healthcare professionals</p>
          <p>Freshers looking for a career in healthcare administration</p>
          <p>Working professionals aiming for a career shift</p>
          <p>Anyone interested in medical coding & billing</p>
        </div>


<div className='row'>
<div className='col-lg-6 col-md-12 text-section mt-2'>
<p className='endroll_content'>For Student</p>
<ContactForm/>
</div>

<div className='col-lg-6 col-md-12 text-section mt-2'>
<p className='endroll_content'>Client</p>
<ContactForm/>
</div>
</div>





      </div>
    </div>
  );
}

export default EndrollPage;
