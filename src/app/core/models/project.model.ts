import { TechnologyName } from './technology.model';

export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription?: string;
  technologies: TechnologyName[];
  category: ProjectCategory;
  featured: boolean;
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  startDate?: Date;
  endDate?: Date;
  status: ProjectStatus;
  highlights?: string[];
  challenges?: string[];
  outcomes?: string[];
}

export enum ProjectStatus {
  Completed = 'completed',
  InProgress = 'in-progress',
  Planned = 'planned'
}

export enum ProjectCategory {
  FullStack = 'Full-Stack',
  Frontend = 'Frontend',
  Backend = 'Backend',
  Mobile = 'Mobile',
  AI_ML = 'AI/ML',
  Other = 'Other'
}
