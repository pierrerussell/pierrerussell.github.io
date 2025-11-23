import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ExhibitsComponent } from './pages/exhibits/exhibits';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'exhibits', component: ExhibitsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
