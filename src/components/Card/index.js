import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { formatPrice } from '../../utils/formatPrice';
import {
  card,
  image,
  product_image,
  action_cart,
  cardContent,
  cardDetails,
  name1,
  product_desc,
  action,
} from './style';

const Card = ({ product, setCart }) => {
  const { name, description, media, price } = product;
  const addCartItem = (id) => {
    setCart((prevState) => [...prevState, id]);
  };

  return (
    <div className={card}>
      <div className={image}>
        <img src={media.source} alt={name} className={product_image} />
      </div>
      <div className={cardContent}>
        <div className={cardDetails}>
          <div className={name1}>
            <h2>{name}</h2>
          </div>
          <div className={product_desc}>
            <h4
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            ></h4>
          </div>
        </div>
        <div className={action}>
          <h3>{formatPrice(price.raw)}</h3>
          <FontAwesomeIcon
            icon={faCartPlus}
            className={action_cart}
            onClick={() => {
              addCartItem(product);
              return <h5>The item added to your cart!</h5>;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
