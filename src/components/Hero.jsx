import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Download, Sparkles, Terminal, Layers, ArrowUpRight, QrCode } from 'lucide-react';
import myPhoto from '../assets/profile.jpg'; // ፎቶሽን እዚህ ጠራነው (ስሙ profile.jpg ካልሆነ አስተካክዪው)
import './Hero.css';

const Hero = () => {
  const [showQrModal, setShowQrModal] = useState(false);
  const portfolioUrl = "https://github.com/bezi35";

  return (
    <section className="hero" id="home">
      
      {/* ጀርባ ላይ የሚታዩ ረቂቅ የብርሃን ጥላዎች (Ambient Lights) */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <div className="hero-content">
        
        {/* 1. የግራው ክፍል: ታሪክ እና የቴክኒክ ደረጃ */}
        <div className="hero-text-col">
          <div className="status-badge">
            <span className="pulsing-dot"></span>
            <span>Available for Internship & Roles</span>
          </div>

          <h1 className="hero-headline">
            Architecting <br />
            <span className="gradient-text">Elegant Systems</span> <br />
            & Scalable Software.
          </h1>

          <p className="hero-bio">
            I am <strong className="text-white">Beza</strong>, a 4th-year Software Engineering student blending engineering discipline with modern, high-performance web aesthetics. Specializing in the MERN ecosystem.
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

            {/* ፈጠራ የታከለበት የ QR Code ቁልፍ */}
            <button 
              className="qr-trigger-btn"
              onClick={() => setShowQrModal(!showQrModal)}
              title="View Portfolio QR"
            >
              <QrCode size={20} />
            </button>
          </div>

          {/* ፈጣን የቴክኖሎጂ ስሞች */}
          <div className="tech-stack-row">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">System Design</span>
          </div>
        </div>

        {/* 2. የቀኙ ክፍል: የራስሽ ፎቶ ከሚንሳፈፉ (Floating) ካርዶች ጋር */}
        <div className="hero-visual-col">
          <div className="visual-wrapper">
            
            {/* ፎቶሽ በ Glowing Frame ውስጥ */}
            <div className="photo-frame">
              <img 
                src={myPhoto} 
                alt="Beza - Software Engineer" 
                className="profile-img"
                onError={(e) => {
                  // ፎቶው እስካልገባ ድረስ ባዶ እንዳይሆን የሚያምር ምስል እንዲያሳይ
                  e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop";
                }}
              />
              <div className="photo-overlay"></div>
            </div>

            {/* የሚንሳፈፍ ካርድ 1: የ 4ኛ ዓመት ተማሪ መሆንሽን የሚያሳይ */}
            <div className="floating-card float-top-left">
              <div className="float-icon-box purple-box">
                <Terminal size={18} />
              </div>
              <div>
                <p className="float-label">Academic Status</p>
                <h4 className="float-value">4th Year SE</h4>
              </div>
            </div>

            {/* የሚንሳፈፍ ካርድ 2: የ Stack ብቃትሽን የሚያሳይ */}
            <div className="floating-card float-bottom-right">
              <div className="float-icon-box pink-box">
                <Layers size={18} />
              </div>
              <div>
                <p className="float-label">Expertise</p>
                <h4 className="float-value">Full-Stack MERN</h4>
              </div>
            </div>

            {/* የሚንሳፈፍ ትንሽ QR Badge በፎቶሽ ጠርዝ ላይ */}
            <div className="floating-qr-badge" onClick={() => setShowQrModal(true)}>
              <QRCodeSVG value={portfolioUrl} size={48} />
              <span className="qr-badge-tooltip">Scan to Mobile</span>
            </div>

          </div>
        </div>

      </div>

      {/* QR Code ሞዳል (ሰዎቹ ሲነኩት በግዙፉ ብቅ የሚል የመስታወት ቦክስ) */}
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