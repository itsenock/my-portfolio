import React from 'react';
import './Projects.css';
import AnimatedSection from './AnimatedSection';

const projectData = [
  {
    title: 'Portfolio Website',
    image: 'images/profile4.jpeg',
    description: 'A sleek, scroll-animated React portfolio with modular components, typewriter effects, and layered UI polish.',
    link: 'https://yourportfolio.com'
  },
  {
    title: 'Network Topology Simulation',
    image: 'images/profile2.jpeg',
    description: 'An enterprise-grade simulation of dynamic routing setups using Cisco Packet Tracer and advanced subnetting.',
    link: 'https://topology-sim.com'
  },
  {
    title: 'Cybersecurity Dashboard',
    image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437d2?auto=format&fit=crop&w=800&q=80',
    description: 'A real-time threat monitoring dashboard with visual analytics, alert triggers, and secure authentication layers.',
    link: 'https://cyberdash.io'
  },
  {
    title: 'Responsive UI Library',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5c3f3f3?auto=format&fit=crop&w=800&q=80',
    description: 'A custom-built UI component library with responsive grids, scroll-triggered animations, and reusable styles.',
    link: 'https://ui-library.dev'
  }
];

const Projects = () => (
  <AnimatedSection title="Projects">
    <section id="projects" className="card">
      <div id="projects-content">
        {projectData.map((project, i) => (
          <div className="project" key={i}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="projects-footer">
        <a href="Projects.html" className="btn">Explore More</a>
      </div>
    </section>
  </AnimatedSection>
);

export default Projects;
