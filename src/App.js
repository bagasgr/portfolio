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
import potoImg from "./images/f.jpeg";
import macinImg from "./images/machine.png";
import proImg from "./images/projek.png";
import fotoImg from "./images/foto.jpg";
import fotobagasImg from "./images/fotobagas3.jpg";

// Import Komponen
import About from "./components/About";
import Pengalaman from "./components/pengalaman";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Certifikat from "./components/certifikat";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollPosition = () => {
    if (window.scrollY > 300) {  // Determines the scroll position, 300px as an example
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition); // Add event listener when scrolling
    return () => {
      window.removeEventListener('scroll', checkScrollPosition); // Clean up listener when component unmounts
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button 
        onClick={scrollToTop} 
        className="scroll-to-top"  // Apply the class for styling
      >
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

  return (
    <Router>
      <div className="App">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">I Am <span>Bagas Gilang Ramadhan</span></h1>
            <p className="hero-description">
              A Software Developer who is passionate about designing and building innovative, dynamic, and scalable software solutions to create extraordinary digital experiences.
            </p>
            <div className="navigation">
              <a href="/about">About</a>
              <a href="/pengalaman">Work Experience</a>
              <a href="/projects">Projects</a>
              <a href="/certifikat">Certifikat</a>
              <a href="/contact">Contact</a>
              <a 
                href="/pdf/BagasGilangRamadhan_softwareDeveloper(1).pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
          <img src={fotobagasImg} alt="Bagas Gilang Ramadhan" className="hero-image" />
        </div>

        {/* Skill Section */}
        <div className="skills-section">
          {[
            {
              title: "Fullstack Developer",
              img: programmerImg,
              content: `🔹 Frontend: HTML, CSS, JavaScript, React.js for interactive & responsive UI.
🔹 Backend: PHP (Laravel), Node.js (Hapi.js, Express.js) for APIs & data management.
🔹 Database: MySQL, MongoDB for storing & managing data.
🔹 Security: JWT Authentication, password hashing for data protection.
...` 
            },
            {
              title: "Cybersecurity Specialist",
              img: cybersecurityImg,
              content: `Experience in Cybersecurity
I have experience in Cybersecurity, gained through official training and competitions that have sharpened my cybersecurity skills.
...`
            },
            {
              title: "Data Analyst",
              img: dataImg,
              content: `Experience in Data Analysis
I have experience in data analysis using various tools and technologies and have worked on data science-based projects to support more accurate decision-making.
...`
            },
            {
              title: "Software Engineering",
              img: softwareImg,
              content: `Experience in Software Engineering
I have experience in software development using various technologies and methodologies and have worked on web and desktop applications to meet user and business needs.
...`
            },
            {
              title: "DevOps Engineer",
              img: devImg,
              content: `Experience in DevOps Engineering
I have experience in automation and infrastructure management to support efficient and high-quality software development.
...`
            },
            {
              title: "Ethical Hacking",
              img: etImg,
              content: `Experience in Ethical Hacking
I have experience in Ethical Hacking and Cybersecurity, which I have gained through competitions and intensive training.
...`
            },
            {
              title: "Machine Learning",
              img: macinImg,
              content: `Experience in Machine Learning
I have experience in applying machine learning algorithms to solve business problems and generate accurate predictions.
...`
            },
            {
              title: "Project Manager IT",
              img: proImg,
              content: `Experience in Project Management
I have managed IT projects from initiation to closure and have worked closely with clients to deliver on time and on budget.
...`
            }
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
