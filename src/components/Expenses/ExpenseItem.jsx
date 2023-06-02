/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@mui/material/Checkbox';
import '../../style/style.css';

const ExpenseItem = ({ expense, onToggleSelection }) => {

  const handleToggleSelection = () => {
    onToggleSelection(expense.id);
  };

  return (
    <div
      className={`expense-item ${expense.selected ? 'selected' : ''}`}
      onClick={handleToggleSelection}
    >
      <div className='expense-item-details'>    
        <Checkbox />  
        <div>{expense.date}</div>
        <div>${expense.amount}</div>
        <div>{expense.note}</div>
      </div>
    </div>
  );
}

ExpenseItem.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number,
    amount: PropTypes.number,
    note: PropTypes.string,
    date: PropTypes.string,
    selected: PropTypes.bool,
  }).isRequired,
  onToggleSelection: PropTypes.func.isRequired,
}

export default ExpenseItem;
