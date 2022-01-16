import { Alert, Box, Button, FormGroup, TextField } from '@mui/material';
import React from 'react';
import './BookingPage.css';
import MultiSelect from './MultiSelect';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Calendar from './Calendar';

export const BookingPage: React.FC = () => {
  return (
    <div className='bookingPageWrapper'>
      <Alert severity='warning'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris{' '}
      </Alert>
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
      <Calendar />
      <Alert severity='info'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris{' '}
      </Alert>
      <Button
        variant='contained'
        fullWidth
        startIcon={<AttachMoneyIcon />}
        sx={{
          margin: '10px 0 10px 0',
          // backgroundColor: 'var(--light-lilac)',
          // ':hover': {
          //   bgcolor: 'var(--lilac)', // theme.palette.primary.main
          //   color: 'white',
          // },
        }}
        // sx={{
        // ':hover': {
        //   bgcolor: 'primary.main', // theme.palette.primary.main
        //   color: 'white',
        // },
        // }}
      >
        Pay Now
      </Button>
    </div>
  );
};
