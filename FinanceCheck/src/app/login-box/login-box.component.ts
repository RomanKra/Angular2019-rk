import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../login.service';

@Component({
    selector: 'app-login-box',
    templateUrl: './login-box.component.html',
    styleUrls: ['./login-box.component.css']
})

export class LoginBoxComponent implements OnInit {
    constructor(private router: Router, private loginService:LoginService) { }
    wrongPassword: boolean = false;
    LoginData: object = {
        username: "",
        password: ""
    };
    attemptLogin = function () {
        //alert("Attempting Login with: " + this.LoginData.username + " and " + this.LoginData.password)
        let answer = this.loginService.sendLogin(this.LoginData.username, this.LoginData.password)
        
        if (answer.success==true) {
            this.router.navigate(['homepage']);
        } else {
            this.wrongPassword = true;
        }
    }
    ngOnInit() {

    }

}
