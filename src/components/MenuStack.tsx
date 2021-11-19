import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import './MenuStack.css';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
// import { Link } from './Link';

const MenuStack = React.forwardRef((props, ref) => {
  const Item: any = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className='menuStackWrapper'>
      <Stack spacing='10px' sx={{ marginTop: '10px' }} ref={ref}>
        <Link to='gallery' className='menuItem'>
          <Item>
            <Typography variant='button'>Gallery</Typography>
          </Item>
        </Link>
        <Link to='prices' className='menuItem'>
          <Item>
            <Typography variant='button'>Prices</Typography>
          </Item>
        </Link>
        <Link to='booking' className='menuItem'>
          <Item>
            <Typography variant='button'>Booking</Typography>
          </Item>
        </Link>
        <Link to='contact' className='menuItem'>
          <Item>
            <Typography variant='button'>Contact</Typography>
          </Item>
        </Link>
      </Stack>
    </div>
  );
});

export default MenuStack;
