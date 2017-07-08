 app.config(['$routeProvider', function($routeProvider) {

     $routeProvider
        .when('/Dashboard', {
            templateUrl: 'views/DashView.html'
        })
        .when('/DeviceData', {
            templateUrl: 'views/DataView.html'
        })
        .otherwise({
            redirectTo: '/Dashboard'
        })
 }]);