import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  // የ Form ዳታዎችን ለመያዝ
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // ጽሑፍ ሲጻፍ ዳታውን የሚቀይር ፈንክሽን
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit ሲደረግ የሚሰራ ፈንክሽን
  const handleSubmit = (e) => {
    e.preventDefault();
    // እዚህ ጋር ወደፊት ከ Backend (Node.js/MongoDB) ጋር እናገናኘዋለን
    console.log("Submitted Data:", formData);
    setSubmitted(true);
    
    // ከ 4 ሰከንድ በኋላ መልዕክቱን ማጽዳት
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* 1. ርዕስ */}
        <div className="section-header">
          <span className="section-tag">LET'S CONNECT</span>
          <h2 className="section-title">Start A <span className="gradient-text">Conversation</span></h2>
          <p className="section-subtitle">
            Open for internship roles, high-impact collaborations, or architectural software discussions.
          </p>
        </div>

        {/* 2. ዋናው ይዘት (ግራና ቀኝ) */}
        <div className="contact-grid">
          
          {/* የግራው ክፍል: አድራሻ እና ማህበራዊ መረጃዎች */}
          <div className="contact-info-card">
            <h3 className="info-title">Contact Channels</h3>
            <p className="info-desc">
              Feel free to reach out directly through any of these platforms. I typically respond within 24 hours.
            </p>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon-box pink-bg">
                  <Mail size={20} className="icon-pink" />
                </div>
                <div>
                  <span className="info-label">Direct Email</span>
                  <a href="mailto:bezawite.zelalem@example.com" className="info-value">
                    bezawite.zelalem@example.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box purple-bg">
                  <Phone size={20} className="icon-purple" />
                </div>
                <div>
                  <span className="info-label">Phone & Telegram</span>
                  <span className="info-value">+251 900 000 000</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box rose-bg">
                  <MapPin size={20} className="icon-rose" />
                </div>
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-value">Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>

            {/* ሁኔታን የሚያሳይ ትንሽ ባጅ */}
            <div className="availability-box">
              <span className="online-beacon"></span>
              <span>Available for Spring/Summer 2025 Internship</span>
            </div>
          </div>

          {/* የቀኙ ክፍል: የመልዕክት መላኪያ ቅጽ (Form) */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="success-message">
                <CheckCircle size={48} className="success-icon" />
                <h4 className="success-title">Message Transmitted!</h4>
                <p className="success-text">Thank you for reaching out, Beza will review your message shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group-row">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      placeholder="Jane Doe" 
                      required 
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      placeholder="jane@company.com" 
                      required 
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange}
                    placeholder="Internship Inquiry / Collaboration" 
                    required 
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message</label>
                  <textarea 
                    name="message" 
                    rows="5"
                    value={formData.message} 
                    onChange={handleChange}
                    placeholder="Tell me about your team, product, or ideas..." 
                    required 
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;