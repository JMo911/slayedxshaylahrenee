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
import React from 'react';
import './PricingPage.css';

export const services = [
  {
    name: 'SlayedXShay Glam',
    price: 60,
    photoSource: `${process.env.PUBLIC_URL}/images/genericLipstickPhoto.jpg`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris',
  },
  {
    name: 'Woke Up Like This',
    price: 45,
    photoSource: `${process.env.PUBLIC_URL}/images/genericLipstickPhoto.jpg`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris',
  },
  {
    name: 'Ultimate Glam',
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
  return (
    <div className='pricingPageWrapper'>
      {services.map((service) => {
        return (
          <Card sx={{ maxWidth: 600 }} className='serviceCard'>
            <CardMedia
              component='img'
              height='140'
              image={service.photoSource}
              alt='green iguana'
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
              <Button size='small'>Book Now</Button>
              {/* <Button size='small'>Learn More</Button> */}
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
        subheader='Extras'
      >
        {extras.map((extra) => {
          return (
            <>
              <ListItem alignItems='flex-start'>
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
