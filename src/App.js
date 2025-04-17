import React, { useEffect, useState } from "react";
import Header from "./Components/HeaderPage/HeaderPage";
import HomePage from "./Components/HomePage/HomePage";
import AboutPage from "./Components/AboutPage/AboutPage";
import HealthCare from "./Components/HealthCare/HealthCare";
import InformPage from "./Components/InfoTechPage/InformPage";
import FooterPage from "./Components/FooterPage/FooterPage";
import ContactPage from "./Components/Contactpage/ContactPage";
import Programme from "./Components/Programme/Programme";
import PowerPractice from "./Components/PowerPractice/PowerPractice";
import OurTraining from "./Components/OurTraining/OurTraining";
import useGoogleAnalytics from "./useGoogleAnalytics";
import WhyAlphaingen from "./Components/WhyAlphaingen/WhyAlphaingen";
import EndrollPage from "./Components/EndrollPage/EndrollPage";
import { Route, Router, Routes } from "react-router-dom";

const App = () => {
  useGoogleAnalytics();
  const [showHeader, setShowHeader] = useState(false);

 



  return (
    <div>
      <div id="home">
        <HomePage />
      </div>

   <Header />

      <div>
        <PowerPractice />
      </div>

      <br /><br /><br /><br /><br /><br />

      <div id="programme">
        <Programme />
      </div>

      <br /><br />
      <OurTraining />
      <br /><br />

      <div id="whychoose">
        <HealthCare />
      </div>

      <div id="infotech">
        <InformPage />
      </div>
<br/>
<br/>
<br/>
      <div id="endroll">
        <EndrollPage />
      </div>

      <div>
        <FooterPage />
      </div>



 
      <Routes >
     
        <Route path="/contact" element={<ContactPage />} /> 
      </Routes>

    </div>
  );
};

export default App;
