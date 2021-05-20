import React from 'react';
import Card from '../Card';
import { cardFlex } from './style';

const CardGrid = ({ products }) => {
  return (
    <div className={cardFlex}>
      {products.map((product, i) => (
        <Card product={product} key={i} />
      ))}
    </div>
  );
};

export default CardGrid;
