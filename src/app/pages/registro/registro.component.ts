import { Component, OnInit } from '@angular/core';
import { UserModel } from '@app/models/user.module';

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
    this.user.email = "ernestoacostabaracoa@gmail.com";
  }

  onSubmit() {
    console.log("Form sended");
    console.log(this.user);
  }


}
