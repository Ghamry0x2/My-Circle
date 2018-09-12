import { Component, OnInit } from '@angular/core';
import { users } from '../users/users.model';
import { ActivityService } from '../services/activity.service';
import { NavbarcontrollerService } from '../services/navbarcontroller.service';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {

  navController: NavbarcontrollerService;
  Users: users[];

  constructor(private _activityService: ActivityService, private navControl: NavbarcontrollerService) {
    this.navController = this.navControl;
  }

  ngOnInit() {
    this.Users = this._activityService.getUsers();
  }
  
}