import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { League } from './models/league';
import { LeagueService } from './services/league.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  leagues: League[] = [];

  constructor(private router: Router, private leagueService: LeagueService) { }

  ngOnInit(): void {
    this.leagueService.getLeagues()
      .then(leagues => this.leagues = leagues.slice(0, 5));
  }

  gotoDetail(league: League): void {
    let link = ['/detail', league.id];
    this.router.navigate(link);
  }
}
