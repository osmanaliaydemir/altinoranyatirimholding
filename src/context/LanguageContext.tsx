'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TranslationContent, translations } from '@/data/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationContent;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('tr');

  useEffect(() => {
    // Check localStorage or browser language on mount
    const saved = localStorage.getItem('altinoran_lang') as Language;
    if (saved && (saved === 'tr' || saved === 'en' || saved === 'ar')) {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    const isRtlLang = lang === 'ar';
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtlLang ? 'rtl' : 'ltr';
    if (isRtlLang) {
      document.documentElement.classList.add('rtl-mode');
    } else {
      document.documentElement.classList.remove('rtl-mode');
    }
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('altinoran_lang', newLang);
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t: translations[lang],
        isRTL: lang === 'ar',
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
