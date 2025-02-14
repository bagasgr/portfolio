import React from 'react';
import './About.css'; // Jika Anda ingin menambahkan styling khusus untuk komponen ini
import profileImg from '../images/foto2.jpg'; // Pastikan path dan nama file gambar benar

function About() {
  return (
    <div className="about-container">
      <h2 class="about-title">About Me</h2>

      
      {/* Gambar Profil */}
      <div className="image-wrapper">
        <img src={profileImg} alt="Profile" className="profile-image" />
      </div>
      
      
 <p> Hi! I'm <b>Bagas Gilang Ramadhan</b>, a passionate software developer with expertise in <b>React, Node.js, PHP, and Java</b>. I specialize in both <b>frontend and backend development</b>, with a deep interest in <b>cybersecurity</b>. Constantly eager to learn and explore new challenges, I strive to build innovative, secure, and user-friendly digital solutions. </p> <p> Currently, I am in my 8th semester at <b>Universitas Indraprasta</b>, majoring in Informatics Engineering. My skill set includes programming languages like <b>JavaScript, PHP, Phyton and Java</b>, along with <b>database management and system design</b>. Throughout my studies, I have worked on diverse projects, such as <b>e-commerce websites, inventory management systems, web applications, and machine learning models</b>, allowing me to refine my development skills across various domains. </p> <p> One of my notable projects is a **Graduation Prediction System using the K-Nearest Neighbor (KNN) Algorithm**. This project aims to analyze student data and predict their likelihood of graduation based on key academic performance indicators. By implementing **KNN classification**, I was able to create an efficient model that helps educators and institutions assess student progress and take proactive steps to improve graduation rates. This experience has strengthened my knowledge of **machine learning, data analysis, and predictive modeling**. </p> <p> I am always excited to stay updated with the latest technology trends, experiment with new programming languages, and work on personal projects to sharpen my skills. My interests extend beyond software development to areas like <b>Artificial Intelligence (AI), Machine Learning, and Data Science</b>. I believe these technologies hold immense potential to revolutionize the digital landscape. </p> <p> Beyond coding, I enjoy collaborating with like-minded professionals and contributing to <b>open-source projects</b>. I strongly believe that learning from others and sharing knowledge is essential for personal and professional growth. My goal is to continually improve and contribute to creating a more innovative and connected world through technology. </p> <p> In addition to my technical expertise, I have strong skills in <b>problem-solving, teamwork, and project management</b>. Whether working on academic assignments, collaborating on group projects, or leading development initiatives, I always bring a positive attitude and a strong work ethic to every challenge. </p> <p> I am always open to new opportunities and collaborations with individuals or companies that share my passion for technology and innovation. Feel free to connect with me to discuss potential projects, exchange ideas, or explore new possibilities! </p>
    </div>
  );
}

export default About;
