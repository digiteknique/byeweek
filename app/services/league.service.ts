import { Injectable } from '@angular/core';

import { League } from '../models/league';
import { LEAGUES } from './mock-leagues';


@Injectable()
export class LeagueService {
  getLeagues(): Promise<League[]> {
    return Promise.resolve(LEAGUES);
  }
  getLeague(id: number): Promise<League> {
  return this.getLeagues()
             .then(leagues => leagues.find(league => league.id === id));
  }

}
