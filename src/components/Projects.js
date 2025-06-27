import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'AWS Auto Scaling: Real-time Monitoring with CloudWatch & SNS',
      description: 'Implemented auto-scaling solution with real-time monitoring using CloudWatch metrics and SNS notifications for EC2 instances.',
      tech: ['AWS', 'CloudWatch', 'SNS', 'Auto Scaling', 'EC2'],
      github: 'https://github.com/jaimin-vitthalpara/aws-mini-projects/blob/main/AWS%20AutoScaling%20Monitoring.md',
      demo: 'https://github.com/jaimin-vitthalpara/aws-mini-projects/blob/main/AWS%20AutoScaling%20Monitoring.md'
    },
    {
      title: 'AWS CI/CD Pipeline with GitHub, CodeBuild & CodeDeploy',
      description: 'Built complete CI/CD pipeline integrating GitHub with AWS CodeBuild and CodeDeploy for automated application deployment.',
      tech: ['AWS CodeBuild', 'CodeDeploy', 'GitHub', 'S3', 'EC2'],
      github: 'https://github.com/jaimin-vitthalpara/aws-mini-projects/blob/main/AWS%20CICD%20Pipeline%20with%20GitHub%2C%20CodeBuild%20%26%20CodeDeploy.md',
      demo: 'https://github.com/jaimin-vitthalpara/aws-mini-projects/blob/main/AWS%20CICD%20Pipeline%20with%20GitHub%2C%20CodeBuild%20%26%20CodeDeploy.md'
    },
    {
      title: 'Terraform-Based EC2 Deployment Documentation',
      description: 'Infrastructure as Code implementation using Terraform to deploy and manage EC2 instances with proper documentation.',
      tech: ['Terraform', 'AWS', 'EC2', 'VPC', 'Security Groups'],
      github: 'https://github.com/jaimin-vitthalpara/aws-mini-projects/blob/main/Terraform_Ec2_Web_Deploy.md',
      demo: 'https://github.com/jaimin-vitthalpara/aws-mini-projects/blob/main/Terraform_Ec2_Web_Deploy.md'
    },
    {
      title: 'WeatherBot: A Real-Time Weather Chatbot Using AWS',
      description: 'Developed a serverless weather chatbot using AWS Lambda, API Gateway, and external weather APIs for real-time data.',
      tech: ['AWS Lambda', 'API Gateway', 'Python', 'Weather API'],
      github: 'https://github.com/jaimin-vitthalpara/aws-mini-projects/blob/main/WeatherBot%3A%20A%20Real-Time%20Weather%20Chatbot%20Using%20AWS.md',
      demo: 'https://github.com/jaimin-vitthalpara/aws-mini-projects/blob/main/WeatherBot%3A%20A%20Real-Time%20Weather%20Chatbot%20Using%20AWS.md'
    },
    {
      title: 'CI/CD Pipeline with Jenkins for Docker Image Deployment to AWS ECR',
      description: 'Automated Docker image build and deployment pipeline using Jenkins with AWS ECR integration for container management.',
      tech: ['Jenkins', 'Docker', 'AWS ECR', 'CI/CD', 'Pipeline'],
      github: 'https://github.com/jaimin-vitthalpara/aws-mini-projects/blob/main/CICD_Pipeline_for_Docker_Deployment_to_AWS_ECR.md',
      demo: 'https://github.com/jaimin-vitthalpara/aws-mini-projects/blob/main/CICD_Pipeline_for_Docker_Deployment_to_AWS_ECR.md'
    },
    {
      title: 'Real-Time E-Commerce Transaction Monitoring with AWS Kinesis',
      description: 'Built real-time data streaming solution using AWS Kinesis to monitor and process fake e-commerce transactions with analytics and alerting.',
      tech: ['AWS Kinesis', 'Real-time Analytics', 'Data Streaming', 'Lambda', 'CloudWatch'],
      github: 'https://github.com/jaimin-vitthalpara/aws-mini-projects/blob/main/AWS%20Kinesis%20Project%3A%20Real-Time%20Fake%20E-commerce%20Transactions.md',
      demo: 'https://github.com/jaimin-vitthalpara/aws-mini-projects/blob/main/AWS%20Kinesis%20Project%3A%20Real-Time%20Fake%20E-commerce%20Transactions.md'
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">AWS Real-World Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link centered-link">
                  <FaGithub /> View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;