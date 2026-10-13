import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Download, Sparkles, Terminal, Layers, ArrowUpRight, QrCode } from 'lucide-react';
import myPhoto from '../assets/profile.jpg'; 
import './Hero.css';

const Hero = () => {
  const [showQrModal, setShowQrModal] = useState(false);
  const portfolioUrl = "https://github.com/bezi35";

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
            Obsessed with clean code<br />
            <span className="gradient-text">elegant architecture</span> <br />
           and systems that actually scale.
          </h1>

          <p className="hero-bio">
            I am <strong className="text-white">Bezawite Zelalem</strong>, Software Engineering student blending solid engineering principles with modern, high-performance web design. Building with the MERN stack.<br />
                 Crafting full-stack web applications with the MERN stack.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="primary-pill-btn">
              <span>Explore My Work</span>
              <ArrowUpRight size={18} />
            </a>

            <button className="secondary-glass-btn">
              <Download size={18} />
              <span>Resume (CV)</span>
            </button>

           
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
                alt="Beza - Software Engineer" 
                className="profile-img"
                onError={(e) => {
                  
                  e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop";
                }}
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