import { Component, HostBinding, Host } from '@angular/core';

import { ToggleService } from '../../services/toggleService.service';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

    
    isSidebarActive = false;

    constructor(
        private toggleService: ToggleService
    ){}
    
    ngOnInit() {
        this.toggleService.change.subscribe(isSidebarActive => {
            this.isSidebarActive = isSidebarActive
        })
    }
}