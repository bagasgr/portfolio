import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import routing components
import "./App.css"; // Pastikan file CSS ini ada dan digunakan

// Import gambar
import programmerImg from "./images/fota pro.jpeg";
import cybersecurityImg from "./images/cyber security.jpeg";
import dataImg from "./images/data.png";
import softwareImg from "./images/software.png";
import devImg from "./images/dev.png";
import etImg from "./images/et.png";
import potoImg from "./images/f.jpeg";
import macinImg from "./images/machine.png";
import proImg from "./images/projek.png";

import Header from "./components/Header"; // Pastikan path ini sesuai
import About from "./components/About"; // Pastikan path ini sesuai
import Pengalaman from "./components/pengalaman"; // Pastikan path ini sesuai
import Contact from "./components/Contact"; // Pastikan path ini sesuai
import Projects from "./components/Projects"; // Pastikan path ini sesuai
import Certifikat from "./components/certifikat"; // Pastikan path ini sesuai

// Define the App component
function App() {
  return (
    <Router>
      <div className="App">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">I Am Bagas Gilang Ramadhan</h1>
            <p className="hero-description">
              A Software Engineer passionate about designing and building modern, dynamic, and scalable software solutions. With expertise in backend, frontend, DevOps, and cybersecurity, I aim to deliver impactful and innovative
              applications.
            </p>
            <div className="navigation">
              <a href="/about">About</a>
              <a href="/pengalaman">work experience</a>
              <a href="/projects">Projects</a>
              <a href="/certifikat">Certifikat</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
          <img src={potoImg} alt="Bagas Gilang Ramadhan" className="hero-image" />
        </div>
        <h1> Skill</h1>
        {/* Fixed Image Section */}
        <div className="fixed-images">
          {/* Gambar Programmer */}
          <div className="image-container">
            <h2>Fullstack (Back-end & Front-end)</h2>
            <img src={programmerImg} alt="Programmer" className="profile-image" />
          </div>

          {/* Gambar Cybersecurity */}
          <div className="image-container">
            <h2>Cybersecurity Specialist</h2>
            <img src={cybersecurityImg} alt="Cybersecurity" className="profile-image" />
          </div>

          {/* Gambar Data Analyst */}
          <div className="image-container">
            <h2>Data Analyst</h2>
            <img src={dataImg} alt="Data Analyst" className="profile-image" />
          </div>

          {/* Gambar Software Engineer */}
          <div className="image-container">
            <h2>Software Engineer</h2>
            <img src={softwareImg} alt="Software Engineer" className="profile-image" />
          </div>

          {/* Gambar DevOps */}
          <div className="image-container">
            <h2>DevOps Engineer</h2>
            <img src={devImg} alt="DevOps" className="profile-image" />
          </div>

          {/* Gambar Ethical Hacker */}
          <div className="image-container">
            <h2>Ethical Hacker / Penetration Tester</h2>
            <img src={etImg} alt="Ethical Hacker" className="profile-image" />
          </div>

          {/* Gambar Ethical Hacker */}
          <div className="image-container">
            <h2>Data Scientist / Machine Learning Engineer</h2>
            <img src={macinImg} alt="machine learning" className="profile-image" />
          </div>

          {/* Gambar Ethical Hacker */}
          <div className="image-container">
            <h2>Project Manager IT</h2>
            <img src={proImg} alt="Project Manager IT" className="profile-image" />
          </div>
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
      </div>
    </Router>
  );
}

export default App;
