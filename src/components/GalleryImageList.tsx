import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './GalleryImageList.css';
import { photos } from './CustomCarousel';

export default function GalleryImageList() {
  return (
    <ImageList cols={4} className='galleryImageList' gap={10} variant='masonry'>
      {photos.map((photo) => (
        <ImageListItem key={photo.src}>
          <img
            src={photo.src}
            alt={photo.alt}
            className='galleryImg'
            loading='lazy'
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
