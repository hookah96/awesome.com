import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { formatPrice } from '../../utils/formatPrice';

import {
  outterDisplay,
  innerDisplay,
  cartProdImage,
  name_photo,
  cartActions,
  trashIcon,
  border,
  dropdown,
  dropdownList,
  priceFont,
} from './style';

const CardForCart = ({ id, name, price, image, cart, setCart }) => {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const numbers = [1, 2, 3, 4, 5];

  const handleClick = (num) => {
    setOpen(false);
    setQuantity(num);
  };

  const handleDelete = (id1) => {
    let newArray = [];
    newArray = cart.filter((el) => el.id !== id1);
    setCart(newArray);
  };

  return (
    <div className={outterDisplay}>
      <div className={innerDisplay}>
        <div className={name_photo}>
          <img src={image} alt='logo' className={cartProdImage} />
          <h2>{name}</h2>
        </div>
        <div className={cartActions}>
          <FontAwesomeIcon
            icon={faTrash}
            className={trashIcon}
            onClick={() => handleDelete(id, setCart)}
          />
          <div className={border}>
            <div>{quantity}</div>
            <FontAwesomeIcon
              icon={faSortDown}
              onClick={() => setOpen((prev) => !prev)}
            />
            {open && (
              <div className={dropdown}>
                {numbers.map((num, i) => {
                  return (
                    <div
                      key={i}
                      className={dropdownList}
                      onClick={() => handleClick(num)}
                    >
                      {num}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className={priceFont}>
          {quantity > 1 ? (
            <h3>{formatPrice(quantity * price)}</h3>
          ) : (
            <h3>{formatPrice(price)}</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardForCart;
