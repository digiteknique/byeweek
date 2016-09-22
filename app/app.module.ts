import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule }            from '@angular/forms';
import { AppComponent }           from './app.component';
import { LeagueDetailComponent }  from './league-detail.component';
import { LeaguesComponent }       from './leagues.component';
import { LeagueService }          from './services/league.service';
import { routing }                from './app.routing';
import { DashboardComponent }     from './dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    LeagueDetailComponent,
    LeaguesComponent,
    DashboardComponent
  ],
  providers: [
    LeagueService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
