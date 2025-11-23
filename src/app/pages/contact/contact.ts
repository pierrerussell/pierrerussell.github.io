import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnalyticsService } from '../../core/services/analytics.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent implements OnInit {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private analytics: AnalyticsService) {}

  ngOnInit() {
    this.analytics.trackView('page', 'contact');
  }
  
  onSubmit() {
    // For now, just log the form data
    console.log('Guest book entry:', this.formData);
    this.analytics.trackFormInteraction('guest_book', 'complete');
    // TODO: Implement actual form submission
    alert('Thank you for signing the guest book! Your message has been received.');
    this.resetForm();
  }

  trackExternalLink(platform: 'github' | 'linkedin', url: string) {
    this.analytics.trackExternalLink(platform, url);
  }
  
  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}