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
                // save the token in local storage
            });
    } 
    logout() {
        // remove user from local storage to log user out
    }
    register(firstName:string,lastName:string,userName:string,password:string,emailId:string,mobileNumber:string,)
    {
        return this.http.post(appConfig.apiUrl+'/auth/register',{Firstname:firstName,Lastname:lastName,Password:password,Email:emailId,Phonenumber:mobileNumber,Username:userName})
        .map((response:Response)=>{
            console.log("Faisal")
        });
    }
}
