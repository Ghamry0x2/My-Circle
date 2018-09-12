import { Component, OnInit } from '@angular/core';
import { NavbarcontrollerService } from '../services/navbarcontroller.service';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  navController: NavbarcontrollerService;

  constructor(private navControl: NavbarcontrollerService) {
    this.navController = this.navControl;
  }
  
  ngOnInit() {
  }
}
