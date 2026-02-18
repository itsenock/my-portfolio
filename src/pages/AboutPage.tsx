import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Bio from '../components/Bio';
import Education from '../components/Education';
import Languages from '../components/Languages';
import Skills from '../components/Skills';

const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4 md:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, skills, and the technologies I work with.
          </p>
        </motion.div>

        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        {/* Content */}
        <div className="space-y-12">
          <Bio />
          <Skills />
          <Languages />
          <Education />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;