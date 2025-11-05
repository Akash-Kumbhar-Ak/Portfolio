import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'MongoDB', level: 90 },
    { name: 'Express.js', level: 85 },
    { name: 'React', level: 95 },
    { name: 'Node.js', level: 88 },
    { name: 'JavaScript', level: 92 },
    { name: 'TypeScript', level: 80 },
    { name: 'Python', level: 82 },
    { name: 'SQL', level: 85 },
    { name: 'React Native', level: 80 }

  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div data-aos="fade-up">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies I work with to build amazing projects</p>
        </motion.div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="skill-item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div 
                  className="skill-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;