/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ExpensesForm from './ExpensesForm';
import ExpensesList from './ExpensesList';
import '../../style/style.css';

const emptyExpenses = [];

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  useEffect(() => {
    if (expenses.length) {
      localStorage.setItem('spent', JSON.stringify(expenses));
    }
  }, [expenses]);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('spent'));
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }
  }, []);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, { id: Date.now(), ...expense }]);
  }

  const selectAll = (checked) => {
    setSelectAllChecked(checked);
    setExpenses((prevExpenses) => prevExpenses.map((expense) => ({ ...expense, selected: checked })));
  };
  
  const toggleSelection = (id) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.map((expense) => 
        expense.id === id ? { ...expense, selected: !expense.selected } : expense
      );
      return updatedExpenses;   
    });
  };

  const deleteSelected = (id) => {
    setExpenses((prevExpenses) => {
      const afterDeleteExpenses = prevExpenses.filter(expense => !expense.selected);
      localStorage.setItem('spent', JSON.stringify(afterDeleteExpenses));
      return afterDeleteExpenses;
    });
  };

  return (
    <div className='expenses'>
      <ExpensesForm
        onAddExpense={addExpense}
        onDeleteSelected={deleteSelected}
      />

      <ExpensesList
        expenses={expenses}
        onToggleSelection={toggleSelection}
        onSelectAll={selectAll}
        selectAllChecked={selectAllChecked}
      />
      {/* <Stack spacing={2}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack> */}
    </div>
  );
}

export default Expenses;
