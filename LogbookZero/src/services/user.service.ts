import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../models/user.model';
import { HttpErrorHandler, HandleError } from '../services/HttpErrorHandler.service';

const httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable()
export class UserService {
    private baseUrl = 'https://logbookzero.azurewebsites.net/api/User/';
    private handleError: HandleError;
    constructor (
        private http: HttpClient,
        httpErrorHandler: HttpErrorHandler
    ) {
        this.handleError = httpErrorHandler.createHandleError('UserService');
    }

    postNewUser(user: User) : Observable<User> {
        //var url = this.baseUrl + "?email=" + user.Email + '&password=' + user.Pass + '&firstName=' + user.FirstName + '&lastName=' + user.LastName;
        return this.http.post<User>(this.baseUrl, user, httpOptions).pipe(
            catchError(this.handleError('NewUser', user))
        ); 
    }

    checkUserCredentials(email, password) : Observable<User> {
        var url = this.baseUrl + '?email=' + email;
        return this.http.get<User>(url, httpOptions).pipe(
            catchError(this.handleError('checkUser', email))
        );
    }
}