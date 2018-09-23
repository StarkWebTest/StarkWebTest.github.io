import { Component } from '@angular/core';

import { ToggleService } from '../../services/toggleService.service';

@Component({
    selector: 'content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent {

    constructor(
        private toggleService: ToggleService
    ) {}

    isContentActive = false;
    isModernViewActive = true;
    isTableViewActive = false;

    modernView() {
        if (this.isModernViewActive == true) {

        } else if (this.isModernViewActive == false) {
            this.isModernViewActive = !this.isModernViewActive;
            this.isTableViewActive = !this.isTableViewActive;
        }
    }

    tableView() {
        if (this.isTableViewActive == true) {

        } else if (this.isTableViewActive == false) {
            this.isTableViewActive = !this.isTableViewActive;
            this.isModernViewActive = !this.isModernViewActive;
        }
    }

    toggleSidebar() {
        this.toggleService.toggle();
        this.isContentActive = !this.isContentActive;
    }


    logbook = [
        {
            Pilot: 'Joey Lounsbury',
            Date: '6/3/2018',
            Flights: {
                Flight: [
                    {
                        Student: 'Arthur Bartley',
                        Reason: 'Checkride Prep',
                        AircraftType: 'SR20',
                        AircraftIdent: 'N548TR',
                        From: 'KHPN',
                        To: 'KHPN'
                    },
                    {
                        Student: 'Glen Levenson',
                        Reason: 'Checkride Prep',
                        AircraftType: 'C-172',
                        AircraftIdent: 'N910IR',
                        From: 'KHPN',
                        To: 'KHPN'
                    },
                    {
                        Student: 'Liz Karpiloff',
                        Reason: 'Checkride Prep',
                        AircraftType: 'DA20',
                        AircraftIdent: 'N763DC',
                        From: 'KHPN',
                        To: 'KHPN'
                    }
                ]

            }
        },
        {
            Pilot: 'Joey Lounsbury',
            Date: '6/5/2018',
            Flights: {
                Flight: [
                    {
                        Student: 'Michael Lorelli',
                        Reason: 'Recurrency Flight',
                        AircraftType: 'TB-20',
                        AircraftIdent: 'N242GT',
                        From: 'KHPN',
                        To: 'KHPN'
                    },
                    {
                        Student: 'Susan Taylor',
                        Reason: 'Comm. Manuevers',
                        AircraftType: 'C-172',
                        AircraftIdent: 'N789PF',
                        From: 'KHPN',
                        To: 'KHPN'
                    },
                    {
                        Student: 'Glen Levenson',
                        Reason: 'Checkride Prep',
                        AircraftType: 'C-172',
                        AircraftIdent: 'N910IR',
                        From: 'KHPN',
                        To: 'KHPN'
                    }
                ]
            }
        },
        {
            Pilot: 'Joey Lounsbury',
            Date: '6/7/2018',
            Flights: {
                Flight: [
                    {
                        Student: 'Fank Alesci',
                        Reason: 'Instrument Flying ILS 16 HPN',
                        AircraftType: 'SR20',
                        AircraftIdent: 'N160CP',
                        From: 'KHPN',
                        To: 'KHPN'
                    },
                    {
                        Student: 'Wersley Barker',
                        Reason: 'Private XC',
                        AircraftType: 'DA20',
                        AircraftIdent: 'N644S',
                        From: 'KHPN',
                        To: 'KMSU - KHPN'
                    },
                    {
                        Student: 'Charity Weke',
                        Reason: 'Landing Practice',
                        AircraftType: 'C-172',
                        AircraftIdent: 'N622BN',
                        From: 'KHPN',
                        To: 'KHPN'
                    }
                ]
            }
        },
        {
            Pilot: 'Joey Lounsbury',
            Date: '6/8/2018',
            Flights: {
                Flight: [
                    {
                        Student: 'Franck Alesci',
                        Reason: 'Landing Practice',
                        AircraftType: 'SR20',
                        AircraftIdent: 'N160CP',
                        From: 'KHPN',
                        To: 'KHPN'
                    }
                ]
            }
        }
    ]
}