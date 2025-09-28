import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import ScrollReveal from './ScrollReveal';

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
              <h3>{t.contactInfo}</h3>
              
              <div className="contact-item">
                <span>📧</span>
                <span>info@studio.com</span>
              </div>
              
              <div className="contact-item">
                <span>📱</span>
                <span>+380 (50) 123-45-67</span>
              </div>
              
              <div className="contact-item">
                <span>📍</span>
                <span>м. Київ, вул. Хрещатик, 1</span>
              </div>
              
              <div className="contact-item">
                <span>⏰</span>
                <span>Пн-Пт: 9:00-18:00</span>
              </div>

              <div className="contact-item">
                <span>💼</span>
                <span>Telegram: @studio_dev</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="reveal-right" delay={400}>
            <div className="contact-form">
              <h3>{t.writeUs}</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">{t.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">{t.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn">{t.send}</button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
