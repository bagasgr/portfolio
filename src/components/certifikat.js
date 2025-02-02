// src/components/Projects.js
import React from 'react';
import './certifikat.css';
import ciscoLogo from '../images/cisco.png';  // Mengimpor gambar dari folder images
import dicodinglogo from '../images/dicoding.jpeg';
import digitalentlogo from '../images/digitalent.png';
import kominfologo from '../images/kominfo.jpeg';
import dqlablogo from '../images/dqlab.png';
import micrologo from '../images/micro.png';

const certifikat = () => {
    return (
        <section className="sertifikat-container">
            <h1>Sertifikat dan Lisensi</h1>

            <div className="sertifikat">
                <div className="sertifikat-item">
                <img src={ciscoLogo} alt="Logo Cisco" className="sertifikat-logo" />
                    <div className="sertifikat-details">
                        <h2>Introduction to Cybersecurity</h2>
                        <p>Dicoding Indonesia | Diterbitkan Jan 2025</p>
                        <a href="https://www.credly.com/badges/bf25ef93-68f8-4626-9b1c-c24eab038010/linked_in_profile" className="credential-link" target="_blank" rel="noopener noreferrer">
                            Tampilkan kredensial
                        </a>
                    </div>
                </div>

                <div className="sertifikat-item">
                <img src={dicodinglogo} alt="Logo Dicoding" className="sertifikat-logo" />
                    <div className="sertifikat-details">
                        <h2>Belajar Strategi Pengembangan Diri</h2>
                        <p>Dicoding Indonesia | Diterbitkan Okt 2024 Kedaluwarsa Okt 2027</p>
                        <p>ID Kredensial: 1OP8413N8ZQK</p>
                        <a href="https://www.dicoding.com/users/bagas_gilang_ramadha/academies" className="credential-link" target="_blank" rel="noopener noreferrer">
                            Tampilkan kredensial
                        </a>
                    </div>
                </div>

                <div className="sertifikat-item">
                <img src={dicodinglogo} alt="Logo Dicoding" className="sertifikat-logo" />
                    <div className="sertifikat-details">
                        <h2>Belajar Dasar AI</h2>
                        <p>Dicoding Indonesia | Diterbitkan Sep 2024 Kedaluwarsa Sep 2027</p>
                        <p>ID Kredensial: JMZV4288JXN9</p>
                        <a href="https://www.dicoding.com/users/bagas_gilang_ramadha/academies" className="credential-link" target="_blank" rel="noopener noreferrer">
                            Tampilkan kredensial
                        </a>
                    </div>
                </div>

                <div className="sertifikat-item">
                <img src={ciscoLogo} alt="Logo Cisco" className="sertifikat-logo" />
                    <div className="sertifikat-details">
                        <h2>Ethical Hacker</h2>
                        <p>Cisco | Diterbitkan Sep 2024</p>
                        <a href="https://www.credly.com/badges/fde140e7-ac5b-43fc-81db-bed89c1c3030/linked_in_profile" className="credential-link" target="_blank" rel="noopener noreferrer">
                            Tampilkan kredensial
                        </a>
                    </div>
                </div>

                <div className="sertifikat-item">
                <img src={digitalentlogo} alt="Logo Digital Talent Scholarship" className="sertifikat-logo" />
                    <div className="sertifikat-details">
                        <h2>Keamanan Siber untuk Wirausaha</h2>
                        <p>Digital Talent Scholarship | Diterbitkan Sep 2024</p>
                        <p>ID Kredensial: 1969485850-115</p>
                        <a href="https://digitalent.komdigi.go.id/cek-sertifikat#" className="credential-link" target="_blank" rel="noopener noreferrer">
                            Tampilkan kredensial
                        </a>
                    </div>
                </div>

                <div className="sertifikat-item">
                <img src={dicodinglogo} alt="Logo Dicoding" className="sertifikat-logo" />
                    <div className="sertifikat-details">
                        <h2>Belajar Dasar Structured Query Language (SQL)</h2>
                        <p>Dicoding Indonesia</p>
                        <a href="https://www.dicoding.com/users/bagas_gilang_ramadha/academies" className="credential-link" target="_blank" rel="noopener noreferrer">
                            Tampilkan kredensial
                        </a>
                    </div>
                </div>

                <div className="sertifikat-item">
                <img src={kominfologo} alt="Logo Kominfo" className="sertifikat-logo" />
                    <div className="sertifikat-details">
                        <h2>Keamanan Siber untuk Wirausaha</h2>
                        <p>Kominfo | Keahlian: Keamanan siber</p>
                        <a href="https://lms.sdmdigital.id/course/view.php?id=755" className="credential-link" target="_blank" rel="noopener noreferrer">
                            Tampilkan kredensial
                        </a>
                    </div>
                </div>

                <div className="sertifikat-item">
                <img src={dicodinglogo}alt="Logo Dicoding" className="sertifikat-logo" />
                    <div className="sertifikat-details">
                        <h2>Belajar Dasar Manajemen Proyek</h2>
                        <p>Dicoding Indonesia</p>
                        <a href="https://www.dicoding.com/users/bagas_gilang_ramadha/academies" className="credential-link" target="_blank" rel="noopener noreferrer">
                            Tampilkan kredensial
                        </a>
                    </div>
                </div>

                <div className="sertifikat-item">
                <img src={dicodinglogo} alt="Logo Dicoding" className="sertifikat-logo" />
                    <div className="sertifikat-details">
                        <h2>Belajar Membuat Front-End Web untuk Pemula</h2>
                        <p>Dicoding Indonesia</p>
                        <a href="https://www.dicoding.com/users/bagas_gilang_ramadha/academies" className="credential-link" target="_blank" rel="noopener noreferrer">
                            Tampilkan kredensial
                        </a>
                    </div>
                </div>

                <div className="sertifikat-item">
                <img src={dqlablogo} alt="Logo DQLab" className="sertifikat-logo" />
                    <div className="sertifikat-details">
                        <h2>Guide to Learn R with AI at DQLab</h2>
                        <p>DQLab</p>
                        <a href="https://academy.dqlab.id/Certificate_check/result/DQLABBGINRADQUSR/NONTRACK#mycertificate" className="credential-link" target="_blank" rel="noopener noreferrer">
                            Tampilkan kredensial
                        </a>
                    </div>
                </div>

                <div className="sertifikat-item">
                <img src={dqlablogo} alt="Logo DQLab" className="sertifikat-logo" />
                    <div className="sertifikat-details">
                        <h2>Guide to Learn SQL with AI at DQLab</h2>
                        <p>DQLab</p>
                        <a href="https://academy.dqlab.id/Certificate_check/result/DQLABINTP1QQIRPJ/NONTRACK#mycertificate" className="credential-link" target="_blank" rel="noopener noreferrer">
                            Tampilkan kredensial
                        </a>
                    </div>
                </div>

                <div className="sertifikat-item">
                <img src={dqlablogo} alt="Logo DQLab" className="sertifikat-logo" />
                    <div className="sertifikat-details">
                        <h2>Introduction to Data Science with R</h2>
                        <p>DQLab</p>
                        <a href="https://academy.dqlab.id/main/rachievement" className="credential-link" target="_blank" rel="noopener noreferrer">
                            Tampilkan kredensial
                        </a>
                    </div>
                </div>

                <div className="sertifikat-item">
                <img src={micrologo} alt="Logo Micromentor" className="sertifikat-logo" />
                    <div className="sertifikat-details">
                        <h2>Sertifikasi Cyber Security</h2>
                        <p>Micromentor</p>
                        <a href="https://lms.sdmdigital.id/mod/page/view.php?id=10671" className="credential-link" target="_blank" rel="noopener noreferrer">
                            Tampilkan kredensial
                        </a>
                    </div>
                </div>

                <div className="sertifikat-item">
                <img src={dqlablogo} alt="Logo DQLab" className="sertifikat-logo" />
                    <div className="sertifikat-details">
                        <h2>Introduction to Data Science with Python</h2>
                        <p>DQLab | Keahlian: Analitik Data</p>
                        <a href="https://academy.dqlab.id/Certificate_check/result/DQLABAI002ONTPLK/NONTRACK#mycertificate" className="credential-link" target="_blank" rel="noopener noreferrer">
                            Tampilkan kredensial
                        </a>
                    </div>
                </div>

                <div className="sertifikat-item">
                <img src={dicodinglogo} alt="Logo Dicoding" className="sertifikat-logo" />
                    <div className="sertifikat-details">
                        <h2>Pemrograman Web Dasar</h2>
                        <p>Dicoding Indonesia | Dikeluarkan oleh Celerate</p>
                        <a href="https://www.dicoding.com/users/bagas_gilang_ramadha/academies" className="credential-link" target="_blank" rel="noopener noreferrer">
                            Tampilkan kredensial
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default certifikat;
