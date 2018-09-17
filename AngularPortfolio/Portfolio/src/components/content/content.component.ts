import { Component, HostBinding } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ToggleService } from '../../services/toggleService.service';


@Component({
    selector: 'content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent {

    @HostBinding('class.is-open')
    isContentActive = false;


    constructor(
        private toggleService : ToggleService
    ) {}

    ngOnInit() {
        this.toggleService.change.subscribe(isContentActive => {
            this.isContentActive = isContentActive;
        })
    }

}