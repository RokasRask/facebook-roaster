import React from 'react';
import { useLanguage } from '../../LanguageContext';
import './LanguageToggle.scss';

const LanguageToggle = () => {
  const { toggleLanguage, t, currentLanguage } = useLanguage();

  return (
    <button 
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={`Switch to ${currentLanguage === 'en' ? 'Lithuanian' : 'English'}`}
    >
      <span className="language-icon">🌐</span>
      <span className="language-text">{t('language.toggle')}</span>
    </button>
  );
};

export default LanguageToggle;