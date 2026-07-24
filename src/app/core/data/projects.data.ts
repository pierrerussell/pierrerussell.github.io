import {Project, ProjectCategory, ProjectStatus} from '../models/project.model';
import {TechnologyName} from '../models/technology.model';

export class ProjectsData {
  private static projects: Project[] = [
    {
      id: 1,
      title: 'Lasalle House Booking System',
      description: 'Enterprise booking management system for a not-for-profit retreat house, handling residential accommodations, meeting facilities, and guest services.',
      detailedDescription: 'A comprehensive full-stack booking system built for a not-for-profit organisation managing retreat house operations. The system handles the complete booking lifecycle from initial enquiry through to post-stay analytics, featuring role-based access control, dynamic quote generation, and integrated meal planning.',
      technologies: [TechnologyName.Angular, TechnologyName.TypeScript, TechnologyName.ASPNet, TechnologyName.CSharp, TechnologyName.Azure, TechnologyName.GitHub],
      category: ProjectCategory.FullStack,
      featured: true,
      status: ProjectStatus.Completed,
      imageUrl: 'images/exhibits/LasalleHouse.jpg',
      demoUrl: '/projects/laselle',
      highlights: [
        'Multi-phase booking workflow with 15+ distinct statuses',
        'Role-based access control (Super Admin, Admin, Payments Controller, User)',
        'Dynamic quote generation with configurable pricing rules',
        'Granular person-night-resource tracking for accurate billing',
        'Comprehensive audit trail for compliance requirements'
      ],
      challenges: [
        'Designing flexible data model for mixed booking types (residential + day-use)',
        'Implementing secure one-time customer form links',
        'Building complex quote calculation engine with seasonal variations',
        'Handling staggered group arrivals and departures'
      ],
      outcomes: [
        'Streamlined booking process reducing admin overhead',
        'Real-time occupancy and availability tracking',
        'Automated conversion funnel analytics',
        'Foundation for future customer self-service portal'
      ]
    },
    {
      id: 2,
      title: 'The Green Dots',
      description: 'B2B SaaS platform for Microsoft Teams presence tracking and workplace analytics, helping SMEs monitor team availability and working patterns.',
      detailedDescription: 'A production-ready B2B SaaS application that solves a critical gap in Microsoft 365 workplace analytics by capturing and storing Microsoft Teams presence status continuously. The platform provides hour-by-hour presence timelines, automated email reports, and team availability insights for remote and hybrid teams. Designed for SMEs with 5-200 employees using Microsoft 365.',
      technologies: [TechnologyName.Angular, TechnologyName.TypeScript, TechnologyName.ASPNet, TechnologyName.CSharp, TechnologyName.Azure, TechnologyName.MSSQL, TechnologyName.Stripe, TechnologyName.GitHub],
      category: ProjectCategory.FullStack,
      featured: true,
      status: ProjectStatus.Completed,
      imageUrl: 'images/exhibits/TheGreenDots.jpg',
      liveUrl: 'https://thegreendots.io',
      demoUrl: '/projects/green-dots',
      githubUrl: 'https://github.com/pierrerussell/thegreendots',
      highlights: [
        'Clean architecture with layered separation (Domain, Application, Infrastructure)',
        'Microsoft Graph API integration polling 650 users every 15 seconds',
        'Delegated OAuth permissions for simplified tenant connection after initial admin consent',
        'Stripe subscription billing with per-seat pricing and tiered volume discounts',
        'Multi-organization support with role-based access control and permission policies',
        'Azure Functions background job pipeline for presence polling and email reporting',
        'Smart presence recording strategy reducing database bloat while maintaining accuracy',
        '251+ unit tests covering business logic, calculations, and integrations',
        'Separate Astro landing page with SEO optimization deployed to Azure Static Web Apps'
      ],
      challenges: [
        'Designing delegated OAuth flow to streamline tenant connection after initial admin consent',
        'Implementing efficient presence polling strategy balancing accuracy vs database storage',
        'Building seat-based access control that filters data consistently across all user roles',
        'Handling Stripe webhook idempotency and subscription lifecycle events reliably',
        'Creating timezone-aware working hours validation across multiple organizations',
        'Architecting async report generation pipeline with queue-based email delivery',
        'Managing multi-organization user context switching in the Angular frontend'
      ],
      outcomes: [
        'Production-ready SaaS application deployed to Azure with complete CI/CD pipeline',
        'Comprehensive Microsoft Teams integration capturing all presence states',
        'Automated email reporting system (daily/weekly/monthly) with customizable recipients',
        'Real-time dashboard with presence timelines and team availability analytics',
        'Fully integrated Stripe billing with trial system, checkout flow, and customer portal',
        '7-day free trial with automatic conversion to paid subscriptions',
        'Well-documented codebase with extensive guides for launch, marketing, and deployment',
        'Foundation for SME market targeting Microsoft 365 users'
      ]
    },
    {
      id: 3,
      title: 'Financial Forecasting ML API',
      description: 'Machine learning API for stock price predictions using Linear Regression and Random Forest models.',
      detailedDescription: 'A FastAPI backend that fetches real-time financial data from FinancialModelingPrep and generates ML-based stock price predictions. Features dual-model comparison (Linear Regression vs Random Forest), technical indicator analysis, and comprehensive evaluation metrics including RMSE, MAE, and R2 scores.',
      technologies: [TechnologyName.Python, TechnologyName.FastAPI, TechnologyName.Azure, TechnologyName.GitHub],
      category: ProjectCategory.AI_ML,
      featured: false,
      status: ProjectStatus.Completed,
      imageUrl: 'images/exhibits/SciKit-Learn.jpg',
      githubUrl: 'https://github.com/pierrerussell/MLProject',
      demoUrl: '/projects/ml-forecasting',
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
      id: 4,
      title: 'BizModSwapBot',
      description: 'A Telegram Mini App for NUS students to swap module slots efficiently with automated matching logic.',
      detailedDescription: 'BizModSwapBot is an open-source Telegram Mini App designed to help students at the National University of Singapore (NUS) swap module slots (tutorials/labs) easily. It features a React-based frontend for a native mobile experience and a robust ASP.NET Core backend that handles automated matching of swap requests.',
      technologies: [TechnologyName.React, TechnologyName.TypeScript, TechnologyName.ASPNet, TechnologyName.CSharp, TechnologyName.GitHub],
      category: ProjectCategory.FullStack,
      featured: true,
      status: ProjectStatus.Completed,
      imageUrl: 'images/exhibits/BizModSwapBot.jpg',
      githubUrl: 'https://github.com/pierrerussell/BizModSwapBot',
      demoUrl: '/projects/biz-mod-swap-bot',
      highlights: [
        'Integrated seamlessly as a Telegram Mini App',
        'Automated server-side matching of swap requests',
        'Verified Telegram authentication for secure user data',
        'Native look and feel using @telegram-apps/telegram-ui',
        'Efficient slot management (active/closed requests)'
      ],
      challenges: [
        'Designing an efficient automated matching algorithm for multi-way swaps',
        'Implementing secure authentication via Telegram Web App init data',
        'Building a responsive mobile-first UI within the Telegram ecosystem'
      ],
      outcomes: [
        'Streamlined module swapping process for NUS students',
        'Open-source contribution to the student community',
        'Successful integration of modern web tech with the Telegram platform'
      ]
    },
    {
      id: 5,
      title: 'Developer Portfolio',
      description: 'A modern bento-style portfolio website showcasing software engineering projects with elegant animations.',
      detailedDescription: 'An Angular-powered portfolio featuring a modern bento grid layout, dark theme, and smooth animations. Built to showcase projects in a clean, professional manner that helps developers stand out to recruiters.',
      technologies: [TechnologyName.Git, TechnologyName.Angular, TechnologyName.TypeScript, TechnologyName.GitHub],
      category: ProjectCategory.Frontend,
      featured: false,
      status: ProjectStatus.InProgress,
      githubUrl: 'https://github.com/pierrerussell/pierrerussell.github.io',
      highlights: [
        'Modern bento grid layout design',
        'Smooth typewriter animations with random property display',
        'Technology showcase with interactive logo badges',
        'Responsive dark theme for all devices'
      ],
      challenges: [
        'Implementing performant typewriter animations',
        'Creating reusable component architecture',
        'Designing an elegant technology display system'
      ],
      outcomes: [
        'Stand-out portfolio for recruiter engagement',
        'Clean, maintainable Angular codebase',
        'Modern approach to developer branding'
      ]
    },
    {
      id: 6,
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
    },
    {
      id: 7,
      title: 'Market Strategy Simulator',
      description: 'Advanced financial analysis platform with historical data visualization and quantitative strategy simulations.',
      detailedDescription: 'A comprehensive stock market simulator that allows users to search stocks, visualize 2 years of historical price data, and run multiple quantitative trading strategies with detailed risk analysis and potential payoff calculations.',
      technologies: [TechnologyName.ASPNet, TechnologyName.CSharp, TechnologyName.Azure],
      category: ProjectCategory.Backend,
      featured: false,
      status: ProjectStatus.InProgress,
      githubUrl: 'https://github.com/pierrerussell/StockSimulation',
      demoUrl: '/projects/stock-simulation',
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
