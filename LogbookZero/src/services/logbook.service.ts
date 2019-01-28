import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { HttpErrorHandler, HandleError } from '../services/HttpErrorHandler.service';

import { LogItem } from '../models/logItem.model';
import { CurrentUserService } from '../services/currentUser.service';



const httpOptions = {
    headers: new HttpHeaders({
        'Content-type': 'application/json'
    })
};

@Injectable()
export class LogbookService {
    private baseUrl = "";
    private handleError: HandleError;

    constructor(
        private http : HttpClient,
        httpErrorHandler : HttpErrorHandler
    ) {
        this.handleError = httpErrorHandler.createHandleError("LogbookSerivce");
    }
}