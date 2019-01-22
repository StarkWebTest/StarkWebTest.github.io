import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'landing-view',
    templateUrl: './landing-view.component.html',
    styleUrls: ['./landing-view.component.css']
})
export class LandingViewComponent {

    constructor(
        private router: Router
    ) {}

    login() {
        this.router.navigate(['login']);
    }

}