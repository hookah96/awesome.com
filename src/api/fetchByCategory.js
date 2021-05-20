export const fetchByCategory = async (key, category, pageIndex) => {
  try {
    const response = await fetch(
      `https://api.chec.io/v1/products?limit=25&page=${pageIndex}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': `${process.env.REACT_APP_CHEC_PUBLIC_KEY}`,
        },
      }
    );

    const { data, meta } = await response.json();
    const currentCategory = data.filter(
      (product) => product.categories[0].slug === category
    );
    return { catProducts: currentCategory, meta };
  } catch (error) {
    console.log(`Error: ${error}`);
    throw new Error(error);
  }
};
