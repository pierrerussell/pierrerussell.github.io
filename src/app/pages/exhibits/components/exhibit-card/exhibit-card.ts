import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project } from '../../../../core/models/project.model';
import { TechnologyStackComponent } from '../../../../shared/components/technology-stack/technology-stack';

@Component({
  selector: 'app-exhibit-card',
  imports: [CommonModule, RouterLink, TechnologyStackComponent],
  templateUrl: './exhibit-card.html',
  styleUrl: './exhibit-card.scss',
})
export class ExhibitCardComponent {
  @Input() project!: Project;
}