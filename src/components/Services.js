import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import ScrollReveal from './ScrollReveal';

const Services = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      icon: "🌐",
      title: t.webDev.title,
      description: t.webDev.description
    },
    {
      icon: "📱",
      title: t.mobileDev.title,
      description: t.mobileDev.description
    },
    {
      icon: "🎨",
      title: t.design.title,
      description: t.design.description
    },
    {
      icon: "🛒",
      title: t.ecommerce.title,
      description: t.ecommerce.description
    },
    {
      icon: "🔍",
      title: t.seo.title,
      description: t.seo.description
    },
    {
      icon: "💡",
      title: t.consulting.title,
      description: t.consulting.description
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <ScrollReveal className="reveal">
          <h2 className="section-title">{t.servicesTitle}</h2>
        </ScrollReveal>
        <div className="services-grid">
          {services.map((service, index) => (
            <ScrollReveal key={index} className="reveal-scale" delay={index * 100}>
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
