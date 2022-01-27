import {
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  Rating,
  Typography,
} from '@mui/material';
import './WelcomePage.css';
import { CustomCarousel } from './CustomCarousel';
import { useState } from 'react';
import { Favorite, FavoriteBorder, Reviews } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const fakeReviews = [
  {
    rating: 5,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    rating: 5,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    rating: 5,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    rating: 5,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    rating: 5,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

function WelcomePage() {
  const [rating, setRating] = useState(5);

  return (
    <div className='welcomePageWrapper'>
      <CustomCarousel />
      <Link to='/prices' className='react-link'>
        <Typography variant='h5'>Packages + Pricing</Typography>
      </Link>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent sx={{ maxHeight: '200px', overflowY: 'scroll' }}>
          <List
            sx={{
              width: '100%',
              bgcolor: 'background.paper',
            }}
          >
            {fakeReviews.map((review) => {
              return (
                <>
                  <ListItem>
                    <Rating
                      value={review.rating}
                      readOnly
                      size='small'
                      icon={<Favorite />}
                      emptyIcon={<FavoriteBorder />}
                    />
                    <ListItemText
                      inset
                      secondary={
                        review.comment.length > 80
                          ? review.comment.substring(0, 77).concat('...')
                          : review.comment
                      }
                      secondaryTypographyProps={{
                        variant: 'caption',
                      }}
                    />
                  </ListItem>
                  <Divider variant='inset' component='li' />
                </>
              );
            })}
          </List>
        </CardContent>
        <Divider />
        <CardContent sx={{ textAlign: 'center' }}>
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
            icon={<Favorite />}
            emptyIcon={<FavoriteBorder />}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default WelcomePage;
