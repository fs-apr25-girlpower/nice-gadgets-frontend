import { useEffect, useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductsList } from '../components/ProductsList';
import { getProducts } from '../api/getProducts';
import type { Product } from '../types';
import { ErrorMessage } from '../components/ErrorMessage';

export const AllProductsPage = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const hasNotProducts = allProducts.length === 0 && !isLoading;

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then(productsFromApi => {
        setAllProducts(productsFromApi);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Breadcrumbs />

      <h2 className="mt-6 mb-2 tablet:mt-10">All Products</h2>

      {error && <ErrorMessage text={'Something went wrong!'} />}

      {hasNotProducts ? (
        <ErrorMessage text={'There are no products yet'} />
      ) : (
        <ProductsList
          products={allProducts}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};
