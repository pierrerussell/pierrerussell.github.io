import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyName } from '../../../core/models/technology.model';
import { TechnologiesData } from '../../../core/data/technologies.data';

@Component({
  selector: 'app-technology-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technology-badge.html',
  styleUrl: './technology-badge.scss'
})
export class TechnologyBadgeComponent {
  @Input() technology!: TechnologyName;
  @Input() compact: boolean = false;
  @Input() showName: boolean = true;
  
  get techData() {
    return TechnologiesData.getTechnology(this.technology);
  }
}