import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Documents } from '../../models/documents.model';
import { LogItem } from '../../models/logItem.model';
import { User } from '../../models/user.model';
import { HoursResponse, RecentFlightsResponse } from '../../models/responses.model';

import { DocumentsService } from '../../services/documents.service';
import { LogbookService } from '../../services/logbook.service';
import { CurrentUserService } from '../../services/currentUser.service';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'sidenav-view',
    templateUrl: './sidenav-view.component.html',
    styleUrls: ['./sidenav-view.component.css']
})
export class SidenavViewComponent {
    opened: boolean;
    currentUser;
    docs : Documents = new Documents();
    logbook : LogItem[];
    userInfo : User = new User();
    hours : HoursResponse = new HoursResponse();
    flights : RecentFlightsResponse = new RecentFlightsResponse();
    rating;


    constructor(
        private currentUserService : CurrentUserService,
        private logbookService : LogbookService,
        private userService : UserService,
        private documentsService : DocumentsService,
        private router : Router
    ){
        this.currentUser = currentUserService.getCurrentUser();
        if (this.currentUser == null) {
            this.router.navigate(['login']);
        } 
        //this.docs = this.currentUserService.getDocuments();
        this.createProfileInfo();
    }

    logout() {
        this.currentUserService.setCurrentUser('');
        this.router.navigate(['login']);
    }

    createProfileInfo() {
        this.userService.getUserInfo(this.currentUser).subscribe(
            user => {
                this.userInfo = user;
            }
        );
        this.logbookService.getTotalHours(this.currentUser).subscribe(
            res => {
                this.hours = res[0];
            }
        );
        this.logbookService.getRecentFlights(this.currentUser).subscribe(
            response => {
                this.flights = response;
            }
        );

    }

} 