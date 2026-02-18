import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    image: 'images/projects/portfoliowebsite.png',
    description:
      'A sleek, scroll-animated React portfolio with modular components, typewriter effects, and layered UI polish.',
    link: 'https://itsenock.vercel.app/',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    featured: true,
    category: 'web',
  },
  {
    id: 'eno-hub',
    title: 'The ENO HUB',
    image: 'images/projects/movieapp.png',
    description:
      'Designed to deliver an immersive user experience, the site features real-time movie data, interactive UI elements, and layered animations that elevate browsing into a visual journey.',
    link: 'https://eno-hub.vercel.app/',
    tags: ['React', 'API', 'Animation', 'UI/UX'],
    featured: true,
    category: 'web',
  },
  {
    id: 'campus-market',
    title: 'Campus Market',
    image: 'images/projects/home.jpeg',
    description:
      'Designed to empower users to buy and sell products seamlessly. Built with ReactJS and backed by a secure, scalable backend, the site combines intuitive navigation, real-time listings, and interactive UI elements to deliver a premium marketplace experience.',
    link: 'https://campus-market-six.vercel.app/',
    tags: ['React', 'E-commerce', 'Full-stack', 'Marketplace'],
    featured: true,
    category: 'web',
  },
  {
    id: 'unity-connect',
    title: 'Unity Connect',
    image: 'images/projects/unityconnect.png',
    description:
      'Built to connect compassionate donors with meaningful causes. Developed using ReactJS and styled with modular CSS, the platform emphasizes clarity, trust, and ease of use—ensuring that every visitor feels confident and inspired to contribute.',
    link: 'https://unity-ecru-theta.vercel.app/',
    tags: ['React', 'Social Impact', 'Donation Platform'],
    featured: false,
    category: 'web',
  },
  {
    id: 'drone-shoe',
    title: 'Drone Shoe Collection',
    image: 'images/projects/salesman.png',
    description:
      'A full-stack sales management system designed to streamline product tracking, customer engagement, and revenue analytics.',
    link: 'https://drone-rho-five.vercel.app/',
    tags: ['React', 'E-commerce', 'Analytics', 'Dashboard'],
    featured: false,
    category: 'web',
  },
];

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => 
  projects.filter(project => project.featured);

// Helper function to get projects by category
export const getProjectsByCategory = (category: Project['category']): Project[] =>
  projects.filter(project => project.category === category);

// Helper function to get project by id
export const getProjectById = (id: string): Project | undefined =>
  projects.find(project => project.id === id);
