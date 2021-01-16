import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { header, image, cartIcon, cartItems, activeCart } from './style';
import titleLogo from '../../images/titleLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ cart, children }) => {
  return (
    <>
      <header className={header}>
        <Link to='/'>
          <img src={titleLogo} alt='Logo for header' className={image} />
        </Link>
        <div className={cartIcon}>
          <NavLink to='/cart' className={activeCart}>
            {cart.length !== 0 && (
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
