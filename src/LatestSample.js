function LatestSample ({ value = {timestamp: 0, temperature: 0, humidity: 0} }) {
  const date = new Date(value.timestamp*1000);
  return (
    <div id="latest">
      <div id="values">
        <div>{value.temperature}ºC</div>
        <div>{value.humidity}%</div>
      </div>
      <div id="timestamp">Measured at {date.toLocaleString()}</div>
    </div>
  );
}

export default LatestSample;
