import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Blog Fly",
      description: "A modern blogging platform that allows users to create, edit, and publish articles with a clean UI. Includes authentication, category-based posts, and a responsive layout.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      image: "✍️",
      github: "https://github.com/Akash-Kumbhar-Ak/blog-fly",
      live: "https://blog-fly-frontend.onrender.com/"
    },
    {
      title: "CodeverseTech",
      description: "A portfolio + project showcase platform where users can browse services, view projects, and connect for software development. Includes responsive UI, service listing, and contact section.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      image: "🌐",
      github: "https://github.com/Akash-Kumbhar-Ak?tab=repositories",
      live: "https://codeverse-technologies.netlify.app/"      // replace with live link if deployed
    },
    {
      title: "FreshMoo",
      description: "A multi-vendor milk product ordering platform with separate modules for Admin, Suppliers, and Store Owners. Store owners can search products, compare suppliers, and place orders directly. Includes product management, order tracking, and role-based authentication.",
      tech: ["React Native (Expo)", "Node.js", "Express", "MongoDB"],
      image: "🥛",
      github: "https://github.com/Akash-Kumbhar-Ak",   // replace with GitHub repository link
      live: "https://www.svcyber.com/klefreshmoo/"      // replace with Play Store / Web Panel link if deployed
    },
    {
      title: "Consultation-Co",
      description: "An online consultation and appointment booking platform that connects users with professionals. Includes user authentication, booking calendar, payment support, chat-based consultation, and admin panel for managing appointments and consultants.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      image: "📞",
      github: "https://github.com/Akash-Kumbhar-Ak",   // replace with GitHub repository link
      live: ""      // replace with deployed link when available
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div data-aos="fade-up">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcasing my latest work and technical expertise</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                <span className="project-icon">{project.image}</span>
                <div className="project-overlay">
                  <a href={project.github} className="project-link">GitHub</a>
                  <a href={project.live} className="project-link">Live Demo</a>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;