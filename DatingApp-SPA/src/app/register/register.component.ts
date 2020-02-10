import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
// @Input() valuesFromHome: any;
@Output() cancelRegister = new EventEmitter();

model: any = {};

  constructor( private authService:  AuthService) { }

  ngOnInit() {
  }

  register() {
    /*
    we make subscribe in here because post function in service
    return observable so we need to use subscribe function
    */
    this.authService.register(this.model).subscribe(() => {
      console.log('register successful');
    }, error => {
      console.log(error);
    });
  }

  // button cancel
  cancel() {
    this.cancelRegister.emit(false);
    // console.log('cancelled');
  }

}
