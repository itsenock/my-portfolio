import React from 'react';
import './Services.css';
import AnimatedSection from './AnimatedSection';

const serviceData = [
    {
      title: 'Web Development',
      description: 'Crafting sleek, responsive websites with pixel-perfect UI and optimized performance.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      title: 'Network Engineering',
      description: 'Designing scalable network topologies and dynamic routing setups using Cisco tools.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Implementing secure systems, threat monitoring dashboards, and vulnerability assessments.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive interfaces with scroll-triggered animations and interactive effects.',
      icon: 'https://cdn-icons-png.flaticon.com/512/1821/1821061.png'
    },
    {
      title: 'Software Engineering',
      description: 'Building scalable, maintainable software systems with modular architecture and clean code principles.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    {
      title: 'Machine Learning',
      description: 'Developing intelligent models for prediction, classification, and data-driven decision making.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
    }
  ];
  

const Services = () => (
  <AnimatedSection title="Services">
    <section id="services" className="card">
      <div className="services-container">
        {serviceData.map(({ title, description, icon }, i) => (
          <div className="service-card" key={i}>
            <img src={icon} alt={title} className="service-icon" />
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  </AnimatedSection>
);

export default Services;
