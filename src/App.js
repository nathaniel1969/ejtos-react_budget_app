import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider, AppContext } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';

import './App.css';

const App = () => {
    const { dispatch } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState('GBP'); // Default currency is GBP

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;

        setSelectedCurrency(newCurrency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    };

    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm d-flex align-items-center h-100'>
                        <Budget />
                    </div>
                    <div className='col-sm d-flex align-items-center h-100'>
                        <RemainingBudget />
                    </div>
                    <div className='col-sm d-flex align-items-center h-100'>
                        <ExpenseTotal />
                    </div>
                    {/* Dropdown for selecting currency */}
                    <div className='col-sm d-flex align-items-center h-100 currency-selector'>
                        <label className='currency-label'>Currency:</label>
                        <select
                            className='currency-selector-select'
                            value={selectedCurrency} // Set the value to match the selectedCurrency state
                            onChange={handleCurrencyChange}
                        >
                            <option value='$'>$ Dollar</option>
                            <option value='£'>£ Pound</option>
                            <option value='€'>€ Euro</option>
                            <option value='₹'>₹ Ruppee</option>
                        </select>
                    </div>

                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
