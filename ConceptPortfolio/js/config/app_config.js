app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/Home', {
            templateUrl: 'views/Home.html'
        })
        .when('/Experience', {
            templateUrl: 'views/Experience.html'
        })
        .when('/Projects', {
            templateUrl: 'views/Projects.html'
        })
        .when('/Resume', {
            templateUrl: 'views/Resume.html'
        })
        .otherwise({
            redirectTo: '/Home'
        })
        
}]);