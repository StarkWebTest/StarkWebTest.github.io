import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

import { Documents } from '../../models/documents.model';
import { CurrentUserService } from '../../services/currentUser.service';
import { DocumentsService } from '../../services/documents.service';

@Component({
    selector: 'add-view',
    templateUrl: './add-view.component.html',
    styleUrls: ['./add-view.component.css']
})
export class AddViewComponent {
    currentUser;
    document : Documents = new Documents();

    constructor (
        private router : Router,
        private documentsService : DocumentsService,
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
        this.documentsService.postNewUserDocument(this.document).subscribe(
            doc => {
                console.log(doc);
            }
        )
    }


}