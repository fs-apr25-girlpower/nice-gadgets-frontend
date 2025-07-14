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

const getOptionsItemsPerPage = (totalPagesCount: number) => [
  { label: '4', value: '4' },
  { label: '8', value: '8' },
  { label: '16', value: '16' },
  { label: 'All', value: String(totalPagesCount) },
];

type SortTypes = (typeof optionsSortTypes)[number]['value'];

export const ProductsList = ({ products, isLoading }: ProductsListProps) => {
  const { sort, perPage, page, refreshParams } = useQueryParams('phones');
  const sortTypeSelected = sort as SortTypes;
  const itemsToShow = String(perPage);
  const optionsItemsPerPage = getOptionsItemsPerPage(products.length);

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
    if (parseInt(newValue) === products.length) {
      refreshParams({ perPage: null, page: null });
    } else {
      refreshParams({ perPage: newValue, page: 1 });
    }
  };

  return (
    <>
      <p className="body-text mb-8 tablet:mb-10">{products.length} models</p>

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
      ) : (
        <Pagination
          isLoading={false}
          refreshParams={refreshParams}
          items={sortedProducts}
          itemsPerPage={+itemsToShow}
          currentPage={page}
          onPageChange={newPage => refreshParams({ page: newPage })}
          renderItem={(product: Product) => <ProductCard product={product} />}
        />
      )}
    </>
  );
};
