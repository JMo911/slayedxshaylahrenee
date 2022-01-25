import { Card, CardContent, Link, Typography } from '@mui/material';
import './WelcomePage.css';
import { CustomCarousel } from './CustomCarousel';

function WelcomePage() {
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
    </div>
  );
}

export default WelcomePage;
