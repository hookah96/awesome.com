import React from 'react';
import logo from '../../images/logo.png';
import CardForCart from '../../components/CardForCart';
import PricingCard from '../../components/PricingCard';

import { cartContainer, cardBox, itemsCards } from './style';

const Cart = ({ cart }) => {
  console.log(cart);
  const cArt = [
    {
      id: 1,
      name: 'pen',
      price: '19$',
      image: `${logo}`,
    },
    {
      id: 2,
      name: 'pen',
      price: '19$',
      image: `${logo}`,
    },
  ];
  return (
    <div className={cartContainer}>
      <div className={cardBox}>
        <h3>Your cart</h3>
        {cArt.map((product) => {
          const { id, name, price, image } = product;
          return (
            <CardForCart key={id} name={name} price={price} image={image} />
          );
        })}
      </div>
      <div>
        <PricingCard />
      </div>
    </div>
  );
};

export default Cart;
