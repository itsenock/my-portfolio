import React from 'react';
import { motion } from 'framer-motion';
import Intro from '../components/Intro';
import Bio from '../components/Bio';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Languages from '../components/Languages';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contacts from '../components/Contacts';

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

const Home: React.FC = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen"
    >
      <Intro />
      <Bio />
      <Skills />
      <Services />
      <Languages />
      <Education />
      <Projects />
      <Contacts />
    </motion.div>
  );
};

export default Home;
