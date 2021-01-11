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
            }
          }],
        },
      }}
    />
  )
}

export default HumidityChart;
