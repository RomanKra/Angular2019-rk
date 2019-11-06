import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor() { 
    }
    sendLogin = function (username: string, password: string) {
        //TODO: ask a server maybe?
        if (username == "Test" && password == "Test") {
            return { success: true, message:"Hello " + username + ", you're logged in now!" };
        }else{
            return { success: false, message:"Failed logging in!" };
        }
    }
}
