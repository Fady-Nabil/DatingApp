import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // username and password thar user entered them to login
  model: any = {};
  user  = localStorage.getItem('username');

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      // console.log('logged in successfully');
      this.alertify.success('logged in successfully');
    }, error => {
        // console.log(error);
        this.alertify.error(error);
    }, () => {
      // after login redirect to this router link
      this.router.navigate(['/members']);
    });
  }

  loggedIn() {
   return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    // console.log('logged out');
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }

}
