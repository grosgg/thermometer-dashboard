function PeriodSelect ({ period, setPeriod }) {
  const handleChange = (event => {
    setPeriod(event.target.value);
  });

  return (
    <select value={period} onChange={handleChange}>
      <option value="1h">Last 60 minutes</option>
      <option value="1d">Last 24 hours</option>
      <option value="1m">Last 30 days</option>
    </select>
  );
}

export default PeriodSelect;
