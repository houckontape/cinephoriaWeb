import { Routes } from '@angular/router';
import {HomeComponent} from './view/home/home.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {StatisticComponent} from './shared/dashboard/statistic/statistic.component';
import {ManageMovieComponent} from './shared/dashboard/manage-movie/manage-movie.component';
import {ManageUserComponent} from './shared/dashboard/manage-user/manage-user.component';
import {ManageDefaultComponent} from './shared/dashboard/manage-default/manage-default.component';
import {LoginComponent} from './view/auth/login/login.component';
import {NotFoundComponent} from './view/not-found/not-found.component';
import {inject} from '@angular/core';
import {AuthService} from './core/service/auth.service';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'login',component:LoginComponent},
  { path:'dashboard',
    canMatch:[()=>inject(AuthService).isAuthenticated],
    component: DashboardComponent,
    children : [
      { path: '', redirectTo: '/dashboard/statistic', pathMatch: 'full' },
      { path:'statistic', component:StatisticComponent},
      { path:'manageMovie', component:ManageMovieComponent},
      { path:'manageUser', component:ManageUserComponent},
      { path:'manageDefault', component:ManageDefaultComponent},
    ]
  },
  { path:'**', component: NotFoundComponent }
];
