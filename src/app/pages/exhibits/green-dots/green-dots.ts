import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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

interface ArchitectureLayer {
  name: string;
  description: string;
  components: string[];
}

@Component({
  selector: 'app-green-dots',
  imports: [CommonModule],
  templateUrl: './green-dots.html',
  styleUrl: './green-dots.scss',
})
export class GreenDotsComponent {
  features: Feature[] = [
    {
      title: 'Microsoft Teams Integration',
      description: 'Polls presence status every 15 seconds via Microsoft Graph API, capturing all availability states (Available, Busy, Away, etc.)',
      icon: 'integration'
    },
    {
      title: 'Smart Recording Strategy',
      description: 'Only writes to database on status changes or hourly heartbeats, reducing storage while maintaining accuracy',
      icon: 'database'
    },
    {
      title: 'Simplified Tenant Connection',
      description: 'Delegated OAuth permissions streamline the connection process after initial admin consent to the application',
      icon: 'onboarding'
    },
    {
      title: 'Automated Reporting',
      description: 'Customizable daily, weekly, and monthly email reports with presence analytics and working hours insights',
      icon: 'reports'
    },
    {
      title: 'Subscription Billing',
      description: 'Stripe-powered per-seat pricing with tiered volume discounts and 7-day free trial',
      icon: 'billing'
    },
    {
      title: 'Multi-Organization Support',
      description: 'Role-based access control with Admin and Member roles across multiple organizations per user',
      icon: 'organization'
    }
  ];

  techStack: TechItem[] = [
    { name: 'Angular 21', purpose: 'Modern SPA with standalone components and Signals API', layer: 'frontend' },
    { name: 'TypeScript', purpose: 'Type-safe development with strict mode enabled', layer: 'frontend' },
    { name: 'Tailwind CSS 4.2', purpose: 'Utility-first styling with custom design tokens', layer: 'frontend' },
    { name: 'ASP.NET Core 10', purpose: 'High-performance REST API with clean architecture', layer: 'backend' },
    { name: 'Entity Framework Core 10', purpose: 'ORM with migrations and efficient change tracking', layer: 'backend' },
    { name: 'Azure Functions (Isolated Worker)', purpose: 'Background jobs for polling, reports, and email delivery', layer: 'backend' },
    { name: 'Azure SQL Database', purpose: 'Relational database in Singapore region with 90-day retention', layer: 'database' },
    { name: 'Azure Queue Storage', purpose: 'Message queue for async email and report processing', layer: 'infrastructure' },
    { name: 'Azure App Service', purpose: 'API hosting with health checks and auto-scaling', layer: 'infrastructure' },
    { name: 'Azure Static Web Apps', purpose: 'Landing page hosting with auto-deployment from GitHub', layer: 'infrastructure' },
    { name: 'Application Insights', purpose: 'Telemetry, logging, and performance monitoring', layer: 'infrastructure' },
    { name: 'Auth0', purpose: 'Platform identity with OIDC and social login support', layer: 'infrastructure' },
    { name: 'Microsoft Graph API', purpose: 'Presence data polling via batch endpoints', layer: 'infrastructure' },
    { name: 'Stripe', purpose: 'Subscription billing with webhook-based lifecycle management', layer: 'infrastructure' },
    { name: 'Resend', purpose: 'HTML-templated transactional email delivery', layer: 'infrastructure' }
  ];

  architectureLayers: ArchitectureLayer[] = [
    {
      name: 'Domain Layer',
      description: 'Core business logic and entity definitions with no external dependencies',
      components: [
        'Organization, subscription, and team member entities',
        'Presence history tracking for all status changes',
        'Email report settings with frequency configuration',
        'Working hours with timezone-aware validation',
        'User roles and permissions management'
      ]
    },
    {
      name: 'Application Layer',
      description: 'Business logic services and integration abstractions',
      components: [
        'Microsoft Graph API service for presence polling',
        'Stripe billing service with webhook handlers',
        'Report calculation engine with insights detection',
        'Email queue abstractions for async delivery',
        'Input validation services'
      ]
    },
    {
      name: 'Infrastructure Layer',
      description: 'Concrete implementations of external integrations',
      components: [
        'Entity Framework Core data access layer',
        'Stripe SDK integration for subscriptions',
        'Email service implementation',
        'Azure Queue Storage for message queuing',
        'Auth0 OIDC authentication provider'
      ]
    },
    {
      name: 'API Layer',
      description: 'HTTP API layer with controllers and middleware',
      components: [
        'REST endpoints for organizations, seats, and reports',
        'Permission-based authorization handlers',
        'Rate limiting middleware (per-endpoint and per-user)',
        'Correlation ID tracking for distributed tracing',
        'CORS and security headers configuration'
      ]
    },
    {
      name: 'Background Jobs Layer',
      description: 'Azure Functions for scheduled and event-driven processing',
      components: [
        'Timer-triggered presence polling (15-second intervals)',
        'Report scheduling to determine which reports to send',
        'Queue-triggered email delivery',
        'Trial expiry cleanup jobs',
        'Async report generation and calculation'
      ]
    }
  ];

