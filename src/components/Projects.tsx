import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useThemeContext } from '../context/ThemeContext';

// Project card component with glassmorphism
const ProjectCard: React.FC<{
  project: typeof projects[0];
  index: number;
  isDark: boolean;
}> = ({ project, index, isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`glass-card card-hover group ${!isDark ? 'border border-light-border' : ''}`}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-xl mb-4">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark ? 'from-dark-bg/80' : 'from-light-bg/80'}`} />
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-accent-500/80 rounded-full text-xs font-semibold text-white">
            Featured
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="space-y-3">
        <h3 className={`text-xl font-bold group-hover:text-primary-500 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
          {project.title}
        </h3>
        
        <p className={`text-sm line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {project.description}
        </p>

        {/* Tags */}
        {project.tags && (
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded-full bg-primary-500/10 text-primary-500 border border-primary-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Link */}
        {project.link && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 transition-colors text-sm font-medium"
          >
            View Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const { isDark } = useThemeContext();
  // Show only featured projects on home page
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-violet-500 mx-auto rounded-full" />
          <p className={`mt-4 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            A selection of my most impactful work, showcasing expertise in web development, 
            UI/UX design, and software engineering.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isDark={isDark} />
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              Explore All Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;