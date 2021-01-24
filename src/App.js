import { useState, useEffect } from 'react'

import './App.css';

import SampleChart from './SampleChart';
import LatestSample from './LatestSample';
import PeriodSelect from './PeriodSelect';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [samples, setSamples] = useState([]);
  const [period, setPeriod] = useState('1h');

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    const from = (period) => {
      switch(period) {
        case '1d': return parseInt(Date.now() / 1000 - 3600 * 24).toString(10);
        case '1m': return parseInt(Date.now() / 1000 - 3600 * 24 * 30).toString(10);
        case '1y': return parseInt(Date.now() / 1000 - 3600 * 24 * 365).toString(10);
        default: return parseInt(Date.now() / 1000 - 3600).toString(10);
      }
    };
    fetch(`${process.env.REACT_APP_API_URL}/samples/${period}?from=${from(period)}`, {
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
  }, [period]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="app">
        <PeriodSelect period={period} setPeriod={setPeriod} />
        <LatestSample value={samples[samples.length-1]} />
        <SampleChart
          timestamps={samples.map(s => s.timestamp)}
          data={samples.map(s => s.temperature)}
          label="Temperature"
          color="red"
          unit={period === '1m' ? 'day' : null}
        />
        <SampleChart
          timestamps={samples.map(s => s.timestamp)}
          data={samples.map(s => s.humidity)}
          label="Humidity"
          color="blue"
          unit={period === '1m' ? 'day' : null}
        />
      </div>
    );
  }
}

export default App;
