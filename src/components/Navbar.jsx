import React from 'react';
import { Sparkles, Home, User, Briefcase, PhoneCall } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        
        {/* Logo */}
        <div className="navbar-logo">
          <Sparkles size={24} className="sparkle-icon" />
          <span className="navbar-title">Beza</span>
        </div>

        {/* Links with Icons */}
        <div className="navbar-links">
          <a href="#home" className="nav-link">
            <Home size={16} />
            <span>Home</span>
          </a>

          <a href="#about" className="nav-link">
            <User size={16} />
            <span>About</span>
          </a>

          <a href="#projects" className="nav-link">
            <Briefcase size={16} />
            <span>Projects</span>
          </a>

          <a href="#contact" className="nav-link contact-btn-link">
            <PhoneCall size={16} />
            <span>Contact</span>
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;