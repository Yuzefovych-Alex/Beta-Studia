import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import ScrollReveal from './ScrollReveal';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const aboutCards = [
    {
      icon: "🎯",
      title: t.specialization.title,
      description: t.specialization.description,
      number: "1"
    },
    {
      icon: "💰",
      title: t.cost.title,
      description: t.cost.description,
      number: "2"
    },
    {
      icon: "💳",
      title: t.payment.title,
      description: t.payment.description,
      number: "3"
    },
    {
      icon: "⚙️",
      title: t.stack.title,
      description: t.stack.description,
      number: "4"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <ScrollReveal className="reveal">
          <h2 className="section-title">{t.aboutTitle}</h2>
          <p className="about-subtitle">{t.aboutSubtitle}</p>
          <p className="about-description">{t.aboutDescription}</p>
        </ScrollReveal>
        
        <div className="about-grid">
          {aboutCards.map((card, index) => (
            <ScrollReveal key={index} className="reveal-scale" delay={index * 150}>
              <div className="about-card">
                <div className="about-card-header">
                  <div className="about-card-icon">{card.icon}</div>
                  <h3 className="about-card-title">{card.title}</h3>
                </div>
                <p className="about-card-description">{card.description}</p>
                <div className="about-card-number">{card.number}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
