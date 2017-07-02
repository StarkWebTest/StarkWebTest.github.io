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
        .when('/Blog', {
            templateUrl: 'views/Blog.html'
        })
        .when('/Resume', {
            templateUrl: 'views/Resume.html'
        })
        .when('#Navigation', {

        })
        .otherwise({
            redirectTo: '/Home'
        })
 }]);