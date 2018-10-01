import { Component, HostBinding, Host } from '@angular/core';

import { SidebarToggleService } from '../../services/sidebarToggleService.service';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

    
    isSidebarActive = false;

    constructor(
        private sidebarToggleService: SidebarToggleService
    ){}
    
    ngOnInit() {
        this.sidebarToggleService.change.subscribe(isSidebarActive => {
            this.isSidebarActive = isSidebarActive
        })
    }
}