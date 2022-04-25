function createChart(xValues, yValues) {
    Chart.defaults.global.defaultFontColor = 'white';
    
    var xValues = [50,60,70,80,90,100,110,120,130,140,150];
    var yValues = [1,8,8,9,9,9,10,11,14,14,15];
    
    new Chart("myChart", {
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