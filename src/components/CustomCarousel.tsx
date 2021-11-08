import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import './CustomCarousel.css';

interface ItemType {
  name: string;
  description: string;
}

export const CustomCarousel = () => {
  var items: ItemType[] = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
  ];

  return (
    <Carousel autoPlay>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

const Item = (props: any) => {
  const { name, description } = props.item;
  return (
    <Paper className='carousel'>
      <h2>{name}</h2>
      <p>{description}</p>

      <Button className='CheckButton'>Check it out!</Button>
    </Paper>
  );
};
