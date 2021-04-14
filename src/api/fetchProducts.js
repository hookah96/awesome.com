import { commerce } from '../utils/commerce';

export const fetchProducts = async (key, limit) => {
  const { data, meta } = await commerce.products.list({ limit });
  // setTimeout(2000);
  return { products: data, meta };
};
