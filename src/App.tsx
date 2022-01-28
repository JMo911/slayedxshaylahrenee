import { Typography, Container, Button } from '@mui/material';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import MenuStack from './components/MenuStack';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = React.useRef();
  let navigate = useNavigate();
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

  const handleLogoClick = () => {
    navigate('/slayedxshaylahrenee/welcome', { replace: true });
  };

  const handleOnClick = () => {
    setShowMenu((currentState) => !currentState);
  };

  return (
    <Container maxWidth='sm'>
      <img
        src={` ${process.env.PUBLIC_URL}/images/shaylahlogoCroppedFinal.svg`}
        className='logo'
        onClick={handleLogoClick}
      ></img>

      <Button variant='outlined' onClick={handleOnClick} fullWidth>
        <Typography variant='button'>Menu</Typography>
      </Button>
      {showMenu && <MenuStack ref={menuRef} setShowMenu={setShowMenu} />}

      <Outlet />
    </Container>
  );
}

export default App;
