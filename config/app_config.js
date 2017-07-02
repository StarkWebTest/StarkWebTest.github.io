 app.config(['$routeProvider', function($routeProvider) {

     $routeProvider
        .when('/Home', {
            templateUrl: 'views/DashView.html'
        })
        .otherwise({
            redirectTo: '/Home'
        })
 }]);