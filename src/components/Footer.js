import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="copyright">
            © {currentYear} Jaimin Vitthalpara. All rights reserved.
          </p>
          <p className="footer-note">
            Built with passion & containerized dreams
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;