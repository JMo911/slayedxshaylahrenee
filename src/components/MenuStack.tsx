import * as React from 'react';
import Stack from '@mui/material/Stack';
import './MenuStack.css';
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { services } from './PricingPage';
import { Link } from 'react-router-dom';

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
    pageName: 'M • U • A',
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
                  onClick={pageName === 'Prices' ? handleOnClick : () => {}}
                  key={`${pageName}button`}
                >
                  <Typography variant='button'>{pageName}</Typography>
                </Button>
                {iconDown && (
                  <List
                    sx={{
                      bgcolor: 'background.paper',
                      marginTop: '0 !important',
                      marginBottom: '10px',
                    }}
                  >
                    {services.map((service) => {
                      return (
                        <>
                          <ListItem
                            key={service.route}
                            className={'prices-menu-link'}
                          >
                            <Link
                              to={`/slayedxshaylahrenee/prices#${service.route}`}
                              className='menuLink'
                              color='inherit'
                            >
                              <ListItemText secondary={service.name} />
                            </Link>
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
              <Link
                to={'/slayedxshaylahrenee/' + pageName.toLowerCase()}
                color='inherit'
                className='menuLink'
                key={pageName}
              >
                <Button variant='contained' sx={{ width: '100%' }}>
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
