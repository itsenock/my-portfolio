import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { techStack } from '../data/techStack';
import { education } from '../data/education';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// Stat card component
const StatCard: React.FC<{
  title: string;
  value: number | string;
  icon: React.ReactNode;
  color: string;
  suffix?: string;
}> = ({ title, value, icon, color, suffix = '' }) => (
  <motion.div
    variants={itemVariants}
    className="glass-card card-hover relative overflow-hidden"
  >
    <div className={`absolute top-0 right-0 w-24 h-24 ${color} opacity-10 rounded-full -translate-y-1/2 translate-x-1/2`} />
    <div className="flex items-center gap-4">
      <div className={`p-3 rounded-xl ${color} bg-opacity-20`}>
        {icon}
      </div>
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <p className="text-2xl font-bold text-white">
          {value}{suffix}
        </p>
      </div>
    </div>
  </motion.div>
);

// Progress ring component
const ProgressRing: React.FC<{
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  label: string;
}> = ({ progress, size = 120, strokeWidth = 8, color = '#14b8a6', label }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle
            className="text-gray-700"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <motion.circle
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="text-primary-500"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeLinecap="round"
            stroke={color}
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-white">{progress}%</span>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-400">{label}</p>
    </div>
  );
};

const DashboardPage: React.FC = () => {
  // Calculate stats
  const stats = {
    projectsCompleted: projects.length,
    skillsMastered: skills.filter(s => s.percent >= 80).length,
    yearsExperience: 5,
    certifications: education.filter(e => e.type === 'Certification').length,
    technologies: techStack.length,
    topSkillPercent: Math.max(...skills.map(s => s.percent)),
  };

  // Icon components
  const ProjectIcon = () => (
    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  );

  const SkillIcon = () => (
    <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );

  const ExperienceIcon = () => (
    <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const CertIcon = () => (
    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );

  const TechIcon = () => (
    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Dashboard
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            An overview of my professional journey, skills, and achievements.
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

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          <StatCard
            title="Projects Completed"
            value={stats.projectsCompleted}
            icon={<ProjectIcon />}
            color="bg-primary-500"
          />
          <StatCard
            title="Skills Mastered"
            value={stats.skillsMastered}
            icon={<SkillIcon />}
            color="bg-accent-500"
          />
          <StatCard
            title="Years Experience"
            value={stats.yearsExperience}
            suffix="+"
            icon={<ExperienceIcon />}
            color="bg-violet-500"
          />
          <StatCard
            title="Certifications"
            value={stats.certifications}
            icon={<CertIcon />}
            color="bg-green-500"
          />
          <StatCard
            title="Technologies"
            value={stats.technologies}
            icon={<TechIcon />}
            color="bg-blue-500"
          />
          <StatCard
            title="Top Skill Score"
            value={stats.topSkillPercent}
            suffix="%"
            icon={<SkillIcon />}
            color="bg-primary-500"
          />
        </motion.div>

        {/* Skills Progress Rings */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="glass-card mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-8">Skill Proficiency</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {skills.slice(0, 6).map((skill, index) => (
              <motion.div key={skill.id} variants={itemVariants}>
                <ProgressRing
                  progress={skill.percent}
                  label={skill.title}
                  color={
                    index % 3 === 0 ? '#14b8a6' : 
                    index % 3 === 1 ? '#f59e0b' : '#8b5cf6'
                  }
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="glass-card"
        >
          <h2 className="text-2xl font-bold text-white mb-8">Tech Stack</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.id}
                variants={itemVariants}
                className="flex flex-col items-center p-4 rounded-xl bg-dark-surface/50 hover:bg-dark-surface transition-colors group"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 h-10 mb-2 transition-transform group-hover:scale-110"
                />
                <span className="text-sm text-gray-400 text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DashboardPage;