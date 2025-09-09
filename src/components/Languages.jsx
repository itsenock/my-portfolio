import React from "react";
import "./Languages.css";
import AnimatedSection from "./AnimatedSection";

const techStack = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "ReactJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
];

const Languages = () => (
  <AnimatedSection title="Languages">
    <section id="languages" className="card">
      <div className="languages-grid">
        {techStack.map(({ name, icon }, i) => (
          <div className="language" key={i}>
            <img src={icon} alt={`${name} icon`} />
            <p>{name}</p>
          </div>
        ))}
      </div>
      <div className="languages-footer">
        <a href="Languages.html" className="btn">
          View Details
        </a>
      </div>
    </section>
  </AnimatedSection>
);

export default Languages;
