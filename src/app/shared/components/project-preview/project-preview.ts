import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project } from '../../../core/models/project.model';
import { TechnologyStackComponent } from '../technology-stack/technology-stack';

@Component({
  selector: 'app-project-preview',
  imports: [CommonModule, RouterLink, TechnologyStackComponent],
  templateUrl: './project-preview.html',
  styleUrl: './project-preview.scss',
})
export class ProjectPreviewComponent {
  @Input() project!: Project;
  @Input() featured: boolean = false;
}