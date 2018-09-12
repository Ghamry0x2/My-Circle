import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarcontrollerService } from '../services/navbarcontroller.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  navController: NavbarcontrollerService;

  constructor(private router:Router, private navControl: NavbarcontrollerService) {
    this.navController = this.navControl;
  }

  ngOnInit() {
  }

  loginUser(e){
    this.router.navigate(['home']);
    /*var username= e.target.elements[0].value;
    var password= e.target.elements[1].value;

    if(username == "admin" && password == "admin"){
      this.user.setUserLoggedIn();
      this.router.navigate(['home']);
    }*/
  }
}
