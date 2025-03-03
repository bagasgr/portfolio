import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";

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

  return isVisible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="scroll-to-top"
    >
      Back to Top
    </button>
  ) : null;
};

function App() {
  const [notification, setNotification] = useState(null);

  const handleImageClick = (title, content) => {
    setNotification({ title, content });
  };

  const closeNotification = () => {
    setNotification(null);
  };

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Hero Section */}
        <div className="hero-section" data-aos="fade-up">
          <div className="hero-content" data-aos="zoom-in">
            <h1 className="hero-title">
              <span className="iam">I Am</span>{" "}
              <span className="name">Bagas Gilang Ramadhan</span>
              <br />
              <span className="profesi">IT Enthusiast</span>
            </h1>

            <h2 className="animated-title" data-aos="fade-left">
              <Typewriter
                options={{
                  strings: [
                    "Backend Developer",
                    "Frontend Developer",
                    "Fullstack Developer",
                    "Cybersecurity Specialist",
                    "Data Analyst",
                    "Data Scientist",
                    "Software Engineer",
                    "Ethical Hacking",
                    "Machine Learning",
                    "AI Engineer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 20,
                }}
              />
            </h2>
            <p className="hero-description" data-aos="fade-right">
              🔍 "I'm not just a developer, I'm a digital architect creating innovative solutions for the future."
              <br />
              🔥 "Every line of code I write is not just an instruction, but a small step towards a technological revolution!"
              <br />
              ⚡ "In a world that is constantly changing, I choose to not only follow trends, but create them!"
              <br />
              🌟 "My passion is not only understanding technology, but also how to use it to create a positive impact in the world."
            </p>
            <div className="navigation" data-aos="slide-up">
              <a href="/about">About</a>
              <a href="/pengalaman">Work Experience</a>
              <a href="/projects">Projects</a>
              <a href="/certifikat">Certifikat</a>
              <a
                href="/pdf/BagasGilangRamadhan_softwareDeveloper(1).pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <a href="/contact">Contact</a>
            </div>
          </div>
          <img
            src={fotobagasImg}
            alt="Bagas Gilang Ramadhan"
            className="hero-image"
            data-aos="fade-up"
          />
        </div>

        {/* Skill Section */}
        <div className="skills-section">
          {[{ title: "Fullstack Developer", img: programmerImg, content: "Fullstack Developer With expertise in both frontend and backend development..." },
            { title: "Cybersecurity Specialist", img: cybersecurityImg, content: "Cybersecurity Specialist I specialize in securing digital infrastructures..." },
            { title: "Data Analyst", img: dataImg, content: "Data Analyst I transform raw data into actionable insights..." },
            { title: "Software Engineer", img: softwareImg, content: "Software Engineer I design, develop, and maintain software solutions..." },
            { title: "DevOps Engineer", img: devImg, content: "DevOps Engineer I bridge the gap between development and operations..." },
            { title: "Ethical Hacking", img: etImg, content: "Ethical Hacking I proactively identify vulnerabilities in systems..." },
            { title: "Machine Learning", img: macinImg, content: "Machine Learning I develop intelligent models using Python..." },
            { title: "Project Manager IT", img: proImg, content: "Project Manager IT I lead IT projects from inception to completion..." }
          ].map((skill, index) => (
            <div
              className="skill-card"
              key={index}
              onClick={() => handleImageClick(skill.title, skill.content)}
              data-aos="flip-left"
            >
              <img
                src={skill.img}
                alt={skill.title}
                className="skill-image"
                data-aos="zoom-in"
              />
              <h3 className="skill-title">{skill.title}</h3>
            </div>
          ))}
        </div>

        {/* Notification Section */}
        {notification && (
          <div className="notification" data-aos="fade-up">
            <h2>{notification.title}</h2>
            <p>{notification.content}</p>
            <button className="close-button" onClick={closeNotification}>
              Close
            </button>
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
