import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.1 }}
        >
          Akash Kumbhar
        </motion.div>
        <ul className={`nav-menu ${mobileOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={closeMobile}>Home</a></li>
          <li><a href="#about" onClick={closeMobile}>About</a></li>
          <li><a href="#skills" onClick={closeMobile}>Skills</a></li>
          <li><a href="#services" onClick={closeMobile}>Services</a></li>
          <li><a href="#projects" onClick={closeMobile}>Portfolio</a></li>
          <li><a href="#contact" onClick={closeMobile}>Contact</a></li>
        </ul>
        <div className={`mobile-menu ${mobileOpen ? 'active' : ''}`} onClick={toggleMobile}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;