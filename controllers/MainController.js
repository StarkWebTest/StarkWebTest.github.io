app.controller('MainController', ['$scope', function($scope) {
    $scope.languages = [
        {
            lang: 'Python'
        },
        {
            lang: 'HTML'
        },
        {
            lang: 'XAML'
        },
        {
            lang: 'C++'
        },
        {
            lang: 'AngularJS'
        },
        {
            lang: 'Ruby'
        },
        {
            lang: 'C#'
        },
        {
            lang: 'Bootstrap'
        },
        {
            lang: 'CSS'
        },
        {
            lang: 'Xamarin'
        },
        {
            lang: 'Java'
        }
    ];

    $scope.programs = [
        {
            prog: 'Visual Studio 2015'
        },
        {
            prog: 'MatLab'
        },
        {
            prog: 'Photoshop'
        },
        {
            prog: 'Catia'
        },
        {
            prog: 'Blender'
        },
        {
            prog: 'AutoCad'
        },
        {
            prog: 'Visual Studio Code'
        },
        {
            prog: 'Eclipse'
        }
    ];

    $scope.experience = [
        {
            company: 'Software Logistics, LLC',
            img: '', 
            position: 'Web Developer Intern',
            info1: 'Developed portions of NuvIoT',
            info2: 'HTML, CSS, AngularJS, ASP.NET'
        },
        {
            company: 'Fusion Advertising Inc.',
            img: 'images/Fusion_Logo.png',
            position: 'Lead Mobile Application Developer Intern',
            info1: 'Developed The Frugal You coupon application',
            info2: 'C#, XAML, Xamarin.Forms, .NET'
        },
        {
            company: 'StarkNetwork',
            img: 'images/StarkNetwork_Logo2.jpg',
            position: 'Web and App Developer',
            info1: 'Developed webpages for various customers',
            info2: 'C#, XAML, HTML, CSS'
        },
        {
            company: 'Tier-Zero',
            img: 'images/tier-zero-nobg.png',
            position: 'Lead Web and App Developer',
            info1: 'Developed UWP apps for Windows 10',
            info2: 'C#, XAML, Xamarin.Forms, HTML, CSS, Bootstrap'
        }
    ];

    $scope.projects = [
        {
            img: 'images/Project_1.png',
            name: 'Basic Math Solver (Windows 10)',
            created: 'Created By: Cameron Stark',
            comment1: 'Developed using C# and XAML',
            comment2: 'Visual Studio 2015'
        },
        {
            img: 'images/Project_2.png',
            name: 'Basic Math Solver (iOS)',
            created: 'Created By: Cameron Stark',
            comment1: 'Devloped using Xamarin.Forms, C#, and XAML',
            comment2: 'Visual Studio 2015 and Xamarin Studio'
        },
        {
            img: 'images/Project_2-5.png',
            name: 'Basic Math Solver (Android)', 
            created: 'Created By: Cameron Stark',
            comment1: 'Developed using Xamarin.Forms, C# and XAML',
            comment2: 'Visual Studio 2015 and Xamarin Studio'
        },
        {
            img: 'images/Project_3.png',
            name: 'The Frugal You (iOS and Android)',
            created: 'Created By: Cameron Stark',
            comment1: 'Developed using Xamarin.Forms, C#, C#.NET, and XAML',
            comment2: 'Visual Studio 2015 and Xamarin Studio'
        },
        {
            img: 'images/Project_4.jpg',
            name: 'EvenToConnect',
            created: 'Created By: Cameron Stark, Brian Nunes De Souza, Nicholas Van Bommel and Pablo Garces',
            comment1: 'Developed using C#.NET, HTML, Bootstrap, and CSS',
            comment2: 'Visual Studio 2015 and Clarifai API'
        },
        {
            img: 'images/Project_5.jpg',
            name: 'HackRiddle App',
            created: 'Created By: Embry-Riddle Mobile Application Development Club',
            comment1: 'Developed using HTML, CSS and Materialize',
            comment2: 'Twitter API and GitHub'
        }
    ];

    $scope.report = [
        {
            period: 'Week of January 8 - January 14th',
            hours: 'Time Spent: 4.11',
            task1: 'ACCOMPLISHMENTS: Accomplished settign up layout of the detail section to display all necessary fields and to hid those with null values',
            task2: 'WHAT I LEARNED: Learned HTML, CSS and Bootstrap formatting aswell as the show/hide compnents to display information',
            task3: 'DIFFICULTY: I found that setting up the show/hide was a little complicated because of the changing formatting based on what is shown and hidden',
            task4: 'ENJOYED: I enjoyed playing around with the formatting and seeing what is possible with the components of bootstap and how it can work with angularjs'
        },
        {
            period: 'Week of January 1st - January 7th',
            hours: 'Time Spent: 13.58 hrs',
            task1: 'ACCOMPLISHMENTS: Accomplished setting up controllers and with assitance completed the passing of parameters for the user to move through the website and JSON URLs',
            task2: 'WHAT I LEARNED: Learned how services work with the html and controllers to allow for the passing of parameters between various controllers',
            task3: 'DIFFICULTY: I found that getting the controller to receive the parameter once passed by the first controller and the service because the way angular can be used varies from each person therefore learning can be a challenge at times',
            task4: 'ENJOYED: I enjoyed trying to figure it out and also seeing the effect of passing parameter by use of the console.log which was cool to see it working'
        },
        {
            period: 'Week of December 25th - December 31st',
            hours: 'Time Spent: 15.28 hrs',
            task1: 'ACCOMPLISHMENTS: Accomplished setting up controllers for the three JSON urls and formatted them in a single page website',
            task2: 'WHAT I LEARNED: Learned routing and how it can be used with multiple controllers to create a website',
            task3: 'DIFFICULTY: I found that getting the routing and the ng-view to get working was difficult and passing a value from the view to a controller',
            task4: 'ENJOYED: I enjoyed setting up the whole thing because final effect of the siingle wab page layout is very interesting'
        },
        {
            period: 'Week of December 17th - December 23rd',
            hours: 'Time Spent: 15.29 hrs',
            task1: 'ACCOMPLISHMENTS: Accomplished setting up the first controller and began work on routing',
            task2: 'WHAT I LEARNED: Learned the basics of Angular and how it works with HTML',
            task3: 'DIFFICULTY: I found that getting the routing to be setup correctly and getting the angular components to work properly within the webpage to be difficult becuase there can be very little feed back from the webpage',
            task4: 'ENJOYED: I enjoyed learning a new language and seeing what it is capable of is very interesting'
        },
    ];
}]);