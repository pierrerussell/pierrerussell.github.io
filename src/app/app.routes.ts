import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ExhibitsComponent } from './pages/exhibits/exhibits';
import { ContactComponent } from './pages/contact/contact';
import { StockSimulationComponent } from './pages/exhibits/stock-simulation/stock-simulation';
import { MlForecastingComponent } from './pages/exhibits/ml-forecasting/ml-forecasting';
import { LaselleComponent } from './pages/exhibits/laselle/laselle';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'exhibits', component: ExhibitsComponent },
  { path: 'exhibits/stock-simulation', component: StockSimulationComponent },
  { path: 'exhibits/ml-forecasting', component: MlForecastingComponent },
  { path: 'exhibits/laselle', component: LaselleComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
