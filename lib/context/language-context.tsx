"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'fr' ? 'nl' : 'fr';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}