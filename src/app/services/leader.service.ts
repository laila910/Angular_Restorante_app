import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leaders';
import{Leader} from '../shared/leader';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[]|undefined{
    return LEADERS;
  }
  getFeaturedLeader(): Leader|undefined{
    return LEADERS.filter((leader)=>leader.featured)[0];
  }
}
