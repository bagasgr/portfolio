import React from "react";
import "./certifikat.css";
import ciscoLogo from "../images/cisco.png";
import dic from "../images/dico.jpeg";
import dicodinglogo from "../images/dicoding.jpeg";
import digitalentlogo from "../images/digitalent.png";
import kominfologo from "../images/kominfo.jpeg";
import dqlablogo from "../images/dqlab.png";
import microsoft from "../images/microsoft.png";

// Data sertifikat dalam array untuk efisiensi
const certificates = [
  {
    logo: microsoft,
    title: "elevAIte with Dicoding Program",
    issuer: "Microsoft",
    date: "17 February 2025",
    credentialUrl: "/pdf/kelulusan.pdf",
  },
  {
    logo: ciscoLogo,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Jan 2025",
    credentialUrl:
      "https://www.credly.com/badges/bf25ef93-68f8-4626-9b1c-c24eab038010/linked_in_profile",
  },
  {
    logo: microsoft,
    title: "Fundamentals of Machine Learning",
    issuer: "Microsoft",
    date: "31 January 2025",
    credentialUrl: "/pdf/microsoft.pdf",
  },
  {
    logo: dicodinglogo,
    title: "Belajar Back-End Pemula dengan JavaScript",
    issuer: "Dicoding Indonesia",
    date: "24 Januari 2025",
    expiration: "24 Januari 2028",
    credentialId: "GRX53LRLYZ0M",
    credentialUrl: "https://www.dicoding.com/users/bagas_gilang_ramadha/academies",
  },
  {
    logo: dicodinglogo,
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    credentialUrl: "https://www.dicoding.com/users/bagas_gilang_ramadha/academies",
  },
  {
    logo: digitalentlogo,
    title: "Keamanan Siber untuk Wirausaha",
    issuer: "Digital Talent Scholarship",
    date: "Sep 2024",
    credentialId: "1969485850-115",
    credentialUrl: "https://digitalent.komdigi.go.id/cek-sertifikat#",
  },
  {
    logo: dqlablogo,
    title: "Guide to Learn R with AI at DQLab",
    issuer: "DQLab",
    credentialUrl: "s://academy.dqlab.id/Certificate_check/result/DQLABBGINRADQUSR/NONTRACK#mycertificate",
  },

  {
    logo: kominfologo,
    title: "Cybersecurity for Entrepreneurs",
    issuer: "DQLab",
    credentialUrl: "/pdf/Sertifikat_BAGAS GILANG RAMADHAN_Keamanan Siber untuk Wirausaha (1).pdf",
  }
];

const Certifikat = () => {
  return (
    <section className="sertifikat-container">
      <h1>Sertifikat dan Lisensi</h1>
      <div className="sertifikat-list">
        {certificates.map((cert, index) => (
          <div className="sertifikat-item" key={index}>
            <img
              src={cert.logo}
              alt={`Logo ${cert.issuer}`}
              className="sertifikat-logo"
            />
            <div className="sertifikat-details">
              <h2>{cert.title}</h2>
              <p>{cert.issuer} | Diterbitkan {cert.date}</p>
              {cert.expiration && <p>Kedaluwarsa: {cert.expiration}</p>}
              {cert.credentialId && <p>ID Kredensial: {cert.credentialId}</p>}
              <a
                href={cert.credentialUrl}
                className="credential-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tampilkan kredensial
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifikat;
