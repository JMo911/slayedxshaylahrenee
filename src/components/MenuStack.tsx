import * as React from 'react';
import Stack from '@mui/material/Stack';
import './MenuStack.css';
import {
  Button,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { services } from './PricingPage';

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
                          <ListItem alignItems='flex-start' key={service.route}>
                            <Link
                              href={`/prices#${service.route}`}
                              className='menuLink'
                              color='inherit'
                              underline='none'
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
                href={pageName.toLowerCase()}
                color='inherit'
                underline='none'
                className='menuItem'
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
