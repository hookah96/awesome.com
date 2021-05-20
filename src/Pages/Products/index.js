import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import AllProducts from './AllProducts';
import CategoryProducts from './CategoryProducts';

const Products = () => {
  const { url } = useRouteMatch();

  return (
    <>
      <Breadcrumb />
      <Switch>
        <Route path={`${url}/all-products`} render={() => <AllProducts />} />
        <Route path={`${url}/:category`} render={() => <CategoryProducts />} />
      </Switch>
    </>
  );
};

export default Products;
