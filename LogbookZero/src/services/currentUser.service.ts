import { Injectable } from '@angular/core';

import { Documents } from '../models/documents.model';
import { LogItem } from '../models/logItem.model';

import { DocumentsService } from '../services/documents.service';
import { LogbookService } from '../services/logbook.service';

@Injectable()
export class CurrentUserService {
    constructor (
        private documentsService : DocumentsService,
        private logbookService : LogbookService
    ) {

    }

    docs : Documents = new Documents();

    private currentUser;

    setCurrentUser(email) {
        try {
            localStorage.setItem('username', JSON.stringify(email));
        } catch (e) {
            console.error('Error saving to localStorage', e);
        }
    }

    getCurrentUser() {
        try {
            return JSON.parse(localStorage.getItem('username'));
        } catch (e) {
            console.error('Error getting data from localStorage', e);
            return null;
        }
    }

    getCurrentUserInformation() {
        this.documentsService.getUserDocuments(this.getCurrentUser()).subscribe(
            docs => {
                console.log(docs);
                this.setDocuments(docs);
            }
        )
        this.logbookService.getUserLogbook(this.getCurrentUser()).subscribe(
            logs => {
                //console.log(logs);
                this.setLogbook(logs);
            }
        )
    }

    setDocuments(docs : Documents) {
        try {
            localStorage.setItem('documents', JSON.stringify(docs));
        } catch (e) {
            console.error("Error saving to localStorage", e);
        }
    }

    getDocuments() {
        try {
            return JSON.parse(localStorage.getItem('documents'));
        } catch (e) {
            console.error('Error getting data from localStorage', e);
            return null;
        }
    }

    setLogbook(logs : LogItem) {
        try {
            localStorage.setItem('Logbook', JSON.stringify(logs));
        } catch (e) {
            console.error("Error saving to localStorage", e);
        }
    }

    getLogbook() {
        try {
            return JSON.parse(localStorage.getItem('Logbook'));
        } catch (e) {
            console.error('Error getting data from localStorage', e);
            return null;
        }  
    }
}