import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) =>{

    const passSaveExpense = (currentExpense) =>{
        props.saveExpense(currentExpense);
    }

    return(
        <div className="new-expense__container">
            <ExpenseForm onSaveExpenseData={passSaveExpense}/>
        </div>
    );
}

export default NewExpense;