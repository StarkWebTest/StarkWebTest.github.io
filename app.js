var app = angular.module('Testing',['ngRoute','ngMap','dateRangePicker']);

angular.module.controller('MainController', ['$scope', function($scope) {
    $scope.dates = moment().range("2012-11-05", "2013-01-25")
}]);