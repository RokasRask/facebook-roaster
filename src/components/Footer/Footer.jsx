import React from 'react';
import { useLanguage } from '../../LanguageContext';
import kadoaLogo from '../../assets/kadoa-logo.svg';
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
            href="https://github.com/RokasRask/facebook-roaster" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            <i className="icon-github"></i>
            <span>{t('footer.github')}</span>
          </a>
        </div>
      </div>
      
      <div className="footer-kadoa">
        <p>{t('footer.powered')}</p>
        <a 
          href="https://kadoa.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="kadoa-link"
        >
          <img src={kadoaLogo} alt="Kadoa" className="kadoa-logo" />
        </a>
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