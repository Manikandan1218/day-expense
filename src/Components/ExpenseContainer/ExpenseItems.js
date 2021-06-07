import './ExpenseItems.css';


const ExpenseItems = (props) =>{
    const calenderMonth=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

    return(
        <div className="expense-item">
            <div style={{width:"25%"}}>
                <div className="calender">
                    <div className="calender-icon">
                    <i className="fa fa-calendar"></i>
                    </div>
                    <div className="calender-format">
                        <div>{props.date.split("-")[2]}</div>
                        <div style={{color:"black"}}>{calenderMonth[props.date.split("-")[1].split("")[1]]}</div>
                        <div>{props.date.split("-")[0]}</div>
                    </div>
                </div>
            </div>
            <div className="expense-title">
                {props.title}
            </div>
            <div style={{width:"25%"}}>
                <div className="expense-amount">
                    ${props.amount}
                </div>
            </div>
        </div>
    );
}

export default ExpenseItems;