// src/components/Projects.js
import React from 'react';
import './Projects.css';
import php1 from '../images/php1.jpeg';
import php2 from '../images/php2.jpeg';
import buku1 from '../images/buku1.jpeg';
import buku2 from '../images/buku2.jpeg';
import b1 from '../images/b1.jpeg';
import b2 from '../images/b2.jpeg';
import net1 from '../images/ntebeans1.jpeg';
import s1 from '../images/s1.jpeg';
import s2 from '../images/s3.jpeg';
import c1 from '../images/c1.jpeg';
import i1 from '../images/excel.jpeg';
import ti from '../images/ti.jpeg';





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
                    <p>A bookshelf management system built with JavaScript for the back end. It allows users to manage and display their book collections.</p>
                
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
                    <p>This project uses Python for the backend, including KNN machine learning for predicting average graduation scores, while the front-end is built with HTML, CSS, and JavaScript. It also uses various frameworks like Bootstrap and Chart.js for data visualization.</p>
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
                    <p>Developed an e-commerce website with features like shopping cart, popup confirmation for adding items, and checkout item selection. It integrates payment proof via email and uses high-quality, uninterrupted background images for the design.</p>
                    <img src="ecommerce-skema.jpg" alt="E-Commerce Schema" />
                </div>
                <div className="project-item">
                    <h3>Website Pribadi</h3>
                    <p>A personal website designed to showcase my experience, projects, and achievements in the IT field. This site includes various interactive sections and dynamic content.</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
