import React, { useState, useEffect } from "react";
import "./About.css";

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import all images
import profileImg1 from "../images/foto1.jpg";
import profileImg2 from "../images/foto2.jpg";
import profileImg3 from "../images/foto3.jpg";
import profileImg4 from "../images/foto4.jpg";
import profileImg5 from "../images/foto5.jpg";

function About() {
  const images = [profileImg1, profileImg2, profileImg3, profileImg4, profileImg5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullText, setShowFullText] = useState(false);

  // Initialize AOS animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });

    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <article className="about-container">
      <h2 className="about-title" data-aos="fade-up">About Me</h2>

      {/* Slideshow Container */}
      <div className="slider-container" data-aos="fade-in">
        <div className="image-wrapper">
          <img src={images[currentIndex]} alt="Profile" className="profile-image fade-in" />
        </div>
      </div>

      <p data-aos="fade-up">
        Hi! I'm <b>Bagas Gilang Ramadhan</b>, a dedicated and passionate <b>Software Developer</b> with expertise in 
        <b> React, Node.js, PHP, and Java</b>. I specialize in both <b>frontend and backend development</b>, 
        and have a strong interest in <b>Cybersecurity, AI, and Machine Learning</b>. 
        I am always eager to explore new technologies and build innovative, scalable, and secure digital solutions.
      </p>

      {showFullText && (
        <>
          <p data-aos="fade-up">
            I am currently in my 8th semester at <b>Universitas Indraprasta</b>, majoring in Informatics Engineering. 
            My technical skills include programming languages such as <b>JavaScript, PHP, Python, and Java</b>, 
            along with expertise in <b>database management, system architecture, and cloud computing (AWS)</b>.
          </p>

          <p data-aos="fade-up">
            Throughout my career, I have worked on several impactful projects:
          </p>
          <ul data-aos="fade-up">
            <li>
              <b>E-commerce Platform:</b> Developed a full-featured online store with a seamless shopping cart, 
              user authentication, and an intuitive admin dashboard.
            </li>
            <li>
              <b>Inventory Management System:</b> Designed and implemented a warehouse inventory solution to streamline 
              stock tracking and product management.
            </li>
            <li>
              <b>Graduation Prediction System (KNN Algorithm):</b> Created an AI-powered system that predicts 
              student graduation rates based on academic performance and key indicators.
            </li>
            <li>
              <b>SEGARIKAN:</b> Built and optimized RESTful APIs using Node.js and PHP for seamless data communication.
            </li>
          </ul>

          <p data-aos="fade-up">
            Apart from software development, I am deeply interested in <b>Cybersecurity</b>, ensuring secure application development 
            by implementing best practices such as data encryption and secure authentication mechanisms. Additionally, I have been 
            actively exploring <b>Machine Learning and AI</b> to develop intelligent and predictive software solutions.
          </p>

          <p data-aos="fade-up">
            My skills also extend to <b>system analysis and design</b>, including expertise in:
          </p>
          <ul data-aos="fade-up">
            <li>Creating <b>Use Case Diagrams</b> to define system interactions.</li>
            <li>Designing <b>Entity-Relationship Diagrams (ERD)</b> for database structuring.</li>
            <li>Developing <b>Flowcharts</b> to visualize software logic.</li>
          </ul>

          <p data-aos="fade-up">
            I thrive in collaborative environments and enjoy working with teams to create impactful solutions. 
            I am always open to new opportunities, challenges, and discussions in the field of technology. 
            If you're looking for a dedicated developer with a passion for innovation, let's connect and explore new possibilities!
          </p>

          {/* 🆕 Tambahan Terbaru */}
          <p data-aos="fade-up">
            Recently, I have also completed several intensive bootcamps and coding programs such as 
            <b> Dicoding Academy</b>, <b> IDCamp by Indosat Ooredoo</b>, <b> Cisco Networking Academy</b>, and <b> Coding Camp 2025</b>, 
            enhancing my proficiency in real-world software engineering practices.
          </p>

          <p data-aos="fade-up">
            Through these experiences, I have sharpened not only my technical skills but also critical 
            <b> soft skills</b> like leadership, problem solving, and teamwork — all of which are essential for succeeding in the tech industry. 
            I strongly believe in continuous improvement and strive to stay up-to-date with the latest trends in 
            <b> AI, DevOps, Cloud Computing, and Cybersecurity</b>.
          </p>
        </>
      )}

      <button className="read-more-btn" onClick={toggleReadMore} data-aos="fade-up">
        {showFullText ? 'Show Less' : 'Read more'}
      </button>
    </article>
  );
}

export default About;
