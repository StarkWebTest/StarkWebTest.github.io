import { Component, OnInit } from '@angular/core';

import { Documents } from '../../models/documents.model';

import { DocumentsService } from '../../services/documents.service';

@Component({
    selector: 'sidenav-view',
    templateUrl: './sidenav-view.component.html',
    styleUrls: ['./sidenav-view.component.css']
})
export class SidenavViewComponent {
    opened: boolean;
    userInfo: {};

    constructor(
        private documentsService : DocumentsService
    ){}

} 