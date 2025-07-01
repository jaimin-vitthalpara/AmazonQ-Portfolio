import React from 'react';
import { FaAws, FaLinux, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTerraform, SiJenkins, SiKubernetes, SiShell } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'AWS', icon: <FaAws />, level: 85, color: '#ff9900', description: 'EC2, S3, Lambda, CloudWatch, VPC' },
    { name: 'Linux', icon: <FaLinux />, level: 80, color: '#fcc624', description: 'System Administration, Shell Scripting' },
    { name: 'Docker', icon: <FaDocker />, level: 85, color: '#2496ed', description: 'Containerization, Multi-stage builds' },
    { name: 'Jenkins', icon: <SiJenkins />, level: 75, color: '#d33833', description: 'CI/CD Pipelines, Automation' },
    { name: 'Terraform', icon: <SiTerraform />, level: 80, color: '#7b42bc', description: 'Infrastructure as Code, State Management' },
    { name: 'Shell Script', icon: <SiShell />, level: 75, color: '#4eaa25', description: 'Bash Scripting, Automation' },
    { name: 'Git', icon: <FaGitAlt />, level: 85, color: '#f05032', description: 'Version Control, Collaboration' },
    { name: 'Kubernetes', icon: <SiKubernetes />, level: 65, color: '#326ce5', description: 'Container Orchestration' }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-flip-card">
              <div className="skill-flip-inner">
                <div className="skill-flip-front">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: skill.color 
                      }}
                    ></div>
                  </div>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-flip-back">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-description">{skill.description}</p>
                  <div className="skill-expertise" style={{ color: skill.color }}>
                    {skill.level >= 80 ? 'Proficient' : skill.level >= 70 ? 'Competent' : 'Learning'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;