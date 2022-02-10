import * as React from 'react';
import Stack from '@mui/material/Stack';
import './MenuStack.css';
import {
  Button,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { services } from '../data/services';
import { useNavigate } from 'react-router-dom';

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
    displayName: 'M • U • A',
    pageName: 'contact',
  },
];

type MenuStackProps = { setShowMenu: React.Dispatch<boolean> };

const MenuStack = React.forwardRef<React.ReactNode, MenuStackProps>(
  (props, ref) => {
    const [iconDown, setIconDown] = React.useState(false);
    const navigate = useNavigate();
    const { setShowMenu } = props;

    const handleLinkClick = (pageName: string, serviceRoute?: string) => {
      if (serviceRoute) {
        navigate(
          `/slayedxshaylahrenee/${pageName.toLocaleLowerCase()}#${serviceRoute}`,
          {
            replace: true,
          }
        );
      } else {
        navigate(`/slayedxshaylahrenee/${pageName.toLocaleLowerCase()}`, {
          replace: true,
        });
      }
      setShowMenu(false);
    };

    const handleOnClick = () => {
      setIconDown(!iconDown);
    };

    return (
      <div>
        <Stack spacing='10px' sx={{ marginTop: '10px' }} ref={ref}>
          {menuPages.map(({ pageName, displayName }, index) => {
            if (pageName === 'Prices') {
              return (
                <div key={`${pageName}MenuButton${index}`}>
                  <Button
                    fullWidth
                    variant='contained'
                    endIcon={
                      pageName === 'Prices' ? (
                        <ArrowRightIcon
                          className={iconDown ? 'iconDown' : 'iconRight'}
                        />
                      ) : null
                    }
                    onClick={pageName === 'Prices' ? handleOnClick : () => {}}
                    key={`${pageName}MenuButton${index}`}
                  >
                    <Typography
                      variant='button'
                      key={`${pageName}MenuButtonTypography${index}`}
                    >
                      {pageName}
                    </Typography>
                  </Button>
                  {iconDown && (
                    <List
                      sx={{
                        bgcolor: 'background.paper',
                        marginTop: '0 !important',
                        marginBottom: '10px',
                      }}
                      key={`${pageName}MenuButtonList${index}`}
                    >
                      {services.map((service) => {
                        return (
                          <div key={`${service.route}{index}`}>
                            <ListItemButton
                              key={`${pageName}${service.route}ListButton${index}`}
                              className={'prices-menu-link'}
                              onClick={() =>
                                handleLinkClick(pageName, service.route)
                              }
                            >
                              <ListItemText
                                secondary={service.name}
                                key={`${pageName}${service.route}ListButtonText${index}`}
                              />
                            </ListItemButton>
                            {service.name !== 'Ultimate Glam' ? (
                              <Divider
                                variant='middle'
                                component='li'
                                key={`${pageName}${service.route}ListButtonDivider${index}`}
                              />
                            ) : null}
                          </div>
                        );
                      })}
                    </List>
                  )}
                </div>
              );
            } else {
              return (
                <Button
                  variant='contained'
                  sx={{ width: '100%' }}
                  onClick={() => handleLinkClick(pageName)}
                  key={`${pageName}MenuButton${index}`}
                >
                  <Typography
                    variant='button'
                    key={`${pageName}MenuButtonTypography${index}`}
                  >
                    {displayName ? displayName : pageName}
                  </Typography>
                </Button>
              );
            }
          })}
        </Stack>
      </div>
    );
  }
);

export default MenuStack;
