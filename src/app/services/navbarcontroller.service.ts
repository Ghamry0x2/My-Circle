import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarcontrollerService {
  
  visible: boolean = false;

  constructor() { this.visible = false; }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

}