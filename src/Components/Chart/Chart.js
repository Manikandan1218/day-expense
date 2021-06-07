import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css'

const Chart = (props) =>{
    const totalMaximum = 10000;

    return(
        <div className="chart-container">
            {props.dataPoint.map((dataPoint) => (
            <ChartBar 
            key={dataPoint.lable}
            value={dataPoint.value}
            lable={dataPoint.lable}
            maxValue={totalMaximum}
            />))}
        </div>
    )
}

export default Chart;