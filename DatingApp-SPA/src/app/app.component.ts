import { AuthService } from './_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*
I make this because I want to get user token from localstorage and decode it
to get name of loggedIn user when I set it in auth service
    this.decodedToken = this.jwtHelper.decodeToken(user.token);
    console.log(this.decodedToken);
    when I refresh the page name disappear and ther is an error appear also
    so we make this technique to solve that problem
    1- implement on init interface
    2- inject jwt helper service and make an object from it
    3- in method ng on init
      - get token from local storage
      - check if token exists send it to decode token function4
      to decode it and allow use to display name
*/
export class AppComponent implements OnInit {
  // title = 'DatingApp-SPA';
  jwtHelper = new JwtHelperService();

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }
}
