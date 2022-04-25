function createChart(xValues, yValues) {
    main.append(createElement('canvas', {classNames: ['myChart'], attributes: {width: '800', height: '450'}}))
    
    Chart.defaults.global.defaultFontColor = 'white';
    
    new Chart(document.querySelector('.myChart'), {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: true,
          lineTension: 0,
          backgroundColor: "yellow",
          borderColor: "black",
          borderWidth: 5,
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        scales: {
            xAxes: [{gridLines: { color: "black" }}],
            yAxes: [{gridLines: { color: "black" }}],
        }
      }
    });
}