// Project types
export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  link?: string;
  github?: string;
  tags?: string[];
  featured?: boolean;
  category?: 'web' | 'mobile' | 'desktop' | 'other';
}

// Skill types
export interface Skill {
  id: string;
  title: string;
  icon: string;
  percent: number;
  category?: 'technical' | 'soft' | 'tools';
  description?: string;
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Education types
export interface Education {
  id: string;
  title: string;
  institution: string;
  type: 'Degree' | 'Certification' | 'Secondary' | 'Course';
  date: string;
  location: string;
  icon: string;
  description?: string;
}

// Language/Tech Stack types
export interface TechStack {
  id: string;
  name: string;
  icon: string;
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

// Contact types
export interface ContactMethod {
  id: string;
  name: string;
  icon: string;
  link: string;
  type: 'email' | 'social' | 'phone';
}

// Social Link types
export interface SocialLink {
  id: string;
  name: string;
  icon: string;
  url: string;
}

// Theme types
export type Theme = 'dark' | 'light';

// Navigation types
export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

// Dashboard stats
export interface DashboardStats {
  projectsCompleted: number;
  skillsMastered: number;
  yearsExperience: number;
  certifications: number;
  clientsSatisfied: number;
  linesOfCode: number;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Animation variants for Framer Motion
export interface AnimationVariants {
  hidden: object;
  visible: object;
  exit?: object;
}

// Component props types
export interface AnimatedSectionProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  delay?: number;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'glass' | 'clay' | 'default';
  hover?: boolean;
}

export interface ProgressBarProps {
  percent: number;
  label?: string;
  showPercent?: boolean;
  color?: 'primary' | 'accent' | 'violet';
  animated?: boolean;
  className?: string;
}
