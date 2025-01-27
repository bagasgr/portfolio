import React from 'react';
import { Link } from 'react-router-dom'; // Gunakan Link untuk navigasi
import './Header.css'; // Tambahkan file CSS untuk styling header

function Header() {
  return (
    <header className="header-container">
      
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/certifikat">Certifikat</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/pengalaman">Pengaaman Pekerjaan</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
