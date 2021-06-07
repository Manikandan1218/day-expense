import './ExpenseFilter.css';

const ExpenseFilter = (props) =>{

    const dropDownChangeHandler = (event) =>{
        props.changeExpenseYear(event.target.value);
    }
    return(
        <div className="expense__filter">
            <div className="filter__content">Filter by year:</div>
            <div style={{width:"50%"}}>
            <select name="year" className="year__filter" 
            value={props.selectedYear} 
            onChange={dropDownChangeHandler}>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;