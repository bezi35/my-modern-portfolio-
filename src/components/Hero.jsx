import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Download, Terminal, Layers, ArrowUpRight, QrCode } from 'lucide-react';
import myPhoto from '../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
  const [showQrModal, setShowQrModal] = useState(false);
  const portfolioUrl = "https://github.com/bezi35";

  
  const titles = [
    "Full-Stack MERN Developer.",
    "Scalable Systems Architect.",
    "Creative & Elegant UI Designer.",
    "."
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[textIndex];
    let speed = isDeleting ? 40 : 80; 

    if (!isDeleting && currentText === fullText) {
      speed = 1800; 
    }

    const timer = setTimeout(() => {
      if (!isDeleting && currentText !== fullText) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      } else if (!isDeleting && currentText === fullText) {
        setIsDeleting(true);
      } else if (isDeleting && currentText !== '') {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % titles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex]);

  return (
    <section className="hero" id="home">
      
      
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <div className="hero-content">
        
        <div className="hero-text-col">
          <div className="status-badge">
            <span className="pulsing-dot"></span>
            <span>Available for Internship & Roles</span>
          </div>

          <h1 className="hero-headline">
            Obsessed with clean code <br />
            <span className="gradient-text">elegant architecture</span> <br />
            and systems that scale.
          </h1>

          
          <div className="typing-container">
            <span className="typing-prefix">I am a </span>
            <span className="typing-animated-text">{currentText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-bio">
            I am <strong className="text-white">Bezawite Zelalem</strong>, a  Software Engineering student blending solid engineering principles with modern, high-performance web design. Specializing in the MERN stack.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="primary-pill-btn">
              <span>Explore My Work</span>
              <ArrowUpRight size={18} />
            </a>

            
            <a 
              href="/resume.pdf" 
              download="Bezawite_Zelalem_CV.pdf"
              className="secondary-glass-btn"
            >
              <Download size={18} />
              <span>Resume (CV)</span>
            </a>

            <button 
              className="qr-trigger-btn"
              onClick={() => setShowQrModal(!showQrModal)}
              title="View Portfolio QR"
            >
              <QrCode size={20} />
            </button>
          </div>

          <div className="tech-stack-row">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">Laravel</span>
          </div>
        </div>

        
        <div className="hero-visual-col">
          <div className="visual-wrapper">
            
            <div className="photo-frame">
              <img 
                src={myPhoto} 
                alt="Bezawite Zelalem" 
                className="profile-img"
              />
              <div className="photo-overlay"></div>
            </div>

            

            
            <div className="floating-card float-bottom-right">
              <div className="float-icon-box pink-box">
                <Layers size={18} />
              </div>
              <div>
                <p className="float-label">Expertise</p>
                <h4 className="float-value">Full-Stack MERN</h4>
              </div>
            </div>

          

          </div>
        </div>

      </div>

      
      {showQrModal && (
        <div className="modal-backdrop" onClick={() => setShowQrModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">Mobile Portfolio Access</h3>
            <p className="modal-desc">Scan with your phone's camera to browse on mobile</p>
            <div className="modal-qr-container">
              <QRCodeSVG value={portfolioUrl} size={200} />
            </div>
            <button className="close-btn" onClick={() => setShowQrModal(false)}>Close</button>
          </div>
        </div>
      )}

    </section>
  );
};

export default Hero;