import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">Cologne Studio</div>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => scrollToSection('home')}>{t.home}</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>{t.about}</a></li>
            <li><a href="#services" onClick={() => scrollToSection('services')}>{t.services}</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>{t.contact}</a></li>
          </ul>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;
