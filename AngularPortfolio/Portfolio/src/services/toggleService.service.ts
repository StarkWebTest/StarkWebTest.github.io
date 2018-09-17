import { Injectable, Output, EventEmitter, Inject } from '@angular/core';

@Injectable()
export class ToggleService {

    isContentActive = false;

    @Output() change: EventEmitter<boolean> = new EventEmitter();

    toggle() {
        this.isContentActive = !this.isContentActive;
        this.change.emit(this.isContentActive);
    }
}