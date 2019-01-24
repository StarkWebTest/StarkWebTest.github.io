import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'login-view',
    templateUrl: './login-view.component.html',
    styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {
    user: User = new User();
    constructor (
        private router: Router,
        private userService: UserService
    ) {}
    loading = false;

    userInfo: User = new User();

    loginInfo = {
        email: '',
        password: ''
    };

    passwordConfirm;
    errorText = '';

    login = true;
    create = false;

    createView() {
        this.login = !this.login
        this.create = true;
    }

    checkPassword(password) {
        //console.log(password + " " + this.passwordConfirm);
        if (this.passwordConfirm != password) {
            this.errorText = "Passwords do not match";
        } else {
            this.errorText = '';
        }
    }

    postNewUser() {
        var newUser = this.userInfo;

        this.userService.postNewUser(newUser).subscribe(
            user =>  this.user = user
        )
    }

    checkUserCredentials() {
        this.loading = true;
        this.userService.checkUserCredentials(this.loginInfo.email, this.loginInfo.password).subscribe(
            user => {
                this.user = user;
                console.log(this.user);
                if (this.user.Pass == this.loginInfo.password) {
                    this.loading = false;
                    this.router.navigate(['home']);
                } else {
                    this.loading = false;
                    this.errorText = "Password/Email Incorrect";
                }
            }
        );
        
    }
}