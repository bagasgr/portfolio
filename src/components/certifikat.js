// src/components/Projects.js
import React from 'react';
import './certifikat.css';
import ciscoLogo from '../images/cisco.png';  // Mengimpor gambar dari folder images
import dicodinglogo from '../images/dicoding.jpeg';
import digitalentlogo from '../images/digitalent.png';
import kominfologo from '../images/kominfo.jpeg';
import dqlablogo from '../images/dqlab.png';
import micrologo from '../images/micro.png';
import microsoft from '../images/microsoft.png';





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
                <img src={microsoft} alt="Logo Microsoft" className="sertifikat-logo" />
                    <div className="sertifikat-details">
                        <h2>Fundamentals of machine learning</h2>
                        <p>Microsoft| Diterbitkan 31 January 2025</p>
                        <a href="https://learn.microsoft.com/en-us/users/bagasgilangramadhan-0878/achievements/print/uytqq5u3" className="credential-link" target="_blank" rel="noopener noreferrer">
                            Tampilkan kredensial
                        </a>
                    </div>
                </div>

                <div className="sertifikat-item">
                <img src={dicodinglogo} alt="Logo Dicoding" className="sertifikat-logo" />
                    <div className="sertifikat-details">
                        <h2>Belajar Back-End Pemula dengan JavaScript</h2>
                        <p>Dicoding Indonesia | Diterbitkan 24 Januari 2025 Kedaluwarsa 24 Januari 2028</p>
                        <p>ID Kredensial: GRX53LRLYZ0M</p>
                        <a href="https://www.dicoding.com/users/bagas_gilang_ramadha/academies" className="credential-link" target="_blank" rel="noopener noreferrer">
                            Tampilkan kredensial
                        </a>
                    </div>
                </div>


                <div className="sertifikat-item">
                <img src={dicodinglogo} alt="Logo Dicoding" className="sertifikat-logo" />
                    <div className="sertifikat-details">
                        <h2>Belajar Fundamental Front-End Web Development</h2>
                        <p>Dicoding Indonesia | Diterbitkan Sep 2024 Kedaluwarsa 12 Februari 2028</p>
                        <p>ID Kredensial: 4EXGV494GXRL</p>
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
                <p>Kominfo | Keahlian: Keamanan Siber</p>
                <a 
                    href="/pdf/Sertifikat_BAGAS GILANG RAMADHAN_Keamanan Siber untuk Wirausaha (1).pdf" 
                    className="credential-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
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
