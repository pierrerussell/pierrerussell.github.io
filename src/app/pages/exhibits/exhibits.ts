import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitsListComponent } from './components/exhibits-list/exhibits-list';
import { Project } from '../../core/models/project.model';
import { ProjectsData } from '../../core/data/projects.data';

@Component({
  selector: 'app-exhibits',
  imports: [CommonModule, ExhibitsListComponent],
  templateUrl: './exhibits.html',
  styleUrl: './exhibits.scss',
})
export class ExhibitsComponent {
  projects: Project[] = ProjectsData.getAllProjects();
  categories: string[] = ['all', ...ProjectsData.getCategories()];
  selectedCategory = 'all';
  
  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter(p => p.category.toLowerCase() === this.selectedCategory.toLowerCase());
  }
  
  filterByCategory(category: string) {
    this.selectedCategory = category;
  }
}