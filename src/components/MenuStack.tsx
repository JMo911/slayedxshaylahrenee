import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import './MenuStack.css';
import { Link } from 'react-router-dom';
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { extras, services } from './PricingPage';
// import { Link } from './Link';

const menuPages = [
  {
    pageName: 'Gallery',
  },
  {
    pageName: 'Prices',
  },
  {
    pageName: 'Booking',
  },
  {
    pageName: 'Contact',
  },
];

const MenuStack = React.forwardRef((props, ref) => {
  const [iconDown, setIconDown] = React.useState(false);

  const handleOnClick = () => {
    setIconDown(!iconDown);
  };

  return (
    <div>
      <Stack spacing='10px' sx={{ marginTop: '10px' }} ref={ref}>
        {menuPages.map(({ pageName }) => {
          if (pageName === 'Prices') {
            return (
              <>
                <Button
                  variant='contained'
                  endIcon={
                    pageName === 'Prices' ? (
                      <ArrowRightIcon
                        className={iconDown ? 'iconDown' : 'iconRight'}
                      />
                    ) : null
                  }
                  sx={{ minWidth: '120px' }}
                  onClick={pageName === 'Prices' ? handleOnClick : () => {}}
                >
                  <Typography variant='button'>{pageName}</Typography>
                </Button>
                {iconDown && (
                  <List
                    sx={{
                      width: '100%',
                      maxWidth: 360,
                      bgcolor: 'background.paper',
                      marginTop: '0 !important',
                      marginBottom: '10px',
                    }}
                  >
                    {services.map((service) => {
                      return (
                        <>
                          <ListItem alignItems='flex-start'>
                            <ListItemText secondary={service.name} />
                          </ListItem>
                          {service.name !== 'Ultimate Glam' ? (
                            <Divider variant='middle' component='li' />
                          ) : null}
                        </>
                      );
                    })}
                  </List>
                )}
              </>
            );
          } else {
            return (
              <Link to={pageName.toLowerCase()} className='menuItem'>
                <Button variant='contained' sx={{ minWidth: '120px' }}>
                  <Typography variant='button'>{pageName}</Typography>
                </Button>
              </Link>
            );
          }
        })}
      </Stack>
    </div>
  );
});

export default MenuStack;
