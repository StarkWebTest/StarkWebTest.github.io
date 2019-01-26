import { Injectable } from '@angular/core';

@Injectable()
export class CurrentUserService {
    constructor (

    ) {

    }

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
}