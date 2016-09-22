import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaguesComponent }      from './leagues.component';
import { DashboardComponent }    from './dashboard.component';
import { LeagueDetailComponent}  from './league-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'league/1',
    pathMatch: 'full'
  },
  {
    path: 'leagues',
    component: LeaguesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'league/:id',
    component: LeagueDetailComponent
  },
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
