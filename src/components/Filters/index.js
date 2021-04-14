import React from 'react';
// import { NavLink } from 'react-router-dom';

import { filtersContainer, priceFilters, basicFilter } from './style';
// elCat,

const Filters = ({ filterName, filterOptions }) => {
  const prices = [' To 800$', '800$ - 1000$', '1001$ - 2000$', 'Above 2000$'];
  const displayFilters = (arr) =>
    arr.map((price, i) => (
      <div key={i}>
        <input type='checkbox' name='4' value={price} /> <label> {price}</label>
      </div>
    ));

  return (
    <div className={filtersContainer}>
      <h4>Filters</h4>
      <div className={basicFilter}>
        <h3>{filterName}</h3>
        {filterOptions}
      </div>
      <div className={priceFilters}>
        <h3>Price</h3>
        {displayFilters(prices)}
      </div>
    </div>
  );
};

export default Filters;
