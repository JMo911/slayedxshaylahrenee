import { BottomNavigation, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { BaseButton } from './components/BaseButton';
import { BookingPage } from './components/BookingPage';
import { ContactPage } from './components/ContactPage';
import { GalleryPage } from './components/GalleryPage';
import MenuStack from './components/MenuStack';
import { PricingPage } from './components/PricingPage';
import WelcomePage from './components/WelcomePage';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = React.useRef();
  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowMenu(false);
        }
      }

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(menuRef);

  const handleOnClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='appWrapper'>
      <div className='headerContainer'>
        <img src={` ${process.env.PUBLIC_URL}/images/shaylahlogo.svg`}></img>
      </div>

      <div className='layoutWrapper'>
        <div className='menuWrapper'>
          <BaseButton
            variant='outlined'
            message={<Typography variant='button'>Menu</Typography>}
            icon={null}
            onClick={handleOnClick}
          />
          {showMenu && <MenuStack ref={menuRef} />}
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
      {/* <BottomNavigation>
        <Link
          href='https://www.jacob-b-moss.com/'
          color='inherit'
          underline='none'
          variant='subtitle2'
        >
          Powered by <span className='mossCodeLogo'>MossCode</span>
        </Link>
      </BottomNavigation> */}
    </div>
  );
}

export default App;
