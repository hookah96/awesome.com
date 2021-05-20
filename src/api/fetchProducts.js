export const fetchProducts = async (key, limit, pageIndex) => {
  try {
    const response = await fetch(
      `https://api.chec.io/v1/products?page=${pageIndex}&limit=${limit}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': `${process.env.REACT_APP_CHEC_PUBLIC_KEY}`,
        },
      }
    );

    const { data, meta } = await response.json();

    return { products: data, meta };
  } catch (error) {
    console.log(`Error: ${error}`);
    throw new Error(error);
  }
};
