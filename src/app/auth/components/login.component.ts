import { Component } from "@angular/core";
import { AuthService } from "../../core/services/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent{

    constructor(private authService: AuthService,
        private router: Router
    ){}

    onLogin(){
        this.authService.login();
        this.router.navigateByUrl('/facesnaps')
    }
}