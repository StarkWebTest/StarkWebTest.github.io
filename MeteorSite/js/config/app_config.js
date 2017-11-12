app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/Home', {
            templateUrl: 'views/Home.html'
        })
        
        .otherwise({
            redirectTo: '/Home'
        })
        
}]);