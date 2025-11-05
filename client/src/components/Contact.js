import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div data-aos="fade-up">
          <h2 className="section-title">Ready to Start Your Project?</h2>
          <p className="section-subtitle">Let's discuss your requirements and get your project delivered on time and within budget</p>
        </motion.div>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            data-aos="fade-right"
          >
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>akashkumbhar3112@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">⏰</div>
              <div>
                <h3>Response Time</h3>
                <p>Within 24 hours</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">🌍</div>
              <div>
                <h3>Availability</h3>
                <p>Remote Worldwide</p>
              </div>
            </div>
          </motion.div>
          
          <form 
            action="https://formspree.io/f/xpwovplj"
            method="POST"
            className="contact-form"
            data-aos="fade-left"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                required
              ></textarea>
            </div>
            
            <input type="hidden" name="_subject" value="New Portfolio Contact" />
            <input type="hidden" name="_next" value="https://akash-portfolio.vercel.app" />
            
            <button type="submit" className="btn submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;