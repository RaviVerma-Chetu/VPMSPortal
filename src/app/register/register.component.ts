import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
registerForm:FormGroup;
  constructor(formBuilder:FormBuilder) {
    this.registerForm=formBuilder.group({
      'firstName':[null,Validators.required],
      'lastName':[null,Validators.required],
      'userName':[null,Validators.required],
      'password':[null,Validators.required],
      'confirmPassword':[null,Validators.required],
      'emailId':[null,[Validators.required,Validators.pattern(new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))]],
      'mobileNumber':[null,Validators.required],
      'roleId':[null],
      'roleName':[null]
    });
   }

  ngOnInit() {
  }

  doRegister(form:any):void {
      console.log(form);
    } 
}
