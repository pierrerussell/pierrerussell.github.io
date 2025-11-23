import { Injectable } from '@angular/core';
import { GoogleAnalyticsService } from './google-analytics.service';
import { ClarityService } from './clarity.service';



@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(
    private ga: GoogleAnalyticsService,
    private clarity: ClarityService
  ) { }

  trackClick(elementName: string, location: string) {
    // Send to GA
    this.ga.buttonClick(elementName, location);

    // Send to Clarity
    this.clarity.event(`click_${elementName}`);
    this.clarity.setCustomTag('click_location', location);
  }


  trackNavigation(fromPage: string, toPage: string) {
    // Navigation tracked by GA in router
    this.clarity.event('navigation');
    this.clarity.setCustomTag('nav_from', fromPage);
    this.clarity.setCustomTag('nav_to', toPage);
  }


  trackExternalLink(linkType: string, destination: string) {
    // Send to GA
    this.ga.linkClick('external', destination);

    // Send to Clarity
    this.clarity.event(`external_link_${linkType}`);
    this.clarity.setCustomTag('link_destination', destination);
  }

  trackView(contentType: 'project' | 'page' | 'section', contentId: string | number) {
    // Send to GA
    this.ga.event('view_item', contentType, contentId);

    // Send to Clarity
    this.clarity.event(`${contentType}_viewed`);
    this.clarity.setCustomTag(`${contentType}_id`, contentId);
  }


  trackFilter(filterType: string, filterValue: string) {
    // Send to GA
    this.ga.filterClick(`${filterType}:${filterValue}`);

    // Send to Clarity
    this.clarity.event('filter_applied');
    this.clarity.setCustomTag('filter_type', filterType);
    this.clarity.setCustomTag('filter_value', filterValue);
  }


  trackFormInteraction(formName: string, action: 'start' | 'complete' | 'abandon') {
    // Send to GA
    this.ga.event(`form_${action}`, 'engagement', formName);

    // Send to Clarity
    this.clarity.event(`form_${action}`);
    this.clarity.setCustomTag('form_name', formName);
  }


  trackError(errorType: string, errorMessage: string) {
    // Send to GA
    this.ga.event('exception', 'error', `${errorType}: ${errorMessage}`);

    // Send to Clarity (upgrade session for debugging)
    this.clarity.upgrade(`error_${errorType}`);
    this.clarity.setCustomTag('error_type', errorType);
    this.clarity.setCustomTag('error_message', errorMessage);
  }


  trackMilestone(milestone: string, value?: number) {
    // Send to GA
    this.ga.event('milestone', 'engagement', milestone, value);

    // Send to Clarity
    this.clarity.event(`milestone_${milestone}`);
    if (value) {
      this.clarity.setCustomTag('milestone_value', value);
    }
  }
}
