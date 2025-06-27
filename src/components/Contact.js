import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Hii, Folks</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in discussing cloud architecture, DevOps practices, 
              and new opportunities. If you want to collaborate, learn together, or build projects, 
              I'd love to connect! Feel free to reach out!
            </p>
            <div className="terminal-links">
              <div className="terminal-line">
                <span className="prompt">$ open --email</span>
                <a href="mailto:jaimin.vitthalpara96@gmail.com" className="terminal-link">
                  <FaEnvelope /> jaimin.vitthalpara96@gmail.com
                </a>
              </div>
              <div className="terminal-line">
                <span className="prompt">$ open --github</span>
                <a href="https://github.com/jaimin-vitthalpara" target="_blank" rel="noopener noreferrer" className="terminal-link">
                  <FaGithub /> github.com/jaimin-vitthalpara
                </a>
              </div>
              <div className="terminal-line">
                <span className="prompt">$ open --linkedin</span>
                <a href="https://www.linkedin.com/in/jaimin-vitthalpara-291a6a14b" target="_blank" rel="noopener noreferrer" className="terminal-link">
                  <FaLinkedin /> linkedin.com/jaimin-vitthalpara
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;