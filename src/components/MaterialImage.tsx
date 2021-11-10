import Paper from '@mui/material/Paper';
import React from 'react';
import './MaterialImage.css';

export const MaterialImage = (props: { src: string; name: string }) => {
  return (
    <Paper elevation={3} className='thumbnailContainer'>
      <img src={props.src} alt={props.name} className='thumbnail' />
    </Paper>
  );
};
