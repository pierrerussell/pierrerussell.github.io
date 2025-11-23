import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project } from '../../../../core/models/project.model';
import { TechnologyStackComponent } from '../../../../shared/components/technology-stack/technology-stack';
import { AnalyticsService } from '../../../../core/services/analytics.service';

@Component({
  selector: 'app-exhibit-card',
  imports: [CommonModule, RouterLink, TechnologyStackComponent],
  templateUrl: './exhibit-card.html',
  styleUrl: './exhibit-card.scss',
})
export class ExhibitCardComponent {
  @Input() project!: Project;

  constructor(private analytics: AnalyticsService) {}

  trackProjectView() {
    this.analytics.trackView('project', this.project.id);
    this.analytics.trackClick(`view_details_${this.project.id}`, 'exhibits_grid');
  }

  trackGitHubClick() {
    this.analytics.trackExternalLink('github', this.project.githubUrl || '');
  }
}