import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import './MenuStack.css';
import { Link } from 'react-router-dom';
// import { Link } from './Link';

export default function MenuStack() {
  const Item: any = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <div className='menuStackWrapper'>
      <Stack spacing={2}>
        <Link to='gallery' className='menuItem'>
          <Item>Gallery</Item>
        </Link>
        <Link to='prices' className='menuItem'>
          <Item>Prices</Item>
        </Link>
        <Link to='booking' className='menuItem'>
          <Item>Booking</Item>
        </Link>
        <Link to='contact' className='menuItem'>
          <Item>Contact</Item>
        </Link>
      </Stack>
    </div>
  );
}
