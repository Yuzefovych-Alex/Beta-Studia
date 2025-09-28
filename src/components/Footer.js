import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import ScrollReveal from './ScrollReveal';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="container">
        <ScrollReveal className="reveal">
          <p>{t.copyright}</p>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
