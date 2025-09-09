import React from 'react';
import './theme.css';

// Component Imports
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Services from './components/Services'; 
import Languages from './components/Languages';
import Education from './components/Education';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Bio />
      <Skills />
      <Services /> 
      <Languages />
      <Education />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}
