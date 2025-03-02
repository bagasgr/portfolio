import React, { useState, useEffect } from "react";
import "./About.css";

// Import semua foto
import profileImg1 from "../images/foto1.jpg";
import profileImg2 from "../images/foto2.jpg";
import profileImg3 from "../images/foto3.jpg";
import profileImg4 from "../images/foto4.jpg";
import profileImg5 from "../images/foto5.jpg";

function About() {
  const images = [profileImg1, profileImg2, profileImg3, profileImg4, profileImg5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullText, setShowFullText] = useState(false);

  // Fungsi untuk pindah ke gambar berikutnya
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Fungsi untuk pindah ke gambar sebelumnya
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-slide setiap 3 detik
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  // Fungsi untuk toggle Read More
  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <article className="about-container">
      <h2 className="about-title">About Me</h2>

      {/* Slideshow Container */}
      <div className="slider-container">
       
        <div className="image-wrapper">
          <img src={images[currentIndex]} alt="Profile" className="profile-image fade-in" />
        </div>
       
      </div>

      <p>
        Hi! I'm <b>Bagas Gilang Ramadhan</b>, a dedicated and passionate <b>Software Developer</b> with expertise in 
        <b>React, Node.js, PHP, and Java</b>. I specialize in both <b>frontend and backend development</b>, 
        and have a strong interest in <b>Cybersecurity, AI, and Machine Learning</b>. 
        I am always eager to explore new technologies and build innovative, scalable, and secure digital solutions.
      </p>

      {showFullText && (
        <>
          <p>
            I am currently in my 8th semester at <b>Universitas Indraprasta</b>, majoring in Informatics Engineering. 
            My technical skills include programming languages such as <b>JavaScript, PHP, Python, and Java</b>, 
            along with expertise in <b>database management, system architecture, and cloud computing (AWS)</b>.
          </p>

          <p>
            Throughout my career, I have worked on several impactful projects:
          </p>
          <ul>
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
              <b>API Development:</b> Built and optimized RESTful APIs using Node.js and PHP for seamless data communication.
            </li>
          </ul>

          <p>
            Apart from software development, I am deeply interested in <b>Cybersecurity</b>, ensuring secure application development 
            by implementing best practices such as data encryption and secure authentication mechanisms. Additionally, I have been 
            actively exploring <b>Machine Learning and AI</b> to develop intelligent and predictive software solutions.
          </p>

          <p>
            My skills also extend to <b>system analysis and design</b>, including expertise in:
          </p>
          <ul>
            <li>Creating <b>Use Case Diagrams</b> to define system interactions.</li>
            <li>Designing <b>Entity-Relationship Diagrams (ERD)</b> for database structuring.</li>
            <li>Developing <b>Flowcharts</b> to visualize software logic.</li>
          </ul>

          <p>
            I thrive in collaborative environments and enjoy working with teams to create impactful solutions. 
            I am always open to new opportunities, challenges, and discussions in the field of technology. 
            If you're looking for a dedicated developer with a passion for innovation, let's connect and explore new possibilities!
          </p>
        </>
      )}

      <button className="read-more-btn" onClick={toggleReadMore}>
        {showFullText ? 'Show Less' : 'Read more'}
      </button>
    </article>
  );
}

export default About;
