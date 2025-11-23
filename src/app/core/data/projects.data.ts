import {Project, ProjectCategory, ProjectStatus} from '../models/project.model';
import { TechnologyName } from '../models/technology.model';

export class ProjectsData {
  private static projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack shopping experience with real-time inventory management and secure payments.',
      detailedDescription: 'A comprehensive e-commerce solution built from scratch, featuring user authentication, product catalog, shopping cart, payment integration with Stripe, and an admin dashboard for inventory management.',
      technologies: [TechnologyName.Angular, TechnologyName.NodeJS, TechnologyName.PostgreSQL, TechnologyName.Stripe, TechnologyName.Docker, TechnologyName.Redis],
      category: ProjectCategory.FullStack,
      featured: false,
      status: ProjectStatus.Completed,
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      liveUrl: 'https://your-ecommerce-demo.com',
      highlights: [
        'Processed over $100k in test transactions',
        'Real-time inventory updates using WebSockets',
        'Implemented secure payment processing with PCI compliance',
        'Mobile-responsive design with PWA features'
      ],
      challenges: [
        'Implementing real-time inventory synchronization across multiple sessions',
        'Ensuring PCI compliance for payment processing',
        'Optimizing database queries for large product catalogs'
      ],
      outcomes: [
        '99.9% uptime achieved',
        'Page load times under 2 seconds',
        'Successfully handled 1000+ concurrent users in load testing'
      ]
    },
    {
      id: 2,
      title: 'AI Task Assistant',
      description: 'Intelligent task management system powered by machine learning for smart prioritization.',
      detailedDescription: 'An AI-powered task management application that learns from user behavior to automatically prioritize tasks, suggest optimal work schedules, and provide productivity insights.',
      technologies: [TechnologyName.React, TechnologyName.Python, TechnologyName.TensorFlow, TechnologyName.FastAPI, TechnologyName.MongoDB, TechnologyName.Docker],
      category: ProjectCategory.AI_ML,
      featured: false,
      status: ProjectStatus.Completed,
      githubUrl: 'https://github.com/yourusername/ai-task-assistant',
      highlights: [
        'ML model with 85% accuracy in task priority prediction',
        'Natural language processing for task creation',
        'Automated task categorization and tagging',
        'Personalized productivity insights dashboard'
      ]
    },
    {
      id: 3,
      title: 'Real-Time Analytics Dashboard',
      description: 'Data visualization platform with live updates and predictive insights.',
      detailedDescription: 'A sophisticated analytics dashboard that processes and visualizes large datasets in real-time, featuring interactive charts, predictive analytics, and customizable reporting.',
      technologies: [TechnologyName.Vue, TechnologyName.D3, TechnologyName.WebSockets, TechnologyName.MongoDB, TechnologyName.NodeJS, TechnologyName.Redis],
      category: ProjectCategory.Frontend,
      featured: false,
      status: ProjectStatus.InProgress,
      liveUrl: 'https://analytics-demo.yoursite.com',
      highlights: [
        'Processes 1M+ data points per minute',
        '15+ interactive chart types',
        'Real-time collaboration features',
        'Export capabilities in multiple formats'
      ]
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking solution with biometric authentication and real-time transactions.',
      detailedDescription: 'A React Native mobile banking application featuring biometric authentication, real-time balance updates, peer-to-peer payments, and comprehensive transaction history.',
      technologies: [TechnologyName.ReactNative, TechnologyName.TypeScript, TechnologyName.NodeJS, TechnologyName.PostgreSQL, TechnologyName.JWT],
      category: ProjectCategory.Mobile,
      featured: false,
      status: ProjectStatus.InProgress,
      highlights: [
        'Biometric authentication integration',
        'End-to-end encryption for all transactions',
        'Offline mode with data synchronization',
        'Push notifications for transaction alerts'
      ]
    },
    {
      id: 5,
      title: 'DevOps Automation Platform',
      description: 'CI/CD pipeline automation tool with infrastructure as code capabilities.',
      detailedDescription: 'A comprehensive DevOps platform that automates CI/CD pipelines, manages infrastructure as code, and provides monitoring and alerting capabilities for modern cloud applications.',
      technologies: [TechnologyName.Go, TechnologyName.React, TechnologyName.Kubernetes, TechnologyName.Terraform, TechnologyName.Prometheus, TechnologyName.GitLabCI],
      category: ProjectCategory.Backend,
      featured: false,
      status: ProjectStatus.InProgress,
      githubUrl: 'https://github.com/yourusername/devops-platform',
      highlights: [
        'Automated deployment to multiple cloud providers',
        'Infrastructure as Code with Terraform integration',
        'Built-in monitoring and alerting',
        'Support for multiple programming languages'
      ]
    },
    {
      id: 6,
      title: 'Social Learning Platform',
      description: 'Collaborative learning environment with video conferencing and interactive whiteboards.',
      detailedDescription: 'An educational platform that combines video conferencing, interactive whiteboards, and collaborative tools to create an engaging online learning experience.',
      technologies: [TechnologyName.Angular, TechnologyName.WebRTC, TechnologyName.SocketIO, TechnologyName.Express, TechnologyName.PostgreSQL, TechnologyName.AWS],
      category: ProjectCategory.Frontend,
      featured: false,
      status: ProjectStatus.Completed,
      highlights: [
        'Real-time video conferencing for up to 100 participants',
        'Interactive whiteboard with collaboration features',
        'Automated recording and transcription',
        'Integration with popular LMS platforms'
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
