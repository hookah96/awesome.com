import React from 'react';
import ItemsCounter from '../ItemsCounter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { innerDisplay, cartProdImage, name_photo, cartActions } from './style';

const CardForCart = ({ name, price, image }) => {
  return (
    <div className={innerDisplay}>
      <div className={name_photo}>
        <img src={image} alt='logo' className={cartProdImage} />
        <h2>{name}</h2>
      </div>
      <div className={cartActions}>
        <FontAwesomeIcon icon={faTrash} />
        <ItemsCounter />
      </div>
      <h3>{price}</h3>
    </div>
  );
};

export default CardForCart;
