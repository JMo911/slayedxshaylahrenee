import { Link, Paper } from '@mui/material';
import React, { useState } from 'react';
import './WelcomePage.css';
import BasicCard from './BasicCard';
import { CustomCarousel } from './CustomCarousel';
import { MaterialImage } from './MaterialImage';
import MenuStack from './MenuStack';
import { BaseButton } from './BaseButton';
// import { StyledLink } from './StyledLink';

function WelcomePage() {
  return (
    <div className='welcomePageWrapper'>
      {/* <DenseAppBar /> */}
      {/* <div className='headerContainer'>
        <h1 className='header'>Slayed x ShaylahRenee</h1>
      </div> */}
      {/* <div className='carouselContainer'> */}
      <CustomCarousel />
      {/* </div> */}
      <div className='cardContainer'>
        <BasicCard />
      </div>
      <Link href='#' color='inherit'>
        {'Photoshoot gallery'}
      </Link>
      <MaterialImage
        src='data:image/png;base64,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'
        name='avatar'
      />

      <Paper elevation={3} className='aboutMe'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </Paper>
    </div>
  );
}

export default WelcomePage;
