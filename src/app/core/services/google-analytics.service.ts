import { Injectable } from '@angular/core';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() { }

  public event(eventAction: string, eventCategory: string, eventLabel?: string | number, value?: number) {
    gtag('event', eventAction, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: value
    });
  }

  public buttonClick(buttonName: string, location: string) {
    this.event('click', 'button', `${buttonName}_${location}`);
  }

  public linkClick(linkType: 'internal' | 'external', linkDestination: string) {
    this.event('click', `${linkType}_link`, linkDestination);
  }

  public filterClick(filterName: string) {
    this.event('filter_select', 'engagement', filterName);
  }
}
