/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ExpenseForm = ({ onAddExpense, onDeleteSelected }) => {
  const [showForm, setShowForm] = useState(false);
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [date, setDate] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseAmount = parseFloat(amount);
    const formatedDate = new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      IANA_timezone: 'GMT-4',
    });
    const expenses = {
      amount: expenseAmount,
      note,
      date: formatedDate,
      selected: false,
    }
    onAddExpense(expenses);
    setDate(new Date());
    setAmount('');
    setNote('');
    setShowForm(false);
  }

  return (
    <div className='expense-form'>
      <button onClick={() => setShowForm(true)}>Add Expense</button>
      <button onClick={() => onDeleteSelected() }>Delete</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <Calendar value={date} onChange={setDate} />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            required             
            />
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Note"
            required             
            />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
        </form>
      )}
    </div>
  );
}

ExpenseForm.propTypes = {
  // onDelete: PropTypes.func.isRequired,
  onAddExpense: PropTypes.func.isRequired,
  onDeleteSelected: PropTypes.func.isRequired,
}

export default ExpenseForm;
