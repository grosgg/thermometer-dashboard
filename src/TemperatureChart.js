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
          pointRadius: 1,
        }],
      }}
      options={{
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              stepSize: 5,
            },
          }],
          yAxes: [{
            type: 'linear',
            display: true,
            position: 'left',
            ticks: {
              stepSize: 1,
            },
          }],
        },
      }}
    />
  )
}

export default TemperatureChart;
