import React from "react";
import "./Bio.css";
import AnimatedSection from "./AnimatedSection";

const Bio = () => (
  <AnimatedSection title="Bio">
    <section id="bio" className="card">
      <img src="images/profile3.jpeg" alt="Profile" id="bio-img" />
      <div className="bio-content">
        <p>
          I'm a results-driven computer scientist with expert-level programming
          skills and a passion for solving complex problems through clean,
          efficient code.
          <br />
          I specialize in languages like Python, C++, JavaScript, and thrive in
          building everything from robust algorithms to dynamic web interfaces.
          <br />
          My work blends precision with creativity — from sleek UI/UX to
          enterprise-grade systems — always pushing boundaries and delivering
          impact.
        </p>
      </div>
    </section>
  </AnimatedSection>
);

export default Bio;
