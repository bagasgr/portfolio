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
import dicoding1 from "./images/dicoding.png";
import digitaltalent from "./images/digitalent.png";
import react from "./images/react.png";
import node from "./images/node.jpeg";
import py from "./images/py.jpeg";
import php from "./images/php.png";
import java from "./images/java.jpeg";
import tensor from "./images/tensor.png";
import rest from "./images/rest.png";
import kali from "./images/kali.jpeg";
import data from "./images/database.jpeg";
import astra1 from "./images/astra1.jpg";
import astra2 from "./images/astra2.jpg";
import astra3 from "./images/astra3.jpg";
import astra4 from "./images/astra4.jpg";
import walk1 from "./images/walk1.jpeg";
import walk2 from "./images/walk2.jpeg";
import walk3 from "./images/walk3.jpeg";
import walk4 from "./images/walk4.jpeg";


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
    "As a Fullstack Developer, I have built various web applications from the ground up, handling both frontend and backend development. I specialize in creating responsive and interactive user interfaces using HTML, CSS, JavaScript, and frameworks like React.js. On the backend, I work with technologies such as Node.js, Express, and PHP, with experience in integrating MySQL and MongoDB databases. My projects include e-commerce platforms, book lending systems, and warehouse inventory applications. I am capable of working independently or as part of a team to deliver efficient, scalable, and user-friendly digital solutions.",
}
,
           {
  title: "Cybersecurity Specialist",
  img: cybersecurityImg,
  content:
    "I have a strong foundation in cybersecurity principles, including knowledge of threats, vulnerabilities, and cyber attacks. My understanding covers the core concepts such as the CIA Triad (Confidentiality, Integrity, Availability), encryption, authentication, and firewalls. I am also familiar with defense techniques against phishing, malware, and social engineering attacks. Additionally, I have studied security policies and ethical considerations in the digital world, ensuring that I approach cybersecurity with both technical skill and professional integrity.",
}
,
            {
  title: "Data Analyst",
  img: dataImg,
  content:
    "As a Data Analyst, I specialize in transforming raw data into meaningful insights using both statistical and machine learning techniques. I have experience working with classification algorithms such as K-Nearest Neighbor (KNN) and Decision Tree, as well as solving linear programming problems using tools like Python and PuLP. I am also proficient in using Microsoft Excel for data cleaning, visualization, and basic analysis. My goal is to support data-driven decision-making by identifying patterns, trends, and actionable insights from complex datasets.",
}
,
          {
  title: "Software Developer",
  img: softwareImg,
  content:
    "As a Software Developer, I have experience building real-world web applications using Java, PHP, HTML, CSS, and JavaScript. I have developed e-commerce websites with features like shopping carts, online order systems, and payment integration. I also created systems such as a book borrowing application and a warehouse inventory system. My focus is on creating user-friendly, functional, and efficient software by following clean code principles and structured programming. I enjoy turning user needs into practical digital solutions.",
}
,
           {
  title: "Data Science",
  img: devImg,
  content:
    "In my journey in Data Science, I have worked on classification and association problems using algorithms like K-Nearest Neighbor (KNN), Decision Tree, and Apriori. I use Python to perform data analysis and modeling, and I’ve also applied linear programming techniques using libraries such as PuLP in Google Colab. My focus is on extracting patterns, building predictive models, and transforming data into valuable insights that support informed decision-making.",
}
,
           {
  title: "Ethical Hacking",
  img: etImg,
  content:
    "As an aspiring ethical hacker, I have explored basic penetration testing techniques using Kali Linux to identify potential vulnerabilities in network systems. With hands-on experience in configuring LAN, MAN, and WAN networks and working with devices like Mikrotik and Cisco, I understand how network infrastructures can be both attacked and secured. My focus is on learning how to ethically test systems to improve their security, and I am continuously deepening my skills in areas such as social engineering, network scanning, and system hardening.",
}
,
         {
  title: "Machine Learning",
  img: macinImg,
  content:
    "In my experience with Machine Learning, I have worked with classification algorithms such as K-Nearest Neighbor (KNN) and Decision Tree to solve real-world problems like student graduation prediction. I use Python and tools like Google Colab to build, train, and evaluate models, gaining insights from data through supervised learning. My focus is on understanding how machines can learn from data and applying that knowledge to create intelligent, data-driven solutions.",
}
,
           {
  title: "AI Engineer",
  img: proImg,
  content:
    "As an AI enthusiast, I have worked with fundamental AI concepts such as K-Nearest Neighbor (KNN) and Decision Tree algorithms to build predictive models. Using Python and platforms like Google Colab, I apply AI techniques to solve real-world problems, such as predicting student graduation outcomes. While I continue to deepen my knowledge in advanced areas like deep learning, my current focus is on developing intelligent solutions through supervised learning and practical AI applications.",
}

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

        
    <section className="activity-section" data-aos="fade-up">
  <h2 className="activity-title">Events I Have Attended</h2>

  {/* Acara 1 */}
  <div className="activity-grid single-event">
    <div className="activity-card full" data-aos="zoom-in">
      <div className="event-images">
        <img src={astra1} alt="ASTRAnouts Conference 2025 - 1" />
        <img src={astra2} alt="ASTRAnouts Conference 2025 - 2" />
        <img src={astra3} alt="ASTRAnouts Conference 2025 - 3" />
        <img src={astra4} alt="ASTRAnouts Conference 2025 - 4" />
      </div>
      <div className="card-content">
        <h3>Topics Discussed:</h3>
        <ul>
          <li>Transformasi Digital di Era AI</li>
          <li>Inovasi Cloud Computing together <strong>Google Cloud, AWS, dan Alibaba</strong></li>
          <li>Collaboration Industri & Education together <strong>Microsoft dan XData Labs</strong></li>
          <li>Development of Indonesian Digital Talent by <strong>Astra Digital</strong></li>
        </ul>
        <p className="facility-highlight">
          I also tried various interactive facilities such as AI simulations, cloud deployment demos, and professional networking with industry figures such as:
          <br /><strong>Najelaa Shihab, Dharma Simorangkir, Paul Soegiantoro, Bebby Sisselo, dan lainnya.</strong>
        </p>
      </div>
    </div>
  </div>

  {/* Acara 2 */}
  <div className="activity-grid single-event">
    <div className="activity-card full" data-aos="zoom-in">
      <div className="event-images">
        <img src={walk1} alt="Pelatihan Walk Interview - 1" />
        <img src={walk2} alt="Pelatihan Walk Interview - 2" />
        <img src={walk3} alt="Pelatihan Walk Interview - 3" />
        <img src={walk4} alt="Pelatihan Walk Interview - 4" />
        
      </div>
      <div className="card-content">
        <h3>Pelatihan Walk Interview – Alumni Digital Talent Kominfo (Bersertifikat BNSP)</h3>
        <ul>
          <li>Simulasi langsung wawancara kerja dengan HR profesional</li>
          <li>Review dan pembenahan CV oleh mentor yang sudah sangat ahli</li>
          <li>Pengenalan etika dan bahasa tubuh saat interview</li>
          <li>Pelatihan komunikasi dan personal branding untuk dunia kerja</li>
          <li>Kesempatan mendapatkan <strong>voucher Virtual Internship</strong></li>
        </ul>
        <p className="facility-highlight">
          Kegiatan ini merupakan inisiatif dari <strong>Kementerian Komunikasi dan Informatika (Kominfo)</strong> 
          yang bekerja sama dengan lembaga pelatihan digital nasional, 
          bertujuan untuk membekali para alumni Bersertifikat BNSP<strong>Digital Talent Scholarship</strong> 
          dengan keterampilan profesional dunia kerja.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="stack-section" data-aos="fade-up">
  <h2>🛠️ Tools & Tech Stack</h2>
  <div className="stack-marquee">
    <div className="stack-track">
      <div className="stack-list">
        <img src={react} alt="React" title="React" />
        <img src={node} alt="Node.js" title="Node.js" />
        <img src={py} alt="Python" title="Python" />
        <img src={php} alt="PHP" title="PHP" />
        <img src={java} alt="Java" title="Java" />
        <img src={tensor} alt="TensorFlow" title="TensorFlow" />
        <img src={rest} alt="REST API" title="REST API" />
        <img src={kali} alt="Kali Linux" title="Kali Linux" />
        <img src={data} alt="Database" title="Database" />
      </div>
      {/* Salinan kedua agar animasi looping */}
      <div className="stack-list">
        <img src={react} alt="React" title="React" />
        <img src={node} alt="Node.js" title="Node.js" />
        <img src={py} alt="Python" title="Python" />
        <img src={php} alt="PHP" title="PHP" />
        <img src={java} alt="Java" title="Java" />
        <img src={tensor} alt="TensorFlow" title="TensorFlow" />
        <img src={rest} alt="REST API" title="REST API" />
        <img src={kali} alt="Kali Linux" title="Kali Linux" />
        <img src={data} alt="Database" title="Database" />
        
      </div>
    </div>
  </div>
</section>


<section className="training-section">
  <h2 className="training-title">has been trusted by:
  </h2>
  <div className="training-marquee">
    <div className="marquee-wrapper">
      <div className="marquee-content">
        <img src={codingcampImg} alt="Coding Camp" />
        <img src={cisco2} alt="Cisco" />
        <img src={idcamp} alt="IDCamp" />
        <img src={komdigi} alt="Kominfo Digital" />
        <img src={evi} alt="Evindo" />
        <img src={dicoding} alt="Dicoding" />
        <img src={dicoding1} alt="Dicoding1" />
        <img src={digitaltalent} alt="digitaltalent" />
      </div>
      <div className="marquee-content">
        <img src={codingcampImg} alt="Coding Camp" />
        <img src={cisco2} alt="Cisco" />
        <img src={idcamp} alt="IDCamp" />
        <img src={komdigi} alt="Kominfo Digital" />
        <img src={evi} alt="Evindo" />
        <img src={dicoding} alt="Dicoding" />
        <img src={dicoding1} alt="Dicoding1" />
        <img src={digitaltalent} alt="digitaltalent" />
      </div>
    </div>
  </div>
</section>


   

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
