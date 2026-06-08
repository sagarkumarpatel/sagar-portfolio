export interface Skill {
  name: string;
  level: number; // 1-100
  icon?: string;
  category: SkillCategory;
}

export type SkillCategory = 
  | 'languages' 
  | 'frontend' 
  | 'backend' 
  | 'databases' 
  | 'tools' 
  | 'core';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  challenges: string[];
  githubUrl: string;
  liveUrl?: string;
  images: string[];
  year: number;
  category: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
  techStack: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  score: string;
  coursework: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'hackathon' | 'certification' | 'coding' | 'award';
  link?: string;
  image?: string;  // Add this
  certificate?: string;  // Add this
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}