import { useState, useEffect, Fragment } from 'react'

import TemperatureChart from './TemperatureChart';
import HumidityChart from './HumidityChart';
import LatestSample from './LatestSample';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [samples, setSamples] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/samples/minutes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setSamples(result.samples.reverse());
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Fragment>
        <LatestSample value={samples[0]} />
        <TemperatureChart
          timestamps={samples.map(s => s.timestamp)}
          data={samples.map(s => s.temperature)}
        />
        <HumidityChart
          timestamps={samples.map(s => s.timestamp)}
          data={samples.map(s => s.humidity)}
        />
      </Fragment>
    );
  }
}

export default App;
