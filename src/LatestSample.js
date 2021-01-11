function LatestSample ({ value = {temperature: 0, humidity: 0} }) {
  return (
    <h1>{value.temperature}ºC - {value.humidity}%</h1> 
  );
}

export default LatestSample;
