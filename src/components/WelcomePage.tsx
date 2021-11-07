import { Link } from '@mui/material';
import React from 'react';
import './WelcomePage.css';
import BasicCard from './BasicCard';
import { CustomCarousel } from './CustomCarousel';


function WelcomePage() {
  return (
    <div className='welcomePageWrapper'>
      {/* <DenseAppBar /> */}
      <div className='headerContainer'>

      <h1 className='header'>Slayed x ShaylahRenee</h1>
      </div>
      <div className='carouselContainer'>

      <CustomCarousel />
      </div>
      <div className='cardContainer'>

      <BasicCard />
      </div>
      <Link href="#" color="inherit">
        {'Photoshoot gallery'}
      </Link>
    </div>
  );
}

export default WelcomePage;