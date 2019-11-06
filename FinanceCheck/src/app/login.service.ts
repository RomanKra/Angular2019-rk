import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    username:string;
    getUsername(){
        return this.username;
    };
    constructor() { 
        this.username ="";
    }
    sendLogin = function (username: string, password: string) {
        if ((username == "Test" || username == "Test2") && password == "Test") {
            this.username = username;
            return { success: true, message:"Hello " + username + ", you're logged in now!" };
        }else{
            return { success: false, message:"Failed logging in!" };
        }
    }
}
