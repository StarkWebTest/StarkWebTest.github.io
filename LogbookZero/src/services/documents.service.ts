import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'

import { Documents } from '../models/documents.model';
import { HttpErrorHandler, HandleError } from '../services/HttpErrorHandler.service';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-type': 'application/json'
    })
};

@Injectable()
export class DocumentsService {
    private baseUrl = "https://logbookzero.azurewebsites.net/api/Document/"
    private handleError: HandleError;

    constructor(
        private http : HttpClient,
        httpErrorHandler : HttpErrorHandler
    ) {
        this.handleError = httpErrorHandler.createHandleError("DocumentsService")
    }
}