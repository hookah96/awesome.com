import React from 'react';
import Card from '../../components/Card';
import { setSEOkeywords } from '../../utils/search';

import { container, searchBar, gridCards, positionCard } from './style';

const SearchPage = ({
  products,
  setCart,
  searchResults,
  setSearchResults,
  keywords,
}) => {
  setSEOkeywords(keywords, products);

  return (
    <div className={container}>
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

export default SearchPage;
