import { useEffect, useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DropDown } from '../components/DropDown/DropDown';
import { ProductCard } from '../components/ProductCard';
import { getProducts } from '../api/getProducts';
import type { Product } from '../types/Product';
import { Loader } from '../components/Loader';
import { NotFoundPage } from './NotFoundPage';
import { Pagination } from '../components/Pagination';
import { useQueryParams } from '../utils/useQueryParams';

const optionsSortTypes = [
  { label: 'Newest', value: 'byDate' },
  { label: 'Price', value: 'byPrice' },
  { label: 'Name', value: 'byName' },
];

const optionsItemsPerPage = [
  { label: '8', value: '8' },
  { label: '16', value: '16' },
  { label: '32', value: '32' },
];

type SortTypes = (typeof optionsSortTypes)[number]['value'];

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { sort, perPage, page, refreshParams } = useQueryParams('phones');
  const sortTypeSelected = sort as SortTypes;
  const itemsToShow = String(perPage);

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then(productsFromApi => {
        const filtered = productsFromApi.filter(
          product => product.category === 'phones',
        );
        setPhones(filtered);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);
  const toSortProducts = (
    products: Product[],
    sortBy: SortTypes,
  ): Product[] => {
    const result = [...products].sort((a, b) => {
      switch (sortBy) {
        case 'byDate':
          return a.year - b.year;

        case 'byName':
          return a.name.localeCompare(b.name);

        case 'byPrice':
          return a.fullPrice - b.fullPrice;

        default:
          return 0;
      }
    });

    // reversed ? result : - result
    return result;
  };
  const sortedProducts = toSortProducts(phones, sortTypeSelected);

  const handleSortChange = (newValue: string) => {
    refreshParams({ sort: newValue, page: 1 });
  };

  const handleItemsPerPageChange = (newValue: string) => {
    refreshParams({ perPage: newValue, page: 1 });
  };

  return (
    <div>
      <Breadcrumbs />

      <h2 className="mt-6 mb-2 tablet:mt-10">Mobile phones</h2>

      {isLoading && <Loader />}

      {phones.length === 0 ? (
        <p>There are no phones yet</p>
      ) : (
        <>
          <p className="body-text mb-8 tablet:mb-10">{phones.length} models</p>

          <div className="  w-full min-h-20 flex items-center gap-4 ">
            <DropDown
              label="sortBy"
              options={optionsSortTypes}
              value={sortTypeSelected}
              onChange={handleSortChange}
            />
            <DropDown
              label="Items on page"
              options={optionsItemsPerPage}
              value={itemsToShow}
              onChange={handleItemsPerPageChange}
              triggerButtonClassName={'max-w-[128px]'}
            />
          </div>
          {isLoading && <Loader />}
          {error && <NotFoundPage />}
          <Pagination
            items={sortedProducts}
            itemsPerPage={+itemsToShow}
            currentPage={page}
            onPageChange={newPage => refreshParams({ page: newPage })}
            renderItem={(phone: Product) => (
              <ProductCard
                key={phone.id}
                product={phone}
              />
            )}
          />
        </>
      )}
    </div>
  );
};
