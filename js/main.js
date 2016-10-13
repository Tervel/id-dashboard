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
        147566126,
        147565742,
        147569853,
        147562103,
        147566980,
        147568557,
        147560303,
        147563769,
        147562364
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
        147566485,
        147565533,
        147562854,
        147566697,
        147564949,
        147563960,
        147560111,
        147568153,
        147562344,
        147566346
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
        147563064,
        147566090,
        147562242,
        147564863,
        147564575,
        147563899
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
        147564603,
        147564044
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
        147566445,
        147561270,
        147569459
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
        147563742,
        147562447,
        147569965,
        147566117
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
        147568698,
        147561989,
        147561055,
        147569589,
        147568779,
        147562341
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
        147568544,
        147569490,
        147565242,
        147569792,
        147569457,
        147562177,
        147563588,
        147569977
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
        147563687,
        147564303,
        147569354,
        147566950,
        147562449
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
        147564565,
        147562554
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

let summaryData =
    {
      "green": jsonData.filter(_ => _.score <= amberAlert).length,
      "amber": jsonData.filter(_ => (_.score >= amberAlert && _.score <= redAlert)).length,
      "red": jsonData.filter(_ => _.score >= redAlert).length
    };

let summaryDataPercentage =
  {
    "green": summaryData.green / jsonData.length * 100.0,
    "amber": summaryData.amber / jsonData.length * 100.0,
    "red": summaryData.red / jsonData.length * 100.0,
  };

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

// let summaryData = jsonData.filter(_ => _.score <= amberAlert).length;

console.log(summaryData);
console.log(summaryDataPercentage);

document.addEventListener("DOMContentLoaded", function() {
  // packery (docs: http://packery.metafizzy.co/draggable.html)
  // init grid
  let $grid = $('.grid').packery({
    itemSelector: '.grid-item',
    columnWidth: 100
  });

  // make items draggable
  $grid.find('.grid-item').each(function(i, gridItem) {
    var draggie = new Draggabilly(gridItem);
    // bind drag events to Packery
    $grid.packery('bindDraggabillyEvents', draggie);
  });
  // end packery

  // ajax
  $.ajax({
    url: "https://mockbin.org/bin/de39a8c3-c40c-4075-bb9f-709fa38a0a35/",
    type: "POST",
    crossDomain: true,
    dataType: "json",
    success: function (response) {
      let summarisedData = summariseData(response);

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
  $('#my-final-table').dynatable({
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
