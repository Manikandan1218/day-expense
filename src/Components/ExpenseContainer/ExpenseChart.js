import React from 'react';
import Chart from '../Chart/Chart';


const ExpenseChart = (props) =>{
    const chartDataPoint = [
        {lable:"JAN",value:0},
        {lable:"FEB",value:0},
        {lable:"MAR",value:0},
        {lable:"APR",value:0},
        {lable:"MAY",value:0},
        {lable:"JUN",value:0},
        {lable:"JUL",value:0},
        {lable:"AUG",value:0},
        {lable:"SEP",value:0},
        {lable:"OCT",value:0},
        {lable:"NOV",value:0},
        {lable:"DEC",value:0}
    ];

    for(const expense of props.expenses){
        const expenseMonth = Math.round(expense.dateExpense.split("-")[1]);
        chartDataPoint[expenseMonth-1].value += parseInt(expense.amountExpense);
        console.log("expe chart",props.expenses,Math.round(expense.dateExpense.split("-")[1]))

    }

    return(
        <Chart dataPoint={chartDataPoint}/>
    )
}

export default ExpenseChart;