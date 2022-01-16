import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './PricingPage.css';

export const services = [
  {
    name: 'SlayedXShay Glam',
    route: 'slayedXShayGlam',
    price: 60,
    photoSource: `${process.env.PUBLIC_URL}/images/genericLipstickPhoto.jpg`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris',
  },
  {
    name: 'Woke Up Like This',
    route: 'wokeUpLikeThis',
    price: 45,
    photoSource: `${process.env.PUBLIC_URL}/images/genericLipstickPhoto.jpg`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris',
  },
  {
    name: 'Ultimate Glam',
    route: 'ultimateGlam',
    price: 80,
    photoSource: `${process.env.PUBLIC_URL}/images/genericLipstickPhoto.jpg`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris',
  },
];

export const extras = [
  {
    name: 'Lashes',
    price: 10,
  },
  {
    name: 'Brows',
    price: 15,
  },
  {
    name: 'Eye Shadow',
    price: 20,
  },
  {
    name: 'Cut Crease Eye Shadow',
    price: 25,
  },
  {
    name: 'Glitter',
    price: 5,
  },
];

export const PricingPage: React.FC = () => {
  const location = useLocation();
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

  return (
    <div className='pricingPageWrapper'>
      {services.map((service) => {
        return (
          <Card
            sx={{ maxWidth: 600 }}
            className='serviceCard'
            key={`${service.name}${service.route}`}
          >
            <CardMedia
              component='img'
              height='140'
              image={service.photoSource}
              alt={service.name}
              id={service.route}
              sx={{ objectFit: 'scale-down' }}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {`${service.name} - $${service.price}`}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {service.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small' href='/booking'>
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
        {extras.map((extra) => {
          return (
            <>
              <ListItem alignItems='flex-start' key={extra.name}>
                {/* <ListItemAvatar>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          </ListItemAvatar> */}
                <ListItemText
                  primary={`${extra.name} $${extra.price}`}
                  // secondary={
                  //   <React.Fragment>
                  //     <Typography
                  //       sx={{ display: 'inline' }}
                  //       component='span'
                  //       variant='body2'
                  //       color='text.primary'
                  //     >
                  //       ${extra.price}
                  //     </Typography>
                  //   </React.Fragment>
                  // }
                />
              </ListItem>
              {extra.name !== 'Glitter' ? (
                <Divider variant='middle' component='li' />
              ) : null}
            </>
          );
        })}
      </List>
    </div>
  );
};
