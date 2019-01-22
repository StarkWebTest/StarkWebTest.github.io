import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent {
    opened: boolean;
    isLoggedIn = false;

    constructor() {
        this.opened = true;
    }


    
    title = "LogbookZero"
}