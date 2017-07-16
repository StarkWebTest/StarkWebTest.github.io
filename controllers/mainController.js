Testing.controller('mainController', function($scope) {
    $scope.date = {
        startDate: moment().subtract(1, "days"),
        endDate: moment()
    };
  
    $scope.SimplePickerChange = function(){
      alert('hi');
        $scope.date = {        
          endDate: $scope.date.startDate.add(30, "days")
        }
        alert(JSON.stringify($scope.date));
    };

    $scope.singleDate = moment().add(30, "days");

    $scope.opts = {
        locale: {
            applyClass: 'btn-green',
            applyLabel: "Apply",
            fromLabel: "From",
            format: "YYYY-MM-DD",
            toLabel: "To",
            cancelLabel: 'Cancel',
            customRangeLabel: 'Custom range'
        },
        ranges: {
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()]
        }
    };

    $scope.setStartDate = function () {
        $scope.date.startDate = moment().subtract(4, "days").toDate();
    };

    $scope.setRange = function () {
        $scope.date = {
            startDate: moment().subtract(5, "days"),
            endDate: moment()
        };
    };

    //Watch for date changes
    $scope.$watch('date', function(newDate) {
        console.log('New date set: ', newDate);
    }, false);

});
