import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { League } from './models/league';
import { LeagueService } from './services/league.service';
import { LeagueDetailComponent } from './league-detail.component';

@Component({
  selector: 'my-leagues',
  templateUrl:'app/leagues.component.html',
  styleUrls: ['app/leagues.component.css'],
providers: [LeagueService]
})


export class LeaguesComponent implements OnInit {

    leagues: League[];
    selectedLeague: League;

    constructor(private router: Router, private leagueService: LeagueService) { }

    ngOnInit(): void {
      this.getLeagues();
    }

    getLeagues(): void {
      this.leagueService.getLeagues().then(leagues => this.leagues = leagues);;
    }

    onSelect(league: League): void {
      this.selectedLeague = league;
      this.router.navigate(['/detail', this.selectedLeague.id]);
    }
}
