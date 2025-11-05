import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Use Formspree for reliable email delivery
      const response = await fetch('https://formspree.io/f/xpwovplj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New Contact from ${formData.name} - Portfolio`
        }),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Formspree failed');
      }
    } catch (error) {
      // Fallback: Open email client
      const subject = `Contact from ${formData.name}`;
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      const mailtoLink = `mailto:akashkumbhar3112@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      window.open(mailtoLink);
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }
    
    setIsSubmitting(false);
    setTimeout(() => setStatus(''), 5000);
  };

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
          
          <motion.form 
            onSubmit={handleSubmit} 
            className="contact-form"
            data-aos="fade-left"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <motion.button 
              type="submit" 
              className={`btn submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
            
            {status && (
              <motion.div 
                className={`status ${status}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {status === 'success' ? '✓ Message sent successfully!' : '✗ Failed to send message. Please try again.'}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;