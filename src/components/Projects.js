// src/components/Projects.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
import catatan from "../images/catatan.png";
import catatan2 from "../images/catatan2.png";

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4 fw-bold">Projects</h2>
        <div className="row">
          {projectData.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm project-card">
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    {project.images.map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt={`project-${index}`}
                        className="img-thumbnail project-img"
                      />
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-3"
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

const projectData = [
  {
    title: "Absensi Karyawan Web",
    description: "A web-based employee attendance system built with PHP.",
    images: [php1, php2],
  },
  {
    title: "Belajar Membuat Front-End Web untuk Pemula",
    description: "Learning how to create beginner-friendly front-end websites using HTML, CSS, and JavaScript.",
    images: [buku1, buku2],
  },
  {
    title: "Bookshelf API",
    description: "A backend project to manage book collections using RESTful API with Hapi.js.",
    images: [b1, b2],
  },
  {
    title: "Inventory Gudang",
    description: "A warehouse management system developed using NetBeans.",
    images: [net1],
  },
  {
    title: "Website Aplikasi Rata-rata Nilai Kelulusan di SDN Jati Waringin X",
    description: "A prediction system using KNN machine learning and Chart.js.",
    images: [s1, s2],
    link: "https://www.youtube.com/watch?v=Se4DLPreYBU",
  },
  {
    title: "Penjualan Chocolatos",
    description: "A product sales application for Chocolatos.",
    images: [c1],
  },
  {
    title: "Membuat Diagram pada Excel",
    description: "Creating data visualizations and diagrams in Microsoft Excel.",
    images: [i1],
  },
  {
    title: "Portfolio Menggunakan React.js",
    description: "A personal portfolio website using React.js.",
    images: [ti],
  },
  {
    title: "Website E-Commerce 'Toko Online'",
    description: "An e-commerce website with shopping cart and checkout features.",
    images: [ap],
    link: "https://www.youtube.com/watch?v=hPsEMfLVoE4&t=1s",
  },
  {
    title: "ASP.NET MVC and Web API Integration using C#",
    description: "A project implementing MVC framework and RESTful API.",
    images: [proyek],
  },
  {
    title: "Aplikasi Catatan",
    description: "A web-based notes application using Web Components.",
    images: [catatan],
  },
  {
    title: "Aplikasi Catatan Berbasis Web dengan RESTful API & Webpack",
    description: "A modern notes app with RESTful API and Webpack.",
    images: [catatan2],
  },
];

export default Projects;
