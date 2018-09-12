import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarcontrollerService } from '../services/navbarcontroller.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navController: NavbarcontrollerService;

  constructor(private router:Router, private user:UserService, private navControl: NavbarcontrollerService) {
    this.navController = this.navControl;
  }
  
  ngOnInit() {
  }

  goToHome(e){
    this.router.navigate(['home']);
  }

  signin(e){
    this.router.navigate(['signin']);
  }

  signup(e){
    this.router.navigate(['signup']);
  }

  signout(e){
    this.router.navigate(['home']);
    this.user.setUserLoggedOut();
  }

  contactUs(e){
    this.router.navigate(['contactus']);
    this.user.setUserLoggedOut();
  }

  goToUsersPanel(e){
    this.router.navigate(['users']);
  }
  
  searchUser(e){
    console.log(e);
  }
}