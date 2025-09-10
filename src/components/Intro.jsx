import React from 'react';
import './Intro.css';
import AnimatedSection from './AnimatedSection';

const Intro = () => (
  <AnimatedSection title="My name is Enock Muteti">
    <div className="intro-bg">
      <img src="images/profile3.jpeg" alt="profile" />
    </div>
    <section id="intro">
      <div className="intro-content">
        <p>
          Hi there! I'm a passionate computer scientist and programming enthusiast<br />
          with a talent for building meaningful solutions through code.<br />
          From crafting sleek, responsive websites to enterprise-grade network topologies,<br />
          I blend creativity with logic to bring ideas to life.<br />
          In this space, you'll find a showcase of my projects, skills, and technical explorations.<br />
          Whether it's behind-the-scenes logic or front-end elegance, I thrive on solving problems and pushing boundaries.
        </p>
        <a href="/resume.pdf" download>
          <button type="button">Download Resume</button>
        </a>
      </div>
    </section>
  </AnimatedSection>
);

export default Intro;
