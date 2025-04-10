import React from "react";
import Header from "./Components/HeaderPage/HeaderPage";
import HomePage from "./Components/HomePage/HomePage";
import Vision from "./Components/VisionPage/VisionPage";
import AboutPage from "./Components/AboutPage/AboutPage";
import HealthCare from "./Components/HealthCare/HealthCare";
import InformPage from "./Components/InfoTechPage/InformPage";
import FooterPage from "./Components/FooterPage/FooterPage";
import ContactPage from "./Components/Contactpage/ContactPage";
import Programme from "./Components/Programme/Programme";
import PowerPractice from "./Components/PowerPractice/PowerPractice";
import OurTraining from "./Components/OurTraining/OurTraining";
import WhyAlphaingen from "./Components/WhyAlphaingen/WhyAlphaingen";



const App = () => {
  return (
    <div>
   
      <div>
        <HomePage />
      </div>

      <div>
      <Header />
      </div>

      <div  id="home">
      <PowerPractice/>
      </div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

      <div id="programme">
        <Programme />
      </div>


      <br/>
      <br/>
<OurTraining/>
<br/>
<br/>
<WhyAlphaingen/>


      <div id="healthcare">
  <HealthCare/>
      </div>
      <div id="infotech">
     <InformPage/>
      </div>
      <div id="ai-ar">
        <h2>AI & AR Section</h2>
        <p>This is the AI & AR section content.</p>
      </div>
      <div id="about">
      <AboutPage/>
      </div>
      <div id="contact">
        <ContactPage/>
      </div>

 <div>
 <FooterPage />
 </div>
    </div>
  );
};

export default App;
