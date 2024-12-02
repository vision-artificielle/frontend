import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NoiseComponent } from './features/noise/noise.component';
import { WienerFilterComponent } from './features/wiener-filter/wiener-filter.component';
import { GaussianFilterComponent } from './features/gaussian-filter/gaussian-filter.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
          { path: '', redirectTo: '/home', pathMatch: 'full' },
          { path: 'home', component: NoiseComponent },
          { path: 'wiener', component: WienerFilterComponent },
          { path: 'gaussian', component: GaussianFilterComponent },
        ]
    },
];
