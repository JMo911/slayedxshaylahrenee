import { Box, FormGroup, TextField } from '@mui/material';
import React from 'react';
import './BookingPage.css';
import MultiSelect from './MultiSelect';

export const BookingPage: React.FC = () => {
  return (
    <div className='bookingPageWrapper'>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <FormGroup row>
          <TextField
            required
            id='filled-required'
            label='First Name'
            variant='filled'
          />
          <TextField
            required
            id='filled-required'
            label='Last Name'
            variant='filled'
          />
        </FormGroup>

        <FormGroup row>
          <TextField
            required
            id='filled-required'
            label='Email'
            variant='filled'
          />
          <TextField
            required
            id='filled-required'
            label='Phone'
            variant='filled'
          />
        </FormGroup>
        <MultiSelect />
      </Box>
    </div>
  );
};
