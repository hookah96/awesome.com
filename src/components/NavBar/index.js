import React from 'react';
import { header, image, cart_img, cartItems, searchBar } from './style';
import titleLogo from '../../images/titleLogo.png';
import logoForTitle from '../../images/logoForTitle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../SearchBar';

const NavBar = ({
  cart,
  keywords,
  setSearchResults,
  searchResults,
  isMobile,
}) => {
  const goToCart = () => {
    console.log(cart);
  };

  return (
    <header className={header}>
      {isMobile ? (
        <img src={logoForTitle} alt='Logo for header' className={image} />
      ) : (
        <img src={titleLogo} alt='Logo for header' className={image} />
      )}

      <SearchBar
        classname={searchBar}
        keywords={keywords}
        setSearchResults={setSearchResults}
        searchResults={searchResults}
      />
      <div className={cart_img} onClick={goToCart}>
        <div className={cartItems}>{cart.length}</div>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </header>
  );
};

export default NavBar;
