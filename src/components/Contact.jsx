import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false, message: '' });

    try {
     
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          submitting: false,
          success: true,
          error: false,
          message: data.message || 'መልዕክትዎ በተሳካ ሁኔታ ተልኳል!'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'ስህተት ተፈጥሯል!');
      }

    } catch (err) {
      console.error("Submission Error:", err);
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'ሰርቨሩ ጋር መገናኘት አልተቻለም፤ እባክዎ እንደገና ይሞክሩ!'
      });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        <div className="section-header">
          <span className="section-tag">LET'S CONNECT</span>
          <h2 className="section-title">Start A <span className="gradient-text">Conversation</span></h2>
          <p className="section-subtitle">
            Open for internship roles, high-impact collaborations, or architectural software discussions.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Info Card */}
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
                  <a href="mailto:bezizola8@example.com" className="info-value">
                    bezizola8@example.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box purple-bg">
                  <Phone size={20} className="icon-purple" />
                </div>
                <div>
                  <span className="info-label">Phone & Telegram</span>
                  <span className="info-value">+251 935476440</span>
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

            <div className="availability-box">
              <span className="online-beacon"></span>
              <span>Available for Spring/Summer 2025 Internship</span>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-card">
            {status.success ? (
              <div className="success-message">
                <CheckCircle size={48} className="success-icon" />
                <h4 className="success-title">Message Received!</h4>
                <p className="success-text">{status.message}</p>
                <button 
                  className="submit-btn" 
                  style={{ marginTop: '20px' }}
                  onClick={() => setStatus({ ...status, success: false })}
                >
                  አዲስ መልዕክት ላክ
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                
                {status.error && (
                  <div style={{ color: '#fb7185', background: 'rgba(251,113,133,0.1)', padding: '12px', borderRadius: '10px', fontSize: '0.9rem', display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <AlertCircle size={18} />
                    <span>{status.message}</span>
                  </div>
                )}

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

                <button type="submit" className="submit-btn" disabled={status.submitting}>
                  <span>{status.submitting ? 'በመላክ ላይ...' : 'Send Message'}</span>
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