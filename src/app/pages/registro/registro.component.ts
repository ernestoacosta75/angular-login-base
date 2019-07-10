import { Component, OnInit } from '@angular/core';
import { UserModel } from '@app/models/user.module';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  user: UserModel;

  constructor() { }

  ngOnInit() { 
    this.user = new UserModel();
  }

  onSubmit( registerForm: NgForm ) {

    console.log("Form sended");
    console.log(this.user);
    console.log(registerForm);
  }


}
