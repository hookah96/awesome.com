import React from 'react';
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Card';
import { setSEOkeywords } from '../../utils/search';

import { container, searchBar, gridCards, positionCard } from './style';

const Homepage = ({
  products,
  setCart,
  searchResults,
  setSearchResults,
  keywords,
}) => {
  setSEOkeywords(keywords, products);
  return (
    <div className={container}>
      <SearchBar
        classname={searchBar}
        keywords={keywords}
        setSearchResults={setSearchResults}
        searchResults={searchResults}
      />
      <div className={gridCards}>
        {products.map((product) =>
          searchResults.length === 0 ? (
            <div key={product.id} className={positionCard}>
              <Card product={product} setCart={setCart} />
            </div>
          ) : (
            searchResults.map(
              (result) =>
                result === product.id && (
                  <div key={product.id} className={positionCard}>
                    <Card product={product} setCart={setCart} />
                  </div>
                )
            )
          )
        )}
      </div>
    </div>
  );
};

export default Homepage;
