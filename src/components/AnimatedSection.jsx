import React, { useRef, useState, useEffect } from 'react';
import './AnimatedSection.css';

const AnimatedSection = ({ children, title }) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);
  const [animateTypewriter, setAnimateTypewriter] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
        setAnimateTypewriter(entry.isIntersecting);
      });
    }, { threshold: 0.3 });

    const current = domRef.current;
    if (current) observer.observe(current);
    return () => observer.unobserve(current);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {title && (
        <div className="animated-title-wrapper">
          <h1 className={`typewriter ${animateTypewriter ? 'animate' : ''}`}>
            {title}
          </h1>
        </div>
      )}
      {children}
    </div>
  );
};

export default AnimatedSection;