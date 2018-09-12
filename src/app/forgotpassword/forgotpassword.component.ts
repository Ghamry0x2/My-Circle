import { Component, OnInit } from '@angular/core';
import { NavbarcontrollerService } from '../services/navbarcontroller.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  navController: NavbarcontrollerService;

  constructor(private navControl: NavbarcontrollerService) {
    this.navController = this.navControl;
  }

  ngOnInit() {
  }

}
