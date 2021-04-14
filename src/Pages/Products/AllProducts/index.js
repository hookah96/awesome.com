import React from 'react';
import Breadcrumb from '../../../components/Breadcrumb';
import Filters from '../../../components/Filters';
import CardsGrid from '../../../components/CardsGrid';
import { categories } from '../../../utils/arraysForMapping/forNavBar';
import { elCat } from './style';
import { NavLink } from 'react-router-dom';

const AllProducts = ({ products }) => {
  const catMap = categories.map((el, i) => (
    <div key={i} className={elCat}>
      {el.name}
    </div>
  ));
  return (
    <div>
      <Breadcrumb />
      <Filters filterName={'Categories'} filterOptions={catMap} />
      <CardsGrid products={products} />
    </div>
  );
};

export default AllProducts;
