import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnalyticsService } from '../../core/services/analytics.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements OnInit {

  constructor(private analytics: AnalyticsService) {}

  ngOnInit() {
    this.analytics.trackView('page', 'home');
  }

  trackButtonClick(buttonName: string) {
    this.analytics.trackClick(buttonName, 'home_hero');
  }
}
