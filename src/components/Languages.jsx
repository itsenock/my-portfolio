import React from 'react';
import './Languages.css';
import AnimatedSection from './AnimatedSection'; // Adjust path if needed

const Languages = () => (
  <AnimatedSection title="Languages">
    <section id="languages" className="card">
      <div id="languages-content">
        {['Python', 'JavaScript', 'HTML', 'CSS', 'Java', 'C++', 'ReactJS'].map((lang, i) => (
          <div className="language" key={i}>
            <p>{lang}</p>
            <img src="images/profile1.jpeg" alt="icon" />
          </div>
        ))}
      </div>
      <a href="Languages.html" className="btn">View Details</a>
    </section>
  </AnimatedSection>
);

export default Languages;