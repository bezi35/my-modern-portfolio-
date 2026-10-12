import React from 'react';
import { Sparkles } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-content">
       <div className="navbar-logo">
        <Sparkles size={32} color="white" />
        <span className="navbar-title">Beza</span>
       </div>


       <nav className="navbar-links">
        <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

    </div>
    </nav>
  );
}

export default Navbar;
