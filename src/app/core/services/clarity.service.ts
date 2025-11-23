import { Injectable } from '@angular/core';

declare const clarity: any;

@Injectable({
  providedIn: 'root'
})
export class ClarityService {

  constructor() { }


  setCustomTag(key: string, value: string | number | boolean) {
    if (typeof clarity !== 'undefined') {
      clarity('set', key, value);
    }
  }


  event(eventName: string) {
    if (typeof clarity !== 'undefined') {
      clarity('event', eventName);
    }
  }


  upgrade(reason: string) {
    if (typeof clarity !== 'undefined') {
      clarity('upgrade', reason);
    }
  }
}
