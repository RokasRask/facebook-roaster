import React from 'react';
import { useLanguage } from '../../LanguageContext';
import './Header.scss';

const Header = () => {
  const { t } = useLanguage();
  
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">{t('app.title')}</h1>
        <p className="header-subtitle">
          {t('app.subtitle')}
        </p>
      </div>
      <div className="header-image">
        <div className="image-container">
          <div className="bubble bubble-1">😂</div>
          <div className="bubble bubble-2">🔥</div>
          <div className="bubble bubble-3">💀</div>
        </div>
      </div>
    </header>
  );
};

export default Header;