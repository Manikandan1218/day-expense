import './App.css';
import React, { useState } from 'react';
import NewExpense from './Components/NewExpense/NewExpense';
import Expenses from './Components/ExpenseContainer/Expenses';
import ExpenseToolbar from './Components/ExpenseToolbar';
import InvalidInput from './Components/InvalidInput';

const App = () => {

  let expenseArray = [];

  const [expenseList,setExpenseList] = useState(expenseArray);
  const [isValid,setIsValid] = useState(true);

  const appendExpenseData = (saveExpenseData) =>{
    if(saveExpenseData.titleExpense != "" && saveExpenseData.amountExpense != "" 
           && saveExpenseData.dateExpense != ""){
      setExpenseList([saveExpenseData,...expenseList]);
    }else{
      setIsValid(false);
    }
  }

  const closeErrorPopup = () =>{
    setIsValid(true);
  }

  return (
    <div className="expense-container-header">
      {!isValid && <InvalidInput popupHandler={closeErrorPopup}/>}
        <div className="expense-toolbar">
            <ExpenseToolbar />
        </div>
        <div className="expense-container">
            <NewExpense saveExpense={appendExpenseData}/>
            <Expenses expenseData={expenseList}/>
       </div>
    </div>
  );
}

export default App;
