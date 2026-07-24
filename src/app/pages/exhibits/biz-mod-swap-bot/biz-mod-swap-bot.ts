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

@Component({
  selector: 'app-biz-mod-swap-bot',
  imports: [CommonModule],
  templateUrl: './biz-mod-swap-bot.html',
  styleUrl: './biz-mod-swap-bot.scss',
})
export class BizModSwapBotComponent {
  features: Feature[] = [
    {
      title: 'Swap Creation',
      description: 'Post your current module slot and specify desired alternatives with ease.',
      icon: 'swap'
    },
    {
      title: 'Automated Matching',
      description: 'Server-side logic to find and match compatible swap requests automatically.',
      icon: 'match'
    },
    {
      title: 'Telegram Mini App',
      description: 'Runs directly within Telegram for a seamless, no-install user experience.',
      icon: 'telegram'
    },
    {
      title: 'Verified Authentication',
      description: 'Uses Telegram authentication to ensure data security and student identity verification.',
      icon: 'security'
    },
    {
      title: 'My Swaps Management',
      description: 'Centralized dashboard to track, manage, and close your active swap requests.',
      icon: 'management'
    },
    {
      title: 'Open Source',
      description: 'Fully open-source project encouraging community contributions and transparency.',
      icon: 'open-source'
    }
  ];

  techStack: TechItem[] = [
    { name: 'React', purpose: 'Responsive frontend library for building the Mini App interface', layer: 'frontend' },
    { name: 'TypeScript', purpose: 'Ensuring type safety across the frontend and backend models', layer: 'frontend' },
    { name: '@telegram-apps/telegram-ui', purpose: 'UI components for a native Telegram look and feel', layer: 'frontend' },
    { name: 'ASP.NET Core', purpose: 'High-performance backend API for data and matching logic', layer: 'backend' },
    { name: 'Entity Framework Core', purpose: 'Object-relational mapper for database interactions', layer: 'backend' },
    { name: 'MSSQL', purpose: 'Reliable relational database for storing swap requests', layer: 'database' },
    { name: 'GitHub', purpose: 'Source control and collaboration platform', layer: 'infrastructure' }
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
