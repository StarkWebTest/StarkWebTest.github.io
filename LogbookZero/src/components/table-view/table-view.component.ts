import { Component } from '@angular/core';

import { LogbookService } from '../../services/logbook.service';
import { CurrentUserService } from '../../services/currentUser.service';

import { LogItem } from '../../models/logItem.model';

@Component({
    selector: 'table-view',
    templateUrl: './table-view.component.html',
    styleUrls: ['./table-view.component.css']
})
export class TableViewComponent {
    opened: boolean;
    logbook : LogItem[];

    constructor (
        private currentUserService : CurrentUserService
    ) {
        this.logbook = this.currentUserService.getLogbook();
    }

    displayedColumns = ['FlightDate'];

}