import React , { useState } from 'react';
import './ExpenseToolbar.css';
import Img from '../Images/logo-exp.png';

const ExpenseToolbar = () => {


    return (
        <div className="toolbar-content">
            <div>
                <img src={Img} className="expense-logo"/>
            </div>
            <div style={{padding: '18px 0px 0px 10px'}}>
            Day Expenses :)
            </div>
        </div>
    );
}

export default ExpenseToolbar;