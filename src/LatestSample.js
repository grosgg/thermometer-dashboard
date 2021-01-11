function LatestSample ({ value = {temperature: 0, humidity: 0} }) {
  return (
    <div className="latest">
      <div>{value.temperature}ºC</div>
      <div>{value.humidity}%</div>
    </div>
  );
}

export default LatestSample;
