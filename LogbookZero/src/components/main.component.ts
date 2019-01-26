import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { CurrentUserService } from '../services/currentUser.service';

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent {
    opened: boolean;
    isLoggedIn = false;

    constructor(
        private router : Router,
        private currentUserService : CurrentUserService
    ) {
        this.opened = true;
    }

    addNewItem() {
        this.router.navigate(['add'])
    }
    
    title = "LogbookZero"
}