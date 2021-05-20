import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Filters from '../../../components/Filters';
import { fetchByCategory } from '../../../api/fetchByCategory';
import CardGrid from '../../../components/CardsGrid';
import TitleForProducts from '../../../components/TitleForProducts';
import { categories } from '../../../utils/arraysForMapping/forNavBar';
import { sortingPrice } from '../../../utils/sortingPrice';

const CategoryProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredCatProducts, setFilteredCatProducts] = useState([]);
  const [sort, setSort] = useState('Top Rated');
  const [pageIndex, setPageIndex] = useState(1);
  const { category } = useParams();
  const { isLoading, isError, error, data } = useQuery(
    ['fetchcategory', category, pageIndex],
    fetchByCategory
  );

  useEffect(() => {
    !isLoading && !isError && setProducts(data.catProducts);
  }, [isLoading, isError, data]);

  if (isLoading) return 'Loading..';
  if (isError) return error.message;

  const nameForTitle = categories.find((el) => el.link === category);

  const currentBrand = [...new Set(products.map((product) => product.sku))];

  return (
    <div>
      <Filters
        filterName={'Brands'}
        filterOptions={currentBrand}
        rawProducts={products}
        setFilteredProducts={setFilteredCatProducts}
      />

      <TitleForProducts
        name={`${nameForTitle.name}`}
        sort={sort}
        setSort={setSort}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
        pagination={data.meta.pagination}
      />
      <CardGrid
        products={
          filteredCatProducts.length === 0
            ? sortingPrice(sort, products)
            : sortingPrice(sort, filteredCatProducts)
        }
      />
    </div>
  );
};

export default CategoryProducts;
