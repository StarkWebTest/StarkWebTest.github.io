import { Component, OnInit } from '@angular/core';
import * as Plotly from '../../assets/plotly.min';

import { SidebarToggleService } from '../../services/sidebarToggleService.service';

@Component({
    selector: 'content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent {

    constructor(
        private sidebarToggleService: SidebarToggleService
    ) {}


    view = "modern";
    isContentActive = false;
    isModernViewActive = true;
    isTableViewActive = false;
    isAddNewViewActive = false;

    modernView() {
        if (this.isModernViewActive == true) {

        } else {
            this.view = "modern";
            this.isModernViewActive = true;
            this.isAddNewViewActive = false;
            this.isTableViewActive = false;
        }
    }

    tableView() {
        if (this.isTableViewActive == true) {

        } else {
            this.view = 'table';
            this.isTableViewActive = true;
            this.isModernViewActive = false;
            this.isAddNewViewActive = false;
        }
    }

    addNewView() {
        if (this.isAddNewViewActive == true) {

        } else {
            this.view = 'addNew';
            this.isAddNewViewActive = true;
            this.isTableViewActive = false;
            this.isModernViewActive = false;
        }
    }

    toggleSidebar() {
        this.sidebarToggleService.toggle();
        this.isContentActive = !this.isContentActive;
    }




    
}