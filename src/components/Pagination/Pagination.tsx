import clsx from 'clsx';
import { ArrowLeftButton } from '../../images/icons/ArrowLeftButton';
import { ArrowRightButton } from '../../images/icons/ArrowRightButton';

interface PaginationProps<T> {
  items: T[];
  itemsPerPage: number;
  renderItem: (item: T) => React.ReactNode;
  currentPage: number;
  onPageChange: (page: number) => void;
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
}

export function Pagination<T>({
  items,
  itemsPerPage,
  renderItem,
  currentPage,
  onPageChange,
  pageRangeDisplayed = 3,
  marginPagesDisplayed = 1,
}: PaginationProps<T>) {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
      setTimeout(() => {
        const el = document.querySelector('.pagination-container');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handlePrevPageClick = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
    setTimeout(() => {
      const el = document.querySelector('.pagination-container');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNextPageClick = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
    setTimeout(() => {
      const el = document.querySelector('.pagination-container');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
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
      <div className="grid gap-4 mt-6 mb-6 tablet:mb-10 max-w-[1200px] mx-auto justify-center grid-cols-[repeat(auto-fit,minmax(230px,280px))]">
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
              className="px-2 text-secondary"
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
