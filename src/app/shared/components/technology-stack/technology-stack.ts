import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TechnologyName } from '../../../core/models/technology.model';
import { TechnologiesData } from '../../../core/data/technologies.data';

@Component({
  selector: 'app-technology-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technology-stack.html',
  styleUrl: './technology-stack.scss'
})
export class TechnologyStackComponent {
  @Input() technologies: TechnologyName[] = [];
  @Input() limit: number = 6;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  
  get displayTechnologies() {
    return this.technologies.slice(0, this.limit);
  }
  
  get remainingCount() {
    return Math.max(0, this.technologies.length - this.limit);
  }
  
  getTechData(tech: TechnologyName) {
    return TechnologiesData.getTechnology(tech);
  }
}