import React, { createContext, useState, useContext } from 'react';
import enTranslations from './translations/en';
import ltTranslations from './translations/lt';

// Create the language context
const LanguageContext = createContext();

// Create a hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Available languages
const languages = {
  en: {
    name: 'English',
    code: 'en',
    translations: enTranslations,
  },
  lt: {
    name: 'Lithuanian',
    code: 'lt',
    translations: ltTranslations,
  }
};

// Language provider component
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  // Function to toggle between languages
  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'en' ? 'lt' : 'en');
  };

  // Get the current translations
  const translations = languages[currentLanguage].translations;

  // Translate function
  const t = (key) => {
    return translations[key] || key;
  };

  // Value to be provided by the context
  const value = {
    currentLanguage,
    toggleLanguage,
    t,
    languages
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;