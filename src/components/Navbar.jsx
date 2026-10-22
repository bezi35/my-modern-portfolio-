import React, { useState } from 'react';
import { Sparkles, Home, User, Briefcase, PhoneCall, Sun, Moon, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ isDark, toggleTheme }) => {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        
        <div className="navbar-logo">
          <Sparkles size={22} className="sparkle-icon" />
          <span className="navbar-title">Beza</span>
        </div>

        
        <div className="desktop-links">
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

        
        <div className="mobile-actions">
         
          <button 
            type="button"
            className="theme-btn mobile-theme-btn" 
            onClick={toggleTheme} 
            title="Switch Theme"
          >
            {isDark ? <Sun size={18} color="#fbbf24" /> : <Moon size={18} color="#6366f1" />}
          </button>

          
          <button 
            className="hamburger-btn" 
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      
      <div className={`mobile-dropdown ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" className="mobile-link" onClick={closeMobileMenu}>
          <Home size={18} />
          <span>Home</span>
        </a>
        <a href="#about" className="mobile-link" onClick={closeMobileMenu}>
          <User size={18} />
          <span>About</span>
        </a>
        <a href="#projects" className="mobile-link" onClick={closeMobileMenu}>
          <Briefcase size={18} />
          <span>Projects</span>
        </a>
        <a href="#contact" className="mobile-link mobile-contact-link" onClick={closeMobileMenu}>
          <PhoneCall size={18} />
          <span>Contact</span>
        </a>
      </div>

    </nav>
  );
};

export default Navbar;