import { Injectable } from '@angular/core';
import { users } from '../users/users.model';
import { SAVED_USERS } from '../users/users';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor() { }

  getUsers(): users[]{
    return SAVED_USERS.slice(0);
  }

  getUser(id: number){
    return SAVED_USERS.slice(0).find(user => user.id == id);
  }

  // plotUser(id: number){
  //   var myStyle = {
  //     "color": "#3949AB",
  //     "weight": 5,
  //     "opacity": 0.95
  //   };
  // }
}
