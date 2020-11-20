import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLogin() {
    this.login = !this.login
  }

}
