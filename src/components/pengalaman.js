import React from 'react';
import './pengalaman.css';



import gtlImg from '../images/gtl.png';
import swiftImg from '../images/swift.png';
import shopImg from '../images/shopee.png';
import bknImg from '../images/bkn.png';


const experiences = [
  {
    logo: gtlImg,
    title: "Warehouse Operator",
    company: "GTL",
    type: "Freelancer",
    date: "Sep 2021",
    location: "Cilincing, North Jakarta",
    description: `I have worked in inbound, inventory, and outbound divisions:
      - Inbound: Performed received data tasks, counting and verifying items via Tokopedia links for newly arrived goods from suppliers to be stored in the warehouse.
      - Inventory: Conducted putaway by organizing received items and recording them on empty racks.
      - Outbound: Picker: Retrieved ordered items. Console: Separated picked items. Checker: Ensured items matched the orders. Packer: Packed the items. Dispatch: Sorted items for designated shipping expeditions and prepared delivery notes.`
  },
  {
    logo: swiftImg,
    title: "Received Data (Inbound)",
    company: "Swift - a Tokopedia Company",
    type: "Freelancer",
    date: "Sep 2021 - Sep 2023 · 2 yrs 1 mo",
    location: "Indonesia (Remote)",
    description: `I have worked in inbound, inventory, and outbound divisions:
      - Inbound: Conducted received data tasks for newly arrived goods.
      - Inventory: Recorded and organized items on empty racks.
      - Outbound: Retrieved, separated, verified, and packed ordered items.`
  },
  {
    logo: shopImg,
    title: "Warehouse Operator",
    company: "Shopee",
    type: "Freelancer",
    date: "Dec 2020 - Jul 2021 · 8 mos",
    location: "Indonesia (On-site)",
    description: `I worked in Shopee's warehouse, rotating between different divisions:
      - Inbound: Performed checking and quantity control.
      - Inventory: Located stock items and verified data discrepancies.
      - Outbound: Retrieved and packed ordered items.`
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
  return (
    <div className="experience-container">
      {experiences.map((exp, index) => (
        <div key={index} className="experience-card">
          <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
          <h2>{exp.title}</h2>
          <h3>{exp.company} · {exp.type}</h3>
          <p><strong>{exp.date}</strong></p>
          <p><em>{exp.location}</em></p>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Pengalaman;

