import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/education';

// Type badge colors
const typeColors: Record<string, string> = {
  Degree: 'bg-primary-500/20 text-primary-300 border-primary-500/30',
  Certification: 'bg-accent-500/20 text-accent-300 border-accent-500/30',
  Secondary: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  Course: 'bg-green-500/20 text-green-300 border-green-500/30',
};

// Education card component
const EducationCard: React.FC<{
  item: typeof education[0];
  index: number;
}> = ({ item, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-card group"
    >
      <div className="flex gap-4">
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-xl bg-dark-surface/50 p-2 group-hover:bg-primary-500/20 transition-colors">
            <img
              src={item.icon}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors">
              {item.title}
            </h3>
            <span className={`px-3 py-1 text-xs rounded-full border ${typeColors[item.type]}`}>
              {item.type}
            </span>
          </div>
          
          <p className="text-primary-400 font-medium mb-1">{item.institution}</p>
          
          <p className="text-gray-400 text-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {item.date}
          </p>
          
          <p className="text-gray-400 text-sm flex items-center gap-2 mt-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {item.location}
          </p>

          {item.description && (
            <p className="text-gray-500 text-sm mt-2">{item.description}</p>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-violet-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My academic journey and professional certifications that have shaped my expertise.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-violet-500 hidden md:block" />

          {/* Education Items */}
          <div className="space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-bg hidden md:block" />
                
                <EducationCard item={item} index={index} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="/Enock_Muteti.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View Transcript
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;