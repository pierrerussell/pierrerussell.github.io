import { Component, signal } from '@angular/core';
import { RouterOutlet ,Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './shared/components/navbar/navbar';
declare var gtag: Function;
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('MyProjects');
  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      gtag('event', 'page_view', {
        page_path: event.urlAfterRedirects,
        page_title: document.title,
        page_location: window.location.href
      });
    });
  }
}
