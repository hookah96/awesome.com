import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchProducts } from '../../../api/fetchProducts';
import Filters from '../../../components/Filters';
import CardsGrid from '../../../components/CardsGrid';
import TitleForProducts from '../../../components/TitleForProducts';
import { sortingPrice } from '../../../utils/sortingPrice';

const AllProducts = () => {
  const productsAmount = 12;
  const [pageIndex, setPageIndex] = useState(1);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState('Top Rated');
  const { data, isLoading, isError, error } = useQuery(
    ['products', productsAmount, pageIndex],
    fetchProducts
  );

  useEffect(() => {
    !isLoading && !isError && setProducts(data.products);
  }, [isLoading, isError, data]);

  if (isLoading) return 'loading';
  if (isError) return error.message;

  const currentDisplayCateg = [
    ...new Set(products.map((product) => product.categories[0].name)),
  ];

  return (
    <div>
      <Filters
        filterName={'Categories'}
        filterOptions={currentDisplayCateg}
        rawProducts={products}
        setFilteredProducts={setFilteredProducts}
        currentDisplayCateg={currentDisplayCateg}
      />
      <TitleForProducts
        name={'All Products'}
        sort={sort}
        setSort={setSort}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        pagination={data.meta.pagination}
      />
      <CardsGrid
        products={
          filteredProducts.length === 0
            ? sortingPrice(sort, products)
            : sortingPrice(sort, filteredProducts)
        }
      />
    </div>
  );
};

export default AllProducts;
