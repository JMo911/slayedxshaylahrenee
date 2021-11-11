import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import './CustomCarousel.css';

interface PhotoType {
  src: string;
  alt: string;
}

export const CustomCarousel = () => {
  const photos: PhotoType[] = [
    {
      src: process.env.PUBLIC_URL + '/images/IMG-3518.jpg',
      alt: 'Fall Photo',
    },
    {
      src: process.env.PUBLIC_URL + '/images/IMG-3524.jpg',
      alt: 'Fall Photo',
    },
    {
      src: process.env.PUBLIC_URL + '/images/IMG-3525.jpg',
      alt: 'Fall Photo',
    },
    {
      src: process.env.PUBLIC_URL + '/images/IMG-3528.jpg',
      alt: 'Fall Photo',
    },
    {
      src: process.env.PUBLIC_URL + '/images/IMG-3533.jpg',
      alt: 'Fall Photo',
    },
    {
      src: process.env.PUBLIC_URL + '/images/IMG-3534.jpg',
      alt: 'Fall Photo',
    },
    {
      src: process.env.PUBLIC_URL + '/images/IMG-3535.jpg',
      alt: 'Fall Photo',
    },
    {
      src: process.env.PUBLIC_URL + '/images/IMG-3538.jpg',
      alt: 'Fall Photo',
    },
    {
      src: process.env.PUBLIC_URL + '/images/IMG-3540.jpg',
      alt: 'Fall Photo',
    },
    {
      src: process.env.PUBLIC_URL + '/images/IMG-3543.jpg',
      alt: 'Fall Photo',
    },
    {
      src: process.env.PUBLIC_URL + '/images/IMG-3544.jpg',
      alt: 'Fall Photo',
    },
    {
      src: process.env.PUBLIC_URL + '/images/IMG-3554.jpg',
      alt: 'Fall Photo',
    },
    {
      src: process.env.PUBLIC_URL + '/images/IMG-3563.jpg',
      alt: 'Fall Photo',
    },
    {
      src: process.env.PUBLIC_URL + '/images/IMG-3564.jpg',
      alt: 'Fall Photo',
    },
    {
      src:
        process.env.PUBLIC_URL +
        '/images/0DE25486-9CB4-4E30-BA90-737D8FAB4236.jpg',
      alt: 'Fall Photo',
    },
    {
      src:
        process.env.PUBLIC_URL +
        '/images/9A0419B2-1E9E-403C-B36E-A10E1DF23FBF.jpg',
      alt: 'Fall Photo',
    },
    {
      src:
        process.env.PUBLIC_URL +
        '/images/83BC148D-F312-48F9-8B4A-D651EA84D49F.jpg',
      alt: 'Fall Photo',
    },
    {
      src:
        process.env.PUBLIC_URL +
        '/images/517FE603-A823-4AC6-A91F-D6F8D7448F6D.jpg',
      alt: 'Fall Photo',
    },
    {
      src:
        process.env.PUBLIC_URL +
        '/images/A8F49F78-BD3B-4DA7-A21F-A64F8660DBF5.jpg',
      alt: 'Fall Photo',
    },
    {
      src:
        process.env.PUBLIC_URL +
        '/images/B102E288-43F9-48BD-93A6-9B7446CFC2B8.jpg',
      alt: 'Fall Photo',
    },
    {
      src:
        process.env.PUBLIC_URL +
        '/images/BF23899B-463C-4AB9-A928-82AA2BFF4358.jpg',
      alt: 'Fall Photo',
    },
    {
      src:
        process.env.PUBLIC_URL +
        '/images/A3AEEF64-CAC6-4A05-A131-BC5B38790DE8.jpg',
      alt: 'Fall Photo',
    },
    {
      src:
        process.env.PUBLIC_URL +
        '/images/CA305CC0-C74D-470E-B7F7-8DD3DBF6F37E.jpg',
      alt: 'Fall Photo',
    },
    {
      src:
        process.env.PUBLIC_URL +
        '/images/F531E249-C867-4D32-8370-D8D1602AC2B6.jpg',
      alt: 'Fall Photo',
    },
  ];

  return (
    <Carousel autoPlay className='carousel' indicators={false}>
      {photos.map((item, i) => (
        <Item key={i} src={item.src} alt={item.alt} />
      ))}
    </Carousel>
  );
};

const Item = (props: { src: string; alt: string }) => {
  const { src, alt } = props;
  return (
    <div className='imageContainer'>
      <img src={src} alt={alt} className='carouselImage' />

      {/* <Button className='CheckButton'>Check it out!</Button> */}
    </div>
  );
};
