import React from 'react';
import GalleryImageList from './GalleryImageList';
import './GalleryPage.css';

export const GalleryPage: React.FC = () => {
  return (
    <div className='galleryPageWrapper'>
      <GalleryImageList />
    </div>
  );
};
