import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NoiseComponent } from './features/noise/noise.component';
import { WienerFilterComponent } from './features/wiener-filter/wiener-filter.component';
import { GaussianFilterComponent } from './features/gaussian-filter/gaussian-filter.component';
import { OpencvComponent } from './features/opencv/opencv.component';
import { PredictCnnComponent } from './features/predict-cnn/predict-cnn.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
          { path: '', redirectTo: '/home', pathMatch: 'full' },
          { path: 'home', component: NoiseComponent },
          { path: 'wiener', component: WienerFilterComponent },
          { path: 'gaussian', component: GaussianFilterComponent },
          { path: 'opencv', component: OpencvComponent },
          { path: 'predict', component: PredictCnnComponent },
        ]
    },
];
