/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Stack, Button, Box, TextField, InputAdornment } from '@mui/material';

export default function AddExpense({ onAddExpense }) {
  const [amount, setAmount] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [expense, setExpense] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddExpense({ amount, category }); // No need to add id here
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
      </Stack>
    </Box>
  );
}

AddExpense.propTypes = {
  onAddExpense: PropTypes.func.isRequired,
};