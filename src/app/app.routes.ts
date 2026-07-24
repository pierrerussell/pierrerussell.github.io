import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ExhibitsComponent } from './pages/exhibits/exhibits';
import { ContactComponent } from './pages/contact/contact';
import { StockSimulationComponent } from './pages/exhibits/stock-simulation/stock-simulation';
import { MlForecastingComponent } from './pages/exhibits/ml-forecasting/ml-forecasting';
import { LaselleComponent } from './pages/exhibits/laselle/laselle';
import { GreenDotsComponent } from './pages/exhibits/green-dots/green-dots';
import { BizModSwapBotComponent } from './pages/exhibits/biz-mod-swap-bot/biz-mod-swap-bot';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ExhibitsComponent },
  { path: 'projects/stock-simulation', component: StockSimulationComponent },
  { path: 'projects/ml-forecasting', component: MlForecastingComponent },
  { path: 'projects/laselle', component: LaselleComponent },
  { path: 'projects/green-dots', component: GreenDotsComponent },
  { path: 'projects/biz-mod-swap-bot', component: BizModSwapBotComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
