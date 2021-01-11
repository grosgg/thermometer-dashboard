import { Line } from '@reactchartjs/react-chart.js';

function TemperatureChart({ timestamps, data }) {
  return (
    <Line
      data={{
        labels: timestamps.map(t => parseInt(t) * 1000),
        datasets: [{
          label: 'Temperature',
          data: data,
          borderColor: 'red',
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
              suggestedMin: 15,
              suggestedMax: 20,
            },
          }],
        },
      }}
    />
  )
}

export default TemperatureChart;
