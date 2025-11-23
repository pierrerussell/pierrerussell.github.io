import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitCardComponent } from '../exhibit-card/exhibit-card';
import { Project } from '../../../../core/models/project.model';

@Component({
  selector: 'app-exhibits-list',
  imports: [CommonModule, ExhibitCardComponent],
  templateUrl: './exhibits-list.html',
  styleUrl: './exhibits-list.scss',
})
export class ExhibitsListComponent {
  @Input() projects: Project[] = [];
  @Input() emptyMessage: string = 'No exhibits found in this category.';
}