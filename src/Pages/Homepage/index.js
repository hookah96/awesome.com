import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import Card from '../../components/Card';
import { setSEOkeywords } from '../../utils/search';

import { container, gridCards, positionCard } from './style';

const Homepage = ({ products, cart, setCart, isMobile }) => {
  const keywords = [];
  const [searchResults, setSearchResults] = useState([]);
  setSEOkeywords(keywords, products);

  return (
    <div className={container}>
      <NavBar
        cart={cart}
        keywords={keywords}
        setSearchResults={setSearchResults}
        searchResults={searchResults}
        isMobile={isMobile}
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
