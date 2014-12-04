window.setUpDomEvents = function() {
    $(document).ready(function() {

        $('#daterange').daterangepicker({
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                    'Last 7 Days': [moment().subtract('days', 6), moment()],
                    'Last 30 Days': [moment().subtract('days', 29), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
                },
                startDate: moment().subtract('days', 29),
                endDate: moment()
            },
            function(start, end) {
                $('#daterange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
            });

        /* ---------- Auto Height texarea ---------- */
        // $('textarea').autosize();

        // $('#recent a:first').tab('show');
        // $('#recent a').click(function (e) {
        //   e.preventDefault();
        //   $(this).tab('show');
        // });

        /*------- Main Chart -------*/
        var d1 = [
            [gd(2014, 1, 0), 0],
            [gd(2014, 2, 0), 0],
            [gd(2014, 3, 0), 1],
            [gd(2014, 4, 0), 2],
            [gd(2014, 5, 0), 21],
            [gd(2014, 6, 0), 9],
            [gd(2014, 7, 0), 12],
            [gd(2014, 8, 0), 10],
            [gd(2014, 9, 0), 31],
            [gd(2014, 10, 0), 13],
            [gd(2014, 11, 0), 65],
            [gd(2014, 12, 0), 10],
            [gd(2015, 1, 0), 14]
        ];
        var d2 = [
            [gd(2014, 1, 0), 0],
            [gd(2014, 2, 0), 0],
            [gd(2014, 3, 0), 1],
            [gd(2014, 4, 0), 2],
            [gd(2014, 5, 0), 7],
            [gd(2014, 6, 0), 5],
            [gd(2014, 7, 0), 6],
            [gd(2014, 8, 0), 8],
            [gd(2014, 9, 0), 24],
            [gd(2014, 10, 0), 7],
            [gd(2014, 11, 0), 12],
            [gd(2014, 12, 0), 5],
            [gd(2015, 1, 0), 7]
        ];

        function gd(year, month, day) {
            return new Date(year, month - 1, day).getTime();
        }

        var container = $('#main-chart');

        var plot = $.plot($("#main-chart"), [{
            label: "All clients",
            data: d1
        }, {
            label: "New clients",
            data: d2
        }], {
            series: {
                lines: {
                    show: false
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.4
                },
                points: {
                    radius: 2,
                    show: true,
                    lineWidth: 1,
                },
                shadowSize: 0
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: '#d1d4d7',
                borderWidth: {
                    top: 0,
                    right: 0,
                    bottom: 1,
                    left: 0
                },
                color: '#d1d4d7',
                margin: {
                    left: 30
                },
            },
            colors: ["#63c2de", "#4dbd74"],
            xaxis: {
                mode: 'time',
                tickColor: '#fff'
            },
            yaxis: {
                ticks: 4
            },
            tooltip: true,
            tooltipOpts: {
                content: "chart: %x.1 is %y.4",
                defaultTheme: false,
                shifts: {
                    x: 0,
                    y: 20
                }
            }
        });

        var yaxisLabel = $('<div class="axisLabel yaxisLabel"></div>').text('Revenue (USD)').appendTo(container);
        var xaxisLabel = $('<div class="axisLabel xaxisLabel"></div>').text('Sales').appendTo(container);

    });

    $(document).ready(function() {

        /*------- Gauge -------*/
        var opts1 = {
            lines: 12, // The number of lines to draw
            angle: 0.05, // The length of each line
            lineWidth: 0.44, // The line thickness
            pointer: {
                length: 0.75, // The radius of the inner circle
                strokeWidth: 0.035, // The rotation offset
                color: '#2a2c36' // Fill color
            },
            limitMax: 'false', // If true, the pointer will not go past the end of the gauge
            colorStart: '#4dbd74', // Colors
            colorStop: '#4dbd74', // just experiment with them
            strokeColor: '#f8f9fa', // to see which ones work best for you
            generateGradient: true
        };
        var target = document.getElementById('gauge-success'); // your canvas element
        var gauge = new Gauge(target).setOptions(opts1); // create sexy gauge!
        gauge.maxValue = 3000; // set max gauge value
        gauge.animationSpeed = 32; // set animation speed (32 is default value)
        gauge.set(2800); // set actual value

        /*------- Gauge -------*/
        var opts2 = {
            lines: 12, // The number of lines to draw
            angle: 0.05, // The length of each line
            lineWidth: 0.44, // The line thickness
            pointer: {
                length: 0.75, // The radius of the inner circle
                strokeWidth: 0.035, // The rotation offset
                color: '#2a2c36' // Fill color
            },
            limitMax: 'false', // If true, the pointer will not go past the end of the gauge
            colorStart: '#63c2de', // Colors
            colorStop: '#63c2de', // just experiment with them
            strokeColor: '#f8f9fa', // to see which ones work best for you
            generateGradient: true
        };
        var target = document.getElementById('gauge-info'); // your canvas element
        var gauge = new Gauge(target).setOptions(opts2); // create sexy gauge!
        gauge.maxValue = 3000; // set max gauge value
        gauge.animationSpeed = 32; // set animation speed (32 is default value)
        gauge.set(1243); // set actual value

        /*------- Gauge -------*/
        var opts3 = {
            lines: 12, // The number of lines to draw
            angle: 0.05, // The length of each line
            lineWidth: 0.44, // The line thickness
            pointer: {
                length: 0.75, // The radius of the inner circle
                strokeWidth: 0.035, // The rotation offset
                color: '#2a2c36' // Fill color
            },
            limitMax: 'false', // If true, the pointer will not go past the end of the gauge
            colorStart: '#f8cb00', // Colors
            colorStop: '#f8cb00', // just experiment with them
            strokeColor: '#f8f9fa', // to see which ones work best for you
            generateGradient: true
        };
        var target = document.getElementById('gauge-warning'); // your canvas element
        var gauge = new Gauge(target).setOptions(opts3); // create sexy gauge!
        gauge.maxValue = 3000; // set max gauge value
        gauge.animationSpeed = 32; // set animation speed (32 is default value)
        gauge.set(450); // set actual value

        /*------- Gauge -------*/
        var opts4 = {
            lines: 12, // The number of lines to draw
            angle: 0.05, // The length of each line
            lineWidth: 0.44, // The line thickness
            pointer: {
                length: 0.75, // The radius of the inner circle
                strokeWidth: 0.035, // The rotation offset
                color: '#2a2c36' // Fill color
            },
            limitMax: 'false', // If true, the pointer will not go past the end of the gauge
            colorStart: '#f86c6b', // Colors
            colorStop: '#f86c6b', // just experiment with them
            strokeColor: '#f8f9fa', // to see which ones work best for you
            generateGradient: true
        };
        var target = document.getElementById('gauge-danger'); // your canvas element
        var gauge = new Gauge(target).setOptions(opts4); // create sexy gauge!
        gauge.maxValue = 3000; // set max gauge value
        gauge.animationSpeed = 32; // set animation speed (32 is default value)
        gauge.set(1950); // set actual value

        /*------- Gauge -------*/
        var opts5 = {
            lines: 12, // The number of lines to draw
            angle: 0.05, // The length of each line
            lineWidth: 0.44, // The line thickness
            pointer: {
                length: 0.75, // The radius of the inner circle
                strokeWidth: 0.035, // The rotation offset
                color: '#2a2c36' // Fill color
            },
            limitMax: 'false', // If true, the pointer will not go past the end of the gauge
            colorStart: '#20a8d8', // Colors
            colorStop: '#20a8d8', // just experiment with them
            strokeColor: '#f8f9fa', // to see which ones work best for you
            generateGradient: true
        };
        var target = document.getElementById('gauge-primary'); // your canvas element
        var gauge = new Gauge(target).setOptions(opts5); // create sexy gauge!
        gauge.maxValue = 3000; // set max gauge value
        gauge.animationSpeed = 32; // set animation speed (32 is default value)
        gauge.set(1150); // set actual value

        /*------- Gauge -------*/
        var opts6 = {
            lines: 12, // The number of lines to draw
            angle: 0.05, // The length of each line
            lineWidth: 0.44, // The line thickness
            pointer: {
                length: 0.75, // The radius of the inner circle
                strokeWidth: 0.035, // The rotation offset
                color: '#2a2c36' // Fill color
            },
            limitMax: 'false', // If true, the pointer will not go past the end of the gauge
            colorStart: '#63c2de', // Colors
            colorStop: '#63c2de', // just experiment with them
            strokeColor: '#f8f9fa', // to see which ones work best for you
            generateGradient: true
        };
        var target = document.getElementById('gauge1'); // your canvas element
        var gauge = new Gauge(target).setOptions(opts6); // create sexy gauge!
        gauge.maxValue = 3000; // set max gauge value
        gauge.animationSpeed = 32; // set animation speed (32 is default value)
        gauge.set(1650); // set actual value

        var opts7 = {
            lines: 12, // The number of lines to draw
            angle: 0.05, // The length of each line
            lineWidth: 0.44, // The line thickness
            pointer: {
                length: 0.75, // The radius of the inner circle
                strokeWidth: 0.035, // The rotation offset
                color: '#2a2c36' // Fill color
            },
            limitMax: 'false', // If true, the pointer will not go past the end of the gauge
            colorStart: '#f8cb00', // Colors
            colorStop: '#f8cb00', // just experiment with them
            strokeColor: '#f5f5f5', // to see which ones work best for you
            generateGradient: true
        };
        var target = document.getElementById('gauge2'); // your canvas element
        var gauge = new Gauge(target).setOptions(opts7); // create sexy gauge!
        gauge.maxValue = 3000; // set max gauge value
        gauge.animationSpeed = 32; // set animation speed (32 is default value)
        gauge.set(650); // set actual value

    });
};