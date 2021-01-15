function PeriodSelect ({ period, setPeriod }) {
  const handleChange = (event => {
    setPeriod(event.target.value);
  });

  return (
    <select value={period} onChange={handleChange}>
      <option value="1h">Last hour</option>
      <option value="1d">Last 24 hours</option>
    </select>
  );
}

export default PeriodSelect;
