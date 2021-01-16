import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { formatPrice } from '../../utils/formatPrice';
import {
  container,
  pricingBox,
  bottomLine,
  placingItems,
  checkoutBtn,
  totalPrice,
  totalAndBtn,
  rightArrow,
  activeBtn,
} from './style';
const PricingCard = ({ total }) => {
  const itemsForTotal = [
    {
      title: 'Products Value',
      price: total,
    },
    {
      title: 'Shipping Fee',
      price: '10',
    },
  ];
  return (
    <div className={container}>
      <div className={pricingBox}>
        <h3>Total</h3>
        <div>
          {itemsForTotal.map((el, i) => (
            <div key={i} className={placingItems}>
              <div>{el.title}</div>
              <div>{formatPrice(el.price)}</div>
            </div>
          ))}
        </div>
        <div className={bottomLine} />
        <div className={totalAndBtn}>
          <div className={totalPrice}>
            <div>Total</div>
            <div>
              {formatPrice(Number(total) + Number(itemsForTotal[1].price))}
            </div>
          </div>

          <div className={checkoutBtn}>
            <NavLink to='/' className={activeBtn}>
              To checkout
              <FontAwesomeIcon icon={faChevronRight} className={rightArrow} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
