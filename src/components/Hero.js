import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import TypingAnimation from './TypingAnimation';
import RotatingElements from './RotatingElements';
import ParticleSystem from './ParticleSystem';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="home" className="hero">
      {/* Продвинутая система частиц */}
      <ParticleSystem />

      <div className="container">
        <div className="hero-content">
          {/* Левая часть - анимация печатания */}
          <div className="hero-left">
            <TypingAnimation />
            <p>{t.subtitle}</p>
            <div className="hero-cta">
              <button className="btn" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
                {t.servicesBtn}
              </button>
              <button className="btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                {t.contactBtn}
              </button>
            </div>
          </div>

          {/* Правая часть - крутые 3D анимации */}
          <div className="hero-right">
            <RotatingElements />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
