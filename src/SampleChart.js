import { Line } from '@reactchartjs/react-chart.js';

function SampleChart({ timestamps, data, label, color }) {
  return (
    <Line
      data={{
        labels: timestamps.map(t => parseInt(t) * 1000),
        datasets: [{
          label: label,
          data: data,
          borderColor: color,
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

export default SampleChart;
