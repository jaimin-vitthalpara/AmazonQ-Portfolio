import React from 'react';
import { FaGithub, FaLinkedin, FaAws, FaDocker } from 'react-icons/fa';
import { SiTerraform, SiJenkins } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              ☁️ Hey Cloud Geeks
            </h1>
            <p className="hero-description">
              I'm Aspiring Cloud & DevOps Engineer passionate about building scalable infrastructure and automating deployment pipelines. I specialize in AWS services, Infrastructure as Code with Terraform, containerization with Docker, and CI/CD automation with Jenkins. Currently building my expertise through hands-on projects and looking to kickstart my career in the cloud domain.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">AWS Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">4+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
            <div className="hero-buttons">
              <a href="https://github.com/jaimin-vitthalpara" target="_blank" rel="noopener noreferrer" className="btn-primary">View Projects</a>
              <a href="/Jaimin-Vitthalpara-Cloud-Resume.pdf" download="Jaimin_Vitthalpara_Resume.pdf" className="btn-secondary">Download Resume</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-container">
              <img 
                src="/WhatsApp Image 2025-06-08 at 12.36.29 PM.jpeg" 
                alt="Profile" 
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="profile-placeholder">
                <span>Add Your Photo</span>
              </div>
            </div>
            <div className="tech-icons">
              <FaAws className="tech-icon aws" />
              <FaDocker className="tech-icon docker" />
              <SiTerraform className="tech-icon terraform" />
              <SiJenkins className="tech-icon jenkins" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;