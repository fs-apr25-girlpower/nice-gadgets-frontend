import { useEffect, useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductsList } from '../components/ProductsList';
import { getProducts } from '../api/getProducts';
import type { Product } from '../types';
import { Loader } from '../components/Loader';
import { NotFoundPage } from './NotFoundPage';

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

      <h2 className="mt-6 mb-2 tablet:mt-10">Tablets</h2>

      {error && <NotFoundPage />}

      {hasNotProducts && <p>There are no tablets yet</p>}

      {isLoading ? <Loader /> : <ProductsList products={tablets} />}
    </div>
  );
};
