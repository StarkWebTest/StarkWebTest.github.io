import { Injectable } from '@angular/core';

@Injectable()
export class CurrentUserService {
    constructor (

    ) {

    }

    private currentUser;

    setCurrentUser(email) {
        this.currentUser = email;
    }

    getCurrentUser() {
        return this.currentUser;
    }
}