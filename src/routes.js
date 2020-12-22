import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './Pages/Homepage';

const Routes = ({ products, cart, setCart }) => {
  const isMobile = window.matchMedia('(max-width: 480px)').matches;
  return (
    <Router>
      <Switch>
        <Route
          path='/'
          component={() => (
            <Homepage
              products={products}
              cart={cart}
              setCart={setCart}
              isMobile={isMobile}
            />
          )}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
