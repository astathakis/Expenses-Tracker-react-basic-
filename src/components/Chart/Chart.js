import ChartBar from './ChartBar'
import './Chart.css'
const Chart = (props) => {
  //transforming an object arr to a number arr
  //to get the max value for a given data point
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value)
  const totalMax = Math.max(...dataPointValues)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.label}
          />
        )
      })}
    </div>
  )
}
export default Chart
