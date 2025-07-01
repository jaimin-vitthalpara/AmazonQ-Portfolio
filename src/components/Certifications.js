import React from 'react';
import { FaClock } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'DevOps: Beginner to Advanced',
      issuer: 'Udemy',
      status: 'Completed',
      certificate: '/Udemy-DevOps-Certificate.pdf',
      description: 'Comprehensive DevOps training covering CI/CD pipelines, Docker containerization, IaC with Terraform, and automated deployment strategies. Gained hands-on experience with Jenkins, Git workflows, AWS cloud services, and modern cloud-native DevOps practices.'
    },
    {
      title: 'DevOps meets AI',
      issuer: 'Parul University',
      status: 'Completed',
      certificate: '/DevOps Meets AI Certificate - Parul University.pdf',
      description: 'Event focused on how AI merges with DevOps practices and methodologies. Gained learning and hands-on experience with Amazon Q, exploring AI-powered development tools, intelligent code assistance, and automated DevOps workflows enhanced by artificial intelligence.'
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      status: 'In Progress',
      certificate: null,
      description: null
    }
  ];

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="cert-status">
                {cert.status === 'In Progress' ? (
                  <span className="status-progress">
                    <FaClock /> {cert.status}
                  </span>
                ) : (
                  <span className="status-completed">✓ {cert.status}</span>
                )}
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                {cert.status === 'Completed' ? (
                  <>
                    <p className="cert-issuer">Issued by <span className="cert-issuer-name">{cert.issuer}</span></p>
                    <p className="cert-description">{cert.description}</p>
                  </>
                ) : (
                  <>
                    <p className="cert-issuer">Issued by <span className="cert-issuer-name">Amazon Web Services</span></p>
                    <p className="cert-progress">Currently preparing for foundational AWS certification to validate cloud knowledge and demonstrate expertise in AWS services, architecture, and best practices.</p>
                  </>
                )}
              </div>
              {cert.certificate && (
                <div className="cert-actions">
                  <a href={cert.certificate} target="_blank" rel="noopener noreferrer" className="cert-link">
                    View Certificate
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;