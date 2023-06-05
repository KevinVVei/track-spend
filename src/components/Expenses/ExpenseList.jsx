/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'amount', headerName: 'Amount', width: 130 },
  { field: 'category', headerName: 'Category', width: 130 },
  { field: 'date', headerName: 'Date', width: 130},
];

export default function ExpenseList({ expense, onSelectionChange }) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={expense}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowSelectionModelChange={(newSelection) => {
          onSelectionChange(newSelection);
        }}
        getRowClassName={(params) =>
          params.row.disabled ? "disabled" : ""
        }
        sx={{
          '& .disabled': {
            backgroundColor: '#f5f5f5',
            color: '#999',
          },
        }}
      />
    </div>
  );
}

ExpenseList.propTypes = {
  expense: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
  onSelectionChange: PropTypes.func.isRequired,
};