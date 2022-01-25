import {
  Card,
  CardContent,
  Divider,
  Link,
  Rating,
  Typography,
} from '@mui/material';
import './WelcomePage.css';
import { CustomCarousel } from './CustomCarousel';
import { useState } from 'react';

function WelcomePage() {
  const [rating, setRating] = useState(5);

  return (
    <div className='welcomePageWrapper'>
      <CustomCarousel />
      {/* <div className='cardContainer'>
        <Card sx={{ minWidth: 275 }} className='basicCard'>
          <CardContent className='cardContent'>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              Fall photo shoot!
            </Typography>
            <Typography variant='h5' component='div'>
              Fall Fun
            </Typography>
            <Typography variant='body2'>
              let me tell you about all the stuff we did...
              <br />
            </Typography>
          </CardContent>
        </Card>
      </div> */}
      <Link href='/prices' underline='none' variant='button'>
        Packages + Pricing
      </Link>

      <Card sx={{ maxWidth: 600 }}>
        {/* <CardMedia
              component='img'
              height='140'
              image={service.photoSource}
              alt={service.name}
              id={service.route}
              sx={{ objectFit: 'scale-down' }}
            /> */}
        <Divider />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Post a review
          </Typography>
          <Rating
            name='simple-controlled'
            precision={0.5}
            defaultValue={5.0}
            value={rating}
            onChange={(event, userRating) => {
              userRating && setRating(userRating);
            }}
          />
        </CardContent>
        {/* <CardActions>
              <Button size='small' href='/booking'>
                Book Now
              </Button>
            </CardActions> */}
      </Card>
    </div>
  );
}

export default WelcomePage;
