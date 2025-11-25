import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

// Import Images
import php1 from "../images/php1.jpeg";
import php2 from "../images/php2.jpeg";
import buku1 from "../images/rakbuku.png";
import buku2 from "../images/rakbuku1.png";
import b1 from "../images/backend.png";
import b2 from "../images/b2.jpeg";
import net1 from "../images/ntebeans1.jpeg";
import s1 from "../images/s1.jpeg";
import s2 from "../images/s3.jpeg";
import c1 from "../images/coco.png";
import c2 from "../images/coco1.jpeg";
import i1 from "../images/excel1.jpeg";
import ti from "../images/ti.jpeg";
import ap from "../images/ap.png";
import proyek from "../images/c3.png";
import catatan from "../images/catatan.png";
import catatan2 from "../images/catatan2.png";
import webpri from "../images/por1.png";
import segarikan1 from "../images/segarikan1.png";
import segarikan2 from "../images/segarikan5.png";


const projectData = [
  { title: "Absensi Karyawan Web", description: "A web-based employee attendance system built with PHP.", images: [php1, php2] },
  { title: "Project Capstone Segarikan", description: "Segarikan is a web-based platform designed to directly connect local fishermen, distributors, and consumers in the seafood supply chain. The project's primary goal is to create a digital solution that improves distribution efficiency, price transparency, and the quality of fishery products received by customers..", images: [segarikan1, segarikan2] },
  { title: "Belajar Membuat Front-End Web untuk Pemula", description: "Learning how to create beginner-friendly front-end websites using HTML, CSS, and JavaScript.", images: [buku1, buku2] },
  { title: "Bookshelf API", description: "A backend project to manage book collections using RESTful API with Hapi.js.", images: [b1, b2] },
  { title: "Inventory Gudang", description: "A warehouse management system developed using NetBeans.", images: [net1] },
  { title: "Website Aplikasi Rata-rata Nilai Kelulusan di SDN Jati Waringin X", description: "A prediction system using KNN machine learning and Chart.js.", images: [s1, s2], link: "https://www.youtube.com/watch?v=Se4DLPreYBU" },
  { title: "Penjualan Chocolatos", description: "A product sales application for Chocolatos.", images: [c1, c2] },
  { title: "Membuat Diagram pada Excel", description: "Creating data visualizations and diagrams in Microsoft Excel.", images: [i1] },
  { title: "Portfolio Menggunakan React.js", description: "A personal portfolio website using React.js.", images: [webpri] },
  { title: "Website E-Commerce 'Toko Online'", description: "An e-commerce website with shopping cart and checkout features.", images: [ap], link: "https://www.youtube.com/watch?v=hPsEMfLVoE4&t=1s" },
  { title: "ASP.NET MVC and Web API Integration using C#", description: "A project implementing MVC framework and RESTful API.", images: [proyek] },
  { title: "Notes App", description: "A web-based notes application using Web Components.", images: [catatan] },
  { title: "Web Based Notes Application with RESTful API & Webpack", description: "A modern notes app with RESTful API and Webpack.", images: [catatan2] },
  { title: "Aplikasi Pemrograman Dasar (DBS Coding Camp 2025)", description: "Basic programming final project.", video: "/video/web.mp4" },
  { title: "Aplikasi DIcoding story Restfull API (DBS Coding Camp 2025)", description: "Pengembangan WEB intermediate.", video: "/video/0501 (1).mp4" },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 4200, once: true }); // Initialize AOS with duration for smooth effects
  }, []);

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4 fw-bold" data-aos="fade-up">Projects</h2>
        <div className="row">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 mb-4"
              data-aos="zoom-in" // Zoom-in effect when the card comes into view
              data-aos-delay={index * 100} // Add delay to each project card for sequential animation
            >
              <div className="card shadow-sm project-card">
                <div className="card-body">
                  <h5 className="card-title fw-semibold" data-aos="fade-up" data-aos-delay={index * 200}>
                    {project.title}
                  </h5>
                  <p className="card-text" data-aos="fade-up" data-aos-delay={index * 300}>
                    {project.description}
                  </p>
                  {project.images && (
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                      {project.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={project.title}
                          className="img-thumbnail project-img"
                          data-aos="fade-up"
                          data-aos-delay={index * 400 + imgIndex * 100}
                        />
                      ))}
                    </div>
                  )}
                  {project.video && (
                    <div className="mt-3" data-aos="fade-up">
                      <video width="100%" controls>
                        <source src={project.video} type="video/mp4" />
                        Browser Anda tidak mendukung video tag.
                      </video>
                    </div>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-3"
                      data-aos="fade-up"
                      data-aos-delay={index * 500}
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
