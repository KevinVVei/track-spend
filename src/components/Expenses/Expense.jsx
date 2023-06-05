/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import ExpenseList from './ExpenseList';
import AddExpense from './addExpense';

const Expense = () => {
  const [expense, setExpense] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const [selectedRows, setSelectedRows] = React.useState([]);

  // load data from localStorage when the component mounts
  useEffect(() => {
    const initialExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpense(initialExpenses.map(item => ({ ...item, amount: Number(item.amount) })));
    setCounter(Number(localStorage.getItem('counter')) || 0);
  }, []);

  const handleAddExpense = (newExpense) => {
    setCounter((prevCounter) => {
      const newCounter = prevCounter + 1;
      localStorage.setItem('counter', newCounter.toString());
      setExpense((prevExpense) => {
        const newExpenses = [...prevExpense, { id: newCounter.toString(), ...newExpense }];
        localStorage.setItem('expenses', JSON.stringify(newExpenses));
        return newExpenses;
      });
      return newCounter;
    });
  };

  const handleDeleteExpense = () => {
    setExpense((prevExpense) => {
      const newExpenses = prevExpense.map((item) =>
        // check if the item is disabled or not
        selectedRows.includes(item.id) ? { ...item, disabled: !item.disabled } : item
      );
      localStorage.setItem('expenses', JSON.stringify(newExpenses));
      //setSelectedRows([]);  Clear selection after deletion
      return newExpenses;
    });
  };

  return(
    <Grid container spacing={2}>
      <Grid item xs={6} sm={6} md={8}>
        <h2>Expense List</h2>
        <ExpenseList expense={expense} onSelectionChange={setSelectedRows} />
      </Grid>
      <Grid item xs={6} sm={6} md={4}>
        <h2>Add Expense</h2>
        <AddExpense onAddExpense={handleAddExpense} onDeleteExpense={handleDeleteExpense} />
      </Grid>
    </Grid>
  );
}

export default Expense;