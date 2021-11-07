import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './BasicCard.css';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function BasicCard() {
  const spectralFont = 'Spectral, serif';
  return (
    <Card sx={{ minWidth: 275 }} className='basicCard'>
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color='text.secondary'
          gutterBottom
          fontFamily={spectralFont}
        >
          Fall photo shoot!
        </Typography>
        <Typography variant='h5' component='div' fontFamily={spectralFont}>
          Fall Fun
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        <Typography variant='body2' fontFamily={spectralFont}>
          let me tell you about all the stuff we did...
          <br />
          {/* {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
