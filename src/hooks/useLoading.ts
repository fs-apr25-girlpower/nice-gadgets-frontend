import { useState, useEffect } from 'react';
import { getProducts } from '../api/getProducts';
import { getPhones } from '../api/getPhones';
import { getTablets } from '../api/getTablets';
import { getAccessories } from '../api/getAccessories';
import { getProductsWithDetails } from '../api/getProductsWithDetails';
import type { Product } from '../types/Product';
import type { Phone } from '../types/Phone';
import type { Tablet } from '../types/Tablet';
import type { Accessory } from '../types/Accessory';
import type { ProductWithDetails } from '../types';

interface UseLoadingReturn {
  isLoading: boolean;
  products: Product[];
  phones: Phone[];
  tablets: Tablet[];
  accessories: Accessory[];
  productsWithDetails: ProductWithDetails[];
  error: boolean;
}

export const useLoading = (): UseLoadingReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [phones, setPhones] = useState<Phone[]>([]);
  const [tablets, setTablets] = useState<Tablet[]>([]);
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [productsWithDetails, setProductsWithDetails] = useState<
    ProductWithDetails[]
  >([]);

  useEffect(() => {
    const loadAllData = async () => {
      try {
        setIsLoading(true);

        const [
          productsWithDetailsData,
          productsData,
          phonesData,
          tabletsData,
          accessoriesData,
        ] = await Promise.all([
          getProductsWithDetails(),
          getProducts(),
          getPhones(),
          getTablets(),
          getAccessories(),
        ]);

        setProductsWithDetails(productsWithDetailsData);
        setProducts(productsData);
        setPhones(phonesData);
        setTablets(tabletsData);
        setAccessories(accessoriesData);
      } catch (error) {
        setError(true);
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAllData();
  }, []);

  return {
    isLoading,
    products,
    phones,
    tablets,
    accessories,
    productsWithDetails,
    error,
  };
};
