import React from 'react';
import './Contacts.css';
import AnimatedSection from './AnimatedSection'; // Adjust path if needed

const Contacts = () => (
  <AnimatedSection title="Contacts">
    <section id="contacts" className="card">
      <div id="contacts-content">
        <div className="icon">
          <img src="images/email.jpeg" alt="Email" />
          <a href="mailto:its.dev@example.com">its.dev@example.com</a>
        </div>
        <div className="icon">
          <img src="images/github.jpeg" alt="GitHub" />
          <a href="https://github.com/its-dev" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </div>
        <div className="icon">
          <img src="images/linkedin.jpeg" alt="LinkedIn" />
          <a href="https://linkedin.com/in/its-dev" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
        </div>
        <div className="icon">
          <img src="images/phone.jpeg" alt="Phone" />
          <a href="tel:+254712345678">+254 712 345 678</a>
        </div>
      </div>
    </section>
  </AnimatedSection>
);

export default Contacts;