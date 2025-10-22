import React, { createContext, useState, useContext, useEffect } from 'react';
import { defaultLanguage } from '../constants';

export const LanguageContext = createContext({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get language from localStorage or use browser language
    const savedLanguage = localStorage.getItem('language');
    const browserLanguage = navigator.language.split('-')[0];
    return savedLanguage || (['es', 'en'].includes(browserLanguage) ? browserLanguage : defaultLanguage);
  });

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  // Simple translation function
  const t = (key) => {
    try {
      // For nested keys like 'navigation.0.title'
      return key.split('.').reduce((obj, k) => (obj && obj[k] !== undefined) ? obj[k] : key, translations[language] || {});
    } catch (e) {
      console.warn(`Translation not found for key: ${key}`);
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};

// Import translations
import { translations } from '../constants';
