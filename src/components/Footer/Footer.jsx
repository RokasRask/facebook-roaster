import React from 'react';
import { useLanguage } from '../../LanguageContext';
import './Footer.scss';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-branding">
          <p>
            <span className="footer-project-name">{t('app.title')}</span> • {t('footer.created')}
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
            <span>{t('footer.github')}</span>
          </a>
          <a 
            href="https://twitter.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            <i className="icon-twitter"></i>
            <span>{t('footer.twitter')}</span>
          </a>
        </div>
      </div>
      
      <div className="footer-disclaimer">
        <p>
          {t('footer.disclaimer')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;