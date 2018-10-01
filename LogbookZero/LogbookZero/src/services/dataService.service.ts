import { Injectable, Output, EventEmitter, Inject } from '@angular/core';

@Injectable()
export class DataService {
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

    aircraftName = [];
    aircraftCount = []
    getAllData() {
        return(this.logbook);
    }

    getAllAircraft() {     
        for(var i = 0; i < this.logbook.length; i++) {
            var obj = this.logbook[i];
            for(var j = 0; j < obj.Flights.Flight.length; j++) {
                var obj2 = obj.Flights.Flight[j];

                if(this.aircraftName.indexOf(obj2.AircraftType) == -1) {
                    this.aircraftName.push(obj2.AircraftType)
                    this.aircraftCount.push(1);
                } else if (this.aircraftName.indexOf(obj2.AircraftType) != -1) {
                    var curIndex = this.aircraftName.indexOf(obj2.AircraftType);
                    this.aircraftCount[curIndex]++;
                }
            }
        }
    }
}