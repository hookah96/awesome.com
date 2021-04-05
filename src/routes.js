import React, { useEffect, useState, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Homepage from './Pages/Homepage';
import Cart from './Pages/Cart';
import SearchPage from './Pages/Search';

const Routes = ({ products }) => {
  const scrollToCompany = useRef(null);
  const keywords = [];
  const [cart, setCart] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isOpenSideNav, setIsOpenSideNav] = useState(false);

  const mediaToMatch = '(max-width: 768px)';
  const [isTablet, setIsTablet] = useState(
    window.matchMedia(mediaToMatch).matches
  );

  useEffect(() => {
    let mediaQuery = window.matchMedia(mediaToMatch);
    mediaQuery.matches !== isTablet && setIsTablet(mediaQuery.matches);

    const listener = () => setIsTablet(mediaQuery.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, [isTablet, mediaToMatch]);

  return (
    <NavBar
      cart={cart}
      isTablet={isTablet}
      isOpenSideNav={isOpenSideNav}
      setIsOpenSideNav={setIsOpenSideNav}
      scrollToCompany={scrollToCompany}
    >
      <Switch>
        <Route
          path='/searchpage'
          render={() => (
            <SearchPage
              isTablet={isTablet}
              isOpenSideNav={isOpenSideNav}
              setIsOpenSideNav={setIsOpenSideNav}
              scrollToCompany={scrollToCompany}
            />
          )}
        />
        <Route
          path='/cart'
          render={() => <Cart cart={cart} setCart={setCart} />}
        />
        <Route
          path='/'
          render={() => (
            <Homepage
              products={products}
              cart={cart}
              setCart={setCart}
              setSearchResults={setSearchResults}
              searchResults={searchResults}
              keywords={keywords}
            />
          )}
        />
      </Switch>
    </NavBar>
  );
};

export default Routes;
