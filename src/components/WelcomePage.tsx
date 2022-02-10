import {
  Button,
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
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { fakeReviews } from '../data/reviews';

function WelcomePage() {
  const [rating, setRating] = useState(5);
  const navigate = useNavigate();

  const handlePackageLinkClick = () => {
    navigate('/slayedxshaylahrenee/prices', {
      replace: true,
    });
  };

  return (
    <div className='welcomePageWrapper'>
      <CustomCarousel />
      <Button onClick={handlePackageLinkClick} variant='text' size='small'>
        <Typography variant='h5'>Packages + Pricing</Typography>
      </Button>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent sx={{ maxHeight: '200px', overflowY: 'scroll' }}>
          <List
            sx={{
              width: '100%',
              bgcolor: 'background.paper',
            }}
          >
            {fakeReviews.map((review, index) => {
              return (
                <div key={`fakeReview${index}`}>
                  <ListItem key={`listItem${index}`}>
                    <Rating
                      value={review.rating}
                      readOnly
                      size='small'
                      icon={<Favorite />}
                      emptyIcon={<FavoriteBorder />}
                      key={`rating${index}`}
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
                      key={`listItemText${index}`}
                    />
                  </ListItem>
                  <Divider
                    variant='inset'
                    component='li'
                    key={`listItemDivider${index}`}
                  />
                </div>
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
