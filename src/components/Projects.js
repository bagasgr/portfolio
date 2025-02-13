// src/components/Projects.js
import React from "react";
import "./Projects.css";
import php1 from "../images/php1.jpeg";
import php2 from "../images/php2.jpeg";
import buku1 from "../images/buku1.jpeg";
import buku2 from "../images/buku2.jpeg";
import b1 from "../images/b1.jpeg";
import b2 from "../images/b2.jpeg";
import net1 from "../images/ntebeans1.jpeg";
import s1 from "../images/s1.jpeg";
import s2 from "../images/s3.jpeg";
import c1 from "../images/c1.jpeg";
import i1 from "../images/excel.jpeg";
import ti from "../images/ti.jpeg";
import ap from "../images/ap.png";
import proyek from "../images/c3.png";
import proyek1 from "../images/c4.png";
import catatan from "../images/catatan.png";
import catatan2 from "../images/catatan2.png";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Absensi Karyawan Web</h3>
          <p>A web-based employee attendance system built with PHP. This system allows for tracking employee attendance with features like login, dashboard, and real-time tracking.</p>
          <img src={php1} alt="project1" className="foto project1" />
          <img src={php2} alt="project1" className="foto project1" />
        </div>
        <div className="project-item">
          <h3>Belajar Membuat Front-End Web untuk Pemula</h3>
          <p>Learning how to create beginner-friendly front-end websites using HTML, CSS, and JavaScript.</p>
          <div>
            <img src={buku1} alt="project2" className="foto project2" />
            <img src={buku2} alt="project2" className="foto project2" />
          </div>
        </div>
        <div className="project-item">
          <h3>Bookshelf API</h3>
          <p>Bookshelf API is a backend project developed to manage book collections using RESTful API. This project allows users to perform CRUD (Create, Read, Update, Delete) operations on book data, which is stored in JSON-based storage.

Key Features:
Adding Books - Users can add new books with information such as title, author, year of publication, and whether they have finished reading or not.
Viewing Book List - The API provides an endpoint to view all stored books, with the option to filter by read status.
Viewing Book Details - Users can view detailed information of a particular book based on its ID.
Updating Books - The API allows updating book data based on the submitted book ID.
Deleting Books - Users can delete specific books from the list based on their ID.
Technology Used:
Hapi.js as a Node.js-based backend framework for building RESTful APIs.
JSON-based Storage for storing book data in JSON form.
Middleware to validate input data and handle errors.</p>

          <img src={b1} alt="project3" className="foto project3" />
          <img src={b2} alt="project3" className="foto project3" />
        </div>
        <div className="project-item">
          <h3>Inventory Gudang</h3>
          <p>A warehouse management system developed using NetBeans. It helps manage stock and track goods entering and exiting the warehouse. Related to e-commerce platforms like Shopee.</p>
          <img src={net1} alt="project4" className="foto project4" />
        </div>
        <div className="project-item">
          <h3>Website Aplikasi Rata-rata Nilai Kelulusan di SDN Jati Waringin X</h3>
          <p>
            This project uses Python for the backend, including KNN machine learning for predicting average graduation scores, while the front-end is built with HTML, CSS, and JavaScript. It also uses various frameworks like Bootstrap and
            Chart.js for data visualization.
          </p>
          <div>
            <img src={s1} alt="project5" className="foto project5" />
            <img src={s2} alt="project5" className="foto project5" />
          </div>
        </div>
        <div className="project-item">
          <h3>Penjualan Chocolatos</h3>
          <p>A product sales application for Chocolatos. This app allows users to view details and make purchases from a store selling Chocolatos.</p>
          <img src={c1} alt="project6" className="foto project6" />
        </div>
        <div className="project-item">
          <h3>Membuat Diagram pada Excel</h3>
          <p>Creating data visualizations and diagrams in Microsoft Excel. This project involves analyzing and presenting data in chart format using Excel’s built-in features.</p>
          <img src={i1} alt="project7" className="foto project7" />
        </div>
        <div className="project-item">
          <h3>Portfolio Menggunakan React.js</h3>
          <p>Developed a personal portfolio website using React.js, showcasing projects and skills in a modern, interactive layout.</p>
          <img src={ti} alt="project8" className="foto project8" />
        </div>
        <div className="project-item">
          <h3>Website E-Commerce 'Toko Online'</h3>
          <p>
            Developed an e-commerce website with features like shopping cart, popup confirmation for adding items, and checkout item selection. It integrates payment proof via email and uses high-quality, uninterrupted background images for
            the design.
          </p>

          <a href="https://www.youtube.com/watch?v=hPsEMfLVoE4&t=1s" target="_blank" rel="noopener noreferrer">
            <img src={ap} alt="E-Commerce Schema" className="foto project9" />
          </a>
        </div>
        <div className="project-item">
          <h3>ASP.NET MVC and Web API Integration using C#</h3>
          <p>🔑 Project Main Features:
