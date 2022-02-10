import { useEffect, useState } from 'react';
import { photos } from '../data/photos';
import './CustomCarousel.css';

export const CustomCarousel = () => {
  const [index, setIndex] = useState(0);

  const switchPhotos = () => {
    if (index === photos.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    let indexInterval = setInterval(switchPhotos, 4000);

    return () => {
      clearInterval(indexInterval);
    };
  });

  return (
    <div className='carouselContainer'>
      {photos.map((photo, i) => {
        return (
          <img
            className={`carouselImage ${i === index ? 'visible' : 'hidden'}`}
            src={photo.src}
            alt={photo.alt}
            key={`${photo.src}${i}`}
          />
        );
      })}
    </div>
  );
};
