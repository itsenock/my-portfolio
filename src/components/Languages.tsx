import React from 'react';
import { motion } from 'framer-motion';
import { techStack } from '../data/techStack';

// Proficiency colors
const proficiencyColors: Record<string, string> = {
  expert: 'border-primary-500 bg-primary-500/10',
  advanced: 'border-accent-500 bg-accent-500/10',
  intermediate: 'border-violet-500 bg-violet-500/10',
  beginner: 'border-gray-500 bg-gray-500/10',
};

// Tech card component
const TechCard: React.FC<{
  tech: typeof techStack[0];
  index: number;
}> = ({ tech, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className={`relative p-4 rounded-xl border ${proficiencyColors[tech.proficiency || 'beginner']} 
        group cursor-pointer transition-all duration-300`}
    >
      {/* Icon */}
      <div className="w-12 h-12 mx-auto mb-2">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-full h-full object-contain transition-transform group-hover:scale-110"
        />
      </div>

      {/* Name */}
      <p className="text-center text-sm text-gray-300 group-hover:text-white transition-colors">
        {tech.name}
      </p>

      {/* Proficiency indicator */}
      {tech.proficiency && (
        <div className="absolute -top-2 -right-2">
          <span className={`w-4 h-4 rounded-full border-2 border-dark-bg ${
            tech.proficiency === 'expert' ? 'bg-primary-500' :
            tech.proficiency === 'advanced' ? 'bg-accent-500' :
            tech.proficiency === 'intermediate' ? 'bg-violet-500' : 'bg-gray-500'
          }`} />
        </div>
      )}
    </motion.div>
  );
};

const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Tech Stack</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-violet-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and programming languages I work with to build amazing solutions.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary-500" />
            <span className="text-sm text-gray-400">Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-accent-500" />
            <span className="text-sm text-gray-400">Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-violet-500" />
            <span className="text-sm text-gray-400">Intermediate</span>
          </div>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card"
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <TechCard key={tech.id} tech={tech} index={index} />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <motion.a
            href="https://github.com/itsenock"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Languages;