 app.config(['$routeProvider', function($routeProvider) {

     $routeProvider
        .when('/Dashboard', {
            templateUrl: 'views/DashView.html'
        })
        .otherwise({
            redirectTo: '/Dashboard'
        })
 }]);