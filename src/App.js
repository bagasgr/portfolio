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
  {[
    { 
      title: "Fullstack Developer", 
      img: programmerImg, 
      content: "With extensive experience as a Fullstack Developer, I have built and optimized various web applications, from e-commerce platforms to inventory management systems and online transportation services. I specialize in PHP (Native & CodeIgniter), JavaScript, and MySQL, ensuring seamless integration between frontend and backend. My expertise includes designing responsive UI/UX, implementing secure authentication, and optimizing database performance. I take pride in delivering scalable, efficient, and high-performing web applications that enhance user experience and business growth." 
    },
    { 
      title: "Cybersecurity Specialist", 
      img: cybersecurityImg, 
      content: "I have a deep understanding of cybersecurity principles and best practices. I specialize in securing web applications against common threats such as SQL Injection, Cross-Site Scripting (XSS), and Cross-Site Request Forgery (CSRF). I implement encryption techniques, multi-factor authentication (MFA), and security monitoring to protect sensitive data. My knowledge extends to ethical hacking practices, vulnerability assessments, and penetration testing to identify and mitigate security risks before they become threats." 
    },
    { 
      title: "Data Analyst", 
      img: dataImg, 
      content: "I am skilled in data analysis and business intelligence, using SQL to extract valuable insights and optimize decision-making. I have worked with large datasets to identify patterns and trends, leveraging machine learning algorithms such as K-Nearest Neighbors (KNN) for predictive analytics. With expertise in Python, Pandas, and Matplotlib, I create compelling data visualizations that translate raw numbers into actionable business strategies. My analytical mindset enables me to drive efficiency and innovation through data-driven solutions." 
    },
    { 
      title: "Software Engineer", 
      img: softwareImg, 
      content: "As a Software Engineer, I excel in designing, developing, and maintaining robust software applications. I follow industry best practices, including clean code principles, modular programming, and Agile methodologies. My approach involves thorough system analysis using Unified Modeling Language (UML) diagrams, ensuring a structured development process. I have successfully built high-performance applications that enhance productivity, optimize business processes, and meet evolving technological demands." 
    },
    { 
      title: "DevOps Engineer", 
      img: devImg, 
      content: "I have hands-on experience in DevOps, managing server configurations, CI/CD pipelines, and cloud deployments. I have worked with AWS, DigitalOcean, and on-premise hosting solutions, ensuring seamless deployment and scalability. My expertise includes setting up automated build and deployment pipelines, optimizing system performance, and maintaining server security. By integrating DevOps practices, I enhance development efficiency, minimize downtime, and streamline collaboration between development and operations teams." 
    },
    { 
      title: "Ethical Hacking", 
      img: etImg, 
      content: "With a passion for cybersecurity, I have developed a solid foundation in ethical hacking. I understand attack vectors, penetration testing methodologies, and network security protocols. I have conducted security assessments to identify vulnerabilities in web applications and network infrastructures. By utilizing ethical hacking tools and techniques, I help strengthen system defenses, ensuring data protection and compliance with security standards." 
    },
    { 
      title: "Machine Learning", 
      img: macinImg, 
      content: "I have experience in machine learning and artificial intelligence, particularly in classification and predictive analytics. I have applied K-Nearest Neighbors (KNN) and Decision Tree algorithms to solve real-world problems, such as student graduation predictions. Using Python and libraries like Scikit-Learn, I build models that analyze data patterns and provide accurate forecasts. My knowledge of AI enables me to develop intelligent applications that drive automation and enhance decision-making processes." 
    },
    { 
      title: "Project Manager IT", 
      img: proImg, 
      content: "As an IT Project Manager, I excel in leading teams, managing software development lifecycles, and ensuring project success. I have experience in Agile and Scrum methodologies, coordinating between developers, designers, and stakeholders to achieve project goals efficiently. I have successfully delivered multiple software projects on time and within budget by implementing strategic planning, risk management, and continuous progress tracking. My leadership skills help foster collaboration and drive innovation within development teams." 
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
