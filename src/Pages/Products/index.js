import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AllProducts from './AllProducts';
import CategoryProducts from './CategoryProducts';

const Products = ({ products }) => {
  const { url } = useRouteMatch();
  console.log(url);
  return (
    <Switch>
      <h1>hello</h1>
      {/* <Route
         path={`${url}/allproducts`}
        render={() => <AllProducts products={products} />}
       />
       <Route path={`${url}/:category`} component={CategoryProducts} /> */}
    </Switch>
  );
};

export default Products;
