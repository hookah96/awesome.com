export const sortingPrice = (sortBy, productsToSort) => {
  switch (sortBy) {
    case 'Price: Low to High':
      return productsToSort.sort((a, b) => a.price.raw - b.price.raw);
    case 'Price: High to Low':
      return productsToSort.sort((a, b) => b.price.raw - a.price.raw);
    default:
      return productsToSort;
  }
};
