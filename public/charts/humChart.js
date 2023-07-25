const humChartCanvas = document.getElementById('humChartCanvas');
const humValues = [];
const humTimestamps = [];

fetch("http://localhost:3001/data/elias-humidity")
.then(response => response.json())
.then(data => data.forEach(dataSet => {
        humValues.push(dataSet.value);
        humTimestamps.push(dataSet.timestamp);
      }
    )
);

const humValuesJack = [];

fetch("http://localhost:3001/data/jack-humidity")
.then(response => response.json())
.then(data => data.forEach(dataSet => {
      humValuesJack.push(dataSet.value);
    }
  )
);

const humChart = new Chart(humChartCanvas, {
  type: 'bar',
  data: {
    labels: humTimestamps,
    datasets: [{
      label: 'Humidity Elias',
      data: humValues,
      borderWidth: 1
    }, {
      label: 'Humidity Jack',
      data: humValuesJack,
      borderWidth: 1
    }
  ]
  },
  options: {
    scales: {
      y: {
        min: 20,
        max: 100,
        ticks: {
            stepSize: 1
        }
      }
    }
  }
});

setTimeout(function() { humChart.update(); },150);