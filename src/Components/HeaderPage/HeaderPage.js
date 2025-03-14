import React, { useState } from "react";
import "./HeaderPage.css";
import HeaderLogo from "../../Assets/HeaderImage/HeaderImage.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import homelogo from "../../Assets/HeaderImage/homelogo.png"



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
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <header className="headerPage">
      
      <div className="headerPage-container">

      <img className="headerPage-image" src="https://res.cloudinary.com/dmv2tjzo7/image/upload/v1741584575/jtkryfo10xfmocicz5rc.png" alt="Header Logo" />


        <nav className={`headerPage-nav-links ${isMenuOpen ? "open" : ""}`}>
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("programme")}>Programme</button>
          <button onClick={() => scrollToSection("healthcare")}>Testimonial</button>
          {/* <button onClick={() => scrollToSection("infotech")}>InfoTech</button> */}
          {/* <button onClick={() => scrollToSection("ai-ar")}>AI & AR</button> */}
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("contact")}>Endroll</button>
        </nav>
        <div className="headerPagemenu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </header>
  );
};

export default HeaderPage;
