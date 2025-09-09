import React from 'react';
import './Footer.css';
import AnimatedSection from './AnimatedSection'; // Adjust path if needed

const Footer = () => (
  <AnimatedSection title="Quick Links">
    <footer>
      <div id="footer-content">
        <a href="#home">Home</a>
        <a href="#intro">Intro</a>
        <a href="#bio">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#languages">Languages</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">Contacts</a>
      </div>
      <p>© {new Date().getFullYear()} Its_enock</p>
    </footer>
  </AnimatedSection>
);

export default Footer;