import React from 'react';
import './About.css'; // Jika Anda ingin menambahkan styling khusus untuk komponen ini
import profileImg from '../images/foto2.jpg'; // Pastikan path dan nama file gambar benar

function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      
      {/* Gambar Profil */}
      <div className="image-wrapper">
        <img src={profileImg} alt="Profile" className="profile-image" />
      </div>
      
     {/* Deskripsi Tentang Anda */}
<p>
  Hi, I'm Bagas Gilang Ramadhan, a passionate developer with experience in various technologies such as
  React, Node.js, and more. I specialize in both frontend and backend development, and I have a keen interest
  in cybersecurity. I'm always looking to expand my skills and tackle new challenges in the world of software
  development. My goal is to create innovative solutions that are not only functional but also user-friendly and secure.
</p>
<p>
  I am a student at Universitas Indraprasta, currently in my 7th semester of Informatics Engineering. I have a
  strong foundation in programming languages like JavaScript, PHP, and Java, and I am also skilled in database
  management and system design. Throughout my studies, I've worked on various projects, including e-commerce websites,
  inventory management systems, and web applications, which have honed my skills in both frontend and backend development.
</p>
<p>
  When I'm not coding, I enjoy reading about the latest trends in technology, experimenting with new programming
  languages, and working on personal projects to sharpen my skills. I am particularly interested in artificial intelligence,
  machine learning, and data science, and I'm constantly exploring new ways to integrate these technologies into my work.
</p>
<p>
  Outside of my technical interests, I am also passionate about collaborating with others and contributing to open-source
  projects. I believe that learning from others and sharing knowledge is a key aspect of growing as a developer. My goal is to
  continuously improve and contribute to building a better, more connected world through technology.
</p>
<p>
  In addition to my technical skills, I have experience in problem-solving, teamwork, and project management. Whether it's
  working on academic assignments, collaborating with peers, or contributing to group projects, I always aim to bring a
  positive attitude and strong work ethic to every task.
</p>
<p>
  I look forward to connecting with like-minded professionals and potential collaborators who share my passion for
  technology and innovation.
</p>
    </div>
  );
}

export default About;
