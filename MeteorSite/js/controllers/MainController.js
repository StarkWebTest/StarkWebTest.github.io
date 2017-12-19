app.controller('MainController', ['$scope', function ($scope) {
    $scope.modules = [
        {
            location: 'Mt. Rainier',
            code: 'rainier',
            nodes: [
                {
                    $id: '1',
                    location: 'Mt. Rainier',
                    name: 'Node 1',
                    lat: '46.8523',
                    lon: '-121.7603',
                    status: 'Working',
                    weight: '6'
                },
                {
                    $id: '2',
                    location: 'Mt. Rainier',
                    name: 'Node 2',
                    lat: '47.7170',
                    lon: '-123.3170',
                    status: 'Full',
                    weight: '10'
                },
                {
                    $id: '3',
                    location: 'Mt. Rainier',
                    name: 'Node 3',
                    lat: '47.7170',
                    lon: '-123.3170',
                    status: 'Not Working',
                    weight: '4'
                },
                {
                    $id: '4',
                    location: 'Mt. Rainier',
                    name: 'Node 4',
                    lat: '47.7170',
                    lon: '-123.3170',
                    status: 'Working',
                    weight: '2'
                },
                {
                    $id: '5',
                    location: 'Mt. Rainier',
                    name: 'Node 5',
                    lat: '47.7170',
                    lon: '-123.3170',
                    status: 'Full',
                    weight: '10'
                }
            ]
        },
        {
            location: 'Mt. Olympus',
            code: 'olympus',
            nodes: [
                {
                    $id: '6',
                    location: 'Mt. Olympus',
                    name: 'Node 1',
                    lat: '47.8330',
                    lon: '-123.3170',
                    status: 'Not Working',
                    weight: '5'
                }
            ]
        },
        {
            location: 'Mt. Everest',
            code: 'everest',
            nodes: [
                {
                    $id: '7',
                    location: 'Mt. Everest',
                    name: 'Node 1',
                    lat: '47.8330',
                    lon: '-123.3170',
                    status: 'Not Working',
                    weight: '5'
                }
            ]
        }


    ];

    $scope.select = function (item) {
        $scope.selected = item;
    }
    $scope.selected = {};

}]);
