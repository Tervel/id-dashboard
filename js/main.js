//                     _
//    ____ ___  ____ _(_)___
//   / __ `__ \/ __ `/ / __ \
//  / / / / / / /_/ / / / / /
// /_/ /_/ /_/\__,_/_/_/ /_/
"use strict";

let redAlert = 80;
let amberAlert = 50;

// Test data
let jsonData =
  [
    {
      "ip": "9.253.237.96",
      "user": "Holland.Lynn",
      "access_times": [
        "2016-01-25T07:30:03-10:00",
        "2016-10-11T08:08:32-10:00",
        "2015-04-10T09:09:34-10:00",
        "2014-05-26T12:35:41-10:00",
        "2015-11-17T03:03:51-10:00"
      ],
      "access_velocity": 8,
      "region": "ER",
      "score": 81,
      "signals": [
        "labore"
      ]
    },
    {
      "ip": "44.195.245.110",
      "user": "Nixon.Bernard",
      "access_times": [
        "2015-03-26T10:19:21-10:00",
        "2014-01-06T07:56:20-10:00",
        "2016-07-23T03:14:33-10:00",
        "2014-06-09T06:58:45-10:00",
        "2016-01-22T05:52:04-10:00",
        "2014-09-19T07:22:41-10:00",
        "2016-08-16T10:23:51-10:00",
        "2015-08-30T11:28:12-10:00"
      ],
      "access_velocity": 2,
      "region": "AU",
      "score": 53,
      "signals": [
        "officia"
      ]
    },
    {
      "ip": "47.6.152.181",
      "user": "Suzette.Estrada",
      "access_times": [
        "2014-01-06T08:26:19-10:00",
        "2014-04-14T03:44:15-10:00",
        "2016-04-17T11:00:57-10:00"
      ],
      "access_velocity": 3,
      "region": "SE",
      "score": 64,
      "signals": [
        "anim",
        "ipsum",
        "quis"
      ]
    },
    {
      "ip": "103.150.169.208",
      "user": "Goldie.Wynn",
      "access_times": [
        "2014-11-26T12:46:53-10:00",
        "2016-02-04T09:26:03-10:00",
        "2015-09-19T05:40:48-10:00",
        "2016-08-23T04:05:31-10:00",
        "2015-09-18T02:39:16-10:00",
        "2015-11-08T02:42:40-10:00",
        "2015-04-27T11:25:33-10:00",
        "2016-05-31T04:14:45-10:00",
        "2016-03-13T03:28:51-10:00",
        "2016-10-06T11:25:07-10:00"
      ],
      "access_velocity": 8,
      "region": "TF",
      "score": 24,
      "signals": [
        "proident"
      ]
    },
    {
      "ip": "139.127.15.77",
      "user": "Bartlett.Bishop",
      "access_times": [
        "2014-11-21T10:32:33-10:00",
        "2016-01-06T07:40:14-10:00",
        "2016-01-16T09:36:58-10:00"
      ],
      "access_velocity": 1,
      "region": "GD",
      "score": 74,
      "signals": [
        "do",
        "tempor"
      ]
    },
    {
      "ip": "54.123.244.220",
      "user": "Sharp.Downs",
      "access_times": [
        "2016-07-06T03:36:55-10:00",
        "2016-05-08T02:09:28-10:00",
        "2015-07-29T02:44:22-10:00",
        "2014-05-31T04:14:55-10:00",
        "2016-06-21T09:37:08-10:00",
        "2016-01-31T07:01:43-10:00",
        "2015-06-03T09:00:34-10:00",
        "2015-03-13T08:13:23-10:00",
        "2015-07-04T08:14:34-10:00"
      ],
      "access_velocity": 8,
      "region": "LV",
      "score": 30,
      "signals": [
        "qui",
        "esse",
        "velit"
      ]
    },
    {
      "ip": "201.122.193.179",
      "user": "Lilia.Craig",
      "access_times": [
        "2016-02-29T07:13:52-10:00",
        "2016-03-14T09:56:01-10:00",
        "2015-05-15T01:54:35-10:00",
        "2014-02-17T06:13:53-10:00",
        "2014-02-17T02:43:05-10:00",
        "2014-07-31T01:53:54-10:00"
      ],
      "access_velocity": 3,
      "region": "HN",
      "score": 14,
      "signals": [
        "occaecat"
      ]
    },
    {
      "ip": "21.130.215.162",
      "user": "Allyson.Arnold",
      "access_times": [
        "2014-04-14T06:50:08-10:00",
        "2014-09-12T12:59:12-10:00",
        "2016-03-30T10:59:28-10:00"
      ],
      "access_velocity": 6,
      "region": "ES",
      "score": 23,
      "signals": [
        "laborum",
        "irure"
      ]
    },
    {
      "ip": "252.61.173.84",
      "user": "Ellen.Roy",
      "access_times": [
        "2015-12-02T06:33:22-10:00",
        "2016-08-22T01:28:43-10:00"
      ],
      "access_velocity": 1,
      "region": "CU",
      "score": 79,
      "signals": [
        "ullamco",
        "voluptate",
        "ullamco"
      ]
    },
    {
      "ip": "68.224.152.104",
      "user": "Lauren.Carney",
      "access_times": [
        "2015-10-16T11:11:47-10:00",
        "2014-06-28T05:52:39-10:00",
        "2015-09-17T04:27:01-10:00",
        "2016-06-28T01:26:13-10:00",
        "2014-10-27T04:54:31-10:00",
        "2015-02-28T01:35:18-10:00",
        "2016-08-05T03:21:30-10:00"
      ],
      "access_velocity": 3,
      "region": "MR",
      "score": 18,
      "signals": [
        "magna",
        "laborum"
      ]
    }
  ];

