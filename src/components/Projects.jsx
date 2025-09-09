import React from 'react';
import './Projects.css';
import AnimatedSection from './AnimatedSection'; // Adjust path if needed

const Projects = () => (
  <AnimatedSection title="Projects">
    <section id="projects" className="card">
      <div id="projects-content">
        <div className="project">
          <img src="images/project1.jpeg" alt="Project 1" />
          <p>Portfolio Website</p>
        </div>
        <div className="project">
          <img src="images/project2.jpeg" alt="Project 2" />
          <p>Network Topology Simulation</p>
        </div>
        <div className="project">
          <img src="images/project3.jpeg" alt="Project 3" />
          <p>Cybersecurity Dashboard</p>
        </div>
        <div className="project">
          <img src="images/project4.jpeg" alt="Project 4" />
          <p>Responsive UI Library</p>
        </div>
      </div>
      <a href="Projects.html" className="btn">Explore More</a>
    </section>
  </AnimatedSection>
);

export default Projects;