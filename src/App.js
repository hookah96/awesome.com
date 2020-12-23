import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { commerce } from './utils/commerce';
import Routes from './routes';

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes products={products} />
      </BrowserRouter>
    </div>
  );
};

export default App;
