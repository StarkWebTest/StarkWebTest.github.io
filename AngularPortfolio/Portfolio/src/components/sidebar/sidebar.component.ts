import { Component, Input, HostListener } from '@angular/core';

import { ContentComponent } from '../content/content.component';
import { ToggleService } from '../../services/toggleService.service';


@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

    constructor (
        private toggleService : ToggleService
    ) {} 

    isSidebarActive = false;
    isContentActive = false;
    isSidebarHeaderActive = false;
    isSidebarContentActive = false;

    toggleSidebar() {
        this.toggleService.toggle();
        this.isSidebarHeaderActive = !this.isSidebarHeaderActive;
        this.isSidebarActive = !this.isSidebarActive;
        this.isSidebarContentActive = !this.isSidebarContentActive;
    }

    name = 'Cameron Stark';

    softwares = [
        { software: 'Microsoft Visual Studio' },
        { software: 'IntelliJ' },
        { software: 'RStudio' },
        { software: 'Teradata' },
        { software: 'Alteryx' }
    ];

     languages = [
         { language: 'C# - LINQ - Xamarin' },
         { language: 'Java - JavaFx' },
         { language: 'HTML - Javascript - Bootstrap/CSS' },
         { language: 'XAML' },
         { language: 'AngularJS - Angular' },
         { language: 'Ruby On Rails' },
         { language: 'R - RShiny' },
         { language: 'Python - Pandas - Numpy' },
         { language: 'SQL' }
     ];
}