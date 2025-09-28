import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import ScrollReveal from './ScrollReveal';
import img_telegram from '../assets/telegram.png';
import img_lolz from '../assets/download.svg';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут можна додати логіку відправки форми
    alert(t.successMessage);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <ScrollReveal className="reveal">
          <h2 className="section-title">{t.contactTitle}</h2>
        </ScrollReveal>
        <div className="contact-content">
          <ScrollReveal className="reveal-left" delay={200}>
            <div className="contact-info">
                <div className="contact-div">
                    <img className="contact-icon" src={img_telegram} />
                    <h3 className="contact-title">Telegram</h3>
                </div>
            </div>
          </ScrollReveal>
            <ScrollReveal className="reveal-right" delay={400}>
                <div className="contact-info">
                    <div className="contact-div">
                        <img className="contact-icon" src={img_lolz} />
                        <h3 className="contact-title">LOLZ</h3>
                    </div>
                </div>
            </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
