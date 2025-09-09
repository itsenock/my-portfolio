import React from 'react';
import './Education.css';
import AnimatedSection from './AnimatedSection';

const educationData = [
  {
    title: 'BSc. Computer Science',
    inst: 'Laikipia University',
    type: 'Degree',
    date: '2018 – 2022',
    location: 'Nyahururu, Kenya',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
  },
  {
    title: 'Cybersecurity',
    inst: 'Cisco International Academy',
    type: 'Certification',
    date: '2022',
    location: 'Online',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
  },
  {
    title: 'Networking & Communication',
    inst: 'Cisco Networking Academy',
    type: 'Certification',
    date: '2021',
    location: 'Online',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg'
  },
  {
    title: 'Electronics & Hardware',
    inst: 'Cisco International Academy',
    type: 'Certification',
    date: '2020',
    location: 'Online',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg'
  },
  {
    title: 'KCSE Certificate',
    inst: 'St John School, Kanunga',
    type: 'Secondary',
    date: '2014 – 2017',
    location: 'Kiambu, Kenya',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg'
  }
];

const Education = () => (
  <AnimatedSection title="Education">
    <section id="education" className="card">
      <div id="education-content">
        {educationData.map((item, i) => (
          <article className="program" key={i}>
            <div className="program-icon">
              <img src={item.icon} alt={`${item.title} icon`} />
            </div>
            <div className="program-body">
              <h3 className="program-title">{item.title}</h3>
              <p className="program-inst">{item.inst}</p>
              <p className="program-meta">{item.date} • {item.location}</p>
              <span className="chip">{item.type}</span>
            </div>
          </article>
        ))}
      </div>
      <div className="education-footer">
        <a href="Education.html" className="btn">View Transcript</a>
      </div>
    </section>
  </AnimatedSection>
);

export default Education;
