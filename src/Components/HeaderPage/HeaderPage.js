import React, { useEffect, useState } from "react";
import "./HeaderPage.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import homeLogo from "../../Assets/HeaderImage/homelogo.png"; // Adjust path accordingly





const HeaderPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); // Close menu after click
  };
  const [animateLogo, setAnimateLogo] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateLogo(true);
    }, 1000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);


  return (
    <header className="headerPage">
      <div className="headerPage-container">
        
      <img src="https://res.cloudinary.com/dmv2tjzo7/image/upload/v1746264888/dsi64irjwtabuwhbnand.png" alt="Home Logo" className="logo-image" />

        <nav className={`headerPage-nav-links ${isMenuOpen ? "open" : ""}`}>

     
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("programme")}>Service</button>
          <button onClick={() => scrollToSection("programme")}>Learning</button>
          <button onClick={() => scrollToSection("whychoose")}>Why Alphaingen</button>
          <button onClick={() => scrollToSection("endroll")}>Enroll</button>
        </nav>
        <div className="headerPagemenu-icon" onClick={toggleMenu}>
  {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
</div>



      </div>
    </header>
  );
};

export default HeaderPage;
