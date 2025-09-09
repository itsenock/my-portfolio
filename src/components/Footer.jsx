import React from "react";
import "./Footer.css";
import AnimatedSection from "./AnimatedSection";

const Footer = () => (
  <AnimatedSection title="Quick Links">
    <footer>
      <div id="footer-content">
        <nav className="footer-links">
          <a href="#home">Home</a>
          <a href="#intro">Intro</a>
          <a href="#bio">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#languages">Languages</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contacts">Contacts</a>
        </nav>

        <div className="footer-socials">
          <a
            href="https://github.com/itsenock"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
            />
          </a>
          <a
            href="https://linkedin.com/in/its-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://www.instagram.com/its_e.n.o.c.k_?utm_source=qr&igsh=MWNucTF5b2s3OWNx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100068887042246"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
            />
          </a>
          <a
            href="https://wa.me/254112587164"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp"
            />
          </a>
        </div>

        <hr className="footer-divider" />
        <p className="footer-copy">
          © {new Date().getFullYear()} Its_enock — All rights reserved
        </p>
      </div>
    </footer>
  </AnimatedSection>
);

export default Footer;
