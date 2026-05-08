 

import { useState } from "react";
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      {/* Logo */}
      <div className="logo">
        <i className="fa-solid fa-bowl-food"></i>
        <span>TableTales</span>
      </div>

      {/* Hamburger Icon */}
      <div 
        className={`hamburger ${menuOpen ? "active" : ""}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <nav className={`navlink ${menuOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#Popular">Popular</a>
        <a href="#Starter">Starter</a>
        <a href="#Sweets">Dessert</a>
        <a href="#">Menu</a>
      </nav>

      {/* Contact Button */}
      <div className="contact">
        <a href="#">
          Contact <i className="fa-solid fa-hand"></i>
        </a>
      </div>

    </header>
  );
}

export default Header;