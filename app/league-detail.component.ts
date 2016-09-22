// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { LeagueService } from './services/league.service';

import { League } from './models/league';
import { Week } from './models/week';

@Component({
  selector: 'my-league-detail',
  templateUrl: 'app/league-detail.component.html',
  styleUrls: ['app/league-detail.component.css']
})
export class LeagueDetailComponent implements OnInit {
  @Input()
  league: League;
  selectedWeek: Week;
  previousWeek: Week;
  followingWeek: Week;
  selectedWeekIndex: number;

  constructor(
    private leagueService: LeagueService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.leagueService.getLeague(id).then((league) => {
        this.league = league;
        this.selectWeek(league.weeks[league.weeks.length - 1]);
      });
    });
  }

  selectWeek(chosenWeek: Week): void {
      if(this.league.weeks){
        
        let index = 0;
        for(let i = 0; i < this.league.weeks.length; i++)
          if(this.league.weeks[i].id == chosenWeek.id)
            index = i;

        if(this.league.weeks.length > 1)
        {
            this.previousWeek = this.league.weeks[index - 1];
        }
        this.selectedWeek = this.league.weeks[index];
        if(this.league.weeks.length > index)
        {
          this.followingWeek = this.league.weeks[index + 1];
        }
    }
  }

  goBack(): void {
    window.history.back();
  }

}
