import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites and web applications using modern technologies',
      price: 'Starting at $20 per hour',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading']
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications with React Native',
      price: 'Starting at $30 per hour',
      features: ['iOS & Android', 'Native Performance', 'App Store Ready']
    },
    {
      icon: '⚡',
      title: 'API Development',
      description: 'RESTful APIs and backend services for your applications',
      price: 'Starting at $15 per hour',
      features: ['Database Design', 'Authentication', 'Documentation']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div data-aos="fade-up">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">Professional solutions for your business needs</p>
        </motion.div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-price">{service.price}</div>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <a href="#contact" className="btn service-btn">Get Quote</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;