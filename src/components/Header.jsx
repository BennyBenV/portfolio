// src/components/Header.js
import React from 'react';
import '../style/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Benjamin Vu</div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#about">À propos</a></li>
          <li className="nav-item"><a href="#projects">Projets</a></li>
          {/* <li className="nav-item"><a href="#contact">Contact</a></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
