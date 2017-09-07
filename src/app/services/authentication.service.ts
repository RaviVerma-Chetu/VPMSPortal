import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { appConfig } from '../app.config';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }
 
    login(username: string, password: string) {
        return this.http.post(appConfig.apiUrl +'/auth/login', { Username: username, Password: password })
            .map((response: Response) => {
                // login successful return
                console.log(response.json());
                if(response.json().isAuthenticated){
                    localStorage.setItem('currentUser', JSON.stringify(response));
                }
                // save the token in local storage
            });
    } 
    logout() {
        localStorage.removeItem('currentUser');
    }

    isLoggedIn():boolean{
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        return false;
    }

    register(firstName:string,lastName:string,userName:string,password:string,emailId:string,mobileNumber:string,)
    {
        return this.http.post(appConfig.apiUrl+'/auth/register',{Firstname:firstName,Lastname:lastName,Password:password,Email:emailId,Phonenumber:mobileNumber,Username:userName})
        .map((response:Response)=>{
            console.log("Faisal")
        });
    }
}
