import { Skill } from '../types';

export const skills: Skill[] = [
  {
    id: 'technical-skills',
    title: 'Technical Skills',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    percent: 95,
    category: 'technical',
    description: 'Core programming and problem-solving abilities',
  },
  {
    id: 'web-development',
    title: 'Web Development',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    percent: 90,
    category: 'technical',
    description: 'Full-stack web application development',
  },
  {
    id: 'networking-systems',
    title: 'Networking and Systems',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    percent: 85,
    category: 'technical',
    description: 'Network architecture and system administration',
  },
  {
    id: 'technologies',
    title: 'Technologies',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    percent: 88,
    category: 'tools',
    description: 'Modern development tools and frameworks',
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    percent: 92,
    category: 'technical',
    description: 'Real-world project experience',
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills',
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    percent: 80,
    category: 'soft',
    description: 'Communication and teamwork abilities',
  },
];

// Helper function to get skills by category
export const getSkillsByCategory = (category: Skill['category']): Skill[] =>
  skills.filter(skill => skill.category === category);

// Helper function to get top skills
export const getTopSkills = (limit: number = 3): Skill[] =>
  [...skills].sort((a, b) => b.percent - a.percent).slice(0, limit);
