import './Expenses.css';
import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItems from './ExpenseItems';
import ExpenseChart from './ExpenseChart'

const Expenses = (props) =>{
    let expensesList;
    const [expenseFilterYear,setExpenseFilterYear] = useState("2021");

    const expenseYearHandler = (selectedExpenseYear) =>{
        setExpenseFilterYear(selectedExpenseYear);
    }

    let ExpenseFilterYear = props.expenseData.filter(expense =>{
        return expense.dateExpense.split("-")[0] === expenseFilterYear;
    });

    if(ExpenseFilterYear.length === 0){
        expensesList = <p className="no-expense">No Expense Found!</p>
    }else{
        expensesList = ExpenseFilterYear.map( (expense) => (
            <ExpenseItems 
            key={expense.id}
            title={expense.titleExpense}
            amount={expense.amountExpense} 
            date={expense.dateExpense}/>
            ));
    }


    return(
        <div className="expenses__container">
            <ExpenseFilter selectedYear={expenseFilterYear} changeExpenseYear={expenseYearHandler}/>
            <ExpenseChart expenses={ExpenseFilterYear}/>
            <div className="expenses__items__container">
                {expensesList}
            </div>
        </div>
    );
}

export default Expenses;