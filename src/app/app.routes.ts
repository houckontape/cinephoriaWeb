import { Routes } from '@angular/router';
import {HomeComponent} from './view/home/home.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {StatisticComponent} from './shared/dashboard/statistic/statistic.component';
import {ManageMovieComponent} from './shared/dashboard/manage-movie/manage-movie.component';
import {ManageUserComponent} from './shared/dashboard/manage-user/manage-user.component';
import {ManageDefaultComponent} from './shared/dashboard/manage-default/manage-default.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'dashboard', component: DashboardComponent,
    children : [
      { path: '', redirectTo: '/dashboard/statistic', pathMatch: 'full' },
      { path:'statistic', component:StatisticComponent},
      { path:'manageMovie', component:ManageMovieComponent},
      { path:'manageUser', component:ManageUserComponent},
      { path:'manageDefault', component:ManageDefaultComponent},
    ]
  }
];
