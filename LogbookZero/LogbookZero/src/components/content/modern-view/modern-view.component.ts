import { Component, OnInit } from '@angular/core';
import * as Plotly from '../../../assets/plotly.min';

import { DataService } from '../../../services/dataService.service';


@Component({
    selector: 'modern-view',
    templateUrl: './modern-view.component.html',
    styleUrls: ['./modern-view.component.css']
})
export class ModernViewComponent implements OnInit {

    constructor(
        private dataService: DataService
    ) {}

    logbook = this.dataService.getAllData();

    
    aircraft = this.dataService.getAllAircraft();
    data = [
        {
            x: this.dataService.aircraftName,
            y: this.dataService.aircraftCount,
            type: 'bar'
        } 
    ];
    layout = {
        title: '# Flights Per Aircraft',
        showLegend: false
    };
    
    ngOnInit() {
        Plotly.newPlot("flights-aircraft", this.data, this.layout, {staticPlot: true});
    }

}