import { Link, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { BaseButton } from './components/BaseButton';
import { BookingPage } from './components/BookingPage';
import { ContactPage } from './components/ContactPage';
import { GalleryPage } from './components/GalleryPage';
import MenuStack from './components/MenuStack';
import { PricingPage } from './components/PricingPage';
// import { StyledLink } from './components/StyledLink';
import WelcomePage from './components/WelcomePage';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const handleOnClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className='appWrapper'>
      <div className='headerContainer'>
        <Link
          href='/slayedxshaylahrenee'
          color='inherit'
          underline='none'
          variant='h1'
        >
          Slayed x ShaylahRenee
        </Link>
      </div>

      <div className='layoutWrapper'>
        <div className='menuWrapper'>
          <BaseButton
            variant='outlined'
            message={<Typography variant='button'>Menu</Typography>}
            icon={null}
            onClick={handleOnClick}
          />
          {showMenu && <MenuStack />}
        </div>
        <div className='pageWrapper'>
          <Routes>
            <Route path='/slayedxshaylahrenee' element={<WelcomePage />} />
            <Route path='gallery' element={<GalleryPage />} />
            <Route path='prices' element={<PricingPage />} />
            <Route path='booking' element={<BookingPage />} />
            <Route path='contact' element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
