import type { Product } from '../../types';
import { useQueryParams } from '../../utils/useQueryParams';
import { DropDown } from '../DropDown';
import { Pagination } from '../Pagination';
import { ProductCard } from '../ProductCard';

export type ProductsListProps = {
  products: Product[];
};

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

export const ProductsList = ({ products }: ProductsListProps) => {
  const { sort, perPage, page, refreshParams } = useQueryParams('phones');
  const sortTypeSelected = sort as SortTypes;
  const itemsToShow = String(perPage);

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
    refreshParams({ perPage: newValue, page: 1 });
  };

  return (
    <>
      <p className="body-text mb-8 tablet:mb-10">{products.length} models</p>

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

      <Pagination
        items={sortedProducts}
        itemsPerPage={+itemsToShow}
        currentPage={page}
        onPageChange={newPage => refreshParams({ page: newPage })}
        renderItem={(product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        )}
      />
    </>
  );
};
