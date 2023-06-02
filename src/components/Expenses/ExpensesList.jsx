/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import PropTypes from 'prop-types';
import Checkbox from '@mui/material/Checkbox';

const ExpenseList = ({ expenses, onToggleSelection, onDeleteSelected, onSelectAll, selectAllChecked }) => {

  const handleSelectAllToggle = (event) => {
    const checked = event.target.checked;
    onSelectAll(checked);
  };

  return (
    <div className='expense-list'>
      <div className='expense-list-header'>   
        <Checkbox checked={selectAllChecked} onChange={handleSelectAllToggle} />         
        <div>Date</div>
        <div>Amount</div>
        <div>Note</div>
      </div>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense} 
          onToggleSelection={() => onToggleSelection(expense.id, expense.selected)}
          onDeleteSelected={() => onDeleteSelected(expense.id)}
        />
      ))}
    </div>
  );
}

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    amount: PropTypes.number,
    note: PropTypes.string
  })).isRequired,
  onToggleSelection: PropTypes.func.isRequired,
  onDeleteSelected: PropTypes.func,
  onSelectAll: PropTypes.func.isRequired,
  selectAllChecked: PropTypes.bool.isRequired,
}

export default ExpenseList;
