import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) =>{

    const [userInputs,setUserInputs] = useState({
        id:'',
        titleExpense:'',
        amountExpense:'',
        dateExpense:'',

    });

    const enterTitleHandler = (event) =>{
        setUserInputs((previousState) =>{
            return {...previousState,titleExpense: event.target.value}
        })
    }

    const enterAmountHandler = (event) =>{
        setUserInputs((previousState) =>{
            return {...previousState,amountExpense: event.target.value}
        })
    }

    const enterDateHandler = (event) =>{
        setUserInputs((previousState) =>{
            return {...previousState,dateExpense: event.target.value}
        })
    }

    const passExpenseData = (event) =>{
        event.preventDefault();
        let currentExpenseData = {...userInputs};
        setUserInputs({
            id:'',
            titleExpense:'',
            amountExpense:'',
            dateExpense:'',
        });
        currentExpenseData.id = Math.random();
        console.log(currentExpenseData);
        props.onSaveExpenseData(currentExpenseData);
    }

    return(
        <form onSubmit={passExpenseData}>
            <div className="expense-form__con">
                <div className="expense-row">
                    <div className="lable-text">
                        <label>Title</label>
                    </div>
                    <input type="text" value={userInputs.titleExpense} 
                    onChange={enterTitleHandler}/>
                </div>
                <div className="expense-row">
                    <div className="lable-text">
                        <label>Amount</label>
                    </div>
                    <input type="number"  value={userInputs.amountExpense} 
                     onChange={enterAmountHandler}/>
                </div>
            </div>
            <div className="expense-form__con">
                <div className="expense-row">
                    <div className="lable-text">
                        <label>Date</label>
                    </div>
                    <input type="Date" min="2018-01-01" max="2022-12-31" 
                    value={userInputs.dateExpense} 
                    onChange={enterDateHandler}/>
                </div>
            </div>
            <div className="expense-form__con mt150">
            <div className="expense-row-last">
                <div id="third" className="buttonBox">
                    <input type="submit" className="expense-btn" value="Add Expense" />
                    <div className="border"></div>
                    <div className="border"></div>
                    <div className="border"></div>
                    <div className="border"></div>
                </div>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;