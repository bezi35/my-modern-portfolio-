import React from 'react';
import { ExternalLink, Sparkles, FolderGit2 } from 'lucide-react';
import './Project.css';

const Projects = () => {
  
  const myProjects = [
    {
      id: 1,
      title: "FinTech Digital Wallet System",
      description: "A secure, end-to-end digital transaction system supporting real-time fund transfers, JWT tokenized auth, and transaction analytics dashboard.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      githubLink: "https://github.com/bezi35",
      liveDemo: "https://github.com/bezi35"
    },
    {
      id: 2,
      title: "Campus Resource Management System",
      description: "A centralized platform for university students to share academic resources, book study halls, and communicate via real-time WebSocket messaging.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "REST API"],
      githubLink: "https://github.com/bezi35",
      liveDemo: "https://github.com/bezi35"
    },
    {
      id: 3,
      title: "Aesthetic E-Commerce Platform",
      description: "A modern, high-performance shopping application featuring custom state management, payment gateway mock, and dynamic category filtering.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "Redux Toolkit", "Node.js", "MongoDB", "CSS Modules"],
      githubLink: "https://github.com/bezi35",
      liveDemo: "https://github.com/bezi35"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        
       
        <div className="section-header">
          <span className="section-tag">ENGINEERING PORTFOLIO</span>
          <h2 className="section-title">Featured <span className="gradient-text">Software Works</span></h2>
          <p className="section-subtitle">
            A curated selection of full-stack web applications, scalable system designs, and production-ready architectures.
          </p>
        </div>

        
        <div className="projects-grid">
          {myProjects.map((project) => (
            <div key={project.id} className="project-card">
              
             
              <div className="project-image-box">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-img-overlay"></div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

               
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag-pill">{tag}</span>
                  ))}
                </div>

                
                <div className="project-actions">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="project-btn code-btn"
                  >
                    <FolderGit2 size={16} />
                    <span>View Code</span>
                  </a>

                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="project-btn live-btn"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;