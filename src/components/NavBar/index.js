import React from 'react';
import { NavLink } from 'react-router-dom';
import { header, image, cartIcon, cartItems } from './style';
import titleLogo from '../../images/titleLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ cart, children, displayProductsNum }) => {
  const goToCart = () => {
    console.log(cart);
  };

  return (
    <>
      <header className={header}>
        <img src={titleLogo} alt='Logo for header' className={image} />
        <div className={cartIcon} onClick={goToCart}>
          <NavLink to='/cart' activeStyle={{ color: 'black' }}>
            {displayProductsNum && (
              <div className={cartItems}>{cart.length}</div>
            )}
            <FontAwesomeIcon icon={faShoppingCart} />
          </NavLink>
        </div>
      </header>
      {children}
    </>
  );
};

export default NavBar;
