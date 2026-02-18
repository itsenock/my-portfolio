import { TechStack } from '../types';

export const techStack: TechStack[] = [
  {
    id: 'python',
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    proficiency: 'expert',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    proficiency: 'expert',
  },
  {
    id: 'html',
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    proficiency: 'expert',
  },
  {
    id: 'css',
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    proficiency: 'expert',
  },
  {
    id: 'java',
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    proficiency: 'advanced',
  },
  {
    id: 'cplusplus',
    name: 'C++',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    proficiency: 'advanced',
  },
  {
    id: 'reactjs',
    name: 'ReactJS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    proficiency: 'expert',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    proficiency: 'advanced',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    proficiency: 'advanced',
  },
  {
    id: 'tailwindcss',
    name: 'TailwindCSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    proficiency: 'expert',
  },
  {
    id: 'git',
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    proficiency: 'advanced',
  },
  {
    id: 'docker',
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    proficiency: 'intermediate',
  },
];

// Helper function to get tech by proficiency
export const getTechByProficiency = (proficiency: TechStack['proficiency']): TechStack[] =>
  techStack.filter(tech => tech.proficiency === proficiency);
