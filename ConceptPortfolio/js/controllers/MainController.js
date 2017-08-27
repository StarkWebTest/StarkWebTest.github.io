app.controller('MainController', ['$scope', function($scope) {
    $scope.experience = [
        {
            company: 'Belcan Engineering',
            img: 'images/BelcanLogo.png',
            position: 'Software Engineering Intern',
            info1: 'Developed tools to monitor Pratt & Whitney Jet Engines',
            info2: 'WPF, C#, XAML, SQL'
        },
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
            position: 'Lead Mobile Developer Intern',
            info1: 'Worked on The Frugal You coupon application',
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
            img: '',
            name: 'PAQT Tool',
            created: 'Created By: Various Belcan Employees',
            comment1: 'Tool to allow belcan engineers to track, watch, and sign off on the development of jet engine fan blades',
            comment2: 'C#, WPF, SQL, SAP, Oracle, XAML'
        },
        {
            img: '',
            name: 'NGPF Tools',
            created: 'Created By: Various Beclan Employees',
            comment1: 'Various tools to track, maintain and plot jet engine data from commerical Pratt & Whitney Jet Engines',
            comment2: 'C#, WPF, WinForms, MatLab, SQL, XAML'
        },
        {
            img: '',
            name: 'PEQs Tool',
            created: 'Created By: Various Belcan Employees',
            comment1: 'Normalization program for incoming live jet engine data, to be passed onto tracking and plotting tools',
            comment2: 'C#, WPF, Unigraph, SQL, XAML'
        },
        {
            img: 'images/Project_4.jpg',
            name: 'EvenToConnect',
            created: 'Created By: Cameron Stark, Brian Nunes De Souza, Nicholas Van Bommel and Pablo Garces',
            comment1: 'Social Media concept where images are uploaded and scanned based on content to dynamically modify the trending categories',
            comment2: 'C#, HTML, Bootstrap, Clarifai API'
        },
        {
            img: 'images/Project_5.jpg',
            name: 'HackRiddle App',
            created: 'Created By: Embry-Riddle Mobile Application Development Club',
            comment1: 'Mobile Web App to allow the participants of HackRiddle to keep up to date on events',
            comment2: 'Twitter API, GitHub, Materialize, Javascript, HTML, CSS'
        }
    ];

   
}]);