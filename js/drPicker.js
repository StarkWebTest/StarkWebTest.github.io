$(document).ready(function () {

    var start = moment().subtract(3, 'days').startOf('day');
    var end = moment().subtract(-1, 'days').startOf('day');

    function cb(start, end) {

        if (passedDate != "") {
            var thedate = new Date(Date.parse(passedDate.substring(0, 13)));
            var start = moment(thedate).subtract(1, 'days').startOf('day');
            var end = moment(thedate).subtract(-1, 'days').startOf('day');
        }

        $('#dateRange span').html(start.format('MMM Do YYYY') + ' - ' + end.format('MMM Do YYYY'));
               

        curr.daterange.start = start.format('MM/DD/YYYY');
        curr.daterange.end = end.format('MM/DD/YYYY');
    }

    $('#dateRange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    //$('#dateRange').daterangepicker({
    //    startDate: start,
    //    endDate: end
    //}, cb);

    cb(start, end);

    $('#dateRange').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('MMM Do YYYY') + ' - ' + picker.endDate.format('MMM Do YYYY'));
        $('#dateRange span').html(picker.startDate.format('MMM Do YYYY') + ' - ' + picker.endDate.format('MMM Do YYYY'));
        
        curr.daterange.start = picker.startDate.format('MM/DD/YYYY');
        curr.daterange.end = picker.endDate.format('MM/DD/YYYY');

        reloadData();
    });

    $('#dateRange').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });

    function reloadData() {
        var head = document.getElementById('flot-line-chart');
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '../js/LinePlot_Data.js';
        head.appendChild(script);

        //$.getScript("/js/helperFunctions.js", function () {
        //    refreshDataTable();
        //});
    }
});