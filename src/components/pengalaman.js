import React, { useEffect } from 'react';
import './pengalaman.css';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Memastikan CSS AOS juga diimpor

import gtlImg from '../images/gtl.png';
import swiftImg from '../images/swift.png';
import shopImg from '../images/shopee.png';
import bknImg from '../images/bkn.png';
import coding from'../images/logocodingcamp.jpeg';

const experiences = [
  
  {
    logo: coding ,
    title: "Front end and Backend",
    company: "DBS FOUNDATION AND DICODING",
    type: "6 MOUNTH TRAINING BEASISWA",
    date: "JULY 2025",
    location: "ONLINE",
    description: `CREATE A WEBSITE`
  },
  {
    logo: gtlImg,
    title: "Warehouse Operator",
    company: "GTL",
    type: "Freelancer",
    date: "Sep 2021",
    location: "Cilincing, North Jakarta",
    description: `I have worked in inbound, inventory, and outbound `
  },
  {
    logo: swiftImg,
    title: "Received Data (Inbound)",
    company: "Swift - a Tokopedia Company",
    type: "Freelancer",
    date: "Sep 2021 - Sep 2023 · 2 yrs 1 mo",
    location: "Indonesia (Remote)",
    description: `I have worked in inbound, inventory, and outbound `
  },
  {
    logo: shopImg,
    title: "Warehouse Operator",
    company: "Shopee",
    type: "Freelancer",
    date: "Dec 2020 - Jul 2021 · 8 mos",
    location: "Indonesia (On-site)",
    description: `I worked in Shopee's warehouse, rotating between different divisions: OPERATOR GUDANG `
  },
  {
    logo: bknImg,
    title: "Data Archiving",
    company: "National Civil Service Agency (BKN)",
    type: "Internship",
    date: "Sep 2018 - Nov 2018 · 3 mos",
    location: "Indonesia (On-site)",
    description: `During my internship (PKL), I assisted in data entry and organized documents of both active and inactive government officials.`
  }
];

const Pengalaman = () => {
  // Inisialisasi AOS setelah komponen dipasang
  useEffect(() => {
    AOS.init({ duration: 5000, once: true }); // Efek animasi terjadi hanya sekali saat elemen masuk layar
  }, []);

  return (
    <div className="experience-container">
      {experiences.map((exp, index) => (
        <div key={index} className="experience-card" data-aos="fade-up">
          <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
          <h2 data-aos="fade-right">{exp.title}</h2>
          <h3 data-aos="fade-left">{exp.company} · {exp.type}</h3>
          <p data-aos="fade-up"><strong>{exp.date}</strong></p>
          <p data-aos="fade-down"><em>{exp.location}</em></p>
          <p data-aos="zoom-in">{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Pengalaman;
