import { Component, OnInit } from '@angular/core';
import { users } from '../users/users.model';
import { ActivityService } from '../services/activity.service';
import { NavbarcontrollerService } from '../services/navbarcontroller.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  Users: users[];
  navController: NavbarcontrollerService;

  constructor(private _activityService: ActivityService, private navControl: NavbarcontrollerService) {
    this.navController = this.navControl;
  }

  ngOnInit() {
    this.Users = this._activityService.getUsers();
  }
}
