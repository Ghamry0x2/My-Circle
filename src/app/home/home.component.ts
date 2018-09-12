import { Component, OnInit } from '@angular/core';
import { NavbarcontrollerService } from '../services/navbarcontroller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navController: NavbarcontrollerService;

  constructor(private navControl: NavbarcontrollerService, private router:Router) {
    this.navController = this.navControl;
  }

  ngOnInit() {
  }

  goToUsersPanel(e){
    this.router.navigate(['users']);
  }

}
