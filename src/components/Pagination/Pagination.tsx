import { ArrowLeftButton } from '../../images/icons/ArrowLeftButton';
import { ArrowRightButton } from '../../images/icons/ArrowRightButton';

interface PaginationProps<T> {
  items: T[];
  itemsPerPage: number;
  renderItem: (item: T) => React.ReactNode;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination<T>({
  items,
  itemsPerPage,
  renderItem,
  currentPage,
  onPageChange,
}: PaginationProps<T>) {
  // Тепер currentPage і onPageChange приходять зверху — без локального useState

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  // Замість setCurrentPage викликаємо onPageChange
  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const handlePrevPageClick = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPageClick = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div>
      <div className="grid gap-4  grid-cols-[repeat(auto-fill,_minmax(230px,288px))] mt-6 mb-6 tablet:mb-10">
        {currentItems.map(renderItem)}
      </div>

      <div className="flex justify-center items-center m-10 gap-2">
        <button onClick={handlePrevPageClick}>
          <ArrowLeftButton />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`w-8 h-8 ${
              page === currentPage
                ? 'bg-primary border-1 border-secondary text-white'
                : 'bg-white text-black'
            }`}
          >
            {page}
          </button>
        ))}

        <button onClick={handleNextPageClick}>
          <ArrowRightButton />
        </button>
      </div>
    </div>
  );
}
