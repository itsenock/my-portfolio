import React, { useRef, useState, useEffect } from "react";

export default function TypewriterOnScroll({ text, className = "" }) {
  const ref = useRef();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setAnimate(true);
      });
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <h1
      ref={ref}
      className={`typewriter ${animate ? "animate" : ""} ${className}`}
    >
      {text}
    </h1>
  );
}
