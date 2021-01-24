import { Line } from '@reactchartjs/react-chart.js';

function SampleChart({ timestamps, data, label, unit, color }) {
  return (
    <Line
      data={{
        labels: timestamps.map(t => parseInt(t) * 1000),
        datasets: [{
          label: label,
          data: data,
          borderColor: color,
          fill: false,
          pointRadius: 2,
        }],
      }}
      options={{
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: unit,
              displayFormats: {
                minute: 'HH:mm',
                hour: 'HH:mm'
              }
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
