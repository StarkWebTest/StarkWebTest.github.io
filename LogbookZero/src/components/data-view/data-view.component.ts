import { Component } from '@angular/core';

import { LogbookService } from '../../services/logbook.service';
import { CurrentUserService } from '../../services/currentUser.service'; 

@Component({
    selector: 'data-view',
    templateUrl: './data-view.component.html',
    styleUrls: ['./data-view.component.css']
})
export class DataViewComponent {
    opened: boolean;
    currentUser;

    constructor (
        private logbookService : LogbookService,
        private currentUserService : CurrentUserService
    ) {
        this.currentUser = currentUserService.getCurrentUser();
    }

    
}