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
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    {/* Dropdown for selecting currency */}
                    <div className='col-sm'>
                        <label>Currency:</label>
                        <select
                            className='form-control'
                            value={selectedCurrency}
                            onChange={handleCurrencyChange}
                        >
                            <option value='USD'>$ Dollar</option>
                            <option value='GBP'>£ Pound</option>
                            <option value='EUR'>€ Euro</option>
                            <option value='INR'>₹ Ruppee</option>
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
