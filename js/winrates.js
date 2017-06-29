var data = {
  labels: ['Outros heróis', 'Mercy', 'Genji', 'McCree', 'Lúcio', 'Soldado: 76', 'Widowmaker', 'Pharah', 'Roadhog', 'Hanzo', 'Reinhardt', 'D.Va', 'Ana', 'Tracer', 'Junkrat'],
  series: [24.96, 7.29, 6.97, 6.04, 5.94, 5.48, 5.24, 5.09, 5.07, 4.85, 4.84, 4.84, 4.67, 4.38, 4.33]
};

var options = {
  labelInterpolationFnc: function(value) {
    return value[0]
  }
};

var responsiveOptions = [
  ['screen and (min-width: 640px)', {
    chartPadding: 30,
    labelOffset: 100,
    labelDirection: 'explode',
    labelInterpolationFnc: function(value) {
      return value;
    }
  }],
  ['screen and (min-width: 1024px)', {
    labelOffset: 80,
    chartPadding: 20
  }]
];

new Chartist.Pie('.ct-chart', data, options, responsiveOptions);