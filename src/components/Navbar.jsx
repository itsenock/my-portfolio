import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const navRef = useRef();

  // Apply theme class to body
  useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="logo">Welcome</div>

      <ul
        className={`nav-links ${isOpen ? 'active' : ''}`}
        onMouseLeave={() => setIsOpen(false)}
      >
        <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#contacts" onClick={() => setIsOpen(false)}>Contacts</a></li>
        <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
        <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
      </ul>

      <div className="right-icons">
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          <img
            src={
              darkMode
                ? 'https://cdn-icons-png.flaticon.com/512/581/581601.png' // Moon
                : 'https://cdn-icons-png.flaticon.com/512/869/869869.png' // Sun
            }
            alt="Toggle Theme"
          />
        </button>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/menu--v1.png"
            alt="Menu"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
