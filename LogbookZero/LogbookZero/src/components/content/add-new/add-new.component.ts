import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../services/dataService.service';

@Component({
    selector: 'add-new',
    templateUrl: './add-new.component.html',
    styleUrls: ['./add-new.component.css']
})
export class AddNewComponent {

    constructor(
        private dataService: DataService
    ) {}

    logItem = [];


    addLogItem() {

    }
}