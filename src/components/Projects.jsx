import React from "react";
import "./Projects.css";
import AnimatedSection from "./AnimatedSection";

const projectData = [
  {
    title: "Portfolio Website",
    image: "images/projects/portfoliowebsite.png",
    description:
      "A sleek, scroll-animated React portfolio with modular components, typewriter effects, and layered UI polish.",
    link: "https://itsenock.vercel.app/",
  },
  {
    title: "movie application",
    image: "images/projects/movieapp.png",
    description:
      "Designed to deliver an immersive user experience, the site features real-time movie data, interactive UI elements, and layered animations that elevate browsing into a visual journey.",
    link: "https://eno-hub.vercel.app/",
  },
  {
    title: "ecommerce web application",
    image: "images/projects/home.jpeg",
    description:
      "designed to empower users to buy and sell products seamlessly. Built with ReactJS and backed by a secure, scalable backend, the site combines intuitive navigation, real-time listings, and interactive UI elements to deliver a premium marketplace experience.",
    link: "https://campus-market-six.vercel.app/",
  },
  {
    title: "unity connect(donation website)",
    image: "images/projects/unityconnect.png",
    description:
      "built to connect compassionate donors with meaningful causes. Developed using ReactJS and styled with modular CSS, the platform emphasizes clarity, trust, and ease of use—ensuring that every visitor feels confident and inspired to contribute.",
    link: "https://unity-ecru-theta.vercel.app/home",
  },
  {
    title: "sales mangement system",
    image: "images/projects/salesman.png",
    description:
      "a full-stack sales management system designed to streamline product tracking, customer engagement, and revenue analytics",
    link: "https://drone-rho-five.vercel.app/",
  },
];

const Projects = () => (
  <AnimatedSection title="Projects">
    <section id="projects" className="card">
      <div id="projects-content">
        {projectData.map((project, i) => (
          <div className="project" key={i}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="projects-footer">
        <a href="Projects.html" className="btn">
          Explore More
        </a>
      </div>
    </section>
  </AnimatedSection>
);

export default Projects;
