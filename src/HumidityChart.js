import { Line } from '@reactchartjs/react-chart.js';

function HumidityChart({ timestamps, data }) {
  return (
    <Line
      data={{
        labels: timestamps.map(t => parseInt(t) * 1000),
        datasets: [{
          label: 'Humidity',
          data: data,
          borderColor: 'blue',
          fill: false,
        }],
      }}
      options={{
        scales: {
          xAxes: [{
            type: 'time',
          }],
          yAxes: [{
            type: 'linear',
            display: true,
            position: 'left',
            ticks: {
              suggestedMin: 35,
              suggestedMax: 50,
            },
          }],
        },
      }}
    />
  )
}

export default HumidityChart;
