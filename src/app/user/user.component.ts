import { Component, OnInit, AfterViewInit } from '@angular/core';
import { users } from '../users/users.model';
import { ActivityService } from '../services/activity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarcontrollerService } from '../services/navbarcontroller.service';
import { SAVED_USERS } from '../users/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: users;
  navController: NavbarcontrollerService;
  
  constructor(private _activityService: ActivityService,private _route: ActivatedRoute, private navControl: NavbarcontrollerService, private router:Router) {
    this.navController = this.navControl;
  }
  

  ngOnInit() {
    this.user = this._activityService.getUser(+this._route.snapshot.params["id"]);
  }

  turnLeft(e){
    if(this.user.id > 1){
      this.user = this._activityService.getUser(+this._route.snapshot.params["id"]-1);
      this.router.navigate(['users', (this.user.id)]);
    }
  }

  turnRight(e){
    if(this.user.id < SAVED_USERS.length){
      this.user = this._activityService.getUser(+this._route.snapshot.params["id"]+1);
      this.router.navigate(['users', (this.user.id)]);
    }
  }

  back(e){
    this.router.navigate(['users']);
  }
}