// test json: https://mockbin.org/bin/dc456745-6353-464e-a42f-f6037880bc8c/
// whitelist: https://mockbin.org/bin/71b4d9a4-29dc-4ad0-8750-3a43614e3e3c/
// blacklist: https://mockbin.org/bin/d8c37671-f45f-46d5-b2dd-f56043519ddf/

// Formats data for use in pie chart
function summariseData(data) {
  let summaryData =
  {
    "green": data.filter(_ => _.score <= amberAlert).length,
    "amber": data.filter(_ => (_.score >= amberAlert && _.score <= redAlert)).length,
    "red": data.filter(_ => _.score >= redAlert).length
  };

  let summaryDataPercentage =
  {
    "green": summaryData.green / data.length * 100.0,
    "amber": summaryData.amber / data.length * 100.0,
    "red": summaryData.red / data.length * 100.0,
  };

  return summaryDataPercentage;
}

function renderCharts(data) {
      let summarisedData = summariseData(data);

      Highcharts.setOptions({
        colors: ['#f24d4d', '#efbc3b', '#57b230']
      });

      $('#panel-pieChart').highcharts({
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Alerts in last 24 hours'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '{point.percentage:.1f} %',
              style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
              }
            }
          }
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
            name: 'Red Level IPs',
            y: summarisedData.red
          }, {
            name: 'Amber Level IPs',
            y: summarisedData.amber
          }, {
            name: 'Green Level IPs',
            y: summarisedData.green
          }]
        }]
      });
}

