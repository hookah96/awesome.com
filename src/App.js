import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { fetchProducts } from './api/fetchProducts';
import { ReactQueryDevtools } from 'react-query-devtools';
import { useQuery } from 'react-query';

const App = () => {
  const productsAmount = 26;
  const { data, isLoading, isError, error } = useQuery(
    ['products', productsAmount],
    fetchProducts
  );

  if (isLoading) return 'loading';
  if (isError) throw error.message;

  return (
    <div>
      <BrowserRouter>
        <Routes products={data.products} />
      </BrowserRouter>
      <ReactQueryDevtools />
    </div>
  );
};

export default App;
