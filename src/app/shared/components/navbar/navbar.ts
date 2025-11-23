import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AnalyticsService } from '../../../core/services/analytics.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  constructor(private analytics: AnalyticsService) {}

  trackNavClick(destination: string) {
    this.analytics.trackClick(`nav_${destination}`, 'navbar');
  }
}
