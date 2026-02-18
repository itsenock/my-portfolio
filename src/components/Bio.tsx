import React from 'react';
import { motion } from 'framer-motion';
import { useThemeContext } from '../context/ThemeContext';

const Bio: React.FC = () => {
  const { isDark } = useThemeContext();

  return (
    <section id="bio" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`glass-card ${!isDark ? 'border border-light-border' : ''}`}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-primary-500/30 shadow-neon-cyan">
                <img
                  src="images/profile2.jpeg"
                  alt="Enock Muteti"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent-500/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-violet-500/30 rounded-full"
              />
            </motion.div>

            {/* Bio Content */}
            <div className="flex-1 text-center md:text-left">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
              >
                I'm a results-driven computer scientist with expert-level programming
                skills and a passion for solving complex problems through clean,
                efficient code.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
              >
                I specialize in languages like <span className="text-primary-500 font-semibold">Python</span>, 
                <span className="text-accent-500 font-semibold"> C++</span>, 
                <span className="text-violet-500 font-semibold"> JavaScript</span> and thrive in
                building everything from robust algorithms to dynamic web interfaces.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
              >
                My work blends precision with creativity — from sleek UI/UX to
                enterprise-grade systems — always pushing boundaries and delivering
                impact.
              </motion.p>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-4 mt-8"
              >
                <div className={`text-center p-4 rounded-xl ${isDark ? 'bg-dark-surface/50' : 'bg-light-surface/50 border border-light-border'}`}>
                  <p className="text-2xl font-bold text-primary-500">5+</p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Years Exp.</p>
                </div>
                <div className={`text-center p-4 rounded-xl ${isDark ? 'bg-dark-surface/50' : 'bg-light-surface/50 border border-light-border'}`}>
                  <p className="text-2xl font-bold text-accent-500">20+</p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Projects</p>
                </div>
                <div className={`text-center p-4 rounded-xl ${isDark ? 'bg-dark-surface/50' : 'bg-light-surface/50 border border-light-border'}`}>
                  <p className="text-2xl font-bold text-violet-500">10+</p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Technologies</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bio;