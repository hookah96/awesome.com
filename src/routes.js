import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Homepage from './Pages/Homepage';
import Cart from './Pages/Cart';

const Routes = ({ products }) => {
  const keywords = [];
  const [cart, setCart] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <NavBar cart={cart}>
      <Switch>
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
