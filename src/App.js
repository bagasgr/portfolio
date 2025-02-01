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
              A Software Engineer passionate about designing and building modern, dynamic, and scalable software solutions.
            </p>
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
        🔹 **Frontend**: HTML, CSS, JavaScript, React.js untuk UI interaktif & responsif.
        🔹 **Backend**: PHP (Laravel), Node.js (Hapi.js, Express.js) untuk API & manajemen data.
        🔹 **Database**: MySQL, MongoDB untuk menyimpan & mengelola data.
        🔹 **Keamanan**: JWT Authentication, hashing password untuk perlindungan data.
       

        **Project yang Pernah Dikerjakan**:
        ✅ **E-Commerce Website**: Seperti Shopee/Tokopedia (cart, checkout, pembayaran).
        ✅ **Inventory Management**: Web-based untuk mengelola stok barang gudang.
        ✅ **Real-Time Chat App**: WebSocket-based dengan fitur pesan instan.
        ✅ **Online Booking System**: Pemesanan transportasi online.
        ✅ **CMS (Content Management System)**: Mengelola konten website secara dinamis.

        🚀 Keahlian ini memungkinkan saya membangun aplikasi dari awal hingga siap produksi.
      `,
    },
    {
      title: "Cybersecurity Specialist",
      img: cybersecurityImg,
      content: `
        **Pengalaman di Bidang Cybersecurity**  
    
        Saya memiliki pengalaman dalam bidang **Cybersecurity**, yang saya peroleh melalui pelatihan resmi dan kompetisi yang mengasah keterampilan keamanan siber.  
    
        🔹 **Pelatihan Cybersecurity – Cisco Networking Academy**  
        Saya telah mengikuti **pelatihan Cybersecurity di Cisco Networking Academy** secara gratis melalui **beasiswa dari IDCamp 2024**.  
        Dalam pelatihan ini, saya mempelajari konsep dasar hingga lanjutan tentang **keamanan jaringan, analisis ancaman siber, firewall, intrusion detection system (IDS), serta mitigasi serangan siber**.  
    
        🔹 **Pengetahuan & Keahlian dalam Cybersecurity**  
        ✅ Keamanan jaringan & sistem  
        ✅ Penetration testing & vulnerability assessment  
        ✅ Digital forensics & threat analysis  
        ✅ Firewall & IDS implementation  
        ✅ Keamanan aplikasi web & enkripsi data  
    
        Dengan pengalaman ini, saya memiliki pemahaman yang kuat tentang keamanan siber dan siap menerapkan **best practices dalam perlindungan data dan sistem** untuk mencegah ancaman siber. 🚀
      `,
    },
    
    {
      title: "Data Analyst",
      img: dataImg,
      content: `
        **Pengalaman di Bidang Data Analyst**  
    
        Saya memiliki pengalaman dalam **analisis data** menggunakan berbagai tools dan teknologi, serta telah mengerjakan proyek berbasis **data science** untuk pengambilan keputusan yang lebih akurat.  
    
        🔹 **Analisis Data dengan Python & SQL**  
        Saya memiliki keahlian dalam **mengolah, menganalisis, dan memvisualisasikan data** menggunakan Python (pandas, NumPy, Matplotlib, Seaborn) serta SQL untuk ekstraksi data dari database relasional.  
    
        🔹 **Proyek yang Pernah Saya Kerjakan**  
        ✅ **Prediksi Kelulusan Siswa dengan Algoritma KNN**  
           - Saya mengembangkan model **K-Nearest Neighbor (KNN)** untuk memprediksi kelulusan siswa di **SDN Jati Waringin X** berdasarkan dataset nilai akademik dan faktor lainnya.  
           - Model ini membantu sekolah dalam mengidentifikasi siswa yang berisiko tidak lulus dan memberikan rekomendasi intervensi lebih dini.  
    
        ✅ **Optimasi Stok Barang dalam Sistem Inventory Gudang**  
           - Saya menganalisis data persediaan barang untuk mengoptimalkan **manajemen stok** dalam proyek **Inventory Gudang** yang saya kembangkan.  
           - Dengan **forecasting dan analisis tren**, sistem dapat memberikan peringatan dini saat stok mulai menipis.  
    
        ✅ **Analisis Pola Pembelian di E-Commerce**  
           - Dalam proyek **Toko Online**, saya menganalisis **data transaksi pelanggan** untuk menemukan pola pembelian menggunakan **Apriori Algorithm**.  
           - Hasil analisis digunakan untuk meningkatkan strategi pemasaran dan rekomendasi produk yang lebih personalisasi.  
    
        🔹 **Keahlian dalam Data Analyst**  
        ✅ Data wrangling & preprocessing  
        ✅ Exploratory Data Analysis (EDA)  
        ✅ Data visualization dengan Matplotlib & Seaborn  
        ✅ Machine Learning dasar untuk prediksi  
        ✅ SQL untuk querying dan data extraction  
    
        Dengan pengalaman ini, saya memiliki **pemahaman yang kuat dalam analisis data** dan mampu menerapkan **insight berbasis data** untuk pengambilan keputusan yang lebih baik. 🚀
      `,
    },
    
    {
      title: "Software Engineering",
      img: softwareImg,
      content: `
        **Pengalaman di Bidang Software Engineering**  
    
        Saya memiliki pengalaman dalam **pengembangan perangkat lunak** dengan berbagai teknologi dan metodologi, serta telah mengerjakan proyek **aplikasi web dan desktop** untuk memenuhi kebutuhan pengguna dan bisnis.  
    
        🔹 **Pengembangan Aplikasi Web & Backend Development**  
        Saya berpengalaman dalam **mengembangkan aplikasi web** menggunakan teknologi seperti **PHP, HTML, CSS, JavaScript**, dan **SQL**. Saya juga pernah mengerjakan proyek yang melibatkan pengembangan API menggunakan **Hapi.js** dan **Node.js** untuk kebutuhan integrasi backend.  
    
        🔹 **Proyek yang Pernah Saya Kerjakan**  
        ✅ **Toko Online (E-Commerce Platform)**  
           - Saya terlibat dalam pengembangan aplikasi **e-commerce** yang mencakup fitur seperti **keranjang belanja**, **checkout**, dan **pembayaran online**.  
           - Aplikasi ini juga dilengkapi dengan sistem **rekomendasi produk** berbasis analisis data yang saya kerjakan sebelumnya.  
    
        ✅ **Inventory Gudang (Warehouse Management System)**  
           - Dalam proyek ini, saya merancang dan mengembangkan **sistem manajemen gudang** yang memungkinkan pengguna untuk melacak pergerakan barang secara otomatis.  
           - Sistem ini dilengkapi dengan modul **forecasting stok** untuk mengoptimalkan persediaan barang di gudang.  
    
        ✅ **Aplikasi Prediksi Kelulusan Siswa (KNN Model)**  
           - Saya mengembangkan aplikasi untuk memprediksi kelulusan siswa menggunakan **algoritma KNN**, yang memungkinkan sekolah untuk melakukan **intervensi dini** kepada siswa yang berisiko tidak lulus.  
           - Aplikasi ini mengintegrasikan **database SQL** untuk menyimpan data siswa dan **Python** untuk analisis prediktif.  
    
        🔹 **Keahlian dalam Software Engineering**  
        ✅ Pengembangan aplikasi web dengan PHP, HTML, CSS, JavaScript  
        ✅ Backend development dengan **Node.js** dan **Hapi.js**  
        ✅ Desain dan implementasi **database relasional** dengan **SQL**  
        ✅ Pemrograman berbasis **Object-Oriented Programming (OOP)**  
        ✅ Pemrograman fungsional dan scripting dengan **Python**  
        ✅ Pengembangan aplikasi **desktop** menggunakan **Java**  
    
        Dengan pengalaman ini, saya memiliki **kemampuan kuat dalam pengembangan perangkat lunak** dan berkomitmen untuk menciptakan solusi yang **reliable dan scalable** bagi kebutuhan bisnis dan pengguna. 🚀
      `,
    },
    
    {
      title: "DevOps Engineer",
      img: devImg,
      content: `
        **Pengalaman di Bidang DevOps Engineer**  
    
        Saya memiliki pengalaman dalam **automasi dan manajemen infrastruktur** untuk mendukung pengembangan perangkat lunak yang efisien dan terjamin kualitasnya. Saya berfokus pada penerapan **praktik DevOps** untuk meningkatkan kolaborasi antara tim pengembang dan operasional, serta mendukung penerapan aplikasi dengan proses yang cepat dan andal.  
    
        🔹 **Pengelolaan Infrastruktur dengan Cloud & Virtualisasi**  
        Saya berpengalaman dalam **mengelola infrastruktur cloud** menggunakan layanan seperti **AWS** dan **Mikrotik** untuk mendukung skala aplikasi yang lebih besar. Penggunaan teknologi **virtualisasi** memungkinkan implementasi aplikasi yang lebih fleksibel dan efisien.
    
        🔹 **Proyek yang Pernah Saya Kerjakan**  
        ✅ **Integrasi CI/CD untuk Toko Online (E-Commerce Platform)**  
           - Saya mengimplementasikan **Continuous Integration (CI)** dan **Continuous Deployment (CD)** untuk aplikasi **Toko Online**.  
           - Dengan menggunakan **GitHub Actions**, saya mengautomasi pipeline pengujian dan penerapan kode secara terus-menerus untuk memastikan aplikasi dapat dipublish dengan cepat tanpa mengurangi kualitas.
    
        ✅ **Monitoring dan Logging Sistem di Inventory Gudang**  
           - Saya mengintegrasikan alat **monitoring dan logging** seperti **Prometheus** dan **Grafana** untuk memantau kesehatan sistem **Inventory Gudang** secara real-time.  
           - Sistem ini memberikan **alerting otomatis** saat terjadi kegagalan atau penurunan performa, sehingga masalah dapat ditangani sebelum mempengaruhi pengguna.
    
        ✅ **Optimasi Proses Build dan Deployment Aplikasi dengan Docker**  
           - Saya menggunakan **Docker** untuk mengcontainerisasi aplikasi, yang memungkinkan pengembangan dan penerapan yang lebih cepat serta konsisten di berbagai lingkungan.  
           - Selain itu, saya mengatur **Docker Compose** untuk mengelola dan menjalankan beberapa kontainer aplikasi dalam satu sistem.  
    
        🔹 **Keahlian dalam DevOps Engineering**  
        ✅ **Pengelolaan Cloud Infrastructure** (AWS, Virtualization)  
        ✅ **CI/CD Pipeline** menggunakan **GitHub Actions**, **Jenkins**, atau **GitLab CI**  
        ✅ **Kontainerisasi aplikasi** dengan **Docker** dan **Kubernetes**  
        ✅ **Monitoring** dengan **Prometheus**, **Grafana**, atau **ELK Stack**  
        ✅ Pengelolaan **version control** dengan **Git**  
        ✅ Pengelolaan **configurations** menggunakan **Ansible** atau **Terraform**  
    
        Dengan pengalaman ini, saya memiliki **pemahaman yang mendalam tentang DevOps** dan mampu **menerapkan praktik terbaik** untuk meningkatkan kolaborasi tim dan efisiensi pengembangan aplikasi. 🚀
      `,
    },
    
            {
              title: "Ethical Hacking",
              img: etImg,
              content: `
                **Pengalaman di Bidang Ethical Hacking**  
            
                Saya memiliki pengalaman dalam bidang **Ethical Hacking** dan **Cybersecurity**, yang saya peroleh melalui kompetisi dan pelatihan intensif.  
            
                🔹 **Kompetisi TSA Cyber Security 2024 – KOMINFO**  
                Saya pernah mengikuti **TSA Cyber Security 2024**, yang diselenggarakan oleh **Kementerian Komunikasi dan Informatika (KOMINFO)**.  
                Dalam kompetisi ini, saya diuji dalam berbagai aspek keamanan siber, termasuk **penetration testing, digital forensics, cryptography, dan network security**.  
            
                🔹 **Pelatihan Ethical Hacking – Cisco Networking Academy**  
                Saya juga mengikuti **pelatihan Ethical Hacking** di **Cisco Networking Academy**, yang diselenggarakan oleh **IDCare Bootcamp Jawa Tengah Batch 2**.  
                Dalam pelatihan ini, saya mempelajari teknik **penetration testing, eksploitasi sistem, keamanan jaringan, dan mitigasi serangan siber**.  
            
                Pengalaman ini memperkuat kemampuan saya dalam **mengidentifikasi dan mencegah ancaman siber**, serta menerapkan **best practice dalam keamanan sistem dan jaringan**.  
                Saya selalu berkomitmen untuk terus mengembangkan keahlian di bidang **Cybersecurity & Ethical Hacking** guna menciptakan lingkungan digital yang lebih aman. 🚀
              `,
            },
            
            {
              title: "Machine Learning",
              img: macinImg,
              content: `
                **Pengalaman di Bidang Machine Learning**  
            
                Saya memiliki pengalaman dalam **penerapan algoritma machine learning** untuk memecahkan masalah bisnis dan menghasilkan prediksi yang akurat. Dengan latar belakang dalam **analisis data** dan penggunaan teknologi seperti **Python**, saya dapat membangun model yang memberikan **insight** untuk pengambilan keputusan yang lebih baik.  
            
                🔹 **Pengembangan Model Machine Learning untuk Prediksi**  
                Saya berpengalaman dalam **pengembangan dan implementasi model prediksi** menggunakan algoritma seperti **K-Nearest Neighbor (KNN)** untuk memberikan **solusi berbasis data** dalam berbagai konteks.  
            
                🔹 **Proyek yang Pernah Saya Kerjakan**  
                ✅ **Prediksi Kelulusan Siswa dengan Algoritma KNN**  
                   - Saya mengembangkan model **K-Nearest Neighbor (KNN)** untuk memprediksi kelulusan siswa di **SDN Jati Waringin X** berdasarkan dataset nilai akademik dan faktor lainnya.  
                   - Model ini berhasil memberikan prediksi yang tepat, membantu pihak sekolah dalam mengidentifikasi siswa yang berisiko tidak lulus dan memberikan rekomendasi intervensi lebih dini.
            
                ✅ **Analisis Pola Pembelian di E-Commerce dengan Algoritma Apriori**  
                   - Dalam proyek **Toko Online**, saya mengimplementasikan algoritma **Apriori** untuk menganalisis data transaksi pelanggan dan menemukan **pola pembelian** yang sering muncul.  
                   - Hasil analisis ini digunakan untuk mengoptimalkan strategi pemasaran dan memberikan **rekomendasi produk** yang lebih personalisasi kepada pelanggan.
            
                ✅ **Prediksi Stok Barang dengan Model Machine Learning**  
                   - Saya juga bekerja pada pengembangan model **machine learning** untuk **forecasting stok** di sistem **Inventory Gudang**, yang memungkinkan prediksi permintaan barang di masa depan berdasarkan data historis.  
                   - Model ini membantu dalam mengoptimalkan persediaan barang dan mengurangi risiko kehabisan stok.
            
                🔹 **Keahlian dalam Machine Learning**  
                ✅ Penerapan algoritma **Supervised Learning** seperti **KNN**, **Regresi**, dan **SVM**  
                ✅ Penerapan algoritma **Unsupervised Learning** seperti **Clustering** dan **Apriori Algorithm**  
                ✅ Penggunaan library **Python** seperti **scikit-learn**, **pandas**, **NumPy**, **Matplotlib**, dan **Seaborn**  
                ✅ Pengolahan dan pembersihan data (Data Wrangling)  
                ✅ Evaluasi model dengan **cross-validation**, **confusion matrix**, dan **accuracy metrics**  
            
                Dengan pengalaman ini, saya memiliki **kemampuan untuk membangun dan mengoptimalkan model machine learning** yang dapat memberikan hasil yang lebih baik dalam memecahkan masalah bisnis dan meningkatkan proses pengambilan keputusan berbasis data. 🚀
              `,
            },
            
            {
              title: "Project Manager IT",
              img: proImg,
              content: `
                **Pengalaman di Bidang Project Manager IT**  
            
                Sebagai seorang **Project Manager IT**, saya memiliki pengalaman dalam **merencanakan, mengelola, dan melaksanakan proyek-proyek teknologi** dari awal hingga akhir. Saya fokus pada pencapaian tujuan proyek dengan memanfaatkan metodologi manajemen proyek yang terstruktur dan bekerja sama dengan tim teknis untuk memastikan kualitas serta waktu penyelesaian yang optimal.  
            
                🔹 **Manajemen Proyek Teknologi & Tim Pengembang**  
                Saya berpengalaman dalam **mengelola tim pengembang** dan **stakeholder** untuk memastikan semua aspek proyek, termasuk **sumber daya, anggaran, dan timeline**, berjalan lancar. Saya juga berfokus pada **komunikasi yang efektif** dan menyusun laporan kemajuan untuk pihak terkait.  
            
                🔹 **Proyek yang Pernah Saya Kelola**  
                ✅ **Toko Online (E-Commerce Platform)**  
                   - Saya memimpin proyek pengembangan aplikasi **e-commerce**, mengkoordinasi antara tim pengembang, tim desain, dan tim pemasaran untuk memastikan aplikasi dapat berjalan sesuai dengan kebutuhan bisnis.  
                   - Proyek ini mencakup pengelolaan **keranjang belanja**, **sistem checkout**, **pembayaran online**, dan **strategi pemasaran berbasis data** yang telah saya kerjakan sebelumnya.
            
                ✅ **Inventory Gudang (Warehouse Management System)**  
                   - Dalam proyek **Inventory Gudang**, saya bertanggung jawab atas pengelolaan timeline proyek, memastikan fitur **manajemen stok** dan **forecasting persediaan** dapat diimplementasikan dengan baik.  
                   - Saya juga berkolaborasi dengan tim untuk menciptakan sistem yang **efisien dan skalabel** sesuai dengan kebutuhan klien.
            
                ✅ **Aplikasi Prediksi Kelulusan Siswa (KNN Model)**  
                   - Sebagai Project Manager, saya memimpin tim dalam mengembangkan aplikasi **prediksi kelulusan siswa**, memastikan model **KNN** dan integrasi database SQL dapat diselesaikan tepat waktu dengan hasil yang optimal.  
                   - Saya juga bertanggung jawab dalam merencanakan **risiko proyek** dan **manajemen perubahan** untuk memastikan keberhasilan implementasi.  
            
                🔹 **Keahlian dalam Project Management**  
                ✅ Pengelolaan proyek **IT** dengan metodologi **Agile** dan **Waterfall**  
                ✅ Manajemen **tim pengembang** dan **stakeholder**  
                ✅ Penyusunan **timeline proyek** dan **perencanaan sumber daya**  
                ✅ Penyusunan **anggaran proyek** dan pengelolaan risiko  
                ✅ **Laporan kemajuan proyek** dan komunikasi dengan pihak terkait  
                ✅ Pengelolaan **quality assurance** untuk memastikan produk akhir memenuhi standar  
            
                Dengan pengalaman ini, saya memiliki **kemampuan untuk memimpin proyek teknologi**, mengelola tim yang efektif, dan memastikan proyek berjalan sesuai dengan tujuan dan anggaran yang telah ditentukan. 🚀
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
