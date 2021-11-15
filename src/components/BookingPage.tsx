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
            // defaultValue='Hello World'
            variant='filled'
          />
          <TextField
            required
            id='filled-required'
            label='Last Name'
            // defaultValue='Hello World'
            variant='filled'
          />
        </FormGroup>
        <FormGroup>
          <MultiSelect />
        </FormGroup>
        {/* <TextField
            disabled
            id='filled-disabled'
            label='Disabled'
            defaultValue='Hello World'
            variant='filled'
          />
          <TextField
            id='filled-password-input'
            label='Password'
            type='password'
            autoComplete='current-password'
            variant='filled'
          />
          <TextField
            id='filled-read-only-input'
            label='Read Only'
            defaultValue='Hello World'
            InputProps={{
              readOnly: true,
            }}
            variant='filled'
          />
          <TextField
            id='filled-number'
            label='Number'
            type='number'
            InputLabelProps={{
              shrink: true,
            }}
            variant='filled'
          />
          <TextField
            id='filled-search'
            label='Search field'
            type='search'
            variant='filled'
          />
          <TextField
            id='filled-helperText'
            label='Helper text'
            defaultValue='Default Value'
            helperText='Some important text'
            variant='filled'
          /> */}
      </Box>
    </div>
  );
};
