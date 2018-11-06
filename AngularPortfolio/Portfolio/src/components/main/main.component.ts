import { Component, HostListener, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent {
    @ViewChild('content') content: ElementRef;
    name = 'CAMERON MICHAEL STARK';

    isTopBarActive = false;
    isContentActive = false;
    isSidebarActive = false;

    ngOnInit() {
         window.addEventListener('scroll', this.scroll, true);
    }

    ngOnDestory() {
        window.removeEventListener('scroll', this.scroll, true);
    }


    scroll = (): void => {      
        if (this.content.nativeElement.scrollTop > 0) {
            this.isContentActive = true;
            this.isTopBarActive = true;
        } else {
            this.isSidebarActive = false;
            this.isContentActive = false;
            this.isTopBarActive = false;
        }
        
    };

    sidebar() {
        this.isSidebarActive = !this.isSidebarActive;
    }

    softwares = [
        { software: 'Microsoft Visual Studio', skill: '80%' },
        { software: 'IntelliJ', skill: '70%' },
        { software: 'RStudio', skill: '75%' },
        { software: 'Teradata', skill: '60%' },
        { software: 'Alteryx', skill: '75%' }
    ];

     languages = [
         { language: 'C# - LINQ - Xamarin', skill: '45%' },
         { language: 'Java - JavaFx', skill: '70%' },
         { language: 'HTML - Javascript - Bootstrap/CSS', skill: '80%' },
         { language: 'XAML', skill: '50%' },
         { language: 'AngularJS - Angular', skill: '60%' },
         { language: 'Ruby On Rails', skill: '20%' },
         { language: 'R - RShiny', skill: '70%' },
         { language: 'Python - Pandas - Numpy', skill: '20%' },
         { language: 'SQL', skill: '65%' }
     ];

    title = "Work Experience";

    projects = [
        {
            name: 'LogbookZero',
            image: '',
            language: 'Angular6',
            desc1: 'Digital Logbook tracking and monitoring application for pilots'
        },
        {
            name: 'Space Jam',
            image: '',
            language: 'AngularJS, SpotifyAPI, Google Sheets, Google App Scripts'
        }
    ]

    experience = [
        {
            logo: '../../assets/images/American-Airlines-logo-2013.png',
            name: 'American Airlines',
            position: 'Boeing Reliability Engineering Co-Op',
            projects: [
                {
                    title: 'Cabin Data Access',
                    image: '../../assets/images/CDAPicture.png',
                    language: 'AngularJS, Bootstrap, HTML, Sharepoint, JSON',
                    desc1: "Tool for in the field AMT's to access interior information of aircraft almost instantly",
                    desc2: "Takes multiple tables in sharepoint and creates a unified dataset that can be searched by multiple different filters"   
                },
                {
                    title: 'Data Access Applications (Shiny Apps)',
                    image: '../../assets/images/ShinyPicture.png',
                    language: 'R, R-Shiny, SQL, Javascript',
                    desc1: 'Tool for Fleet Engineers, Component Engineers, and many other aspects of Technical Operations, to get access to the raw data of the airline almost instantly',
                    desc2: 'Each tool acts as an easy to use and cleaner viewing/export tool for SQL queries.'
                }
            ]
        },
        {
            logo: '../../assets/images/AerialApplications.png',
            name: 'Aerial Applications',
            position: 'Software Engineering Intern',
            projects: [
                {
                    title: 'Socket Controller',
                    image: '',
                    language: 'C#, Console Application, JSON',
                    desc1: 'Tool to allow a server/computer processing farm to communicate with each other and post status to a website',
                    desc2: 'Allowed for a script to be sent to all computers to process images'
                }
            ]
        },
        {
            logo: '../../assets/images/ERAU_logo.png',
            name: 'Embry-Riddle / FAA',
            position: 'Software Engineering Intern',
            projects: [
                {
                    title: 'Air Traffic Controller En-Route Training Program',
                    image: '',
                    language: 'ASP .NET, VueJS, HTML, CSS',
                    desc1: 'Tool to allow for student at the ATC training center to practice the En-Route portion of the tower from a personal device',
                    desc2: 'Made use of a mockup of the two screens of an ATC controller and simulated flights and randomized events'
                }
            ]
        },
        {
            logo: '../assets/images/Belcan.png',
            name: 'Belcan Engineering, LLC',
            position: 'Software Engineering Intern',
            projects: [
                {
                    title: 'PAQT Tool',
                    image: '',
                    language: 'C#, WPF, SQL, SAP, Oracle, XAML',
                    desc1: 'Tool to allow Pratt & Whitney Engineers to track the significant stages of development for NGPF Fan Blades',
                    desc2: 'The tool took information from SAP and Oracle databases and created a unified SQL database with front end access'
                },
                {
                    title: 'NGPF Tools',
                    image: '',
                    language: 'C#, WPF, SQL, XAML',
                    desc1: 'Tool to allow Pratt & Whitney and Belcan analyts the ability to view and monitor the status of active/on-wing engines as they are inflight',
                    desc2: 'The tool made use of Pratt & Whitneys on board data collection devices to send data down to the data centers'
                },
                {
                    title: 'PEQs Tool',
                    image: '',
                    language: 'C#, WPF, XAML, Unigraph, SQL',
                    desc1: 'Tool to take live engine data from various Pratt & Whitney engines on-wing, and normalizes them with unigraph calculations',
                    desc2: 'The tool provided a unified dataset for all data tracking tools to pull from'
                }
            ]
        },
        {
            logo: '../assets/images/SoftwareLogistics.jpg',
            name: 'Software Logistics, LCC',
            position: 'Web Developer',
            projects: [
                {
                    title: 'NuvIot',
                    image: '',
                    language: 'AngularJS, HTML, JSON, ASP .NET, C#',
                    desc1: 'Tool for clients to monitor and track their various IoT devices from a single location',
                    desc2: 'Makes use of an ASP .NET api to collect data and send data to the website for the users comsumption'
                }
            ]
        }
    ]
}