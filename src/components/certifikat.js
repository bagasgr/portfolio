import React, { useEffect } from "react";
import "./certifikat.css";
import ciscoLogo from "../images/cisco.png";
import dic from "../images/dico.jpeg";
import dicodinglogo from "../images/dicoding.jpeg";
import digitalentlogo from "../images/digitalent.png";
import kominfologo from "../images/kominfo.jpeg";
import dqlablogo from "../images/dqlab.png";
import microsoft from "../images/microsoft.png";
import coding from "../images/logocodingcamp.jpeg";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

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
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    issuer: "Dicoding Indonesia",
    date: "10 Februari 2025",
    expiration: "10 Februari 2028",
    credentialId: "98XWEGY1WXM3",
    credentialUrl: "https://www.dicoding.com/certificates/98XWEGY1WXM3",
  },
  {
    logo: dicodinglogo,
    title: "Belajar Pengembangan Web Intermediate",
    issuer: "Dicoding Indonesia",
    date: "29 April 2025",
    expiration: "29 April 2028",
    credentialId: "07Z6391LJZQR",
    credentialUrl: "https://www.dicoding.com/certificates/07Z6391LJZQR",
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
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    date: "30 April 2025",
    expiration: "30 April 2028",
    credentialId: "GRX53RVW3Z0M",
    credentialUrl: "https://www.dicoding.com/certificates/GRX53RVW3Z0M",
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
    logo: dicodinglogo,
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    credentialUrl: "https://www.dicoding.com/users/bagas_gilang_ramadha/academies",
  },
  {
    logo: ciscoLogo,
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "Jan 2025",
    credentialUrl: "/pdf/_certificate_bagasiyain205-gmail-com_efacd468-6f66-4337-83d0-4769165658bd (1).pdf",
  },
  {
    logo: dqlablogo,
    title: "Guide to Learn Python with AI at DQLab",
    issuer: "DQLab",
    credentialUrl: "https://academy.dqlab.id/main/rachievement",
  },


  {
    logo: dicodinglogo,
    title: "Belajar Fundamental Front-End Web Development",
    issuer: "Dicoding Indonesia",
    date: "12 Februari 2025",
    expiration: "12 Februari 2029",
    credentialId: "4EXGV494GXRL",
    credentialUrl: "https://www.dicoding.com/certificates/4EXGV494GXRL",
  },

  {
    logo: dicodinglogo,
    title: "Belajar Dasar Data Science",
    issuer: "Dicoding Indonesia",
    date: "11 Oktober 2024",
    expiration: "11 Oktober 2027",
    credentialId: "2VX3466GNZYQ",
    credentialUrl: "https://www.dicoding.com/certificates/2VX3466GNZYQ",
  },

  {
    logo: ciscoLogo,
    title: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    date: "14 Sep 2024",
    credentialUrl:
      "https://www.credly.com/badges/fde140e7-ac5b-43fc-81db-bed89c1c3030/linked_in_profile",
  },

  {
    logo: microsoft,
    title: "Fundamental AI Concepts",
    issuer: "Microsoft",
    date: "16 February , 2025",
    credentialUrl: "/pdf/Achievements1 - bagasgilangramadhan-0878 _ Microsoft Learn.pdf",
  },

  {
    logo: microsoft,
    title: "Track model training in Jupyter notebooks with MLflow",
    issuer: "Microsoft",
    date: " 27 February , 2025",
    credentialUrl: "/pdf/Achievements 2- bagasgilangramadhan-0878 _ Microsoft Learn.pdf",
  },

  {
    logo: dicodinglogo,
    title: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding Indonesia",
    date: "13 Februari 2025",
    expiration: "13 Februari 2028",
    credentialId: "QLZ93R64DZ5D",
    credentialUrl: "https://www.dicoding.com/certificates/QLZ93R64DZ5D",
  },

  {
    logo: kominfologo,
    title: "Cybersecurity for Entrepreneurs",
    issuer: "DQLab",
    credentialUrl: "/pdf/Sertifikat_BAGAS GILANG RAMADHAN_Keamanan Siber untuk Wirausaha (1).pdf",
  },
  {
    logo: coding,
    title: "Financial Literacy 101",
    issuer: "Coding Camp powered by DBS Foundation",
    date: "25 April 2025",
    expiration: "25 April 2028",
    credentialId: "N9ZO91EGDXG5",
    credentialUrl: "https://www.dicoding.com/certificates/N9ZO91EGDXG5",
  },

  
];

const Certifikat = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({ duration: 5000, once: true });
  }, []);

  return (
    <section className="sertifikat-container">
      <h1>Sertifikat dan Lisensi</h1>
      <div className="sertifikat-list">
        {certificates.map((cert, index) => (
          <div
            className="sertifikat-item"
            key={index}
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} // Alternate fade direction for variety
            data-aos-delay={index * 100} // Add delay to each item for sequential animation
          >
            <img
              src={cert.logo}
              alt={`Logo ${cert.issuer}`}
              className="sertifikat-logo"
              data-aos="zoom-in" // Zoom-in effect on the logo
            />
            <div className="sertifikat-details" data-aos="fade-up"> {/* Add fade-up effect to details */}
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
