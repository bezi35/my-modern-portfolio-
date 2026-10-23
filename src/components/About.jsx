import React from 'react';
import { Code2, Server, Database, GitBranch, Cpu, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import './About.css';

const About = () => {
  
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <Code2 className="skill-cat-icon text-pink" />,
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Responsive UI"]
    },
    {
      title: "Backend & APIs",
      icon: <Server className="skill-cat-icon text-purple" />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "Laravel", "Authentication (JWT)"]
    },
    {
      title: "Databases & DevOps",
      icon: <Database className="skill-cat-icon text-rose" />,
      skills: ["MongoDB & Mongoose", "Git & GitHub", "Postman", "Vercel / Render", "MVC Architecture"]
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        
        <div className="section-header">
          <span className="section-tag">ENGINEERING MINDSET</span>
          <h2 className="section-title">Beyond The Code: <span className="gradient-text">Who I Am</span></h2>
          <p className="section-subtitle">
            A software engineer who values clean architecture, human-centered interfaces, and scalable backend logic.
          </p>
        </div>

       
        <div className="about-grid">
          
          <div className="about-bio-card">
            <h3 className="bio-title">
              Disciplined. Curious. Creative.
            </h3>
            <p className="bio-text">
              As a 4th-year Software Engineering student, I approach software not just as syntax, but as dynamic problem-solving. My core focus is building full-stack web applications that balance robust backend systems with fluid, modern frontend designs.
            </p>
            <p className="bio-text">
              I am constantly exploring best engineering practices, participating in code sprints, and refining my expertise in the MERN ecosystem. I'm eager to bring energy, high technical capability, and dedication to a forward-thinking engineering team.
            </p>

            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-number">4th</span>
                <span className="stat-label">Year Engineering</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Code Passion</span>
              </div>
            </div>
          </div>

          
          <div className="skills-column">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="skill-card">
                <div className="skill-card-header">
                  {category.icon}
                  <h4 className="skill-cat-title">{category.title}</h4>
                </div>
                <div className="skills-pill-group">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-pill">
                      <CheckCircle2 size={13} className="pill-check" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;