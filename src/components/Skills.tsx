import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { useThemeContext } from '../context/ThemeContext';

// Animated progress bar component
const AnimatedProgressBar: React.FC<{
  percent: number;
  label: string;
  icon: string;
  index: number;
  isDark: boolean;
}> = ({ percent, label, icon, index, isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <div className="flex items-center gap-4 mb-3">
        <div className={`w-10 h-10 rounded-lg p-2 group-hover:bg-primary-500/20 transition-colors ${isDark ? 'bg-dark-surface/50' : 'bg-light-surface border border-light-border'}`}>
          <img src={icon} alt={label} className="w-full h-full object-contain" />
        </div>
        <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{label}</span>
        <span className="ml-auto text-primary-500 font-bold">{percent}%</span>
      </div>
      
      <div className={`relative h-3 rounded-full overflow-hidden ${isDark ? 'bg-dark-surface/50' : 'bg-light-surface border border-light-border'}`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: 'easeOut' }}
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background: `linear-gradient(90deg, #14b8a6 0%, #f59e0b 50%, #8b5cf6 100%)`,
          }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 shimmer" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const { isDark } = useThemeContext();

  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">My Core Competencies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-violet-500 mx-auto rounded-full" />
          <p className={`mt-4 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            A comprehensive overview of my technical expertise and professional skills
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`glass-card ${!isDark ? 'border border-light-border' : ''}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <AnimatedProgressBar
                key={skill.id}
                percent={skill.percent}
                label={skill.title}
                icon={skill.icon}
                index={index}
                isDark={isDark}
              />
            ))}
          </div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center gap-2"
            >
              View Applications
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;