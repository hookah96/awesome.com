import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Homepage from './Pages/Homepage';
import Cart from './Pages/Cart';

const Routes = ({ products }) => {
  const keywords = [];
  const [cart, setCart] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [displayProductsNum, setDisplayProductsNum] = useState(true);
  console.log(products);
  return (
    <NavBar cart={cart} displayProductsNum={displayProductsNum}>
      <Switch>
        <Route path='/cart' render={() => <Cart cart={cart} />} />
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
