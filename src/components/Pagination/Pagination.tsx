import clsx from 'clsx';
import { ArrowLeftButton } from '../../images/icons/ArrowLeftButton';
import { ArrowRightButton } from '../../images/icons/ArrowRightButton';

interface PaginationProps<T> {
  items: T[];
  itemsPerPage: number;
  renderItem: (item: T) => React.ReactNode;
  currentPage: number;
  onPageChange: (page: number) => void;
  refreshParams: (updates: Record<string, string | number | null>) => void;
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
}

export function Pagination<T>({
  items,
  itemsPerPage,
  renderItem,
  currentPage,
  onPageChange,
  refreshParams,
  pageRangeDisplayed = 3,
  marginPagesDisplayed = 1,
}: PaginationProps<T>) {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const updatePageAndScroll = (page: number) => {
    refreshParams({ page: page === 1 ? null : page });

    setTimeout(() => {
      const el = document.querySelector('.pagination-container');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
      updatePageAndScroll(page);
    }
  };

  const handlePrevPageClick = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      onPageChange(newPage);
      updatePageAndScroll(newPage);
    }
  };

  const handleNextPageClick = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      onPageChange(newPage);
      updatePageAndScroll(newPage);
    }
  };

  const isDisabledPrev = currentPage === 1;
  const isDisabledNext = currentPage === totalPages;

  const getPagesToDisplay = () => {
    const pages: (number | 'dots')[] = [];

    const leftSide = Math.max(
      currentPage - Math.floor(pageRangeDisplayed / 2),
      marginPagesDisplayed + 1,
    );
    const rightSide = Math.min(
      currentPage + Math.floor(pageRangeDisplayed / 2),
      totalPages - marginPagesDisplayed,
    );

    if (totalPages <= pageRangeDisplayed + marginPagesDisplayed * 2) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    for (let i = 1; i <= marginPagesDisplayed; i++) {
      pages.push(i);
    }

    if (leftSide > marginPagesDisplayed + 1) {
      pages.push('dots');
    }

    for (let i = leftSide; i <= rightSide; i++) {
      pages.push(i);
    }

    if (rightSide < totalPages - marginPagesDisplayed) {
      pages.push('dots');
    }

    for (let i = totalPages - marginPagesDisplayed + 1; i <= totalPages; i++) {
      if (i > marginPagesDisplayed && i > rightSide) {
        pages.push(i);
      }
    }

    return pages;
  };

  const pagesToDisplay = getPagesToDisplay();

  return (
    <>
      <div className="grid gap-4 mobile:grid-cols-[repeat(auto-fill,_minmax(230px,288px))] mobile:justify-center tablet:grid-cols-[repeat(auto-fill,_minmax(230px,1fr))] mt-6 mb-6 tablet:mb-10">
        {currentItems.map(renderItem)}
      </div>

      <div
        className="pagination-container flex justify-center items-center m-10 gap-2 "
        role="navigation"
        aria-label="Pagination"
      >
        <button
          aria-label="Previous page"
          aria-disabled={isDisabledPrev}
          onClick={handlePrevPageClick}
          className={clsx('cursor-not-allowed', {
            'cursor-pointer': !isDisabledPrev,
          })}
        >
          <ArrowLeftButton isDisabled={isDisabledPrev} />
        </button>

        {pagesToDisplay.map((page, index) =>
          page === 'dots' ? (
            <span
              key={`dots-${index}`}
              className="px-2 text-gray-500"
              aria-hidden="true"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`w-8 h-8 cursor-pointer hover:bg-primary hover:border-1 hover:border-secondary hover:text-white ${
                page === currentPage
                  ? 'bg-primary border-1 border-secondary text-white'
                  : 'bg-white text-black'
              }`}
              aria-current={page === currentPage ? 'page' : undefined}
              aria-label={`Page ${page}`}
            >
              {page}
            </button>
          ),
        )}

        <button
          onClick={handleNextPageClick}
          className={clsx('cursor-not-allowed', {
            'cursor-pointer': !isDisabledNext,
          })}
          aria-label="Next page"
          aria-disabled={isDisabledNext}
        >
          <ArrowRightButton isDisabled={isDisabledNext} />
        </button>
      </div>
    </>
  );
}
