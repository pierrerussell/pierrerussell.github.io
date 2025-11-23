import {Project, ProjectCategory, ProjectStatus} from '../models/project.model';
import {TechnologyName} from '../models/technology.model';

export class ProjectsData {
  private static projects: Project[] = [
    {
      id: 1,
      title: 'Market Strategy Simulator',
      description: 'Advanced financial analysis platform with historical data visualization and quantitative strategy simulations.',
      detailedDescription: 'A comprehensive stock market simulator that allows users to search stocks, visualize 2 years of historical price data, and run multiple quantitative trading strategies with detailed risk analysis and potential payoff calculations.',
      technologies: [TechnologyName.ASPNet, TechnologyName.CSharp, TechnologyName.FSharp, TechnologyName.Azure],
      category: ProjectCategory.FullStack,
      featured: false,
      status: ProjectStatus.InProgress,
      githubUrl: 'https://github.com/pierrerussell/StockSimulation',
      highlights: [
      ],
      challenges: [
      ],
      outcomes: [
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

  // Add more projects here as you complete them
  // Just add new objects to the projects array above
}
