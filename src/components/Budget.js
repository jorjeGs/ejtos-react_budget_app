import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        //get total expenses
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);

        //TASK 2
        if (event.target.value > 20000) {
            alert("The budget value cannot exceed 20,000")
        }
        else if ((event.target.value < totalExpenses)) {
            alert("You cannot reduce the budget value lower than the spending")
        }
        else {
            setNewBudget(event.target.value);
            //TASK 1
            dispatch({
                type: "SET_BUDGET",
                payload: event.target.value,
            })
        }

    }
    return (
        <div className='alert alert-secondary'>
            {/* TASK 5 */}
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={event => handleBudgetChange(event)}></input>
        </div>
    );
};
export default Budget;