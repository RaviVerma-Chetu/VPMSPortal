import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(formBuilder: FormBuilder, private authenticationService: AuthenticationService,private router: Router) {
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
    this.authenticationService.login(form.userName, form.userPassword)
    .subscribe(
                data => {
                    console.log('success');
                    this.router.navigate(['/dashboard']);
                },
                error => {
                    console.log('error');
                });;
  }
}
