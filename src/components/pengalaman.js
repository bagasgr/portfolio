import React from 'react';
import './pengalaman.css';



import gtlImg from '../images/gtl.png';
import swiftImg from '../images/swift.png';
import shopImg from '../images/shopee.png';
import bknImg from '../images/bkn.png';


const experiences = [
  {
    logo: gtlImg,
    title: "Operator Warehouse",
    company: "GTL",
    type: "Pekerja Lepas",
    date: "Sep 2021 ",
    location: "Cilincing, Jakarta Utara",
    description: `Saya pernah di divisi inbound, inventory, dan outbound:
      - Inbound: Saya melakukan receveid data yaitu menghitung serta mencocokkan barang melalui link Tokopedia untuk barang yang baru datang dari supplier yang akan dimasukkan ke gudang.
      - Inventory: Saya melakukan putway atau barang yang sudah di receveid saya susun dan mendata barang pada rak yang kosong.
      - Outbound: Picker: mengambil barang pesanan, Console: memisahkan barang yang diambil oleh picker, Checker: memastikan barang benar sesuai pesanan, Packer: mengepack barang, Dispatch: memisahkan barang ke ekspedisi yang sudah ditentukan serta membuat surat jalan.`
  },
  {
    logo: swiftImg,
    title: "Receveid Data (Inbound)",
    company: "Swift - a Tokopedia Company",
    type: "Pekerja Lepas",
    date: "Sep 2021 - Sep 2023 · 2 thn 1 bln",
    location: "Indonesia (Jarak Jauh)",
    description: `Saya pernah di divisi inbound, inventory, dan outbound:
      - Inbound: Melakukan receveid data untuk barang baru.
      - Inventory: Mendata dan menyusun barang pada rak kosong.
      - Outbound: Mengambil barang pesanan, memisahkan, memastikan, dan mengepack barang.`
  },
  {
    logo: shopImg,
    title: "Operator Warehouse",
    company: "Shopee",
    type: "Pekerja Lepas",
    date: "Des 2020 - Jul 2021 · 8 bln",
    location: "Indonesia (Di lokasi)",
    description: `Saya pernah bekerja di warehouse Shopee, dengan divisi yang berpindah-pindah:
      - Inbound: Checker dan quantity control.
      - Inventory: Mencarikan stok barang dan mengecek perbedaan data.
      - Outbound: Mengambil barang pesanan, mengepack barang.`
  },
  {
    logo: bknImg ,
    title: "Arsip Data",
    company: "Badan Kepegawaian Negara",
    type: "Magang",
    date: "Sep 2018 - Nov 2018 · 3 bln",
    location: "Indonesia (Di lokasi)",
    description: `Saat praktek kerja lapangan (PKL), saya membantu mendata di komputer dan menaruh dokumen para menteri yang aktif maupun tidak aktif.`
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

