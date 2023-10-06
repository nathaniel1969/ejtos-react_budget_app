import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value);
        if (updatedBudget <= 20000) {
            // Update the newBudget
            setNewBudget(updatedBudget);
        } else {
            // Display an alert popup message
            alert('Budget cannot exceed £20,000');
        }
    }

    useEffect(() => {
        // Dispatch an action to update the budget in the context
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }, [newBudget, dispatch]);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} 
                <input
                    type="number"
                    step="10"
                    value={newBudget}
                    onChange={handleBudgetChange}
                ></input>
            </span>
        </div>
    );
};

export default Budget;
