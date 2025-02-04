import React, { useState } from "react";
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

// Import Komponen
import About from "./components/About";
import Pengalaman from "./components/pengalaman";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Certifikat from "./components/certifikat";

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
            A Software Developer who is passionate about designing and building innovative, dynamic, and scalable software solutions to create extraordinary digital experiences.</p>
            <div className="navigation">
              <a href="/about">About</a>
              <a href="/pengalaman">Work Experience</a>
              <a href="/projects">Projects</a>
              <a href="/certifikat">Certifikat</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
          <img src={fotoImg} alt="Bagas Gilang Ramadhan" className="hero-image" />
        </div>

        {/* Skill Section */}
        <div className="skills-section">
  {[
    {
      title: "Fullstack Developer",
      img: programmerImg,
      content: `
        🔹 Frontend: HTML, CSS, JavaScript, React.js for interactive & responsive UI.
🔹 Backend: PHP (Laravel), Node.js (Hapi.js, Express.js) for APIs & data management.
🔹 Database: MySQL, MongoDB for storing & managing data.
🔹 Security: JWT Authentication, password hashing for data protection.

Projects I've Worked On:
✅ E-Commerce Website: Similar to Shopee/Tokopedia (cart, checkout, payment).
✅ Inventory Management: Web-based system for managing warehouse stock.
✅ Real-Time Chat App: WebSocket-based with instant messaging features.
✅ Online Booking System: Online transportation booking platform.
✅ CMS (Content Management System): Dynamic website content management.

🚀 These skills enable me to build applications from scratch to production-ready deployment.
      `,
    },
    {
      title: "Cybersecurity Specialist",
      img: cybersecurityImg,
      content: `
       Experience in Cybersecurity
I have experience in Cybersecurity, gained through official training and competitions that have sharpened my cybersecurity skills.

🔹 Cybersecurity Training – Cisco Networking Academy
I have completed Cybersecurity training at Cisco Networking Academy, offered as a scholarship from IDCamp 2024.
During this training, I learned fundamental to advanced concepts of network security, cyber threat analysis, firewalls, intrusion detection systems (IDS), and cyber attack mitigation.

🔹 Cybersecurity Knowledge & Skills
✅ Network & system security
✅ Penetration testing & vulnerability assessment
✅ Digital forensics & threat analysis
✅ Firewall & IDS implementation
✅ Web application security & data encryption

With this experience, I have a strong understanding of cybersecurity and am ready to implement best practices in data and system protection to prevent cyber threats. 🚀
      `,
    },
    
    {
      title: "Data Analyst",
      img: dataImg,
      content: `
       Experience in Data Analysis
I have experience in data analysis using various tools and technologies and have worked on data science-based projects to support more accurate decision-making.

🔹 Data Analysis with Python & SQL
I am skilled in processing, analyzing, and visualizing data using Python (pandas, NumPy, Matplotlib, Seaborn) and SQL for extracting data from relational databases.

🔹 Projects I Have Worked On
✅ Student Graduation Prediction Using KNN Algorithm

I developed a K-Nearest Neighbor (KNN) model to predict student graduation at SDN Jati Waringin X based on academic performance and other factors.
This model helps schools identify at-risk students and provides early intervention recommendations.
✅ Stock Optimization in Warehouse Inventory System

I analyzed inventory data to optimize stock management in the Inventory Gudang project I developed.
Using forecasting and trend analysis, the system can generate early warnings when stock levels are low.
✅ E-Commerce Purchase Pattern Analysis

In the Toko Online project, I analyzed customer transaction data to identify purchasing patterns using the Apriori Algorithm.
The results were used to enhance marketing strategies and provide more personalized product recommendations.
🔹 Data Analyst Skills
✅ Data wrangling & preprocessing
✅ Exploratory Data Analysis (EDA)
✅ Data visualization with Matplotlib & Seaborn
✅ Basic Machine Learning for predictions
✅ SQL for querying and data extraction

With this experience, I have a strong understanding of data analysis and can apply data-driven insights to support better decision-making. 🚀
      `,
    },
    
    {
      title: "Software Engineering",
      img: softwareImg,
      content: `
        Experience in Software Engineering
I have experience in software development using various technologies and methodologies and have worked on web and desktop applications to meet user and business needs.

🔹 Web Application Development & Backend Development
I have experience in developing web applications using technologies such as PHP, HTML, CSS, JavaScript, and SQL. I have also worked on projects involving API development using Hapi.js and Node.js for backend integration.

🔹 Projects I Have Worked On
✅ Toko Online (E-Commerce Platform)

I was involved in developing an e-commerce application with features such as shopping cart, checkout, and online payments.
The application also includes a product recommendation system based on data analysis that I previously worked on.
✅ Inventory Gudang (Warehouse Management System)

In this project, I designed and developed a warehouse management system that allows users to track goods movement automatically.
The system includes a stock forecasting module to optimize warehouse inventory management.
✅ Student Graduation Prediction Application (KNN Model)

I developed an application to predict student graduation using the K-Nearest Neighbor (KNN) algorithm, allowing schools to provide early intervention for at-risk students.
The application integrates a SQL database for student data storage and Python for predictive analysis.
🔹 Software Engineering Skills
✅ Web application development with PHP, HTML, CSS, JavaScript
✅ Backend development with Node.js and Hapi.js
✅ Database design and implementation with SQL
✅ Object-Oriented Programming (OOP)
✅ Functional programming and scripting with Python
✅ Desktop application development with Java

With this experience, I have strong capabilities in software development and am committed to creating reliable and scalable solutions for business and user needs. 🚀
      `,
    },
    
    {
      title: "DevOps Engineer",
      img: devImg,
      content: `
       Experience in DevOps Engineering
I have experience in automation and infrastructure management to support efficient and high-quality software development. I focus on implementing DevOps practices to enhance collaboration between development and operations teams, ensuring fast and reliable application deployment.

🔹 Infrastructure Management with Cloud & Virtualization
I have experience in managing cloud infrastructure using services like AWS and Mikrotik to support scalable applications. The use of virtualization technology enables more flexible and efficient application implementation.

🔹 Projects I Have Worked On
✅ CI/CD Integration for Toko Online (E-Commerce Platform)

I implemented Continuous Integration (CI) and Continuous Deployment (CD) for the Toko Online application.
Using GitHub Actions, I automated the testing and deployment pipeline to ensure quick application releases without compromising quality.
✅ System Monitoring and Logging in Inventory Gudang

I integrated monitoring and logging tools such as Prometheus and Grafana to monitor the health of the Inventory Gudang system in real time.
The system provides automated alerts in case of failures or performance degradation, allowing issues to be addressed before affecting users.
✅ Optimizing Build and Deployment Processes with Docker

I used Docker to containerize applications, enabling faster and more consistent development and deployment across different environments.
Additionally, I configured Docker Compose to manage and run multiple application containers within a single system.
🔹 DevOps Engineering Skills
✅ Cloud Infrastructure Management (AWS, Virtualization)
✅ CI/CD Pipelines using GitHub Actions, Jenkins, or GitLab CI
✅ Application Containerization with Docker and Kubernetes
✅ Monitoring with Prometheus, Grafana, or ELK Stack
✅ Version Control Management with Git
✅ Configuration Management using Ansible or Terraform

With this experience, I have in-depth knowledge of DevOps and can apply best practices to improve team collaboration and application development efficiency. 🚀
      `,
    },
    
            {
              title: "Ethical Hacking",
              img: etImg,
              content: `
                Experience in Ethical Hacking
I have experience in Ethical Hacking and Cybersecurity, which I have gained through competitions and intensive training.

🔹 TSA Cyber Security 2024 – KOMINFO Competition
I participated in the TSA Cyber Security 2024 competition organized by the Ministry of Communication and Informatics (KOMINFO).
In this competition, I was tested on various aspects of cybersecurity, including penetration testing, digital forensics, cryptography, and network security.

🔹 Ethical Hacking Training – Cisco Networking Academy
I also completed an Ethical Hacking training program at Cisco Networking Academy, hosted by IDCare Bootcamp Jawa Tengah Batch 2.
During this training, I learned techniques in penetration testing, system exploitation, network security, and cyber attack mitigation.

These experiences have strengthened my ability to identify and prevent cyber threats while implementing best practices in system and network security.
I am committed to continuously developing my expertise in Cybersecurity & Ethical Hacking to help create a safer digital environment. 🚀
              `,
            },
            
            {
              title: "Machine Learning",
              img: macinImg,
              content: `
               Experience in Machine Learning
I have experience in applying machine learning algorithms to solve business problems and generate accurate predictions. With a background in data analysis and expertise in technologies like Python, I can build models that provide insights for better decision-making.

🔹 Machine Learning Model Development for Predictions
I have experience in developing and implementing predictive models using algorithms like K-Nearest Neighbor (KNN) to provide data-driven solutions in various contexts.

🔹 Projects I Have Worked On

✅ Student Graduation Prediction Using KNN Algorithm

I developed a K-Nearest Neighbor (KNN) model to predict student graduation outcomes at SDN Jati Waringin X based on academic performance data and other factors.
This model successfully provided accurate predictions, helping the school identify students at risk of failing and allowing for early intervention recommendations.
✅ E-Commerce Purchase Pattern Analysis Using the Apriori Algorithm

In the Toko Online project, I implemented the Apriori algorithm to analyze customer transaction data and identify frequent purchase patterns.
The results were used to optimize marketing strategies and provide personalized product recommendations for customers.
✅ Stock Prediction Using Machine Learning Models

I worked on developing a machine learning model for stock forecasting in the Inventory Gudang system, allowing future demand predictions based on historical data.
This model helped optimize inventory management and reduce the risk of stock shortages.
🔹 Machine Learning Expertise

✅ Implementation of Supervised Learning algorithms such as KNN, Regression, and SVM
✅ Implementation of Unsupervised Learning algorithms such as Clustering and Apriori Algorithm
✅ Proficiency in Python libraries, including scikit-learn, pandas, NumPy, Matplotlib, and Seaborn
✅ Data processing and cleaning (Data Wrangling)
✅ Model evaluation using cross-validation, confusion matrix, and accuracy metrics

With this experience, I have the ability to build and optimize machine learning models that deliver better results in solving business problems and improving data-driven decision-making. 🚀
              `,
            },
            
            {
              title: "Project Manager IT",
              img: proImg,
              content: `
               Experience as an IT Project Manager
As an IT Project Manager, I have experience in planning, managing, and executing technology projects from start to finish. I focus on achieving project goals by leveraging structured project management methodologies and collaborating with technical teams to ensure quality and optimal delivery timelines.

🔹 Technology Project Management & Developer Team Leadership
I have experience in managing development teams and stakeholders to ensure all aspects of the project, including resources, budget, and timelines, run smoothly. I also emphasize effective communication and prepare progress reports for relevant parties.

🔹 Projects I Have Managed

✅ Toko Online (E-Commerce Platform)

I led the development project for an e-commerce application, coordinating between development teams, design teams, and marketing teams to ensure the application met business requirements.
This project included managing shopping carts, checkout systems, online payments, and data-driven marketing strategies that I had previously worked on.
✅ Inventory Gudang (Warehouse Management System)

In the Inventory Gudang project, I was responsible for managing the project timeline, ensuring that stock management and inventory forecasting features were implemented successfully.
I also collaborated with the team to create a scalable and efficient system tailored to client needs.
✅ Student Graduation Prediction Application (KNN Model)

As a Project Manager, I led the team in developing a student graduation prediction application, ensuring that the KNN model and SQL database integration were completed on time with optimal results.
I was also responsible for planning project risks and change management to ensure successful implementation.
🔹 Project Management Expertise

✅ IT project management with Agile and Waterfall methodologies
✅ Team management and stakeholder coordination
✅ Project timeline creation and resource planning
✅ Project budget preparation and risk management
✅ Progress reports and communication with stakeholders
✅ Quality assurance management to ensure the final product meets standards

With this experience, I have the ability to lead technology projects, manage effective teams, and ensure projects are delivered according to goals and within the defined budget. 🚀
              `,
            },
            
          ].map((skill, index) => (
            <div className="skill-card" key={index} onClick={() => handleImageClick(skill.title, skill.content)}>
              <h2>{skill.title}</h2>
              <img src={skill.img} alt={skill.title} className="skill-image" />
            </div>
          ))}
        </div>

        {/* Routes */}
        <div className="content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/pengalaman" element={<Pengalaman />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifikat" element={<Certifikat />} />
          </Routes>
        </div>

        {/* Notifikasi */}
        {notification && (
          <div className="notification">
            {/* Ikon Notifikasi */}
            <div className="notification-icon">
              <i className="fas fa-info-circle"></i> {/* Gunakan font awesome untuk ikon */}
            </div>

            {/* Konten Notifikasi */}
            <div className="notification-content">
              <strong>{notification.title}</strong>
              <p>{notification.content}</p>
            </div>

            {/* Tombol Tutup */}
            <button
              className="notification-close"
              onClick={() => setNotification(null)}
            >
              &times; {/* Tombol silang untuk menutup */}
            </button>
          </div>
        )}
      </div>
    </Router>
  );
}


export default App;
