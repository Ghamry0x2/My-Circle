import { Injectable } from '@angular/core';
import { NavbarcontrollerService } from './navbarcontroller.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggedIn = false;

  constructor(private navController:NavbarcontrollerService) { }

  setUserLoggedIn(){
    this.isUserLoggedIn = true;
    this.navController.show();
  }

  setUserLoggedOut(){
    this.isUserLoggedIn = false;
    this.navController.hide();
  }

  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
}