1️⃣ MVC Framework: Implements Model-View-Controller architecture to produce an interactive and well-organized user interface.
2️⃣ RESTful API: Provides API endpoints for CRUD (Create, Read, Update, Delete) operations that can be accessed by external systems.
3️⃣ Engaging UI: Leverages CSS and JavaScript to enhance user experience.
4️⃣ Best Practices: This project was designed following the principles of clean architecture and scalability.
</p>
          <img src={proyek} alt="project4" className="foto project4" />
        </div>

        <div className="project-item">
          <h3>Aplikasi Catatan</h3>
          <p>Notes App
Notes App
📝 Project Name:
Notes App

📖 Summary:
This Notes application is a web-based application that allows users to write, view, and delete notes. This project uses Web Components to build a more modular, structured, and reusable UI.

🎯 Project Goals:
Break down the UI into reusable components using Web Components.
Create a clean & organized code structure, separating input forms, note lists, and individual note views.
Use Custom Events for communication between components without direct dependencies.
Increase application flexibility & scalability for further development.
📌 Key Features
✅ Displays a list of notes
✅ Added new notes
✅ Delete notes
✅ Responsive and simple design
✅ Using Web Components for UI separation

🔹 Technology Used
🟣 HTML5 – For page structure
🔵 CSS3 – For component styling
🟡 JavaScript (ES6) – For interactivity and data management
🟢 Web Components – For UI modularization with customElements</p>
          <div>
            <img src={catatan} alt="project" className="foto project" />
            
          </div>
        </div>

        <div className="project-item">
          <h3>Aplikasi Catatan Berbasis Web dengan RESTful API & Webpack</h3>
          <p>I have just completed the development of a Web-Based Notes Application that implements RESTful API, Webpack, and CSS Grid. 🎯

🔥 Key Features:
✅ Notes Management – Dynamically add, delete, and archive notes.
✅ Integrated with RESTful API – Uses Fetch API to retrieve, add, and delete data.
✅ Loading Indicator – Displays data loading status for a more responsive experience.
✅ Module Management with Webpack – Optimizes frontend resources using a module bundler.
✅ Responsive Layout with CSS Grid & Flexbox – Organizes note lists using modern layout techniques for a clean and flexible design.

🛠 Technologies Used:
🔹 JavaScript (ES6+): Handles events, API fetching, and DOM manipulation.
🔹 Webpack: A module bundler to optimize CSS & JS files.
🔹 CSS Grid & Flexbox: Ensures a modern and responsive layout.
🔹 RESTful API: Enables communication between the frontend and backend for data management.

🎯 Project Goals:
This project aims to enhance my experience in developing modern, modular, and efficient web applications. By using Webpack, I can better manage dependencies and optimize application performance.

💡 Challenges & Learnings:
💪 Optimizing code with Webpack to ensure proper CSS loading.
💪 Adjusting layout with CSS Grid for a clean and responsive design.
💪 Using the Fetch API with asynchronous functions for a smoother user experience.

🚀 This project has helped me improve my skills in modern web development and application performance optimization. I am excited to apply these technologies to future projects!</p>
          <div>
            <img src={catatan2} alt="project2" className="foto project2" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
