import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

import { Documents } from '../../models/documents.model';
import { LogItem } from '../../models/logItem.model';

import { CurrentUserService } from '../../services/currentUser.service';
import { DocumentsService } from '../../services/documents.service';
import { LogbookService } from '../../services/logbook.service'; 

@Component({
    selector: 'add-view',
    templateUrl: './add-view.component.html',
    styleUrls: ['./add-view.component.css']
})
export class AddViewComponent {
    currentUser;
    document : Documents = new Documents();
    logItem : LogItem =  new LogItem();
    loading = false;

    constructor (
        private router : Router,
        private documentsService : DocumentsService,
        private logbooksService : LogbookService,
        private currentUserService : CurrentUserService
    ) {
        this.currentUser = currentUserService.getCurrentUser();
    }

    returnHome() {
        this.router.navigate(['home']);
    }

    addNewDocument() {
        this.document.Email = this.currentUser;
        //console.log(this.document);
        this.loading = true;
        this.documentsService.postNewUserDocument(this.document).subscribe(
            doc => {
                this.loading = false;
                //console.log(doc);
                
            }
        )
    }

    addNewLogItem() {
        this.logItem.Email = this.currentUser;
        this.loading = true;
        this.logbooksService.postNewLogItem(this.logItem).subscribe(
            log => {
                this.loading = false;
                //console.log(log);
            }
        )
    }


}