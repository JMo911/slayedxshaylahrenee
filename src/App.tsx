import {
  BottomNavigation,
  Grid,
  Link,
  Typography,
  Container,
  Button,
} from '@mui/material';
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
  // const useOutsideAlerter = (ref: any) => {
  //   useEffect(() => {
  //     function handleClickOutside(event: any) {
  //       if (ref.current && !ref.current.contains(event.target)) {
  //         setShowMenu(false);
  //       }
  //     }

  //     document.addEventListener('mousedown', handleClickOutside);
  //     return () => {
  //       document.removeEventListener('mousedown', handleClickOutside);
  //     };
  //   }, [ref]);
  // };

  // useOutsideAlerter(menuRef);

  const handleOnClick = () => {
    setShowMenu((currentState) => !currentState);
  };

  return (
    <Container maxWidth='sm'>
      {/* <div className='headerContainer'> */}
      {/* <Grid item xs={10} justifyContent={'center'}> */}
      <Link href={'/slayedxshaylahrenee'}>
        <img
          src={` ${process.env.PUBLIC_URL}/images/shaylahlogoCroppedFinal.svg`}
          className='logo'
        ></img>
      </Link>
      {/* </Grid> */}
      {/* </div> */}

      {/* <div className='layoutWrapper'>
        <div className='menuWrapper'> */}
      {/* <Grid item xs={10} justifyContent={'center'}> */}
      <Button variant='outlined' onClick={handleOnClick} fullWidth>
        <Typography variant='button'>Menu</Typography>
      </Button>
      {/* </Grid> */}
      {/* <Grid item xs={10} justifyContent={'center'}> */}
      {showMenu && <MenuStack ref={menuRef} />}
      {/* </Grid> */}
      {/* </div>
        <div className='pageWrapper'> */}
      <Routes>
        <Route path='/slayedxshaylahrenee' element={<WelcomePage />} />
        <Route path='gallery' element={<GalleryPage />} />
        <Route path='prices' element={<PricingPage />} />
        <Route path='booking' element={<BookingPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>
      {/* </div>
      </div> */}
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
    </Container>
  );
}

export default App;
