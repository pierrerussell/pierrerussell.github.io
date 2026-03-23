import {Project, ProjectCategory, ProjectStatus} from '../models/project.model';
import {TechnologyName} from '../models/technology.model';

export class ProjectsData {
  private static projects: Project[] = [
    {
      id: 1,
      title: 'Market Strategy Simulator',
      description: 'Advanced financial analysis platform with historical data visualization and quantitative strategy simulations.',
      detailedDescription: 'A comprehensive stock market simulator that allows users to search stocks, visualize 2 years of historical price data, and run multiple quantitative trading strategies with detailed risk analysis and potential payoff calculations.',
      technologies: [TechnologyName.ASPNet, TechnologyName.CSharp, TechnologyName.Azure],
      category: ProjectCategory.Backend,
      featured: false,
      status: ProjectStatus.InProgress,
      githubUrl: 'https://github.com/pierrerussell/StockSimulation',
      demoUrl: '/exhibits/stock-simulation',
      highlights: [
      ],
      challenges: [
      ],
      outcomes: [
      ]
    },
    {
      id: 2,
      title: 'Financial Forecasting ML API',
      description: 'Machine learning API for stock price predictions using Linear Regression and Random Forest models.',
      detailedDescription: 'A FastAPI backend that fetches real-time financial data from FinancialModelingPrep and generates ML-based stock price predictions. Features dual-model comparison (Linear Regression vs Random Forest), technical indicator analysis, and comprehensive evaluation metrics including RMSE, MAE, and R2 scores.',
      technologies: [TechnologyName.Python, TechnologyName.FastAPI, TechnologyName.Azure, TechnologyName.GitHub],
      category: ProjectCategory.AI_ML,
      featured: false,
      status: ProjectStatus.Completed,
      githubUrl: 'https://github.com/pierrerussell/MLProject',
      demoUrl: '/exhibits/ml-forecasting',
      highlights: [
        'Dual ML model comparison (Linear Regression & Random Forest)',
        'Real-time financial data integration via FMP API',
        'Technical indicators and feature engineering',
        'Configurable prediction horizons (1-24 periods)'
      ],
      challenges: [
        'Handling insufficient historical data gracefully',
        'Balancing model complexity with prediction accuracy',
        'Building a clean async architecture with FastAPI'
      ],
      outcomes: [
        'Production-ready REST API with interactive docs',
        'Automated model evaluation and best-model recommendation',
        'Foundation for frontend visualization integration'
      ]
    },
    {
      id: 3,
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
    },
    {
      id: 4,
      title: 'Limit Order Book Engine',
      description: 'High-performance limit order book implementation in Rust for simulating exchange-level order matching.',
      detailedDescription: 'A systems-level implementation of a limit order book (LOB) in Rust, designed for low-latency order matching and market simulation. Features efficient data structures for price-time priority matching, real-time order book depth tracking, and support for various order types.',
      technologies: [TechnologyName.Git, TechnologyName.GitHub, TechnologyName.Rust],
      category: ProjectCategory.Backend,
      featured: false,
      status: ProjectStatus.InProgress,
      githubUrl: 'https://github.com/pierrerussell/Rust-LOB',
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
}
