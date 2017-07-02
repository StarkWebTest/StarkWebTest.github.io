app.controller('BlogController', ['$scope', function($scope) {
    $scope.html = [
        {
            component: 'Navigation Bar',
            id: 'Navigation'
        },
        {
            component: 'Card',
            id: 'Card'
        },
        {
            component: 'Jumbotron',
            id: 'Jumbotron'
        },
        {
            component: 'Button',
            id: 'Button'
        },
        {
            component: 'Background Image',
            id: 'Background'
        },
        {
            component: 'Dropdown',
            id: 'Dropdown'
        }
    ];

    $scope.angular = [
        {
            component: 'Page Routing'
        },
        {
            component: 'ng-repeat'
        },
        {
            component: 'ng-view'
        }
    ];
}])