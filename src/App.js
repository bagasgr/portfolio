import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";

// Gambar
import programmerImg from "./images/fota pro.jpeg";
import cybersecurityImg from "./images/cyber security.jpeg";
import dataImg from "./images/data.png";
import softwareImg from "./images/software.png";
import devImg from "./images/data3.jpeg";
import etImg from "./images/et.png";
import macinImg from "./images/machine.png";
import proImg from "./images/ai.jpeg";
import fotobagasImg from "./images/fotobagas3.jpg";
import codingcampImg from "./images/codingcamp.jpeg";
import cisco2 from "./images/cisco2.jpeg";
import idcamp from "./images/idcamp.png";
import komdigi from "./images/komdigi.jpeg";
import evi from "./images/evi.jpeg";
import dicoding from "./images/dicoding.jpeg";

// Komponen
import About from "./components/About";
import Pengalaman from "./components/pengalaman";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Certifikat from "./components/certifikat";
import ScrollToTop from "./components/ScrollToTop"; // ✅ Pastikan ini terimport

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
      {/* Tambahkan ScrollToTop di sini */}
      <ScrollToTop />

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

            <article className="hero-description" data-aos="fade-right">
              <h2>Driven by Code, Inspired by Innovation</h2>
              <p>
                Passionate about technology, I thrive on solving problems and
                building smart solutions. With expertise in software
                development, networking, and databases, I embrace challenges as
                opportunities to innovate.
              </p>
            </article>

            <div className="navigation" data-aos="slide-up">
              <a href="/about">About</a>
              <a href="/pengalaman">Work Experience</a>
              <a href="/projects">Projects</a>
              <a href="/certifikat">Certifikat</a>
              <a
                href="/pdf/CV_Bagas_Gilang_Ramadhan.pdf"
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
          {[
            {
              title: "Fullstack Developer",
              img: programmerImg,
              content:
                "As a Fullstack Developer, I seamlessly integrate the front-end with the back-end, creating end-to-end solutions...",
            },
            {
              title: "Cybersecurity Specialist",
              img: cybersecurityImg,
              content:
                "I specialize in securing digital assets from ever-evolving threats...",
            },
            {
              title: "Data Analyst",
              img: dataImg,
              content:
                "Turning raw data into actionable insights is where I shine...",
            },
            {
              title: "Software Engineer",
              img: softwareImg,
              content:
                "With a keen eye for clean code and solid architecture, I develop software solutions...",
            },
            {
              title: "Data science",
              img: devImg,
              content:
                "As a data scientist, I turn raw data into actionable insights through advanced analytics...",
            },
            {
              title: "Ethical Hacking",
              img: etImg,
              content:
                "As an ethical hacker, I actively seek out vulnerabilities before they can be exploited...",
            },
            {
              title: "Machine Learning",
              img: macinImg,
              content:
                "I build intelligent systems that learn and adapt over time...",
            },
            {
              title: "AI ENGINEER",
              img: proImg,
              content:
                "I design intelligent systems using deep learning, neural networks, and reinforcement learning...",
            },
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

<div className="training-marquee">
  <div className="marquee-wrapper">
    <div className="marquee-content">
      <img src={codingcampImg} alt="Coding Camp" />
      <img src={cisco2} alt="Cisco" />
      <img src={idcamp} alt="IDCamp" />
      <img src={komdigi} alt="Kominfo Digital" />
      <img src={evi} alt="Evindo" />
      <img src={dicoding} alt="Dicoding" />
      {/* Tambah logo lain di sini */}
    </div>
    {/* Duplikat untuk loop tak terputus */}
    <div className="marquee-content">
      <img src={codingcampImg} alt="Coding Camp" />
      <img src={cisco2} alt="Cisco" />
      <img src={idcamp} alt="IDCamp" />
      <img src={komdigi} alt="Kominfo Digital" />
      <img src={evi} alt="Evindo" />
      <img src={dicoding} alt="Dicoding" />
    </div>
  </div>
</div>




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
