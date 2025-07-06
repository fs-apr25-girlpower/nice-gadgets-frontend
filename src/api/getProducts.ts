import type { Product } from '../types/Product';

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${import.meta.env.BASE_URL}api/products.json`);

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return response.json();
};
