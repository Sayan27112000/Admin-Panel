import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'admin';
  ifLogin: boolean;
  ifRegister: boolean;

  constructor() {
    this.ifLogin = window.location.pathname === '/login';
    this.ifRegister = window.location.pathname === '/register';
  }


}