function renderTable(tableName, data) {
  $(tableName).dynatable({
    dataset: {
      records: data
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  // packery (docs: http://packery.metafizzy.co/draggable.html)
  // init grid
  let $grid = $('.grid').packery({
    itemSelector: '.grid-item',
    columnWidth: 25
  });

  // make items draggable
  $grid.find('.grid-item').each(function(i, gridItem) {
    var draggie = new Draggabilly(gridItem);
    // bind drag events to Packery
    $grid.packery('bindDraggabillyEvents', draggie);
  });
  // end packery

  // ajax for piechart
  $.ajax({
    url: "https://mockbin.org/bin/de39a8c3-c40c-4075-bb9f-709fa38a0a35/",
    type: "POST",
    crossDomain: true,
    dataType: "json",
    success: function (response) {
      renderCharts(response);
    },
    error: function (xhr, status) {
      alert("error");
    }
  });
  // end ajax

  // ajax for whitelist
  $.ajax({
    url: "https://mockbin.org/bin/71b4d9a4-29dc-4ad0-8750-3a43614e3e3c/",
    type: "POST",
    crossDomain: true,
    dataType: "json",
    success: function (response) {
      renderTable('#whitelist-table', response);
    },
    error: function (xhr, status) {
      alert("error");
    }
  });
  // end ajax

  // ajax for blacklist
  $.ajax({
    url: "https://mockbin.org/bin/d8c37671-f45f-46d5-b2dd-f56043519ddf/",
    type: "POST",
    crossDomain: true,
    dataType: "json",
    success: function (response) {
      renderTable('#blacklist-table', response);
    },
    error: function (xhr, status) {
      alert("error");
    }
  });
  // end ajax

  // highcharts

  // timeline
  Highcharts.setOptions({
    colors: ['#57b230', '#efbc3b', '#f24d4d']
  });

  $('#panel-timeline').highcharts({
    chart: {
      type: 'area'
    },
    title: {
      text: 'Alerts timeline (previous 24 hours)'
    },
    xAxis: {
      allowDecimals: false,
      labels: {
        formatter: function () {
          return this.value; // clean, unformatted number for year
        }
      }
    },
    yAxis: {
      title: {
        text: 'Number of alerts'
      },
      labels: {
        formatter: function () {
          return this.value;
        }
      }
    },
    tooltip: {
      pointFormat: '<b>{point.y:,.0f}</b> {series.name} at {point.x} '
    },
    plotOptions: {
      area: {
        pointStart: 0,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      name: 'Green alerts',
      data: [100, 120, 90, 130, 90, 80, 100, 110, 120, 130, 110, 120, 80, 120, 130, 150, 130, 140, 100, 110, 120, 120, 110, 130, 110],
    }, {
      name: 'Amber alerts',
      data: [10, 50, 30, 20, 40, 30, 40, 20, 10, 10, 30, 40, 30, 40, 50, 20, 10, 0, 10, 20, 30, 50, 40, 30, 40],
    }, {
      name: 'Red alerts',
      data: [1, 5, 10, 2, 15, 10, 1, 4, 3, 7, 9, 2, 10, 9, 1, 4, 6, 9, 9, 8, 1, 3, 6, 7, 3],
    }]
  });
  // end timeline

  // piechart
  // Highcharts.setOptions({
  //   colors: ['#f24d4d', '#efbc3b', '#57b230']
  // });
  //
  // $('#panel-pieChart').highcharts({
  //   chart: {
  //     plotBackgroundColor: null,
  //     plotBorderWidth: null,
  //     plotShadow: false,
  //     type: 'pie'
  //   },
  //   title: {
  //     text: 'Alerts in last 24 hours'
  //   },
  //   tooltip: {
  //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  //   },
  //   plotOptions: {
  //     pie: {
  //       allowPointSelect: true,
  //       cursor: 'pointer',
  //       dataLabels: {
  //         enabled: true,
  //         format: '{point.percentage:.1f} %',
  //         style: {
  //           color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
  //         }
  //       }
  //     }
  //   },
  //   series: [{
  //     name: 'Brands',
  //     colorByPoint: true,
  //     data: [{
  //       name: 'Red Level IPs',
  //       y: summaryDataPercentage.red
  //     }, {
  //       name: 'Amber Level IPs',
  //       y: summaryDataPercentage.amber
  //     }, {
  //       name: 'Green Level IPs',
  //       y: summaryDataPercentage.green
  //     }]
  //   }]
  // });
  // end piechart

  $('#dummy-chart-one').highcharts({
    title: {
      text: 'Monthly Average Temperature',
      x: -20 //center
    },
    subtitle: {
      text: 'Source: WorldClimate.com',
      x: -20
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: 'Temperature (°C)'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      valueSuffix: '°C'
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },
    series: [{
      name: 'Tokyo',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
      name: 'New York',
      data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    }, {
      name: 'Berlin',
      data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    }, {
      name: 'London',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
  });

  $('#dummy-chart-two').highcharts({
    title: {
      text: 'Monthly Average Temperature',
      x: -20 //center
    },
    subtitle: {
      text: 'Source: WorldClimate.com',
      x: -20
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: 'Temperature (°C)'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      valueSuffix: '°C'
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },
    series: [{
      name: 'Tokyo',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
      name: 'New York',
      data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    }, {
      name: 'Berlin',
      data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    }, {
      name: 'London',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
  });
  // end highcharts

  // Dynatable
  let dateObject;
  $('#my-final-table').dynatable({
    // Converts ISO dates for display
    // writers: {
    //   'access_times': (record) => {
    //     return record.access_times.map(dateValue => new Date(Date.parse(dateValue)).toGMTString());
    //   }
    // },
    dataset: {
      records: jsonData
    }
  });


});

// $('#my-ajax-table').dynatable({
//   features: {
//     paginate: false,
//     sort: false,
//     search: false,
//     perPageSelect: false
//   },
//   dataset: {
//     ajax: true,
//     ajaxUrl: '/dynatable-ajax.json',
//     ajaxOnLoad: true,
//     records: []
//   }
// });
