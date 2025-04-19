import { Routes } from '@angular/router';
import {HomeComponent} from './view/home/home.component';
import {StatisticComponent} from './shared/dashboard/statistic/statistic.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'dashboard', component: StatisticComponent ,
    children : [
      { path: '', redirectTo: '/dashboard/statistic', pathMatch: 'full' },
      { path:'statistic', component: StatisticComponent }

    ]
  }
];
