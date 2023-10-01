import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch, remaining, currency } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const handleBudgetAlert = () => {
        // Display an alert popup message if cost exceeds remaining funds
        alert(`The value cannot exceed remaining funds ${currency}${remaining}`);
        setCost('');
    };

    const submitEvent = () => {
        if (cost === '') {
            // Cost is empty, do nothing
            return;
        }

        if (parseInt(cost) > remaining) {
            // Cost exceeds remaining funds, show alert
            handleBudgetAlert();
            return;
        }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };

        if (action === 'Reduce') {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }

        // Clear the input fields after submission
        setName('');
        setCost('');
    };

    return (
        <div>
            <div className='row'>
                <div className='input-group mb-3' style={{ marginLeft: '2rem' }}>
                    <div className='input-group-prepend'>
                        <label className='input-group-text' htmlFor='inputGroupSelect01'>
                            Department
                        </label>
                    </div>
                    <select className='custom-select' id='inputGroupSelect01' onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value='Marketing' name='marketing'>
                            Marketing
                        </option>
                        <option value='Sales' name='sales'>
                            Sales
                        </option>
                        <option value='Finance' name='finance'>
                            Finance
                        </option>
                        <option value='HR' name='hr'>
                            HR
                        </option>
                        <option value='IT' name='it'>
                            IT
                        </option>
                        <option value='Admin' name='admin'>
                            Admin
                        </option>
                    </select>

                    <div className='input-group-prepend' style={{ marginLeft: '2rem' }}>
                        <label className='input-group-text' htmlFor='inputGroupSelect02'>
                            Allocation
                        </label>
                    </div>
                    <select className='custom-select' id='inputGroupSelect02' onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value='Add' name='Add'>
                            Add
                        </option>
                        <option value='Reduce' name='Reduce'>
                            Reduce
                        </option>
                    </select>

                    <div className='mt-3'>
                        <label>Allocation:</label>
                        <div className='input-group'>
                            <div className='input-group-prepend'>
                                <span className='input-group-text'>{currency}</span>
                            </div>
                            <input
                                type='number'
                                className='form-control'
                                value={cost}
                                onChange={(event) => setCost(event.target.value)}
                            />
                        </div>
                    </div>

                    <button className='btn btn-primary mt-3' onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;
