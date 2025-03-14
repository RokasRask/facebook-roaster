import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-branding">
          <p>
            <span className="footer-project-name">Facebook Roaster</span> • Created with AI
          </p>
        </div>
        
        <div className="footer-links">
          <a 
            href="https://github.com/yourusername/facebook-roaster" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            <i className="icon-github"></i>
            <span>GitHub</span>
          </a>
          <a 
            href="https://twitter.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            <i className="icon-twitter"></i>
            <span>Twitter</span>
          </a>
        </div>
      </div>
      
      <div className="footer-disclaimer">
        <p>
          This project is not affiliated with Facebook or Meta. It's just for fun!
        </p>
      </div>
    </footer>
  );
};

export default Footer;