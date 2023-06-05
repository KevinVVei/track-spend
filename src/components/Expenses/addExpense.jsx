/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Stack, Button, Box, TextField, InputAdornment } from '@mui/material';

export default function AddExpense({ onAddExpense, onDeleteExpense }) {
  const [amount, setAmount] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [expense, setExpense] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // prevent adding empty expense
    if (!amount || !category) return;
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      IANA_timezone: 'GMT-4',
    });
    onAddExpense({ amount: Number(amount), category, date: currentDate }); // No need to add id here
    setAmount('');
    setCategory('');
  };  
  
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      display="flex"
      justifyContent="center"
    >
      <Stack spacing={2}  >
        <TextField
          id="amount"
          label="Amount"
          variant="outlined" 
          value={amount}
          onChange={(e) => setAmount(e.target.value || '')}
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />       
        <TextField
          id="category"
          label="Category"
          variant="outlined" 
          value={category}
          onChange={(e) => setCategory(e.target.value || '')}          
        />
        <Button variant="contained" type="submit">
          Add
        </Button>
        <Button variant="contained" onClick={onDeleteExpense}>
          Dis/Enable
        </Button>
      </Stack>
    </Box>
  );
}

AddExpense.propTypes = {
  onAddExpense: PropTypes.func.isRequired,
  onDeleteExpense: PropTypes.func.isRequired,
};