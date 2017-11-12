app.controller('MainController', ['$scope', function($scope) {
    
    $scope.modules = [
        {
            name: 'Mt. Rainier Node 1',
            location: '46.8523° N, 121.7603° W',
            status: 'Working',
            weight: '5 of 10lbs'
        },
        {
            name: 'Mt. Rainier Node 2',
            location: '46.8523° N, 121.7603° W',
            status: 'Working',
            weight: '9 of 10lbs'
        },
        {
            name: 'Mt. Rainier Node 3',
            location: '46.8523° N, 121.7603° W',
            status: 'Not Working',
            weight: '4 of 10lbs'
        },
        {
            name: 'Mt. Rainier Node 4',
            location: '46.8523° N, 121.7603° W',
            status: 'Full',
            weight: '10 of 10lbs'
        },
        

    ];
    

   


}]);