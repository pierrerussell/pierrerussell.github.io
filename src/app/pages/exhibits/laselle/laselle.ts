import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkflowPhase {
  name: string;
  statuses: string[];
  description: string;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface TechItem {
  name: string;
  purpose: string;
  layer: 'frontend' | 'backend' | 'database' | 'infrastructure';
}

@Component({
  selector: 'app-laselle',
  imports: [CommonModule],
  templateUrl: './laselle.html',
  styleUrl: './laselle.scss',
})
export class LaselleComponent {
  workflowPhases: WorkflowPhase[] = [
    {
      name: 'Enquiry',
      statuses: ['Draft', 'Pending Contact', 'Requirements Requested', 'Requirements Received', 'Form Expired'],
      description: 'Initial contact and customer requirements gathering via secure one-time form links'
    },
    {
      name: 'Quotation',
      statuses: ['Quote Pending', 'Quote Sent', 'Quote Expired'],
      description: 'Dynamic pricing calculation and quote generation by Payments Controller'
    },
    {
      name: 'Booking',
      statuses: ['Confirmed', 'Pre-Arrival'],
      description: 'Payment received, booking secured with room and meal allocations'
    },
    {
      name: 'Stay',
      statuses: ['Checked In', 'In House', 'Checked Out'],
      description: 'Active guest management with real-time occupancy tracking'
    },
    {
      name: 'Post-Stay',
      statuses: ['Completed', 'Archived'],
      description: 'Booking finalisation, feedback collection, and data archival'
    }
  ];

  features: Feature[] = [
    {
      title: 'Multi-Resource Booking',
      description: 'Handle residential rooms, meeting spaces, and dining facilities in a single unified booking',
      icon: 'calendar'
    },
    {
      title: 'Role-Based Access Control',
      description: 'Four distinct user roles with granular permissions: Super Admin, Admin, Payments Controller, and Regular User',
      icon: 'shield'
    },
    {
      title: 'Dynamic Quote Engine',
      description: 'Automated pricing calculations with support for seasonal rates, group discounts, and custom adjustments',
      icon: 'calculator'
    },
    {
      title: 'Granular Tracking',
      description: 'Person-night-resource model enables precise occupancy reporting and emergency evacuation lists',
      icon: 'tracking'
    },
    {
      title: 'Comprehensive Audit Trail',
      description: 'Immutable logging of all system operations for compliance and accountability',
      icon: 'audit'
    },
    {
      title: 'Conversion Analytics',
      description: 'Track funnel performance from enquiry to booking with detailed stage-by-stage metrics',
      icon: 'chart'
    }
  ];

  techStack: TechItem[] = [
    { name: 'Angular', purpose: 'Modern SPA with component-based architecture and reactive forms', layer: 'frontend' },
    { name: 'TypeScript', purpose: 'Type-safe development with improved IDE support and refactoring', layer: 'frontend' },
    { name: 'ASP.NET Core', purpose: 'High-performance REST API with built-in dependency injection', layer: 'backend' },
    { name: 'Entity Framework Core', purpose: 'ORM for database operations with migration support', layer: 'backend' },
    { name: 'ASP.NET Core Identity', purpose: 'Authentication and authorization with role management', layer: 'backend' },
    { name: 'SQL Server', purpose: 'Relational database with robust transaction support', layer: 'database' },
    { name: 'Azure App Service', purpose: 'Cloud hosting with CI/CD pipeline integration', layer: 'infrastructure' },
    { name: 'Mailtrap', purpose: 'Transactional email service for customer communications', layer: 'infrastructure' }
  ];

  infrastructureWork = [
    {
      title: 'Microsoft Entra ID',
      description: 'Configured identity and access management for the organisation, including user provisioning, group policies, and conditional access rules for secure authentication.'
    },
    {
      title: 'Microsoft 365 for Nonprofits',
      description: 'Set up and administered the M365 tenant under the nonprofit program, including Exchange Online, SharePoint, and Teams for organisational collaboration.'
    },
    {
      title: 'Azure Subscription Management',
      description: 'Established Azure subscription with appropriate resource groups, cost management policies, and access controls for development and production environments.'
    },
    {
      title: 'CI/CD Pipeline',
      description: 'Configured GitHub Actions workflows for automated building, testing, and deployment to Azure App Service on merge to main branch.'
    }
  ];

  sdlcStages = [
    {
      phase: 'Discovery & Requirements',
      description: 'Understanding the organisation and their needs through direct engagement',
      activities: [
        'Conducted stakeholder interviews with staff across different roles',
        'Mapped existing booking workflows and identified pain points',
        'Distinguished between wants and actual business needs',
        'Documented functional requirements with acceptance criteria'
      ],
      outcome: 'Clear understanding of the problem space and agreed-upon scope'
    },
    {
      phase: 'Technical Planning',
      description: 'Translating business requirements into technical specifications',
      activities: [
        'Converted functional requirements into technical specifications',
        'Designed data models to support complex booking scenarios',
        'Defined API contracts between frontend and backend',
        'Made architecture decisions with rationale documentation'
      ],
      outcome: 'Technical blueprint ready for stage-gated development'
    },
    {
      phase: 'Stage-Gated Development',
      description: 'Iterative delivery with stakeholder checkpoints at each phase',
      activities: [
        'Broke development into manageable phases with clear deliverables',
        'Regular demos and feedback sessions with stakeholders',
        'Stakeholder sign-off required before proceeding to next phase',
        'Continuous integration and automated testing'
      ],
      outcome: 'Working software delivered incrementally with validated features'
    },
    {
      phase: 'Deployment & Training',
      description: 'Getting the system into production and users up to speed',
      activities: [
        'Set up production infrastructure on Azure',
        'Conducted user acceptance testing with real scenarios',
        'Delivered hands-on training sessions for staff',
        'Created documentation for common workflows'
      ],
      outcome: 'Production system with confident, trained users'
    },
    {
      phase: 'Ongoing Support',
      description: 'Continuous improvement based on real-world usage',
      activities: [
        'Monitor system performance and address issues',
        'Gather feedback from daily usage patterns',
        'Implement feature enhancements based on user requests',
        'Regular check-ins with stakeholders on system health'
      ],
      outcome: 'Evolving system that grows with organisational needs'
    }
  ];
}
