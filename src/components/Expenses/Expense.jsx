/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid } from '@mui/material';
import ExpenseList from './ExpenseList';
import AddExpense from './addExpense';

const Expense = () => {
  const [expense, setExpense] = React.useState([]);
  const [counter, setCounter] = React.useState(1);

  const handleAddExpense = (newExpense) => {
    setCounter(counter => counter + 1);
    setExpense((prevExpense) => [...prevExpense, { id: counter.toString(), ...newExpense}]);
  };

  // expenselist to the left and addexpense to the right
  return(
    <Grid container spacing={2}>
      <Grid item xs={6} sm={6}>
        <h2>Expense List</h2>
        <ExpenseList expense={expense} />
      </Grid>
      <Grid item xs={6} sm={6}>
        <h2>Add Expense</h2>
        <AddExpense onAddExpense={handleAddExpense} />
      </Grid>
    </Grid>
  );
}

export default Expense;