const tempRadarChartCanvas = document.getElementById('tempRadarChartCanvas');

const valuesRadar = [];
const timestampsRadar = [];
const limitTemp = 30;

fetch("http://localhost:3001/data/elias-temperature/" + limitTemp + '/DESC')
.then(response => response.json())
.then(data => data.forEach(dataSet => {
        valuesRadar.push(dataSet.value);
        timestampsRadar.push(dataSet.timestamp);
      }
    )
);

const valuesJackRadar = [];

fetch("http://localhost:3001/data/jack-temperature/" + limitTemp + '/DESC')
.then(response => response.json())
.then(data => data.forEach(dataSet => {
      valuesJackRadar.push(dataSet.value);
    }
  )
);

const tempRadarChart = new Chart(tempRadarChartCanvas, {
  type: 'radar',
  data: {
    labels: timestampsRadar,
    datasets: [{
      label: 'Temperature Elias',
      data: valuesRadar,
      borderWidth: 1
    }, {
      label: 'Temperature Jack',
      data: valuesJackRadar,
      borderWidth: 1
    }
  ]
  }
});

setTimeout(function() { tempRadarChart.update(); },150);