import React from "react";
import "./HeroSection.css";
import fotoImg from "../images/foto.jpg";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <p className="subtitle">Hello, I'm</p>
        <h1 className="hero-title">
          <span className="highlight">Bagas</span> Gilang Ramadhan
        </h1>
        <p className="hero-description">
          A Software Engineer passionate about designing and building modern, scalable software solutions.
        </p>
        <a href="#contact" className="cta-button">Hire Me</a>
      </div>
      <div className="hero-image-container">
        <img src={fotoImg} alt="Bagas Gilang Ramadhan" className="hero-image" />
      </div>
    </div>
  );
};

export default HeroSection;
