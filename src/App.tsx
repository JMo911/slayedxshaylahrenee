import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
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
        <Link to='/' className='styledLink'>
          <h1 className='header'>Slayed x ShaylahRenee</h1>
        </Link>
      </div>
      <div className='menuWrapper'>
        <BaseButton
          variant='outlined'
          message='Menu'
          icon={null}
          onClick={handleOnClick}
        />
        {showMenu && <MenuStack />}
      </div>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='gallery' element={<GalleryPage />} />
        <Route path='prices' element={<PricingPage />} />
        <Route path='booking' element={<BookingPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>

      {/* <DenseAppBar /> */}
      {/* <div className='headerContainer'>

      <h1 className='header'>Slayed x ShaylahRenee</h1>
      </div>
      <CustomCarousel />
      <div className='cardContainer'>

      <BasicCard />
      </div>
      <StyledLink href="#" color="inherit">
        {'Photoshoot gallery'}
      </StyledLink> */}
    </div>
  );
}

export default App;
