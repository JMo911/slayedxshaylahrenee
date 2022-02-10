import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { extras, services, ServiceType } from '../data/services';
import { useServices } from '../hooks/useServices';
import './PricingPage.css';

export const PricingPage: React.FC = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const { setSelectedServices } = useServices();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);

  const handleOnClick = (service: ServiceType) => {
    setSelectedServices([service.name]);
    navigate('/slayedxshaylahrenee/booking', { replace: true });
  };

  return (
    <div className='pricingPageWrapper'>
      {services.map((service, index) => {
        return (
          <Card
            sx={{ maxWidth: 600 }}
            className='serviceCard'
            key={`${service.name}Card${service.route}${index}`}
          >
            <CardMedia
              component='img'
              height='140'
              image={service.photoSource}
              alt={service.name}
              id={service.route}
              sx={{ objectFit: 'scale-down' }}
              key={`${service.name}CardMedia${service.route}${index}`}
            />
            <CardContent
              key={`${service.name}CardContent${service.route}${index}`}
            >
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                key={`${service.name}CardContentTypography${service.route}${index}`}
              >
                {`${service.name} - $${service.price}`}
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                key={`${service.name}CardContentSecondaryTypography${service.route}${index}`}
              >
                {service.description}
              </Typography>
            </CardContent>
            <CardActions
              key={`${service.name}CardAction${service.route}${index}`}
            >
              <Button
                size='small'
                onClick={() => handleOnClick(service)}
                key={`${service.name}CardButton${service.route}${index}`}
              >
                Book Now
              </Button>
            </CardActions>
          </Card>
        );
      })}
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          marginTop: '10px',
          marginBottom: '10px',
        }}
        subheader={
          <Typography variant='h6' sx={{ textAlign: 'center' }}>
            Extras
          </Typography>
        }
      >
        {extras.map((extra, index) => {
          return (
            <div key={`${extra}${index}`}>
              <ListItem alignItems='flex-start' key={`${extra.name}${index}`}>
                <ListItemText
                  primary={`${extra.name} $${extra.price}`}
                  key={`${extra.name}Text${index}`}
                />
              </ListItem>
              {extra.name !== 'Glitter' ? (
                <Divider
                  variant='middle'
                  component='li'
                  key={`${extra.name}Divider${index}`}
                />
              ) : null}
            </div>
          );
        })}
      </List>
    </div>
  );
};
