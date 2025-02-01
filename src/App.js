import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Import Gambar
import programmerImg from "./images/fota pro.jpeg";
import cybersecurityImg from "./images/cyber security.jpeg";
import dataImg from "./images/data.png";
import softwareImg from "./images/software.png";
import devImg from "./images/dev.png";
import etImg from "./images/et.png";
import potoImg from "./images/f.jpeg";
import macinImg from "./images/machine.png";
import proImg from "./images/projek.png";
import fotoImg from "./images/foto.jpg";

// Import Komponen
import About from "./components/About";
import Pengalaman from "./components/pengalaman";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Certifikat from "./components/certifikat";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const handleImageClick = (content) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent("");
  };

  return (
    <Router>
      <div className="App">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">I Am <span>Bagas Gilang Ramadhan</span></h1>
            <p className="hero-description">
              A Software Engineer passionate about designing and building modern, dynamic, and scalable software solutions. With expertise in backend, frontend, DevOps, and cybersecurity, I aim to deliver impactful and innovative applications.
            </p>
            <div className="navigation">
              <a href="/about">About</a>
              <a href="/pengalaman">Work Experience</a>
              <a href="/projects">Projects</a>
              <a href="/certifikat">Certifikat</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
          <img src={fotoImg} alt="Bagas Gilang Ramadhan" className="hero-image" />
        </div>

        {/* Skill Section */}
        <div className="skills-section">
          {[ 
            { title: "Fullstack Developer", img: programmerImg, content: "I have extensive experience developing dynamic web applications using React, Node.js, and databases like MongoDB. My experience includes creating end-to-end solutions for e-commerce and web platforms." },
            { title: "Cybersecurity Specialist", img: cybersecurityImg, content: "I have a deep understanding of network security, vulnerability assessment, and penetration testing. I have worked on securing web applications and ensuring the integrity of enterprise systems." },
            { title: "Data Analyst", img: dataImg, content: "As a Data Analyst, I utilize Python, SQL, and various visualization tools to analyze large datasets, derive actionable insights, and help organizations make data-driven decisions." },
            { title: "Software Engineer", img: softwareImg, content: "With a solid foundation in software engineering, I design, implement, and maintain software solutions that are scalable, efficient, and high-performing." },
            { title: "DevOps Engineer", img: devImg, content: "My experience as a DevOps Engineer includes automating deployment pipelines, managing cloud infrastructure, and optimizing workflows for better collaboration between development and operations teams." },
            { title: "Ethical Hacker", img: etImg, content: "I specialize in ethical hacking and penetration testing, helping organizations identify vulnerabilities and improve their security posture to protect against potential threats." },
            { title: "Machine Learning Engineer", img: macinImg, content: "I have worked on machine learning projects, creating models for classification, regression, and clustering, using tools such as TensorFlow, Keras, and scikit-learn." },
            { title: "Project Manager IT", img: proImg, content: "As a Project Manager in IT, I have experience leading cross-functional teams, defining project scopes, timelines, and ensuring successful project delivery within budget." },
          ].map((skill, index) => (
            <div className="skill-card" key={index} onClick={() => handleImageClick(skill.content)}>
              <h2>{skill.title}</h2>
              <img src={skill.img} alt={skill.title} className="skill-image" />
            </div>
          ))}
        </div>

        {/* Routes */}
        <div className="content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/pengalaman" element={<Pengalaman />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifikat" element={<Certifikat />} />
          </Routes>
        </div>

        {/* Popup Experience */}
        {isPopupOpen && (
          <div className="popup">
            <div className="popup-content">
              <span className="close-btn" onClick={closePopup}>×</span>
              <h2>Experience</h2>
              <p>{popupContent}</p>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
