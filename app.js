var app = angular.module('Testing',['ngRoute','ngMap','dateRangePicker']);

app.controller('MainController', ['$scope', function($scope) {
    $scope.dates = moment().range("2012-11-05", "2013-01-25")
}]);