import { useEffect, useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductsList } from '../components/ProductsList';
import { getProducts } from '../api/getProducts';
import type { Product } from '../types';
import { ErrorMessage } from '../components/ErrorMessage';

export const TabletsPage = () => {
  const [tablets, setTablets] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const hasNotProducts = tablets.length === 0 && !isLoading;

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then(productsFromApi => {
        const filtered = productsFromApi.filter(
          product => product.category === 'tablets',
        );
        setTablets(filtered);
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

      <h2 className="mt-6 mb-2 tablet:mt-10 text-primary dark:text-dark-primary">
        Tablets
      </h2>

      {error && <ErrorMessage text={'Something went wrong!'} />}

      {hasNotProducts ? (
        <ErrorMessage text={'There are no tablets yet'} />
      ) : (
        <ProductsList
          products={tablets}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};
