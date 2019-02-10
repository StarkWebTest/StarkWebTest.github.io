import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { HttpErrorHandler, HandleError } from '../services/HttpErrorHandler.service';

import { LogItem } from '../models/logItem.model';
import { CurrentUserService } from '../services/currentUser.service';
import { HoursResponse, RecentFlightsResponse } from '../models/responses.model';



const httpOptions = {
    headers: new HttpHeaders({
        'Content-type': 'application/json'
    })
};

@Injectable()
export class LogbookService {
    private baseUrl = "https://logbookzero.azurewebsites.net/api/Logbook/"
    private handleError: HandleError;

    constructor(
        private http : HttpClient,
        httpErrorHandler : HttpErrorHandler
    ) {
        this.handleError = httpErrorHandler.createHandleError("LogbookSerivce");
    }

    postNewLogItem(log : LogItem) : Observable<LogItem> {
        return this.http.post<LogItem>(this.baseUrl, log, httpOptions).pipe(
            catchError(this.handleError("NewLog", log))
        );
    }

    getUserLogbook(Email) : Observable<LogItem> {
        var url = this.baseUrl + "?Email=" + Email;
        return this.http.get<LogItem>(url, httpOptions).pipe(
            catchError(this.handleError("getUserLogbook", Email))   
        );
    }

    getTotalHours(Email) : Observable<HoursResponse> {
        var url = this.baseUrl + "GetHours/?Email=" + Email;
        return this.http.get<HoursResponse>(url, httpOptions).pipe(
            catchError(this.handleError("GetTotalHours", Email))
        );
    }

    getRecentFlights(Email) : Observable<RecentFlightsResponse> {
        var url = this.baseUrl + "GetRecents/?Email=" + Email;
        return this.http.get<RecentFlightsResponse>(url, httpOptions).pipe(
            catchError(this.handleError("getRecents", Email))
        );
    }
}
