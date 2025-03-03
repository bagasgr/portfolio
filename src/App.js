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
import proImg from "./images/ai.jpeg";
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
          {[{ title: "Fullstack Developer", img: programmerImg, content: "As a Fullstack Developer, I seamlessly integrate the front-end with the back-end, creating end-to-end solutions that drive web applications. From building engaging user interfaces to optimizing server-side performance, I leverage my expertise across multiple frameworks to deliver complete, robust systems." },
            { title: "Cybersecurity Specialist", img: cybersecurityImg, content: "I specialize in securing digital assets from ever-evolving threats. By conducting thorough vulnerability assessments and implementing strong encryption protocols, I ensure data protection is a top priority. I constantly adapt to new security trends and provide strategic recommendations to minimize risk and safeguard applications." },
            { title: "Data Analyst", img: dataImg, content: "Turning raw data into actionable insights is where I shine. By applying statistical models and powerful analytical tools, I uncover trends and patterns that inform smarter decisions. Whether it's customer behavior or market trends, my data-driven approach helps organizations gain a competitive edge." },
            { title: "Software Engineer", img: softwareImg, content: "With a keen eye for clean code and solid architecture, I develop software solutions that not only meet client needs but are also scalable and maintainable. I bring a methodical approach to coding, ensuring that the end product is both efficient and easy to adapt to future needs." },
            { title: "DevOps Engineer", img: devImg, content: "I bridge development and operations, optimizing CI/CD pipelines with tools like Docker, Kubernetes, and Jenkins to minimize downtime and maximize productivity. My focus is on seamless deployments, infrastructure scalability, and enhancing team collaboration to ensure fast and secure application delivery." },
            { title: "Ethical Hacking", img: etImg, content: "As an ethical hacker, I actively seek out vulnerabilities before they can be exploited. By conducting penetration tests and security audits, I identify weak points in systems and networks, providing actionable solutions to enhance security and prevent malicious attacks." },
            { title: "Machine Learning", img: macinImg, content: "I build intelligent systems that learn and adapt over time. Using advanced machine learning algorithms, I create models that can predict, analyze, and optimize processes. From automating tasks to improving decision-making, my work empowers machines to think for themselves." },
            { title: "AI ENGINEER", img: proImg, content: "I design intelligent systems using deep learning, neural networks, and reinforcement learning to solve complex problems. Having completed a specialized AI module at Microsoft, I enhance business processes through advanced models in natural language processing and predictive analytics, driving innovation with every project." }
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
