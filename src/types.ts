export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    imageUrl?: string;
    demoUrl?: string;
    codeUrl?: string;
}
  
export interface Skill {
    name: string;
    level: number;
    category: 'frontend' | 'backend' | 'tool' | 'language' | 'database';
}