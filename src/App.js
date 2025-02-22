import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Import Gambar
import programmerImg from "./images/fota pro.jpeg";
import cybersecurityImg from "./images/cyber security.jpeg";
import dataImg from "./images/data.png";
import softwareImg from "./images/software.png";
import devImg from "./images/dev.png";
import etImg from "./images/et.png";
import macinImg from "./images/machine.png";
import proImg from "./images/projek.png";
import fotobagasImg from "./images/fotobagas3.jpg";

// Import Komponen
import About from "./components/About";
import Pengalaman from "./components/pengalaman";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Certifikat from "./components/certifikat";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    isVisible && (
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="scroll-to-top">
        Kembali ke Atas
      </button>
    )
  );
};

function App() {
  const [notification, setNotification] = useState(null);

  const handleImageClick = (title, content) => {
    setNotification({ title, content });
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <Router>
      <div className="App">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">I Am <span>Bagas Gilang Ramadhan</span></h1>
            <p className="hero-description">A Software Developer passionate about building innovative and scalable solutions.</p>
            <div className="navigation">
              <a href="/about">About</a>
              <a href="/pengalaman">Work Experience</a>
              <a href="/projects">Projects</a>
              <a href="/certifikat">Certifikat</a>
              <a href="/contact">Contact</a>
              <a href="/pdf/BagasGilangRamadhan_softwareDeveloper(1).pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
          </div>
          <img src={fotobagasImg} alt="Bagas Gilang Ramadhan" className="hero-image" />
        </div>

        {/* Skill Section */}
        <div className="skills-section">
          {[{ title: "Fullstack Developer", img: programmerImg, content: "Experience in Fullstack Development..." },
            { title: "Cybersecurity Specialist", img: cybersecurityImg, content: "Experience in Cybersecurity..." },
            { title: "Data Analyst", img: dataImg, content: "Experience in Data Analysis..." },
            { title: "Software Engineering", img: softwareImg, content: "Experience in Software Engineering..." },
            { title: "DevOps Engineer", img: devImg, content: "Experience in DevOps Engineering..." },
            { title: "Ethical Hacking", img: etImg, content: "Experience in Ethical Hacking..." },
            { title: "Machine Learning", img: macinImg, content: "Experience in Machine Learning..." },
            { title: "Project Manager IT", img: proImg, content: "Experience in Project Management..." }
          ].map((skill, index) => (
            <div className="skill-card" key={index} onClick={() => handleImageClick(skill.title, skill.content)}>
              <img src={skill.img} alt={skill.title} className="skill-image" />
              <h3 className="skill-title">{skill.title}</h3>
            </div>
          ))}
        </div>

        {/* Notification Section */}
        {notification && (
          <div className="notification">
            <h2>{notification.title}</h2>
            <p>{notification.content}</p>
            <button className="close-button" onClick={closeNotification}>Close</button>
          </div>
        )}

        {/* Routes */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/pengalaman" element={<Pengalaman />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifikat" element={<Certifikat />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