  keyFeatures = [
    {
      title: 'Presence Tracking Pipeline',
      description: 'End-to-end presence capture and storage',
      details: [
        'Background jobs poll Microsoft Graph API every 15 seconds',
        'Batch endpoint supports up to 650 users per call',
        'Smart recording: only write on status change or hourly heartbeat',
        'Captures all states: Available, Busy, DoNotDisturb, InACall, InAMeeting, Offline, etc.',
        'Timezone-aware working hours detection (within/outside)'
      ]
    },
    {
      title: 'Seat-Based Access Control',
      description: 'Flexible user assignment with billing enforcement',
      details: [
        'Administrators assign specific team members to track',
        'Dashboard automatically filters to assigned seats for all users',
        'Paid seat limit enforced during assignment process',
        'Trial offers unlimited seats, paid plans enforce Stripe subscription limits',
        'Tier-based pricing with volume discounts for larger teams'
      ]
    },
    {
      title: 'Automated Email Reporting',
      description: 'Queue-based async report generation and delivery',
      details: [
        'Configurable frequency: Daily, Weekly, Monthly',
        'Scheduled jobs determine which reports to send based on settings',
        'Jobs pushed to message queue with organization metadata',
        'Queue-triggered workers process jobs and calculate metrics',
        'HTML templates with presence summaries and insights',
        'Multiple recipient support (not limited to tracked employees)'
      ]
    }
  ];

  technicalHighlights = [
    {
      title: 'Delegated Permissions Architecture',
      challenge: 'Simplify tenant connection process for SMEs after initial setup',
      solution: 'Used Microsoft Graph delegated permissions instead of application permissions, requiring one-time admin consent followed by simplified OAuth flows for subsequent users',
      impact: 'Streamlined onboarding process while maintaining security and compliance'
    },
    {
      title: 'Stripe Webhook Idempotency',
      challenge: 'Handle webhook retries and ensure subscription state consistency',
      solution: 'Database tracks processed events by unique identifiers, preventing duplicate processing. Subscription status updated based on webhook event types throughout the billing lifecycle',
      impact: 'Reliable billing lifecycle management with zero duplicate charges'
    },
    {
      title: 'Timezone-Aware Working Hours',
      challenge: 'Validate working hours across organizations in different timezones',
      solution: 'Organization-level IANA timezone (auto-detected from Microsoft tenant). Working hours validation converts timestamps to organization timezone before checking',
      impact: 'Accurate out-of-hours detection for global teams'
    }
  ];

  testingCoverage = [
    'Report calculation logic with mock presence data',
    'Presence breakdown calculations (Available %, Busy %, etc.)',
    'Insight detection (burnout signals, overtime patterns)',
    'Email validation and recipient management',
    'Timezone conversion and working hours validation',
    'Stripe webhook processing with idempotency',
    'Authorization handlers for all permission types',
    '251+ unit tests with Vitest (frontend) and xUnit (backend)'
  ];

  get frontendTech(): TechItem[] {
    return this.techStack.filter(t => t.layer === 'frontend');
  }

  get backendTech(): TechItem[] {
    return this.techStack.filter(t => t.layer === 'backend');
  }

  get databaseTech(): TechItem[] {
    return this.techStack.filter(t => t.layer === 'database');
  }

  get infrastructureTech(): TechItem[] {
    return this.techStack.filter(t => t.layer === 'infrastructure');
  }
}
