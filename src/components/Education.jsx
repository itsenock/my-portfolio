import React from 'react';
import './Education.css';
import AnimatedSection from './AnimatedSection'; // Adjust path if needed

const Education = () => (
  <AnimatedSection title="Education">
    <section id="education" className="card">
      <div id="education-content">
        {[
          { title: 'Degree', detail: 'BSc. Computer Science', inst: 'Laikipia University' },
          { title: 'Cyber Security', inst: 'CISCO International Academy' },
          { title: 'Networking and Communication', inst: 'Cisco Networking Academy' },
          { title: 'Electronics, Hardware', inst: 'Cisco International Academy' },
          { title: 'KCSE Certificate', inst: 'St John School, Kanunga' }
        ].map((item, i) => (
          <div className="program" key={i}>
            {item.title && <h3>{item.title}</h3>}
            {item.detail && <p>{item.detail}</p>}
            <p className="inst">{item.inst}</p>
          </div>
        ))}
      </div>
      <a href="Education.html" className="btn">View Transcript</a>
    </section>
  </AnimatedSection>
);

export default Education;