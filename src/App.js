import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Typewriter from "typewriter-effect";

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

  

  return (
    <Router>
      <div className="App">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
          <h1 className="hero-title">
  <span className="iam">I Am</span>{" "}
  <span className="name">Bagas Gilang Ramadhan</span>
  <br />
  <span className="profesi">IT Enthusiast</span>
</h1>

            <h2 className="animated-title">
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
            <p className="hero-description">
            🔍 "I'm not just a developer, I'm a digital architect creating innovative solutions for the future."

🔥 "Every line of code I write is not just an instruction, but a small step towards a technological revolution!"

⚡ "In a world that is constantly changing, I choose to not only follow trends, but create them!"

🌟 "My passion is not only understanding technology, but also how to use it to create a positive impact in the world."
</p>
            <div className="navigation">
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
          />
        </div>

        {/* Skill Section */}
        <div className="skills-section">
          {[
            {
              title: "Fullstack Developer",
              img: programmerImg,
              content:
                "Fullstack Developer With expertise in both frontend and backend development, I craft dynamic and responsive web applications. Using technologies like JavaScript, PHP, and SQL, I build seamless user experiences and scalable architectures. My proficiency in HTML, CSS, and frameworks like React ensures aesthetically pleasing designs, while my backend skills in database management and API development enable efficient data handling and secure operations.",
            },
            {
              title: "Cybersecurity Specialist",
              img: cybersecurityImg,
              content:
                "Cybersecurity Specialist I specialize in securing digital infrastructures by implementing robust security measures and risk assessments. With knowledge of network security, penetration testing, and cryptography, I safeguard systems against cyber threats. My experience includes vulnerability analysis, firewalls, and SIEM tools to ensure compliance and data protection. I am adept at ethical hacking to preemptively identify and mitigate security risks.",
            },
            {
              title: "Data Analyst",
              img: dataImg,
              content:
                "Data Analyst I transform raw data into actionable insights through statistical analysis and data visualization. Using tools like Python, SQL, and Power BI, I analyze trends and patterns that drive strategic decision-making. My expertise in data preprocessing, predictive modeling, and business intelligence helps organizations optimize performance and achieve measurable growth.",
            },
            {
              title: "Software Engineer",
              img: softwareImg,
              content:
                "Software Engineer I design, develop, and maintain software solutions with a strong foundation in object-oriented programming. Proficient in Java, C++, and Python, I build scalable applications that meet diverse business needs. My experience in software lifecycle management, debugging, and performance optimization ensures reliable and efficient software products that enhance user engagement and productivity.",
            },
            {
              title: "DevOps Engineer",
              img: devImg,
              content:
                "DevOps Engineer I bridge the gap between development and operations, streamlining workflows through CI/CD pipelines and automation. With expertise in Docker, Kubernetes, and cloud platforms like AWS, I enhance deployment efficiency and scalability. My knowledge of infrastructure as code (IaC) and system monitoring ensures optimal system performance and minimal downtime.",
            },
            {
              title: "Ethical Hacking",
              img: etImg,
              content:
                "Ethical Hacking I proactively identify vulnerabilities in systems through penetration testing and security assessments. My knowledge of ethical hacking methodologies, Kali Linux, and exploit frameworks like Metasploit allows me to test and strengthen defenses. By simulating cyberattacks, I provide organizations with critical insights to enhance security postures and prevent real-world breaches.",
            },
            {
              title: "Machine Learning",
              img: macinImg,
              content:
                "Machine Learning I develop intelligent models that leverage data-driven decision-making using Python, TensorFlow, and scikit-learn. My expertise in supervised and unsupervised learning enables me to build predictive algorithms for applications like image recognition, natural language processing, and anomaly detection. I optimize model performance to drive innovation and automation.",
            },
            {
              title: "Project Manager IT",
              img: proImg,
              content:
                "Project Manager IT I lead IT projects from inception to completion, ensuring seamless execution within scope, time, and budget. My skills in Agile, Scrum, and stakeholder management enable efficient coordination between teams. I focus on risk assessment, resource allocation, and performance tracking to drive project success while maintaining high-quality deliverables and stakeholder satisfaction.",
            },
          ].map((skill, index) => (
            <div
              className="skill-card"
              key={index}
              onClick={() =>
                handleImageClick(skill.title, skill.content)
              }
            >
              <img
                src={skill.img}
                alt={skill.title}
                className="skill-image"
              />
              <h3 className="skill-title">{skill.title}</h3>
            </div>
          ))}
        </div>

        {/* Notification Section */}
        {notification && (
          <div className="notification">
            <h2>{notification.title}</h2>
            <p>{notification.content}</p>
            <button
              className="close-button"
              onClick={closeNotification}
            >
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
