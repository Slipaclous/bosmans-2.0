"use client";

import { useState, useEffect } from 'react';
import { Language } from '../translations';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'fr' ? 'nl' : 'fr';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return { language, toggleLanguage };
}