const humRadarChartCanvas = document.getElementById('humRadarChartCanvas');

const humValuesRadar = [];
const humTimestampsRadar = [];
const limitHum = 30;

fetch("http://localhost:3001/data/elias-humidity/" + limitHum + '/DESC')
.then(response => response.json())
.then(data => data.forEach(dataSet => {
        humValuesRadar.push(dataSet.value);
        humTimestampsRadar.push(dataSet.timestamp);
      }
    )
);

const humValuesJackRadar = [];

fetch("http://localhost:3001/data/jack-humidity/" + limitHum + '/DESC')
.then(response => response.json())
.then(data => data.forEach(dataSet => {
      humValuesJackRadar.push(dataSet.value);
    }
  )
);

const humRadarChart = new Chart(humRadarChartCanvas, {
  type: 'radar',
  data: {
    labels: humTimestampsRadar,
    datasets: [{
      label: 'Humidity Elias',
      data: humValuesRadar,
      borderWidth: 1
    }, {
      label: 'Humidity Jack',
      data: humValuesJackRadar,
      borderWidth: 1
    }
  ]
  }
});

setTimeout(function() { humRadarChart.update(); },150);