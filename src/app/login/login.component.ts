import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(formBuilder: FormBuilder) {
      this.loginForm = formBuilder.group({
        'userName':[null, Validators.required],
        'userPassword': [null, Validators.required]
      });
   }

  ngOnInit() {
  }

  doLogin(form: any): void{
    //call http service
    console.log(form);
  }
}
