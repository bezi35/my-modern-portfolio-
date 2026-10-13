import React from 'react';
import { Sparkles, Home, User, Briefcase, PhoneCall, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ isDark, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        
        <div className="navbar-logo">
          <Sparkles size={22} className="sparkle-icon" />
          <span className="navbar-title">Beza</span>
        </div>

      
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

          <a href="#contact" className="nav-link contact-btn">
            <PhoneCall size={16} />
            <span>Contact</span>
          </a>

          <button 
            type="button"
            className="theme-btn" 
            onClick={toggleTheme} 
            title="Switch Theme"
          >
            {isDark ? <Sun size={18} color="#fbbf24" /> : <Moon size={18} color="#6366f1" />}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;