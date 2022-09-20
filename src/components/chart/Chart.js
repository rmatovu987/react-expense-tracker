import './Chart.css';

import ChartBar from './ChartBar';

const Chart = (props) => {
  const values = props.dataPoints.map((data) => data.value);

  const totalMax = Math.max(...values);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
