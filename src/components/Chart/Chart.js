import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const datePointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...datePointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            maxValue={totalMaximum}
            value={dataPoint.value}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
