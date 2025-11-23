import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block';
import { ProjectPreviewComponent } from '../../shared/components/project-preview/project-preview';
import { Project } from '../../core/models/project.model';
import { ProjectsData } from '../../core/data/projects.data';
import { GoogleAnalyticsService } from '../../core/services/google-analytics.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CodeBlockComponent, RouterLink, ProjectPreviewComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  featuredProjects: Project[] = ProjectsData.getFeaturedProjects();

  constructor(private ga: GoogleAnalyticsService) {}

  trackButtonClick(buttonName: string) {
    this.ga.buttonClick(buttonName, 'home_hero');
  }
}
