import { Injectable, Output, EventEmitter, Inject } from '@angular/core';

@Injectable()
export class SidebarToggleService {
    isSidebarActive = false;

    @Output() change: EventEmitter<boolean> = new EventEmitter();

    toggle() {
        this.isSidebarActive = !this.isSidebarActive;
        this.change.emit(this.isSidebarActive);
    }
}