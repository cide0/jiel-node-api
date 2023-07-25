const eliasChartCanvas = document.getElementById('eliasChartCanvas');
const eliasTemperature = [];
const eliasHumidity = [];
const eliasTimestamps = [];

fetch("http://localhost:3001/data/elias")
.then(response => response.json())
.then(data => data.forEach(dataSet => {
        if(dataSet.type == 'temperature'){
          eliasTemperature.push(dataSet.value);
          eliasTimestamps.push(dataSet.timestamp);
        } else if (dataSet.type == 'humidity'){
          eliasHumidity.push(dataSet.value);
        }
      }
    )
);

const eliasChart = new Chart(eliasChartCanvas, {
  data: {
    labels: eliasTimestamps,
    datasets: [{
      type: 'line',  
      label: 'Humidity',
      data: eliasHumidity,
      borderWidth: 1
    }, {
        type: 'bar',
        label: 'Temperature',
        data: eliasTemperature,
        borderWidth: 1
    }
  ]
  },
  options: {
    scales: {
      y: {
        ticks: {
            stepSize: 1
        }
      }
    }
  }
});

setTimeout(function() { eliasChart.update(); },150);