import { useEffect, useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductsList } from '../components/ProductsList';
import { getProducts } from '../api/getProducts';
import type { Product } from '../types';
import { NotFoundPage } from './NotFoundPage';
import { useLanguage } from '../context/language/useLanguage';
import { accessoriesPageDictionary } from '../i18n/accessoriesPageDictionary';

export const AccessoriesPage = () => {
  const [accessories, setAccessories] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const hasNotProducts = accessories.length === 0 && !isLoading;

  const { currentLanguage } = useLanguage();
  const translations = accessoriesPageDictionary[currentLanguage];

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then(productsFromApi => {
        const filtered = productsFromApi.filter(
          product => product.category === 'accessories',
        );
        setAccessories(filtered);
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

      <h2 className="mt-6 mb-2 tablet:mt-10">{translations.title}</h2>

      {error && <NotFoundPage />}

      {hasNotProducts && <p>{translations.empty}</p>}

      <ProductsList
        products={accessories}
        isLoading={isLoading}
      />
    </div>
  );
};
