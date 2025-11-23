import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block';
import { ProjectPreviewComponent } from '../../shared/components/project-preview/project-preview';
import { Project } from '../../core/models/project.model';
import { ProjectsData } from '../../core/data/projects.data';
import { AnalyticsService } from '../../core/services/analytics.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CodeBlockComponent, RouterLink, ProjectPreviewComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements OnInit {
  featuredProjects: Project[] = ProjectsData.getFeaturedProjects();

  constructor(private analytics: AnalyticsService) {}

  ngOnInit() {
    this.analytics.trackView('page', 'home');
  }

  trackButtonClick(buttonName: string) {
    this.analytics.trackClick(buttonName, 'home_hero');
  }
}
