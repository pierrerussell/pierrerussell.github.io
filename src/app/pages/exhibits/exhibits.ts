import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitsListComponent } from './components/exhibits-list/exhibits-list';
import { Project } from '../../core/models/project.model';
import { ProjectsData } from '../../core/data/projects.data';
import { AnalyticsService } from '../../core/services/analytics.service';

@Component({
  selector: 'app-exhibits',
  imports: [CommonModule, ExhibitsListComponent],
  templateUrl: './exhibits.html',
  styleUrl: './exhibits.scss',
})
export class ExhibitsComponent implements OnInit {
  projects: Project[] = ProjectsData.getAllProjects();
  categories: string[] = ['all', ...ProjectsData.getCategories()];
  selectedCategory = 'all';

  constructor(private analytics: AnalyticsService) {}

  ngOnInit() {
    this.analytics.trackView('page', 'exhibits');
  }
  
  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter(p => p.category.toLowerCase() === this.selectedCategory.toLowerCase());
  }
  
  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.analytics.trackFilter('category', category);
  }
}