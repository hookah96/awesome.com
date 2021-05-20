import React, { useState, useEffect } from 'react';
import { filtersContainer, elCat, basicFilter } from './style';

const Filters = ({
  filterName,
  filterOptions,
  rawProducts,
  setFilteredProducts,
}) => {
  const [filter, setFilter] = useState([]);

  const handleChange = (e) => {
    let value = e.target.value;

    e.target.checked
      ? setFilter((prev) => [...prev, value])
      : setFilter((prev) => prev.filter((el) => el !== value));
  };

  const displayFilters = (arr) =>
    arr.map((el, i) => (
      <div key={i} className={elCat}>
        <input
          type='checkbox'
          name={el}
          value={el}
          onChange={(e) => handleChange(e)}
        />
        <label> {el}</label>
      </div>
    ));

  useEffect(() => {
    const filteringProducts = () => {
      let arr = [];
      for (let i = 0; i < filter.length; i++) {
        let currentFilter = filter[i];

        if (filterName === 'Categories') {
          for (let j = 0; j < rawProducts.length; j++) {
            currentFilter === rawProducts[j].categories[0].name &&
              arr.push(rawProducts[j]);
          }
        } else {
          for (let j = 0; j < rawProducts.length; j++) {
            currentFilter === rawProducts[j].sku && arr.push(rawProducts[j]);
          }
        }
      }
      return arr;
    };
    setFilteredProducts(filteringProducts());
  }, [filter, filterName, setFilteredProducts, rawProducts]);

  return (
    <div className={filtersContainer}>
      <h4>Filters</h4>
      <div className={basicFilter}>
        <h3>{filterName}</h3>
        {displayFilters(filterOptions)}
      </div>
    </div>
  );
};

export default Filters;
