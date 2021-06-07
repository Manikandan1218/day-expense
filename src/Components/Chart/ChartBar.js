import React from 'react';
import './ChartBar.css';

const ChartBar = (props) =>{
    let barHeight = "0%";

    if(props.maxValue > 0){
        console.log("mmmmm",props)
        barHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    }
    return(
        <div style={{width:"10%"}}>
            <div className="chart_percentage">
				<div className="chart-graph" style={{height:barHeight}}></div>
			</div>
            <div className="chart-lable">{props.lable}</div>
        </div>
    )
}

export default ChartBar;