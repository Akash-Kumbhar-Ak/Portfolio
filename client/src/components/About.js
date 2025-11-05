import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          data-aos="fade-up"
          className="about-content"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Passionate developer crafting digital experiences</p>
          
          <motion.div 
            className="about-text"
            data-aos="fade-up"
          >
            <p>I'm a freelance full-stack developer specializing in the MERN stack. I help businesses and entrepreneurs bring their digital ideas to life with modern, scalable web solutions.</p>
            <p>With 3+ years of experience, I've delivered 50+ projects for clients worldwide. I focus on quality code, timely delivery, and clear communication throughout the development process.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;