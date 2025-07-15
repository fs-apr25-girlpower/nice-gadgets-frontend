import type { Product } from '../../types';
import { useQueryParams } from '../../utils/useQueryParams';
import { DropDown } from '../DropDown';
import { Pagination } from '../Pagination';
import { ProductCard } from '../ProductCard';

export type ProductsListProps = {
  products: Product[];
  isLoading: boolean;
};

const optionsSortTypes = [
  { label: 'Newest', value: 'byDate' },
  { label: 'Price', value: 'byPrice' },
  { label: 'Name', value: 'byName' },
];

const getOptionsItemsPerPage = () => [
  { label: '4', value: '4' },
  { label: '8', value: '8' },
  { label: '16', value: '16' },
  { label: 'All', value: 'all' },
];

type SortTypes = (typeof optionsSortTypes)[number]['value'];

export const ProductsList = ({ products, isLoading }: ProductsListProps) => {
  const { sort, perPage, page, refreshParams } = useQueryParams('phones');
  const validatedSortValues = optionsSortTypes.map(opt => opt.value);
  const sortTypeSelected =
    typeof sort === 'string' && validatedSortValues.includes(sort)
      ? (sort as SortTypes)
      : 'byDate';
  const itemsToShow = perPage === null ? 'all' : String(perPage);
  const optionsItemsPerPage = getOptionsItemsPerPage();
  const pageNumber = page !== null ? parseInt(page, 10) : 1;
  const perPageNumber = perPage !== null ? parseInt(perPage, 10) : 8;
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

    return result;
  };

  const sortedProducts = toSortProducts(products, sortTypeSelected);

  const handleSortChange = (newValue: string) => {
    refreshParams({ sort: newValue, page: 1 });
  };

  const handleItemsPerPageChange = (newValue: string) => {
    if (newValue === 'all') {
      refreshParams({ perPage: null, page: null });
    } else {
      refreshParams({ perPage: newValue, page: 1 });
    }
  };

  return (
    <>
      <p className="body-text mb-8 tablet:mb-10 text-secondary dark:text-dark-secondary">
        {products.length} models
      </p>

      <div className="w-full min-h-20 flex items-center gap-4">
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

      {isLoading ? (
        <div className="grid gap-4 mobile:grid-cols-[repeat(auto-fill,_minmax(230px,288px))] mobile:justify-center tablet:grid-cols-[repeat(auto-fill,_minmax(230px,1fr))] mt-6 mb-6 tablet:mb-10">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductCard
              key={`skeleton-${index}`}
              isLoading
            />
          ))}
        </div>
      ) : perPage === null ? (
        <div className="grid gap-4 mobile:grid-cols-[repeat(auto-fill,_minmax(230px,288px))] mobile:justify-center tablet:grid-cols-[repeat(auto-fill,_minmax(230px,1fr))] mt-6 mb-6 tablet:mb-10">
          {sortedProducts.map(product => (
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
          items={sortedProducts}
          itemsPerPage={perPageNumber}
          currentPage={pageNumber}
          onPageChange={newPage => refreshParams({ page: newPage })}
          renderItem={(product: Product) => <ProductCard product={product} />}
        />
      )}
    </>
  );
};
