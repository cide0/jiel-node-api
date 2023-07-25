const tempChartCanvas = document.getElementById('tempChartCanvas');
const values = [];
const timestamps = [];

fetch("http://localhost:3001/data/elias-temperature")
.then(response => response.json())
.then(data => data.forEach(dataSet => {
        values.push(dataSet.value);
        timestamps.push(dataSet.timestamp);
      }
    )
);

const valuesJack = [];

fetch("http://localhost:3001/data/jack-temperature")
.then(response => response.json())
.then(data => data.forEach(dataSet => {
      valuesJack.push(dataSet.value);
    }
  )
);

const data = {
  labels: timestamps,
    datasets: [{
      label: 'Temperature Elias',
      data: values,
      borderWidth: 1
    }, {
      label: 'Temperature Jack',
      data: valuesJack,
      borderWidth: 1
    }
  ]
};

const config = {
  type: 'bar',
  data,
  options: {
    scales: {
      y: {
        min: 20,
        max: 40,
        ticks: {
            stepSize: 1
        }
      }
    }
  }
};

const tempChart = new Chart(tempChartCanvas, config);

setTimeout(function() { tempChart.update(); },150);