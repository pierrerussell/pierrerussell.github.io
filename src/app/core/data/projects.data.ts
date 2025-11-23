import {Project, ProjectCategory, ProjectStatus} from '../models/project.model';
import {TechnologyName} from '../models/technology.model';

export class ProjectsData {
  private static projects: Project[] = [
    {
      id: 1,
      title: 'Market Strategy Simulator',
      description: 'Advanced financial analysis platform with historical data visualization and quantitative strategy simulations.',
      detailedDescription: 'A comprehensive stock market simulator that allows users to search stocks, visualize 2 years of historical price data, and run multiple quantitative trading strategies with detailed risk analysis and potential payoff calculations.',
      technologies: [TechnologyName.Git, TechnologyName.ASPNet, TechnologyName.CSharp, TechnologyName.FSharp, TechnologyName.Azure],
      category: ProjectCategory.Backend,
      featured: false,
      status: ProjectStatus.InProgress,
      githubUrl: 'https://github.com/pierrerussell/StockSimulation',
      highlights: [
      ],
      challenges: [
      ],
      outcomes: [
      ]
    },
    {
      id: 2,
      title: 'Digital Museum Portfolio',
      description: 'A creative portfolio website showcasing software engineering projects with an immersive museum experience.',
      detailedDescription: 'An Angular-powered portfolio that reimagines the traditional developer portfolio as an interactive digital museum. Features include typewriter animations, project exhibits, and a unique visual design that helps developers stand out to recruiters.',
      technologies: [TechnologyName.Git, TechnologyName.Git, TechnologyName.Angular, TechnologyName.TypeScript, TechnologyName.GitHub],
      category: ProjectCategory.Frontend,
      featured: false,
      status: ProjectStatus.InProgress,
      githubUrl: 'https://github.com/pierrerussell/pierrerussell.github.io',
      highlights: [
        'Unique museum-themed design metaphor',
        'Smooth typewriter animations with random property display',
        'Technology showcase with interactive logo badges',
        'Responsive design for all devices'
      ],
      challenges: [
        'Implementing performant typewriter animations',
        'Creating reusable component architecture',
        'Designing an elegant technology display system'
      ],
      outcomes: [
        'Stand-out portfolio for recruiter engagement',
        'Clean, maintainable Angular codebase',
        'Creative approach to developer branding'
      ]
    }
  ];

  static getAllProjects(): Project[] {
    return [...this.projects];
  }

  static getFeaturedProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }

  static getProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }

  static getProjectsByCategory(category: string): Project[] {
    return this.projects.filter(project =>
      project.category.toLowerCase() === category.toLowerCase()
    );
  }

  static getCategories(): string[] {
    const categories = new Set(this.projects.map(p => p.category));
    return Array.from(categories);
  }
}
