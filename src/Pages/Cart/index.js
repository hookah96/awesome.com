import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
// import logo from '../../images/logo.png';
import CardForCart from '../../components/CardForCart';
import PricingCard from '../../components/PricingCard';

import {
  cartContainer,
  cardWrapper,
  totalBox,
  placingRtnBtn,
  rtnToHomepage,
  leftArrow,
  activeBtn,
} from './style';

const Cart = ({ cart, setCart }) => {
  // const [total, setTotal] = useState([]);

  // const cArt = [
  //   {
  //     id: 1,
  //     name: 'pen1',
  //     price: { formatted: '19.99' },
  //     media: { source: `${logo}` },
  //   },
  //   {
  //     id: 2,
  //     name: 'pen2',
  //     price: { formatted: '17.98' },
  //     media: { source: `${logo}` },
  //   },
  //   {
  //     id: 3,
  //     name: 'pen3',
  //     price: { formatted: '15.21' },
  //     media: { source: `${logo}` },
  //   },
  // ];

  let total1 = 0;
  const countingTotal = () => {
    for (let i = 0; i < cart.length; i++) {
      total1 += Number(cart[i].price.raw);
    }
    return total1;
  };
  countingTotal();

  const CartMap = ({ arr }) => {
    return arr.map((product) => {
      const { id, name, price, media } = product;

      return (
        <CardForCart
          key={id}
          id={id}
          name={name}
          price={price.raw}
          image={media.source}
          cart={cart}
          setCart={setCart}
          // quantity={quantity}
          // setQuantity={setQuantity}
        />
      );
    });
  };
  return (
    <div className={cartContainer}>
      {cart.length === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (
        <>
          <div className={cardWrapper}>
            <h2>Your cart</h2>
            <div>
              <CartMap arr={cart} />
            </div>
          </div>

          <div className={totalBox}>
            <PricingCard total={total1} />
            <div className={placingRtnBtn}>
              <NavLink to='/' className={activeBtn}>
                <div className={rtnToHomepage}>
                  <FontAwesomeIcon icon={faChevronLeft} className={leftArrow} />
                  Keep Shoping
                </div>
              </NavLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
