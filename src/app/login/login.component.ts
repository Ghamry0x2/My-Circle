import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { NavbarcontrollerService } from '../services/navbarcontroller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  navController: NavbarcontrollerService;

  constructor(private router:Router, private user:UserService, private navControl: NavbarcontrollerService) {
    this.navController = this.navControl;
  }

  ngOnInit() {
  }

  loginUser(e){
    e.preventDefault();
    
    var username= e.target.elements[0].value;
    var password= e.target.elements[1].value;

    if(username == "admin@admin.admin" && password == "ghamry98"){
      this.user.setUserLoggedIn();
      this.router.navigate(['home']);
    }
  }
}
