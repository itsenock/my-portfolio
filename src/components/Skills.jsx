import React from "react";
import "./Skills.css";
import AnimatedSection from "./AnimatedSection";

const skillData = [
  {
    title: "Technical Skills",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    percent: 95
  },
  {
    title: "Web Development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    percent: 90
  },
  {
    title: "Networking and Systems",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    percent: 85
  },
  {
    title: "Technologies",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    percent: 88
  },
  {
    title: "Projects",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    percent: 92
  },
  {
    title: "Soft Skills",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    percent: 80
  }
];

const Skills = () => (
  <AnimatedSection title="Skills">
    <section id="skills" className="card">
      <div className="skills-container">
        <div className="skills-header">
          <h2>My Core Competencies</h2>
        </div>
        <div id="skills-content">
          {skillData.map(({ title, icon, percent }, i) => (
            <div className="skill" key={i}>
              <div className="skill-top">
                <img src={icon} alt={title} className="skill-icon" />
                <span className="skill-title">{title}</span>
              </div>
              <div className="skill-progress">
                <div className="skill-bar" style={{ width: `${percent}%` }}>
                  <span className="skill-percent">{percent}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="skills-footer">
          <a href="Skills.html" className="btn">View Applications</a>
        </div>
      </div>
    </section>
  </AnimatedSection>
);

export default Skills;
