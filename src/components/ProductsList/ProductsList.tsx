import { useEffect, useRef, useState } from 'react';
import type { Product } from '../../types';
import { useQueryParams } from '../../utils/useQueryParams';
import { DropDown } from '../DropDown';
import { Pagination } from '../Pagination';
import { ProductCard } from '../ProductCard';
import { useLanguage } from '../../context/language/useLanguage';
import { productsListDictionary } from '../../i18n/productsListDictionary';
import { GlassIcon } from '../../images/icons/GlassIcon';
import { useLocation } from 'react-router-dom';
import { Xmark } from '../../images/icons/XmarkIcon';
import { ErrorMessage } from '../ErrorMessage';
import { getVisibleProducts } from '../../utils/getVisibleProducts';

export type ProductsListProps = {
  products: Product[];
  isLoading: boolean;
};

export const ProductsList = ({ products, isLoading }: ProductsListProps) => {
  const { currentLanguage } = useLanguage();
  const translations = productsListDictionary[currentLanguage];

  const optionsSortTypes = [
    { label: translations.sortNewest, value: 'byDate' },
    { label: translations.sortPrice, value: 'byPrice' },
    { label: translations.sortName, value: 'byName' },
  ];

  const getOptionsItemsPerPage = () => [
    { label: '4', value: '4' },
    { label: '8', value: '8' },
    { label: '16', value: '16' },
    { label: translations.allItemsLabel, value: 'all' },
  ];

  const { sort, perPage, page, refreshParams } = useQueryParams('phones');
  const validatedSortValues = optionsSortTypes.map(opt => opt.value);
  const sortTypeSelected =
    typeof sort === 'string' && validatedSortValues.includes(sort)
      ? (sort as (typeof optionsSortTypes)[number]['value'])
      : 'byDate';

  const itemsToShow = perPage === null ? '8' : perPage;
  const optionsItemsPerPage = getOptionsItemsPerPage();

  const pageNumber = page !== null ? parseInt(page, 10) : 1;
  const perPageNumber = perPage !== null ? parseInt(perPage, 10) : 8;

  const toSortProducts = (
    products: Product[],
    sortBy: (typeof optionsSortTypes)[number]['value'],
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
    return result;
  };

  const sortedProducts = toSortProducts(products, sortTypeSelected);

  const handleSortChange = (newValue: string) => {
    refreshParams({ sort: newValue, page: 1 });
  };

  const handleItemsPerPageChange = (newValue: string) => {
    if (newValue === 'all') {
      refreshParams({ perPage: 'all', page: null });
    } else {
      refreshParams({ perPage: newValue, page: 1 });
    }
  };

  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { pathname, search } = useLocation();

  const visibleProducts = getVisibleProducts(query, sortedProducts);

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedQuery: string = event.target.value.trimStart();

    setQuery(trimmedQuery);
    refreshParams({ search: trimmedQuery });
  };

  useEffect(() => {
    if (pathname.includes('allProducts') && inputRef.current) {
      inputRef.current.focus();
    }
  }, [pathname]);

  useEffect(() => {
    if (!query && search.includes('search')) {
      refreshParams({ search: null });
    }
  }, [query, refreshParams, search]);

  return (
    <>
      <p className="body-text mb-8 tablet:mb-10">
        {translations.modelsCount(products.length)}
      </p>

      <div className="w-full min-h-20 flex items-center gap-4">
        <DropDown
          label={translations.sortByLabel}
          options={optionsSortTypes}
          value={sortTypeSelected}
          onChange={handleSortChange}
        />
        <DropDown
          label={translations.itemsOnPageLabel}
          options={optionsItemsPerPage}
          value={itemsToShow}
          onChange={handleItemsPerPageChange}
          triggerButtonClassName={'max-w-[128px]'}
        />

        <form className="flex w-full max-w-md my-4">
          <div className="relative w-full mt-4">
            <input
              type="text"
              className="w-full pl-10 pr-8 py-2 border border-elements dark:border-dark-border rounded bg-white dark:bg-dark-card-background text-primary dark:text-dark-primary focus:outline-none focus:border-primary dark:focus:border-purple placeholder:text-secondary dark:placeholder:text-dark-secondary transition-colors"
              placeholder="Search..."
              value={query}
              onChange={handleQuery}
              ref={inputRef}
            />

            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-300">
              <GlassIcon />
            </span>

            {query && (
              <button
                type="button"
                onClick={() => setQuery(' ')}
                className="absolute inset-y-0 right-2 flex items-center text-gray-300 hover:text-gray-600"
              >
                <Xmark />
              </button>
            )}
          </div>
        </form>
      </div>

      {visibleProducts.length === 0 && !isLoading && (
        <ErrorMessage text={'There are no products matching the query'} />
      )}

      {isLoading ? (
        <div className="grid gap-4 mobile:grid-cols-[repeat(auto-fill,_minmax(230px,288px))] mobile:justify-center tablet:grid-cols-[repeat(auto-fill,_minmax(230px,1fr))] mt-6 mb-6 tablet:mb-10">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductCard
              key={`skeleton-${index}`}
              isLoading
            />
          ))}
        </div>
      ) : perPage === 'all' ? (
        <div className="grid gap-4 mobile:grid-cols-[repeat(auto-fill,_minmax(230px,288px))] mobile:justify-center tablet:grid-cols-[repeat(auto-fill,_minmax(230px,1fr))] mt-6 mb-6 tablet:mb-10">
          {visibleProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <Pagination
          isLoading={false}
          refreshParams={refreshParams}
          items={visibleProducts}
          itemsPerPage={perPageNumber}
          currentPage={pageNumber}
          onPageChange={newPage => refreshParams({ page: newPage })}
          renderItem={(product: Product) => <ProductCard product={product} />}
        />
      )}
    </>
  );
};
