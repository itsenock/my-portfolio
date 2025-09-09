import React from "react";
import "./Skills.css";
import AnimatedSection from "./AnimatedSection";

const skillData = [
  { title: "🧑‍💻 Technical Skills", percent: 95 },
  { title: "🕸️ Web Development", percent: 90 },
  { title: "🌐 Networking and systems", percent: 85 },
  { title: "⚙️ Technologies", percent: 88 },
  { title: "📂 Projects", percent: 92 },
  { title: "🧠 Soft skills", percent: 80 },
];

const Skills = () => (
  <AnimatedSection title="Skills">
    <section id="skills" className="card">
      <div className="skills-container">
        <div className="skills-header">
          <h2>My Core Competencies</h2>
        </div>
        <div id="skills-content">
          {skillData.map(({ title, percent }, i) => (
            <div className="skill" key={i}>
              <div className="skill-top">
                <span className="skill-icon">{title.split(" ")[0]}</span>
                <span className="skill-title">
                  {title.split(" ").slice(1).join(" ")}
                </span>
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
          <a href="Skills.html" className="btn">
            View Applications
          </a>
        </div>
      </div>
    </section>
  </AnimatedSection>
);

export default Skills;
